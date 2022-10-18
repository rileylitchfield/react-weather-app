import React, { Component } from "react";

class Hourly extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var tempList = this.props.list.map((item) => {
            return <div className="col" key={this.props.list.indexOf(item)}>
                <p className="text-center" style={{ whiteSpace: 'nowrap' }}>{item.main.temp} °F</p>
            </div>
        })
        return (
            <div className="py-3">
                <div className="row hourly flex-nowrap">
                    {tempList}
                </div>
            </div>
        );
    }
}

export default Hourly;