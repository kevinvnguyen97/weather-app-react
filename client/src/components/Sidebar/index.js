import React, { Component } from "react";

import "./style.css";

class Sidebar extends Component {
    state = {
        search: ''
    }

    handleSearchChange = ({ target: { value } }) => {
        this.setState({ search: value });
    }

    citySubmit = e => {
        e.preventDefault();
        this.props.getCityWeather(this.state.search);
    }

    cityHistorySubmit = ( { target: value } ) => {
        this.props.getCityWeather(value.innerHTML);
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
                        {this.props.searchHistory.map(city =>
                            <li className="list">
                            <button
                                className="city-history-btn list-group-item list-group-item-action flex-column align-items-start"
                                onClick={this.cityHistorySubmit}
                            >
                                {city}
                            </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

}

export default Sidebar;