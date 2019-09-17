import React, { Component } from 'react';
import './Book.css';

class BookExpanded extends Component {
  render(){
    const price = this.props.price ? this.props.price : 'No price listed'
    const id = this.props.id 
    const authors = this.props.authors ? this.props.authors : 'Authors unavailable'
    const title = this.props.title ? this.props.title : 'No title listed '
    const image = this.props.thumbnail ? this.props.thumbnail : 'Image unavailable'
    const desc = this.props.desc ? this.props.desc : 'Description Unavailable'
      return ( 
      <li
        key={id}
        id ={id}
        onClick = {() => this.props.handleExpanded(null)}
        className="book-expanded"
        >
          <div className='image'>
            <img src={image} alt="BookPicture.jpg" />
          </div>
          <div className='col'>
            <h2>{title}</h2>
            <p>{authors}</p>
            <p>${price.toFixed(2)}</p>
              <div className='desc'>
                <p>{desc}</p> 
              </div>
        </div>
      </li>
      )
      }
    }

export default BookExpanded;