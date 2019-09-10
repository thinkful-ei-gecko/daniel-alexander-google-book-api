import React, { Component } from 'react';
import './SearchFilters.css'

class SearchFilters extends Component {
  render(){
    return(
      <section className="search-filters">
       <label>Print Type:</label>
       <select name="printType" onChange= {(event) => this.props.printFilter(event.target.value)}>
         <option value="a thing">a thing</option>
         <option value="a thing">a thing</option>
       </select>
       <label>Book Type:</label>
        <select name="bookType" onChange= {(event) => this.props.bookFilter(event.target.value)}>
          <option value="a thing">a thing</option>
          <option value="a thing">a thing</option>
        </select>
      </section>
    )
  }
}

export default SearchFilters;