import React, { Component } from 'react';
import './Book.css';

class Results extends Component {
  render(){
    return(
      <li
        className="book"
        >
        <img src={this.props.thumbnail} />
        <h2>{this.props.title}</h2>
        <span>{this.props.authors}</span>
        <span>{this.props.price}</span>
        <p>{this.props.desc}</p>
      </li>
    )
  }
}

export default Results;