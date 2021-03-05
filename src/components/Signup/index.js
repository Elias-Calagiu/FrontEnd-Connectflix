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
      first_name:"",
      last_name: "",
      email: "",
      token: "",
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
      first_name:this.state.first_name,
      last_name:this.state.last_name,
      email:this.state.email,
      token: this.state.token
    }).then((response)=> {
    console.log("response received!", response)
    localStorage.setItem("token", response.data.token)
      window.location.href = "/"
    }).catch(err=>{
      console.log(err);
      localStorage.removeItem("token")
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
          value={this.state.first_name}
          onChange={this.handleInputChange}
          name="first_name"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="First Name"
          id="first_name"
        />
        <input
          value={this.state.last_name}
          onChange={this.handleInputChange}
          name="last_name"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="Last Name"
          id="last_name"
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


