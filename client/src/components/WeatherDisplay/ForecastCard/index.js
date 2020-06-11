import React from "react";

import "./style.css";

function ForecastCard(props) {
    return (
        <div className="card five-day-card bg-primary">
            <div className="card-body">
                <h5 className="card-title">{props.date.getMonth() + 1} / {props.date.getDate()} / {props.date.getFullYear()}</h5>
                <div>
                    <img id="day1-icon" src={props.forecast.weather_icon} alt="Weather icon"/>
                    <p className="card-text">Temp: {Math.round(props.forecast.temperature)} °F</p>
                    <p className="card-text">Humidity: {props.forecast.humidity} %</p>
                </div>
            </div>
        </div>
    );
}

export default ForecastCard;