import React, { Component } from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: false
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
        console.log(json);
      });
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <div className="container-fluid bg-info vh-100 vw-100 d-flex flex-column align-items-center justify-content-center p-5">
        <div className="row flex-grow-1">
          <div className="col-12">
            <div className="d-flex">
              <input className="form-control shadow-none" placeholder="Enter a city..."></input>
              <button className="btn btn-success shadow-none" onClick={this.apiCall}>Test</button></div>
          </div>
        </div>
        <div className="row flex-grow-1">
          <div className="col-12">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
