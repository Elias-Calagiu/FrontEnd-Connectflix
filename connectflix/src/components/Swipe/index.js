import React, { Component } from 'react'
import CardBtn from "../CardBtn"
export default class Swipe extends Component {
    render() {
        return (
            <div
                className="card"
                style={{
                    backgroundImage: this.props.image ? `url(${this.props.image})` : "none"
                }}
            >
                {!this.props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                <CardBtn
                    onClick={this.props.handleBtnClick}
                    data-value="pass"
                />
                <CardBtn
                    onClick={this.props.handleBtnClick}
                    data-value="pick"
                />
            </div>
        )
    }
}
