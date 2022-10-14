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
      weatherDescription: '',
      loading: null,
      city: 'City Name',
      date: new Date()
    };
    this.apiCall = this.apiCall.bind(this);
  }

  // Fetch data from OpenWeatherAPI
  apiCall() {
    this.setState({
      loading: true
    })

    const currentWeather = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=houston&appid=1bc5008f210ae0aac20c8d13e30e378a&units=imperial`
    ).then((res) => res.json());

    const futureWeather = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=1bc5008f210ae0aac20c8d13e30e378a&units=imperial`
    ).then((res) => res.json());

    const allData = Promise.all([currentWeather, futureWeather]);

    // attach then() handler to the allData Promise
    allData.then((res) => {
      this.setState({
        weather: res[0].weather,
        main: res[0].main,
        wind: res[0].wind,
        city: res[0].name,
        weatherDescription: res[0].weather['0']['description']
      })
    });

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=houston&appid=1bc5008f210ae0aac20c8d13e30e378a&units=imperial`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {

    //     this.setState({
    //       weather: json.weather,
    //       main: json.main,
    //       wind: json.wind,
    //       city: json.name,
    //       weatherDescription: json.weather['0']['description']
    //     })
    //   })
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div className="container-fluid bg-primary vh-100 vw-100 d-flex flex-column align-items-center justify-content-around p-3">
        <Header />
        <Search />
        <MainInfo main={this.state.main} date={this.state.date} city={this.state.city} weather={this.state.weather} />
        <Details main={this.state.main} wind={this.state.wind} />
      </div>
    );
  }
}

export default App;
