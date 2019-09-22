import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
const Home = props => {
  useEffect(() => {
    // props.history.push("/login");
  });
  const matakuliah = [
    { mataKuliah: "Kalkulus" },
    { mataKuliah: "Kalkulus" },
    { mataKuliah: "Kalkulus" }
  ];
  return (
    <div className="main-container bg-info">
      <div className="d-flex justify-content-between bg-danger p-2">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Logout</NavLink>
      </div>
      <div className="main-wrapper">
        <div className="main-side-bar bg-warning">
          <div className="d-flex justify-content-center py-5 bg-light">
            <img src={logo} alt="logo" width="200px" height="200px" />
          </div>
          <div className="d-flex flex-column">
            <div className="p-3 border-bottom border-info">
              <NavLink>Side bar</NavLink>
            </div>
            <div className="p-3 border-bottom border-info">
              <NavLink>Side bar</NavLink>
            </div>
            <div className="p-3 border-bottom border-info">
              <NavLink>Side bar</NavLink>
            </div>
          </div>
        </div>
        <div className="main-content p-3 bg-secondary">
          Main content
          <div className="content-content p-2 border border-dark">
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
