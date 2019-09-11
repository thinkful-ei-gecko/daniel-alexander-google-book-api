import React, { Component } from 'react';
import Book from '../Book/Book.js';
import BookExpanded from '../Book/BookExpanded.js'
import './Results.css';

class Results extends Component {
  render(){
    const books = this.props.response.map((book, idx) => {
        if (idx === this.props.expanded) {
          return (
          <BookExpanded 
            handleExpanded = {this.props.handleExpanded}
            key={idx}
            id ={idx}
            title={book.volumeInfo.title}
            thumbnail={book.volumeInfo.imageLinks.thumbnail}
            authors={book.volumeInfo.authors}
            price = {book.saleInfo.listPrice.amount}
            desc={book.volumeInfo.description}
            expanded={this.props.expanded}
          />)
        } else {
          return (
          <Book
            handleExpanded = {this.props.handleExpanded}
            key={idx}
            id ={idx}
            title={book.volumeInfo.title}
            thumbnail={book.volumeInfo.imageLinks.thumbnail}
            authors={book.volumeInfo.authors}
            price = {book.saleInfo.listPrice.amount}
            desc={book.volumeInfo.description}
            expanded={this.props.expanded}
            />
          )
        }
      });
      return (
        <section className="search__results">
        <ul className="book-list">    
          {books}
        </ul>
      </section>
      )
    }
  }

export default Results;