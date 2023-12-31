import React from "react";

class Search extends React.Component {

    state = {
        search: '',
        type: 'all'
    }

    

    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    buttonSearch = () => {
        this.props.searchMovies(this.state.search, this.state.type);
    }

    handleSort = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        })
    }


    render() {
        return (
            <div className=" row">
              <div className="input-field">
                <input 
                 placeholder="Search"
                  type="search"
                   className="validate"
                   value={this.state.search}
                   onChange={(e) => this.setState({search: e.target.value})}
                   onKeyDown={this.handleKey} />
                <button 
                className="btn search-btn"
                onClick={this.buttonSearch}
                >
                    Search
                </button>
              </div>
              
  <form action="#">
    <p>
      <label>
        <input 
        className="with-gap" 
        name="type" 
        type="radio" 
        data-type='all'
        onChange={this.handleSort}
        checked={this.state.type === 'all'}  />
        <span>All</span>
      </label>
    </p>
    <p>
      <label>
        <input 
        className="with-gap" 
        name="type" 
        type="radio"
        data-type='movie' 
        onChange={this.handleSort}
        checked={this.state.type === 'movie'}
         />
        <span>Movies only</span>
      </label>
    </p>
    <p>
      <label>
        <input 
        className="with-gap"
         name="type"
          type="radio"
          data-type='series'
           onChange={this.handleSort}
           checked={this.state.type === 'series'}  />
        <span>Series only</span>
      </label>
    </p>
  </form>
          </div>
        )
    }
}

export default Search;