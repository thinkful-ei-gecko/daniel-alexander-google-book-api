import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render(){
    return(
      <section className="section__searchbar">
        <label
          htmlFor="book-search"
          >Search:</label>
        <input
          name="bookSearch"
          type="text"
          id="book-search"
          />
          <button type="submit">Search</button>
      </section>
    )
  }
}

export default SearchBar;