import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";
// import Pages from "./pages/Pages";
import axios from "axios";

function App() {
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
    <div className="App">
      {/* <header className="App-header">One-Meal</header> */}
      {/* <h1> One Meal </h1> */}
      {/* <Pages /> */}

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
  );
}

export default App;
