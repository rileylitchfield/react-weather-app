import React, { Component } from "react";

class Weather extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.description !== '') {
            const description = this.props.description.split(" ");

            var descriptionUpper = description.map((word) => {
                return word[0].toUpperCase() + word.substring(1);
            }).join(" ");
            console.log(descriptionUpper)
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

export default Weather;