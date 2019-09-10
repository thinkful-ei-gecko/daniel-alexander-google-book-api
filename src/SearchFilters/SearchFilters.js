import React, { Component } from 'react';
import './SearchFilters.css'

class SearchFilters extends Component {
  render(){
    return(
      <section class="search-filters">
       <label>Print Type:</label>
       <select>
         <option value="a thing">a thing</option>
         <option value="a thing">a thing</option>
       </select>
       <label>Book Type:</label>
        <select>
          <option value="a thing">a thing</option>
          <option value="a thing">a thing</option>
        </select>
      </section>
    )
  }
}

export default SearchFilters;