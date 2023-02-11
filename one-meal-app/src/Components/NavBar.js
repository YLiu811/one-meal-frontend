import React from "react";
import "../Components/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  console.log("these are NavBar's props:", props);
  return (
    <nav>
      {localStorage.getItem("userId") ? (
        <>
          {/* <h1>Hi! {props.userProp.email} </h1> */}
          <div className="navbar">
            <span>
              <Link to="/Favorite">My Favorites</Link>
            </span>
            <span>
              <Link to="/home">Home</Link>
            </span>
            <span
              onClick={() => {
                localStorage.removeItem("userId");
                props.setUser({});
                alert("See you!");
                window.location.href = "/login";
              }}
            >
              Log out
            </span>
          </div>
        </>
      ) : (
        <div>
          <Link to="/signup">Sign up</Link>
          <br />
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
