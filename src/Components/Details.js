import React, { Component } from "react";

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="w-100 d-flex align-items-center justify-content-center py-3">
                {this.props.main != '' && this.props.wind != '' &&
                    <div className="row d-flex align-items-center p-1">
                        <div className="col-6">
                            <p className="mb-0 text-end">{Math.round(this.props.main.temp)} °F</p>
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
                                    <p className="my-1">Wind Speed: {Math.round(this.props.wind.speed)} MPH</p>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default Details;