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
    }
  }
  // event handler method code goes here
  handleFormSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost8080/api/signup", {
      username:this.state.username, 
      password:this.state.password,
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email
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
         <form className="signup-form">
        <div className="form-group">
        <label >Signup:</label>
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
        <input
          value={this.props.firstName}
          onChange={this.props.handleInputChange}
          name="firstName"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="First Name"
          id="firstName"
        />
        <input
          value={this.props.lastName}
          onChange={this.props.handleInputChange}
          name="lastName"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="Last Name"
          id="lastName"
        />
        <input
          value={this.props.email}
          onChange={this.props.handleInputChange}
          name="email"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="email"
          id="email"
        />
        <>
    <Button type="primary" onClick={this.props.handleFormSubmit}>Signup!</Button>
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


