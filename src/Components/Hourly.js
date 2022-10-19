import React, { Component } from "react";

class Hourly extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="vw-100 d-flex align-items-center justify-content-center py-3">
                <div className="row hourly flex-nowrap">
                    {this.props.list.map((item) => {
                        return <div className="col px-4" key={this.props.list.indexOf(item)}>
                            <p className="text-center" style={{ whiteSpace: 'nowrap' }}>{Math.round(item.main.temp)} °F</p>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default Hourly;