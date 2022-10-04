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
      <div className="App">
        <header className="App-header">
          <button onClick={this.apiCall}>test</button>
        </header>
      </div>
    );
  }
}

export default App;
