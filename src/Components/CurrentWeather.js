import React, { Component } from "react";

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="w-100 d-flex align-items-center justify-content-center">
                <div className="row d-flex align-items-center p-1">
                    <div className="col-3">
                        <p className="mb-0">Image</p>
                    </div>
                    <div className="col-3">
                        <p className="mb-0">{Math.round(this.props.main.temp)} °F</p>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <p className="my-1">Feels Like: {Math.round(this.props.main.feels_like)} °F</p>
                            </div>
                            <div className="col-12">
                                <p className="my-1">Humidity: {Math.round(this.props.main.humidity)}%</p>
                            </div>
                            <div className="col-12">
                                <p className="my-1">Humidity: {Math.round(this.props.wind.speed)} MPH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentWeather;