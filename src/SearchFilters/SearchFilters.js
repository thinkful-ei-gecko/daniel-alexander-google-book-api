import React, { Component } from 'react';
import './SearchFilters.css'

class SearchFilters extends Component {
  render(){
    return(
      <section className="search-filters">
       <label>Print Type:</label>
       <select name="printType" onChange= {(event) => this.props.printFilter(event.target.value)}>
        <option value="">Please Select</option>
         <option value="all">All</option>
         <option value="books">Books</option>
         <option value="magazines">Magazines</option>
       </select>
       <label>Book Type:</label>
        <select name="bookType" onChange= {(event) => this.props.bookFilter(event.target.value)}>
          <option value="">Please Select</option>
          <option value="partial">Partial Text</option>
          <option value="full">Full Text</option>
          <option value="free-ebooks">Free Ebooks</option>
          <option value="paid-ebooks">Paid Ebooks</option>
        </select>
      </section>
    )
  }
}

export default SearchFilters;