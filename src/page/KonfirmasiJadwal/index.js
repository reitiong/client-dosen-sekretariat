import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

const KonfirmasiJadwal = (props) => {
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
          </div>
        </div>
      </div>
      <div>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Mata Kuliah</th>
              <th>Konfirmasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                -Interaksi Manusia Komputer - Sabtu, 28 September 2019 - Jam
                18.00 - Hendro, S.Kom., M.M., M.Ti.
              </td>
              <td>
                <button className="btn btn-info mx-3">Terima</button>
                <button className="btn btn-danger">Batal</button>
              </td>
            </tr>

            <tr>
              <td>
                -Pemrograman - Sabtu, 5 Oktober 2019 - Jam 18.00 - Kartono,
                S.Kom., M.Kom.
              </td>
              <td>
                <button className="btn btn-info mx-3">Terima</button>
                <button className="btn btn-danger">Batal</button>
              </td>
            </tr>

            <tr>
              <td>
                -Sistem Berkas - Jumat, 4 September 2019 - Jam 18.00 - Manorang
                Gultom, S.T., M.Kom.
              </td>
              <td>
                <button className="btn btn-info mx-3">Terima</button>
                <button className="btn btn-danger">Batal</button>
              </td>
            </tr>
            <tr>
              <td>Kalkulus</td>
              <td>17.00 - 18.40</td>
            </tr>
            <tr>
              <td>Kalkulus</td>
              <td>17.00 - 18.40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KonfirmasiJadwal;
