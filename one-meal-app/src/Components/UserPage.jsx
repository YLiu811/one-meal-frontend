import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavBar from "./Components/NavBar";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";

function UserPage() {
  const [user, setUser] = useState({});
  const fetchUser = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      console.log(`this is fetch `);
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`)
        .then((response) => {
          console.log(response.data);
          const userAPIResCopy = response.data.user;
          setUser(userAPIResCopy);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(fetchUser, []);
    return (
    <div>
      <NavBar userProp={user} setUser={setUser} />
      <Routes>
        <Route
          path="/home"
          element={<Home userProp={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={
            user.user_id ? (
              <Navigate to="/home" />
            ) : (
              <Signup userProp={user} setUser={setUser} />
            )
          }
        />
        <Route
          path="/login"
          element={
            user.user_id ? (
              <Navigate to="/home" />
            ) : (
              <Login userProp={user} setUser={setUser} />
            )
          }
        />
      </Routes>
    </div>
  )
};

export default UserPage;