import React, { Component } from "react";

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        function timeConverter(UNIX_timestamp) {
            let a = new Date(UNIX_timestamp * 1000);
            let hour = a.getHours();
            if (hour > 12) { hour = hour - 12 }
            let min = a.getMinutes();
            let time = hour + ':' + min;
            return time;
        }
        console.log(timeConverter(0));
        return (
            <div className="w-100 max-vw-90 d-flex align-items-center justify-content-center">
                {this.props.main != '' && this.props.wind != '' &&
                    <div className="row w-100 d-flex align-items-center p-1 border-top border-bottom">
                        <div className="col-6 p-0">
                            <p className="my-1 text-start">
                                <span className="fw-light">Sunrise: </span>
                                {timeConverter(this.props.sys.sunrise)}<span style={{ fontSize: '0.8rem' }}>AM</span>
                            </p>
                        </div>
                        <div className="col-6 p-0">
                            <p className="my-1 text-start">
                                <span className="fw-light">Sunset: </span>
                                {timeConverter(this.props.sys.sunset)}<span style={{ fontSize: '0.8rem' }}>PM</span>
                            </p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Details;