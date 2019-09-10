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
      results: {},
      expanded: false
    }
  }

  componentDidMount() {
    const searchUpdate = (newSearchTerm) => {
      this.setState({searchTerm: newSearchTerm})
    }
  }
  
  render(){

    return (
      <div className="App">
        <Header />
        <SearchForm searchUpdate={this.searchUpdate}/>
        <Results />
      </div>
    );
  }
}

export default App;
