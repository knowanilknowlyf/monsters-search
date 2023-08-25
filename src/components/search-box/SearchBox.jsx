import React, { Component } from "react";
import './search-box.styles.css'

export class SearchBox extends Component {
  render() {
    return (
      <div>
     
        <input
          type="search"
          className="search-box"
          placeholder="Search Monsters"
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
