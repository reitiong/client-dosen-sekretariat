import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeDos = (props) => {
  return (
    <div className="main-content p-3 bg-light">
      <div className="content-content p-2 border border-dark bg-light">
        <div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-info">Cetak Laporan</button>
          </div>
          Mahasiswa Dengan Kehadiran Di Bawah 75% <br></br> Jumlah = 4 Orang{" "}
          <br></br> Persentase = 20%
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
                <td>Hendri Januardi</td>
                <td>15420937</td>
              </tr>
              <tr>
                <td>Sylvia Devianti</td>
                <td>15420953</td>
              </tr>
              <tr>
                <td>Willy Yanpraga</td>
                <td>15420964</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          Mahasiswa Dengan Kehadiran Di Atas 75% <br></br> Jumlah = 16 Orang{" "}
          <br></br> Persentase = 80%
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Nama Mahasiswa</th>
                <th>NPM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Feryadi</td>
                <td>15420933</td>
              </tr>
              <tr>
                <td>Velzen Pratama</td>
                <td>15420956</td>
              </tr>
              <tr>
                <td>Willy</td>
                <td>15420962</td>
              </tr>
              <tr>
                <td>Willy Pangestu</td>
                <td>15420963</td>
              </tr>
              <tr>
                <td>Yerri Fitrah</td>
                <td>15420965</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeDos;
