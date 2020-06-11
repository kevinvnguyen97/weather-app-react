import React, { Component } from "react";

import "./style.css";

class Sidebar extends Component {
    state = {
        search: '',
        search_history: []
    }

    handleSearchChange = ( { target: { value } } ) => {
        console.log(`Search input: ${value}`);
        this.setState( { search: value } );
    }

    citySubmit = e => {
        e.preventDefault();
        console.log("Getting weather with search: " + this.state.search);
        console.log("Search history: " + this.state.search_history);
        this.props.getCityWeather(this.state.search);

        let searchHistory = this.state.search_history;
        if (searchHistory.indexOf(this.state.search) === -1) {
            searchHistory.push(this.state.search);
            this.setState({
                search_history: searchHistory
            });
        }
    }

    render() {
        return (
            <div className="col-md-4 col-lg-3 bd-sidebar collapsible bg-light" id="search-sidebar">
                <h4>Search for a City:</h4>

                <form className="form-inline input-group navbar-expand-lg">
                    <input
                        className="form-control"
                        id="city-search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={this.props.search}
                        onChange={this.handleSearchChange} />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-primary"
                            id="city-search-button"
                            onClick={this.citySubmit}
                        >
                            <span className="fa fa-search" />
                        </button>
                    </span>
                </form>

                <div id="error-message"></div>

                <div className="card" id="search-history-card">
                    <ul className="list-group list-group-flush" id="city-search-list">
                        <li className="list-group-item">Searched Cities</li>
                        {this.state.search_history.map(city => <a className="list-group-item list-group-item-action flex-column align-items-start" href="">{city}</a>)}
                    </ul>
                </div>
            </div>
        );
    }

}

export default Sidebar;