import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="d-flex">
                        <input className="form-control shadow-none mx-1" placeholder="Enter a city..." value={this.props.input} onChange={this.handleChange}></input>
                        <button className="btn btn-light shadow-none mx-1" onClick={this.apiCall}>Test</button></div>
                </div>
            </div>
        );
    }
}

export default Search;