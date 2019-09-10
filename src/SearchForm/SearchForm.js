import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchFilters from '../SearchFilters/SearchFilters';
import './SearchForm.css';

class SearchForm extends Component {
  render(){
    console.log(this.props.searchUpdate);
    return(
      <section className="section__search">
        <form>
          <SearchBar />
          <SearchFilters />
        </form>
      </section>
    )
  }
}

export default SearchForm;