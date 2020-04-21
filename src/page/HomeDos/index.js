import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

const HomeDos = (props) => {
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
              <NavLink className="text-light">
                Laporan Kehadiran Mahasiswa
              </NavLink>
            </div>
            <div className="p-3 border-bottom border-light">
              <NavLink className="text-light">Buka Kamera Scan QR Code</NavLink>
            </div>
            <div className="p-3 border-bottom border-light">
              <NavLink className="text-light">Buat Jadwal Pengganti</NavLink>
            </div>
          </div>
        </div>
        <div className="main-content p-3 bg-light">
          <div className="content-content p-2 border border-dark bg-light">
            <div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-info">Cetak Laporan</button>
              </div>
              Senin
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Mata Kuliah</th>
                    <th>Jam Mulai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Interaksi Manusia Komputer <br></br>Dosen : Hendro,
                      S.Kom., M.M., M.Ti. <br></br>
                      Semester : 8 <br></br> Jumlah Mahasiswa : 20 Orang
                    </td>
                    <td>17.00 - 18.40</td>
                  </tr>
                  <tr>
                    <td>
                      Kecerdasan Buatan<br></br> Dosen : Haryanto, S.Kom., M.Ti.{" "}
                      <br></br>
                      Semester : 7 <br></br> Jumlah Mahasiswa : 20 Orang
                    </td>
                    <td>19.00 - 20.40</td>
                  </tr>
                </tbody>
              </table>
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
                    <td>
                      Kalkulus<br></br> Dosen : Sofian KH, S.T., M.Sc. <br></br>
                      Semester : 2 <br></br> Jumlah Mahasiswa : 20 Orang
                    </td>
                    <td>17.00 - 18.40</td>
                  </tr>
                  <tr>
                    <td>
                      Pemrograman <br></br> Dosen : Kartono, S.Kom., M.Kom.{" "}
                      <br></br>
                      Semester : 4 <br></br> Jumlah Mahasiswa : 20 Orang
                    </td>
                    <td>19.00 - 20.40</td>
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

export default HomeDos;
