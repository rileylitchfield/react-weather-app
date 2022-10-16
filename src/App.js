import React, { Component } from "react";
import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import MainInfo from './Components/MainInfo'
import Details from './Components/Details'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      main: '',
      wind: '',
      loading: null,
      cityDefault: 'New York',
      cityInput: '',
      city: '',
      date: new Date()
    };
    this.apiCall = this.apiCall.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }

  // Update input state when input is updated from user
  handleChange(event) {
    this.setState({
      cityInput: event.target.value
    })
  }

  // Run apiCall if user presses Enter key
  onKeyDownHandler(event) {
    if (event.keyCode === 13) {
      this.apiCall();
    }
  }

  // Fetch data from OpenWeatherAPI
  apiCall() {
    this.setState({
      loading: true,
      cityDefault: ''
    })

    const currentWeather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput == '' ? this.state.cityDefault : this.state.cityInput}&appid=af8a61902c630163996ad1a6ca83b265&units=imperial`
    ).then((res) => res.json());

    const futureWeather = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=af8a61902c630163996ad1a6ca83b265&units=imperial`
    ).then((res) => res.json());

    const allData = Promise.all([currentWeather, futureWeather]);

    // attach then() handler to the allData Promise
    allData.then((res) => {
      this.setState({
        weather: res[0].weather,
        main: res[0].main,
        wind: res[0].wind,
        city: res[0].name
      })
    });
  }

  // Run apiCall on initial render
  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div className="container-fluid bg-primary vh-100 vw-100 d-flex flex-column align-items-center justify-content-around p-3">
        <Header />
        <Search cityInput={this.state.cityInput} apiCall={this.apiCall} handleChange={this.handleChange} onKeyDownHandler={this.onKeyDownHandler} />
        <MainInfo main={this.state.main} date={this.state.date} city={this.state.city} cityInput={this.state.cityInput} cityDefault={this.state.cityDefault} weather={this.state.weather} />
        <Details main={this.state.main} wind={this.state.wind} />
      </div>
    );
  }
}

export default App;
