import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchFilters from '../SearchFilters/SearchFilters';
import './SearchForm.css';

class SearchForm extends Component {
  render(){
    return(
      <section className="section__search">
        <form onSubmit= {(event) => {
          event.preventDefault();
          this.props.getBooks();
        }}>
          <SearchBar {...this.props} />
          <SearchFilters {...this.props} />
        </form>
      </section>
    )
  }
}

export default SearchForm;