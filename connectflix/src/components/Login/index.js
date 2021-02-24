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
axios.post("http://localhost8080/api/login", {
  username:this.state.username, 
  password:this.state.password
}).then((response)=> {
console.log("response received!", response)
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
          value={this.props.username}
          onChange={this.props.handleInputChange}
          name="username"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="username"
          id="username"
        />
        <input
          value={this.props.password}
          onChange={this.props.handleInputChange}
          name="password"
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
      <h6 className="my-mt-4">Need an Account?
        <a className="my-tc1" href="/signup">Sign Up</a>
      </h6>
        </form>
      </div>
    )
  }
}



// export default Login;