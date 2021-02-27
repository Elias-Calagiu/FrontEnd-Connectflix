import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";
import API from "../../utils/API"

import React, { Component } from 'react'

export default class Card extends Component {

  componentDidMount() {
    API.getMovies()
    //   .then(res => this.setState({ movies: res.data }))
    //   .catch(err => console.log(err));
  }
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

