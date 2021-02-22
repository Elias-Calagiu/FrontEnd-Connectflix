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
          placeholder="username"
          id="password"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Login
        </button>
      </div>
      <h6 class="my-mt-4">Need an Account?
        <a class="my-tc1" href="/signup">Sign Up</a>
      </h6>
        </form>
    </div>
  );
}

export default Login;