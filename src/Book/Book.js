import React, { Component } from 'react';
import './Book.css';

class Results extends Component {
  render(){
    return(
      <li
        key={this.props.key}
        id ={this.props.id}
        onClick = {(e) => this.props.handleExpanded(e.currentTarget.id)}
        className="book"
        >
        <img src={this.props.thumbnail} alt="BookPicture.jpg" />
        <h2>{this.props.title}</h2>
        <p>{this.props.authors}</p>
        <p>{this.props.price}</p>
        <p>{this.props.desc}</p>
      </li>
    )
  }
}

export default Results;