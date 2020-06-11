import React from "react";

function CurrentWeatherCard(props) {
    return (
        <div className="row">
            <div className="card" id="current-weather-card">
                {(props.cityName !== '') ? (
                    <div>
                        <h2 id="city-name">{props.cityName}</h2>
                        <h4>{props.date.getMonth() + 1} / {props.date.getDate()} / {props.date.getFullYear()}</h4>
                        <div id="icon"><img id="current-icon" src={props.currentWeather.weather_icon} alt="Weather icon" /></div>
                        <p>Temperature: <span id="city-temp-current">{Math.round(props.currentWeather.temperature)} °F</span></p>
                        <p>Humidity: <span id="city-humidity-current">{props.currentWeather.humidity} %</span></p>
                        <p id="city-wind-current">Wind Speed: {Math.round(props.currentWeather.wind_speed)} mph<span id="city-direction-current" /></p>
                        <p>UV Index: <span id="city-uv-current">N/A</span></p>
                    </div>
                ) : (<h2>Welcome to Weather App!</h2>)}
            </div>
        </div>
    );
}

export default CurrentWeatherCard;