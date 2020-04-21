import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar";
import HomeDos from "../../page/HomeDos";
import HomeBaakBau from "../HomeBaakBau";

const Home = (props) => {
  const [currentUser, setCurrentUser] = useState({
    nama: "",
    username: "",
    role: "",
  });

  useEffect(() => {
    // props.history.push("/login");
    getCurrentUser();
  });

  const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    const newUser = JSON.parse(user);
    setCurrentUser(newUser);
  };

  const data = [
    //{ name: "Group A", value: 20 },
    { name: "Mahasiswa Dengan Kehadiran Di Atas 75%", value: 80 },
    //{ name: "Group C", value: 4 },
    { name: "Mahasiswa Dengan Kehadiran Di Bawah 75%", value: 20 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const matakuliah = [
    { mataKuliah: "Kalkulus" },
    { mataKuliah: "Kalkulus" },
    { mataKuliah: "Kalkulus" },
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
        {/* Navbar should be here */}
        <Navbar />

        {/* content should be here */}
        {currentUser.role === "dosen" ? <HomeDos /> : <HomeBaakBau />}
      </div>
    </div>
  );
};

export default Home;
