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
      loading: null,
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
        console.log(json.main.temp);
        this.setState({
          data: json.main.temp
        }, () =>
          console.log(this.state.date))
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
        <LocationDetails data={this.state.data} />
      </div>
    );
  }
}

export default App;
