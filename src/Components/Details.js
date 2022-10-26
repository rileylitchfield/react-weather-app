import React, { Component } from "react";

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="w-100 w-md-25 d-flex align-items-center justify-content-center p-3">
                {this.props.main != '' && this.props.wind != '' &&
                    <div className="w-100">
                        <div className="row p-1 border-top border-bottom">
                            <div className="col-6 p-0">
                                <p className="my-1 text-start">
                                    <span className="fw-light">Sunrise: </span>
                                    {this.props.timeConverter(this.props.sys.sunrise, 'time', 'hh:mm')}
                                </p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="my-1 text-start">
                                    <span className="fw-light">Sunset: </span>
                                    {this.props.timeConverter(this.props.sys.sunset, 'time', 'hh:mm')}
                                </p>
                            </div>
                        </div>
                        <div className="row p-1 border-bottom">
                            <div className="col-6 p-0">
                                <p className="my-1 text-start">
                                    <span className="fw-light">Humidity: </span>
                                    {this.props.main.humidity}%
                                </p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="my-1 text-start">
                                    <span className="fw-light">Wind: </span>
                                    {Math.round(this.props.wind.speed)} mph
                                </p>
                            </div>
                        </div>
                        <div className="row p-1 border-bottom">
                            <div className="col-6 p-0">
                                <p className="my-1 text-start">
                                    <span className="fw-light">Feels like: </span>
                                    {Math.round(this.props.main.feels_like)} °F
                                </p>
                            </div>
                            <div className="col-6 p-0">
                                <p className="my-1 text-start">
                                    <span className="fw-light">Pressure: </span>
                                    {(this.props.main.pressure * 0.02953).toFixed(1)} inHg
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Details;