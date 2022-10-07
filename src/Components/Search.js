import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row h-25">
                <div className="col-12">
                    <div className="d-flex">
                        <input className="form-control shadow-none" placeholder="Enter a city..."></input>
                        <button className="btn btn-success shadow-none" onClick={this.apiCall}>Test</button></div>
                </div>
            </div>
        );
    }
}

export default Search;