import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="main-side-bar bg-purple">
      <div className="d-flex justify-content-center py-5 bg-light">
        <img src={logo} alt="logo" width="200px" height="200px" />
      </div>
      <div className="d-flex flex-column">
        <div className="p-3 border-bottom border-light">
          <NavLink className="text-light">Laporan Kehadiran Mahasiswa</NavLink>
        </div>
        <div className="p-3 border-bottom border-light">
          <NavLink to="/qr-scanner" exact className="text-light">
            Buka Kamera Scan QR Code
          </NavLink>
        </div>
        <div className="p-3 border-bottom border-light">
          <NavLink className="text-light">Buat Jadwal Pengganti</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
