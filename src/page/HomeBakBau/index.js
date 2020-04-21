import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

const data = [
  //{ name: "Group A", value: 20 },
  { name: "Mahasiswa Dengan Kehadiran Di Atas 75%", value: 80 },
  //{ name: "Group C", value: 4 },
  { name: "Mahasiswa Dengan Kehadiran Di Bawah 75%", value: 20 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomeBakBau = (props) => {
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

      <div className="main-content p-3 bg-light">
        <div className="content-content p-2 border border-dark bg-light">
          <div>
            <div className="d-flex justify-content-center">
              <PieChart width={400} height={250}>
                <Pie
                  data={data}
                  cx={150}
                  cy={130}
                  label
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
            Mahasiswa Dengan Kehadiran Diatas 75%
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Nama Mahasiswa</th>
                  <th>NPM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adi Andoyo</td>
                  <td>15420909</td>
                </tr>
                <tr>
                  <td>Feryadi</td>
                  <td>15420933</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            Mahasiswa Dengan Kehadiran Dibawah 75%
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Nama Mahasiswa</th>
                  <th>NPM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hendri Januardi</td>
                  <td>15420937</td>
                </tr>
                <tr>
                  <td>Sylvia Devianti</td>
                  <td>15420953</td>
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
  );
};
export default HomeBakBau;
