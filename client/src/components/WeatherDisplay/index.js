import React from "react";

import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";

import "./style.css";

function WeatherDisplay(props) {
    return (
        <div className="col-md-8 col-lg-9" id="weather-display">
            <CurrentWeatherCard
                cityName={props.cityName}
                currentWeather={props.currentWeather}
                date={new Date()}
            />
            <h2>5-Day Forecast:</h2>
            <div className="row" id="forecast-list">
                {props.forecast.map((weather, i) => {
                    let now = new Date();
                    now.setDate(now.getDate() + i + 1);
                    return <ForecastCard forecast={weather} date={now} />
                })}
            </div>
        </div>
    );
}

export default WeatherDisplay;