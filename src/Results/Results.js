import React, { Component } from 'react';
import Book from '../Book/Book.js';
import './Results.css';

class Results extends Component {
  render(){
    return(
      <section className="search__results">
        <ul className="book-list">
          <Book />
          <Book />
          <Book />
          <Book />
        </ul>
      </section>
    )
  }
}

export default Results;