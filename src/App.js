import React, { Component } from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm'
import Results from './Results/Results'

import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printTypeFilter: 'All',
      bookTypeFilter: 'All',
      response: {},
      displayResult: null,
      expanded: false,
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


     componentDidMount() {

      function formatParams(params) {
        const queryItems = Object.keys(params)
        .map(key =>`${key}=${params[key]}`);
        return queryItems.join('&');
       
      }
      
      function getBooks(searchTerm, filterChoice) {
        
        const baseURL: 'https://www.googleapis.com/books/v1/volumes';

        const params = {
          q: searchTerm,
          filter: filterChoice,
          printType: printChoice
        }
      
        const queryString = formatParams(params)
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
          .then(resJson => this.setState({response: resJson}))
          .catch(err => {
            this.setState({error: `${err.message}`})
          })
      
      }


     }
 
  render(){

    return (
      <div className="App">
        <Header />
        <SearchForm 
        changeHandler = {searchTerm => this.searchUpdate(searchTerm)}
        bookFilter = {filterChoice => this.bookTypeUpdate(filterChoice)}
        printFilter = {printChoice => this.printTypeUpdate(printChoice)}
        />
        <Results />
      </div>
    );
  }
}

export default App;
