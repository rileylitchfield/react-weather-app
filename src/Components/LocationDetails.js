import React, { Component } from "react";

class LocationDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Convert weather description to title case
        if (this.props.weather !== null) {
            const description = this.props.weather['0']['description'].split(" ");

            var descriptionUpper = description.map((word) => {
                return word[0].toUpperCase() + word.substring(1);
            }).join(" ");
        }

        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <p className="lead text-center">{this.props.date.toDateString()}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">{this.props.city}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-center p-4">{descriptionUpper}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationDetails;