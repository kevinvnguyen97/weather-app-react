import React from "react";

import ForecastCard from "./ForecastCard";

import "./style.css";

function WeatherDisplay() {
    return (
        <div className="col-md-8 sm-12" id="weather-display">
            <div className="row">
                <div className="card" id="current-weather-card">
                    <h2 id="city-name">Welcome!</h2>
                    <h4><span id="current-month" /><span id="current-day" /><span id="current-year" /></h4>
                    <div id="icon"><img id="current-icon" src="" alt="Weather icon" /></div>
                    <p>Temperature: <span id="city-temp-current">N/A</span></p>
                    <p>Humidity: <span id="city-humidity-current">N/A</span></p>
                    <p>Wind Speed: <span id="city-wind-current">N/A</span><span id="city-direction-current" /></p>
                    <p>UV Index: <span id="city-uv-current">N/A</span></p>
                </div>
            </div>

            <h2>5-Day Forecast:</h2>
            <div className="row">
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
            </div>
        </div>
    );
}

export default WeatherDisplay;