import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.png";
import "./../../assets/css/css.css";
import { firebase } from "../../api";

const Login = (props) => {
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const [isUsernameValid, setIsUsernameValid] = useState({
    valid: true,
    message: "",
  });

  const [isPasswordValid, setIsPasswordalid] = useState({
    valid: true,
    message: "",
  });

  const [loginResult, setLoginResult] = useState("");

  const login = () => {
    if (credential.username.length > 0 && credential.password > 0) {
      setIsPasswordalid({
        message: "",
        valid: true,
      });
      setIsUsernameValid({
        message: "",
        valid: true,
      });

      firebase
        .database()
        .ref("User")
        .orderByKey()
        .equalTo(credential.username)
        .on("value", (snapshot) => {
          const user = snapshot.val();
          if (user) {
            if (user[credential.username].password === credential.password) {
              console.log(user);
              const { nama, role, username } = user[credential.username];
              localStorage.setItem(
                "user",
                JSON.stringify({
                  nama,
                  username,
                  role,
                })
              );
              props.history.push("/");
            } else {
              setLoginResult("Password salah");
            }
          } else {
            setLoginResult("Username / Password salah");
          }
        });
    } else {
      if (credential.username.length === 0) {
        setIsUsernameValid({
          message: "Username belum diisi",
          valid: false,
        });
      }
      if (credential.username.length > 0) {
        setIsUsernameValid({
          message: "",
          valid: true,
        });
      }
      if (credential.password.length === 0) {
        setIsPasswordalid({
          message: "Password belum diisi",
          valid: false,
        });
      }
      if (credential.password.length > 0) {
        setIsPasswordalid({
          message: "",
          valid: true,
        });
      }
    }
  };

  useEffect(() => {
    // firebase
    //   .database()
    //   .ref("User")
    //   .on("value", (snapshot) => {
    //     console.log(snapshot.val());
    //   });
  });

  const handleInput = (event, field) => {
    setCredential({ ...credential, [field]: event.target.value });
  };

  return (
    <div className="main-container bg-purple justify-content-center align-items-center">
      <div className="">
        <div className="form-wrapper flex-column border rounded p-3 bg-light">
          <div className="d-flex justify-content-center p-4">
            <img src={logo} width="200px" height="200px" alt="logo" />
          </div>
          <div className="text-center text-danger">{loginResult}</div>
          <div className="form-group">
            <label>Username</label>
            <input
              className={`form-control ${
                isUsernameValid.valid ? "" : "is-invalid"
              }`}
              onChange={(event) => handleInput(event, "username")}
            />
            <div class="invalid-feedback">{isUsernameValid.message}</div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className={`form-control ${
                isPasswordValid.valid ? "" : "is-invalid"
              }`}
              type="Password"
              onChange={(event) => handleInput(event, "password")}
            />
            <div class="invalid-feedback">{isPasswordValid.message}</div>
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
