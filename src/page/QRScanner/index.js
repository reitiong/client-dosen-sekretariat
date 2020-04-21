import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import QrReader from "react-qr-reader";
import Navbar from "../../components/Navbar";

import { firebase } from "../../api";

const QRScanner = (props) => {
  const [result, setResult] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    nama: "",
    username: "",
    role: "",
  });

  const [presence, setPresence] = useState([]);

  const [jadwalAjar, setJadwalAjar] = useState([]);

  useEffect(() => {
    getCurrentUser();

    getJadwal(getCurrentUserUsername());
    getPresence();
  }, []);

  const getJadwal = (username) => {
    firebase
      .database()
      .ref("Jadwal_Ajar")
      .orderByKey()
      .equalTo(username)
      .on("value", (snapshot) => {
        setJadwalAjar(snapshot.val()[username]);
        console.log(snapshot.val()[username]);
      });
  };

  const getMakul = (kodeMakul) => {
    firebase
      .database()
      .ref("Mata_Kuliah")
      .orderByKey()
      .equalTo(kodeMakul)
      .on("value", (snapshot) => {
        console.log(snapshot.val());
      });
  };

  const getCurrentUserUsername = () => {
    const user = localStorage.getItem("user");
    const newUser = JSON.parse(user);
    return newUser.username;
  };

  const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    const newUser = JSON.parse(user);
    setCurrentUser(newUser);
  };
  const handleScan = (data) => {
    if (data) {
      console.log(data);
      firebase
        .database()
        .ref("Presensi")
        .orderByChild("NPM")
        .equalTo(data)
        .once("value", (snapshot) => {
          if (!snapshot.val()) {
            firebase.database().ref("Presensi").push({
              Kode_Dosen: "dosen1",
              Kode_Makul: "TIKB411",
              Nama_Hari: "Senin",
              Tanggal: new Date().valueOf(),
              NPM: data,
            });
          }
        });
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const getPresence = () => {
    firebase
      .database()
      .ref("Presensi")
      .on("value", (snapshot) => {
        const presenceTemp = [];
        for (let key in snapshot.val()) {
          presenceTemp.push(snapshot.val()[key]);
        }
        setPresence(presenceTemp);
      });
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
        <Navbar />

        <div className="main-content p-3 bg-light">
          <div className="content-content p-2 border border-dark bg-light">
            <div>
              {jadwalAjar.map((item) => {
                return (
                  <div>
                    <div>
                      <div>{item.Kode_Makul}</div>
                      <div>{item.Nama_Makul}</div>
                      {item.Hari.map((hari) => {
                        return (
                          <div>
                            <div>{hari.Nama_Hari} </div>
                            <div>{hari.Jam_Mulai} </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              <QrReader
                delay={1000}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "100%" }}
              />

              {presence.map((item) => {
                return <div>{item.NPM}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
