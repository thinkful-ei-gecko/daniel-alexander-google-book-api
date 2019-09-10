import React, { Component } from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm'
import Results from './Results/Results'

import './App.css';

// const {title, author, description, imagelinks} = this.state.response.items.volumeInfo;
//           console.log(title)
// const itemsVolumeInfo = {this.state.response.volumeInfo}
// const itemsSaleInfo

// this.state.response.items.volumeInfo.title

// this.state.response.items.volumeInfo.author

// this.state.response.items.volumeInfo.description

// this.state.response.items.volumeInfo.imageLinks.thumbnail

// this.state.response.items.saleInfo.listPrice.amount

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printTypeFilter: 'all',
      bookTypeFilter: 'ebooks',
      response: [],
      displayResult: null,
      expanded: 1,
      error: null,
      loading: false
    }
  }
    
     searchUpdate(newSearchTerm) {
      this.setState({searchTerm: newSearchTerm})
     }

     bookTypeUpdate(filterChoice) {
       console.log('this ran')
       this.setState({bookTypeFilter: filterChoice})
     }

     printTypeUpdate(filterChoice) {
       this.setState({printTypeFilter: filterChoice})
     }


     componentDidMount() {}

      formatParams = (params) => {
        const queryItems = Object.keys(params)
        .map(key =>`${key}=${params[key]}`);
        return queryItems.join('&');
       
      }
      
      getBooks = () => {
        
        const baseURL = 'https://www.googleapis.com/books/v1/volumes';

        const params = {
          q: this.state.searchTerm,
          filter: this.state.bookTypeFilter,
          printType: this.state.printTypeFilter
        }
      
        const queryString = this.formatParams(params) 
          const url = baseURL + '?' + queryString;
      
        const options = {
          header: new Header ({
            'Content-Type': 'application/json'
          })
        }
      
        fetch(url, options)
          .then(res => {
            if(res.ok) {
              return res.json()
            }
            throw new Error(res.StatusText)
          })
          .then(resJson => this.setState({response: resJson.items}))
          .catch(err => {
            this.setState({error: `${err.message}`})
          })
          
      }
 
  render(){
    console.log(this.state.response);
    return (
      <div className="App">
        <Header />
        <SearchForm 
        changeHandler = {searchTerm => this.searchUpdate(searchTerm)}
        bookFilter = {filterChoice => this.bookTypeUpdate(filterChoice)}
        printFilter = {printChoice => this.printTypeUpdate(printChoice)}
        getBooks = {this.getBooks}
        />
        <Results
          response = {this.state.response}
          expanded = {this.state.expanded}
        />
      </div>
    );
  }
}

export default App;
