import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render(){
    const price = this.props.price ? this.props.price : 'No price listed'
    const id = this.props.id 
    const authors = this.props.authors ? this.props.authors : 'Authors unavailable'
    const title = this.props.title ? this.props.title : 'No title listed '
    const image = this.props.thumbnail ? this.props.thumbnail : 'Image unavailable'
    return(
      <li
      key={id}
      id ={id}
      onClick = {(e) => this.props.handleExpanded(e.currentTarget.id)}
      className="book"
      >
      <img src={image} alt="BookPicture.jpg" />
      <h2>{title}</h2>
      <p>{authors}</p>
      <p>${price}</p>
    </li>
    )
  }
}

export default Book;