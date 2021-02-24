
import "./style.css";

import React, { Component } from 'react'

export default class Signup extends Component {
  constructor(props){
    super(props)
  }
  // event handler method code goes here
  render() {
    return (
      <div>
         <form className="login-form">
        <div className="form-group">
        <label >Signup:</label>
        <input
          value={this.props.search}
          onChange={this.props.handleInputChange}
          username="username"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="username"
          id="username"
        />
        <input
          value={this.props.search}
          onChange={this.props.handleInputChange}
          password="password"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="password"
          id="password"
        />
        <input
          value={this.props.search}
          onChange={this.props.handleInputChange}
          firstName="first-name"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="First Name"
          id="first-name"
        />
        <input
          value={this.props.search}
          onChange={this.props.handleInputChange}
          lastName="last-name"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="Last Name"
          id="last-name"
        />
        <input
          value={this.props.search}
          onChange={this.props.handleInputChange}
          email="email"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="email"
          id="email"
        />
        <button type="submit" onClick={this.props.handleFormSubmit} className="btn btn-success">
          Login
        </button>
      </div>
        {/* <button type="submit" onClick={this.props.handleFormSubmit} className="btn btn-success">
          Login
        </button> */}
        </form>
      </div>
    )
  }
}


