import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import QrReader from "react-qr-reader";

const QRScanner = (props) => {
  const handleScan = (data) => {
    console.log(data);
  };
  const handleError = (err) => {
    console.error(err);
  };
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
            <div className="d-flex justify-content-center">
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "35%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
