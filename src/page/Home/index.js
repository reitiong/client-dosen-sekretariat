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
    <div className="main-container bg-purple">
      <div className="d-flex justify-content-between bg-purple margin-left-300 px-2">
        <NavLink className="p-2 text-light">Home</NavLink>
        <NavLink className="p-2 text-light">Home</NavLink>
        <NavLink className="p-2 text-light" to="/login">
          Logout
        </NavLink>
      </div>
      <div className="main-wrapper">
        <div className="main-side-bar bg-purple">
          <div className="d-flex justify-content-center py-5 bg-light">
            <img src={logo} alt="logo" width="200px" height="200px" />
          </div>
          <div className="d-flex flex-column">
            <div className="p-3 border-bottom border-light">
              <NavLink className="text-light">Side bar</NavLink>
            </div>
            <div className="p-3 border-bottom border-light">
              <NavLink className="text-light">Side bar</NavLink>
            </div>
            <div className="p-3 border-bottom border-light">
              <NavLink className="text-light">Side bar</NavLink>
            </div>
          </div>
        </div>
        <div className="main-content p-3 bg-light">
          <div className="content-content p-2 border border-dark bg-light">
            <div>
              Senin
              <table className="table table-striped table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Mata Kuliah</th>
                    <th>Jam Mulai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kalkulus</td>
                    <td>17:00 - 16.40</td>
                  </tr>
                  <tr>
                    <td>Kalkulus</td>
                    <td>17:00 - 16.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              Selasa
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Mata Kuliah</th>
                    <th>Jam Mulai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kalkulus</td>
                    <td>17:00 - 16.40</td>
                  </tr>
                  <tr>
                    <td>Kalkulus</td>
                    <td>17:00 - 16.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              Jadwal Pengganti
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Mata Kuliah</th>
                    <th>Jam Mulai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kalkulus</td>
                    <td>17:00 - 16.40</td>
                  </tr>
                  <tr>
                    <td>Kalkulus</td>
                    <td>17:00 - 16.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
