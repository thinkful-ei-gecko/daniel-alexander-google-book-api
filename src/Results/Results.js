import React, { Component } from 'react';
import Book from '../Book/Book.js';
import './Results.css';

class Results extends Component {
  render(){
    console.log(this.props.response);
    console.log(this.props.expanded);
    const books = this.props.response.map(book =>
      <Book
        title={book.volumeInfo.title}
        thumbnail={book.volumeInfo.imageLinks.thumbnail}
        authors={book.volumeInfo.authors}
        price={book.volumeInfo}
        desc={book.volumeInfo.description}
        />
      // <li>{book.volumeInfo.title}</li>
    )
    return(
      <section className="search__results">
        <ul className="book-list">
          {books}
        </ul>
      </section>
    )
  }
}

export default Results;