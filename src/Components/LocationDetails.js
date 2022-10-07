import React, { Component } from "react";

class Weather extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <p className="lead text-center">Tuesday May 31 2022</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Tuesday May 31 2022</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-center p-4">Tuesday May 31 2022</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;