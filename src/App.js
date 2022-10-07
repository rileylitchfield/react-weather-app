import React, { Component } from "react";
import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import LocationDetails from './Components/LocationDetails'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      weatherDescription: '',
      loading: null,
      city: 'City Name',
      date: new Date()
    };
    this.apiCall = this.apiCall.bind(this);
  }

  // Fetch data from OpenWeatherAPI
  apiCall() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=50&lon=50&appid=1bc5008f210ae0aac20c8d13e30e378a&units=imperial`)
      .then((response) => {
        this.setState({
          loading: true
        })
        return response.json();
      })
      .then((json) => {
        console.log(json.weather['0']['description']);
        this.setState({
          data: json.main.temp,
          city: json.name,
          weatherDescription: json.weather['0']['description']
        }, () =>
          console.log(this.state.data))
      })
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div className="container-fluid bg-info vh-100 vw-100 d-flex flex-column align-items-center justify-content-center p-3">
        <Header />
        <Search />
        <LocationDetails data={this.state.data} date={this.state.date} city={this.state.city} description={this.state.weatherDescription} />
      </div>
    );
  }
}

export default App;
