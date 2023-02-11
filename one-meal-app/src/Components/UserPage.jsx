import React from 'react'
import '../Components/UserPage.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Login from '../pages/Login';
import Signup from "../pages/Signup";
import NavBar from "./NavBar";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import Pages from "../pages/Pages";
import Searched from "../pages/Searched";
import Recipe from "../pages/Recipe";
import Favorite from './Favorite';

function UserPage() {
  console.log(process.env.REACT_APP_API_KEY)
  const [user, setUser] = useState({});
  
  const fetchUser = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`,{headers:{
          Authorization:userId
        }})
        .then((response) => {
          console.log(response);
          setUser(response.data.user)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(fetchUser,[]);
  
  return (
    <div>
      {localStorage.getItem("userId") ? (<h1>Hi {user.email}</h1>):(<h1>Hi please join us</h1>)}
        <div>
          <NavBar className='nav' userProp={user} setUser={setUser} />
          <Routes>
            {/* <Route path="*" element={<Login userProp={user} setUser={setUser} />} /> */}
            <Route
              path="/home"
              element={<Home userProp={user} setUser={setUser} />}
            />
            <Route
              path="/pages"
              element={<Pages userProp={user} setUser={setUser} />}
            />
            <Route path='/favorite'element={<Favorite/>}/>
            <Route path="/searched/:input" element={<Searched />} />
            <Route path ="/recipe/:id" element={<Recipe />} />
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
          {/* <Home /> */}
      </div>
    </div>
  );
}

export default UserPage;