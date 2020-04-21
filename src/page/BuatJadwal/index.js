import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

const BuatJadwal (props) => {
    return (
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
            <div className="d-flex justify-content-center">
                <div className="col-6">
                    <div className="form-group">
                        <label className="d-flex justify-content-center">
                            Nama Mata Kuliah
                  </label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="d-flex justify-content-center">
                            Tanggal Mulai
                  </label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="d-flex justify-content-center">
                            Jam Mulai
                  </label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="d-flex justify-content-center">Dosen</label>
                        <input className="form-control" />
                        <div className="form-group">
                            <label className="d-flex justify-content-center">
                                Pertemuan Ke -
                    </label>
                            <input className="form-control" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block bg-purple">
                                Buat Kelas
                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default BuatJadwal;