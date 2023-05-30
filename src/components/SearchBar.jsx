import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }

  onInputChange = e => {
    this.setState({ term: e.target.value});
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Video</label>
            <input 
              type="text" 
              onChange={this.onInputChange} 
              value={this.state.term} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
