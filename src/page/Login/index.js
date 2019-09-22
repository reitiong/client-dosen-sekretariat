import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.png";
import "./../../assets/css/css.css";
const Login = props => {
  const login = () => {
    props.history.push("/");
  };
  return (
    <div className="main-container bg-purple justify-content-center align-items-center">
      <div className="">
        <div className="form-wrapper flex-column border rounded p-3 bg-light">
          <div className="d-flex justify-content-center p-4">
            <img src={logo} width="200px" height="200px" alt="logo" />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="Password" />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-block bg-purple"
              onClick={login}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
