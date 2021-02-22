import React from "react";
import "./style.css";

function Login(props) {
  return (
    <div>
        <form className="login-form">
        <div className="form-group">
        <label >Login:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          username="username"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="username"
          id="username"
        />
        <input
          value={props.search}
          onChange={props.handleInputChange}
          password="password"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="password"
          id="password"
        />
        <input
          value={props.search}
          onChange={props.handleInputChange}
          firstName="first-name"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="username"
          id="first-name"
        />
        <input
          value={props.search}
          onChange={props.handleInputChange}
          lastName="last-name"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="username"
          id="last-name"
        />
        <input
          value={props.search}
          onChange={props.handleInputChange}
          email="email"
        //   password="password"
          type="text"
          className="form-control"
          placeholder="email"
          id="email"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Login
        </button>
      </div>
        </form>
    </div>
  );
}

export default Login;