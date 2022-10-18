import React, { Component } from "react";
import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import MainInfo from './Components/MainInfo'
import Details from './Components/Details'
import Hourly from './Components/Hourly'
import load from './img/load.png'

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
      hourlyList: [],
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
      `https://api.openweathermap.org/data/2.5/forecast?q=houston&cnt=8&appid=af8a61902c630163996ad1a6ca83b265&units=imperial`
    ).then((res) => res.json());

    const allData = Promise.all([currentWeather, futureWeather]);

    // attach then() handler to the allData Promise
    allData.then((res) => {
      console.log(res[1]);
      this.setState({
        weather: res[0].weather,
        main: res[0].main,
        wind: res[0].wind,
        city: res[0].name,
        loading: false,
        hourlyList: res[1].list
      })
    });
  }

  // Run apiCall on initial render
  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div className="container-fluid bg-primary vh-100 vw-100 d-flex flex-column align-items-center justify-content-start p-3">
        <Header />
        <Search cityInput={this.state.cityInput} apiCall={this.apiCall} handleChange={this.handleChange} onKeyDownHandler={this.onKeyDownHandler} />
        {this.state.loading ? <a target="_blank" href="https://icons8.com/icon/2969/settings"><img src={load} className='spinning' style={{ width: 100 }} /></a> : <div>
          <MainInfo main={this.state.main} date={this.state.date} city={this.state.city} cityInput={this.state.cityInput} cityDefault={this.state.cityDefault} weather={this.state.weather} />
          <Hourly list={this.state.hourlyList} />
          <Details main={this.state.main} wind={this.state.wind} /></div>}
      </div>
    );
  }
}

export default App;