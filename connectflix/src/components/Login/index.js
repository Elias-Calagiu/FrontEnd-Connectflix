// import React from "react";
import "./style.css";

import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
         <form className="login-form">
        <div className="form-group">
        <label >Login:</label>
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

ReactDOM.render(
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>,
  mountNode,
);
        <button type="submit" onClick={this.props.handleFormSubmit} className="btn btn-success">
          Login
        </button>
      </div>
      <h6 class="my-mt-4">Need an Account?
        <a class="my-tc1" href="/signup">Sign Up</a>
      </h6>
        </form>
      </div>
    )
  }
}



// export default Login;