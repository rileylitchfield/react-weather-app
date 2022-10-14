import React, { Component } from "react";
import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import LocationDetails from './Components/LocationDetails'
import CurrentWeather from './Components/CurrentWeather'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      main: '',
      wind: '',
      weatherDescription: '',
      loading: null,
      city: 'City Name',
      date: new Date()
    };
    this.apiCall = this.apiCall.bind(this);
  }

  // Fetch data from OpenWeatherAPI
  apiCall() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=houston&appid=1bc5008f210ae0aac20c8d13e30e378a&units=imperial`)
      .then((response) => {
        this.setState({
          loading: true
        })
        return response.json();
      })
      .then((json) => {

        this.setState({
          weather: json.weather,
          main: json.main,
          wind: json.wind,
          city: json.name,
          weatherDescription: json.weather['0']['description']
        })
      })
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div className="container-fluid bg-primary vh-100 vw-100 d-flex flex-column align-items-center justify-content-around p-3">
        <Header />
        <Search />
        <LocationDetails date={this.state.date} city={this.state.city} weather={this.state.weather} />
        <CurrentWeather main={this.state.main} wind={this.state.wind} />
      </div>
    );
  }
}

export default App;
