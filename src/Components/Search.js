import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row py-3">
                <div className="col-12">
                    <div className="d-flex">
                        <input className="form-control shadow-none mx-1" placeholder="Enter a city..." onKeyDown={this.props.onKeyDownHandler} value={this.props.cityInput == '' ? '' : this.props.cityInput} onChange={this.props.handleChange}></input>
                        <button className="btn btn-light shadow-none mx-1" onClick={this.props.apiCall}>Search</button></div>
                </div>
            </div>
        );
    }
}

export default Search;