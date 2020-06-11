import React, { Component } from 'react';
import axios from "axios";

import Sidebar from "./components/Sidebar";
import WeatherDisplay from "./components/WeatherDisplay";

import './App.css';

class App extends Component {
  state = {
    darkMode: false,
    search_history: [],
    current_city: {
      name: '',
      lat: null,
      lng: null
    },
    current_weather: {
      weather_icon: null,
      temperature: null,
      humidity: null,
      wind_speed: null,
      wind_direction: null,
      index: null
    },
    forecast: []
  }

  getCityWeather = cityInput => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => {
        let searchHistory = this.state.search_history;
        if (searchHistory.indexOf(response.data.name) === -1) {
          searchHistory.push(response.data.name);
          this.setState({
            search_history: searchHistory
          });
        }

        this.setState({
          current_city: {
            name: response.data.name,
            lat: response.data.coord.lat,
            lng: response.data.coord.lon
          },
          current_weather: {
            weather_icon: `https://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind_speed: response.data.wind.speed
          }
        });

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
          .then(response => {
            console.log(response);
            var forecastArray = [];

            for (let i = 1; i <= response.data.daily.length - 1; i++) {
              forecastArray.push({
                weather_icon: `https://openweathermap.org/img/w/${response.data.daily[i].weather[0].icon}.png`,
                temperature: response.data.daily[i].temp.day,
                humidity: response.data.daily[i].humidity
              });
            }

            this.setState({ forecast: forecastArray });

          }).catch(err => console.log(err));
        return response;
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-brand">Kevin's Weather App</button>
        </nav>

        <div className="row container-fluid">
          <Sidebar
            searchHistory={this.state.search_history}
            getCityWeather={this.getCityWeather}
          />
          <WeatherDisplay
            cityName={this.state.current_city.name}
            currentWeather={this.state.current_weather}
            forecast={this.state.forecast}
          />
        </div>
      </div>
    );
  }
}

export default App;