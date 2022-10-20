import React, { Component } from "react";

class MainInfo extends Component {
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
                {this.props.main != '' &&
                    <div>
                        <div className="row pt-5 pb-4">
                            <div className="col-12">
                                <h2 className="text-center my-0">{this.props.cityInput == '' && this.props.cityDefault !== '' ? this.props.cityDefault :
                                    this.props.city}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h6 className="text-center p-2">{descriptionUpper}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">{Math.round(this.props.main.temp)} °F</h1>
                            </div>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default MainInfo;