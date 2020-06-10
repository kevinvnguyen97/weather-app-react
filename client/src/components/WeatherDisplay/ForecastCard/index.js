import React from "react";

import "./style.css";

function ForecastCard() {
    return (
        <div className="card five-day-card bg-primary">
            <div className="card-body">
                <h5 className="card-title"><span id="month1"></span><span id="day1"></span><span
                    id="year1"></span>
                </h5>
                <div id="icon"><img id="day1-icon" src="" alt="Weather icon"/>
                    <p className="card-text">Temp: <span id="day1-temp">N/A</span></p>
                    <p className="card-text">Humidity: <span id="day1-humidity">N/A</span></p>
                </div>
            </div>
        </div>
    );
}

export default ForecastCard;