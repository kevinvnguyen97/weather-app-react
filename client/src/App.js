import React from 'react';
import logo from './logo.svg';

import Sidebar from "./components/Sidebar";
import WeatherDisplay from "./components/WeatherDisplay";

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Kevin's Weather App</a>
      </nav>

      <div className="row container-fluid">
          <Sidebar />
          <WeatherDisplay />
      </div>
    </div>
  );
}

export default App;