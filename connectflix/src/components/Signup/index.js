import { Button } from 'antd';
import "./style.css";
import axios from "axios"
import React, { Component } from 'react'

export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      firstName:"",
      lastName: "",
      email: "",
      redirect: null
    }
  }
  // event handler method code goes here
  handleFormSubmit = (event) => {
    console.log("hitting form submit");
    event.preventDefault();
    axios.post("http://localhost:8080/api/signup", {
      username:this.state.username, 
      password:this.state.password,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email
    }).then((response)=> {
    console.log("response received!", response)
      window.location.href = "/"
    })
    }

    handleInputChange = (event)=> {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    
  render() {
    return (
      <div>
         <form className="signup-form">
        <div className="form-group">
        <label >Signup:</label>
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
        <input
          value={this.state.firstName}
          onChange={this.handleInputChange}
          name="firstName"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="First Name"
          id="firstName"
        />
        <input
          value={this.state.lastName}
          onChange={this.handleInputChange}
          name="lastName"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="Last Name"
          id="lastName"
        />
        <input
          value={this.state.email}
          onChange={this.handleInputChange}
          name="email"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="email"
          id="email"
        />
        <>
    <Button type="primary" onClick={this.handleFormSubmit}>Signup!</Button>
  </>
      </div>
        {/* <button type="submit" onClick={this.props.handleFormSubmit} className="btn btn-success">
          Login
        </button> */}
        </form>
      </div>
    )
  }
}


