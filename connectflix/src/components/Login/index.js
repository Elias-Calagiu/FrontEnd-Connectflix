// import React from "react";
import axios from "axios"
import "./style.css";
import { Button } from 'antd';
import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

handleFormSubmit(event) {
event.preventDefault();
axios.get("/api/login", {}).then((response)=> {
console.log("response received!")
})
}

handleInputChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}


  render() {
    return (
      <div>
         <form className="login-form">
        <div className="form-group">
        <label >Login:</label>
        <input
          value={this.state.username}
          onChange={this.props.handleInputChange}
          username="username"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="username"
          id="username"
        />
        <input
          value={this.state.password}
          onChange={this.props.handleInputChange}
          password="password"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="password"
          id="password"
        />


  <>
    <Button type="primary" onClick={this.props.handleFormSubmit}>Login</Button>
  </>

        {/* <button type="submit" onClick={this.props.handleFormSubmit} className="btn btn-success">
          Login
        </button> */}
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