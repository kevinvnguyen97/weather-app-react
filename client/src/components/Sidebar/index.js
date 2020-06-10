import React from "react";

import "./style.css";

function Sidebar() {
    return (
        <div className="col-md-4 col-xl-2 bd-sidebar collapsible bg-light" id="search-sidebar">
            <h4>Search for a City:</h4>

            <form className="form-inline input-group navbar-expand-lg">
                <input className="form-control" id="city-search" type="search"
                    placeholder="Search" aria-label="Search" />
                <span className="input-group-btn">
                    <button className="btn btn-primary" id="city-search-button" type="submit"><span
                        className="fa fa-search"></span>
                    </button>
                </span>
            </form>

            <div id="error-message"></div>

            <div className="card" id="search-history-card">
                <ul className="list-group list-group-flush" id="city-search-list">
                    <li className="list-group-item">Searched Cities</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;