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
      password: "",
      token:"",
      // isLoggedin: false
    }
  }

handleFormSubmit = (event) => {
event.preventDefault();
axios.post("http://localhost:8080/api/login", {
  username:this.state.username, 
  password:this.state.password,
  token:this.state.token,
  // isLoggedin: true
}).then((response)=> {
  localStorage.setItem("token", response.data.token)
console.log("response received!", response)
window.location.href = "/swipe"
}).catch(err=>{
  console.log(err);
  localStorage.removeItem("token")
})
}



handleInputChange = (event) => {
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
          onChange={this.handleInputChange}
          name="username"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="username"
          id="username"
        />
        <input
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="password"
          id="password"
        />


  <>
    <Button type="primary" onClick={this.handleFormSubmit}>Login</Button>
  </>

        {/* <button type="submit" onClick={this.state.handleFormSubmit} className="btn btn-success">
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