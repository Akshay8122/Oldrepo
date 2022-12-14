import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../redux/reducers";
import { usersLogout } from "../../redux/actions/signupAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
const image = localStorage.getItem("userImage");

 
  // console.log(user);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("IsLoggedin", "");
    localStorage.setItem("userName", "");
    localStorage.setItem("userEmail", "");
    localStorage.setItem("userPhone", "");
    localStorage.setItem("userImage", "");
    dispatch(usersLogout());
    navigation("/");
  };
  return (
    <div className="container">
     
      <div className="name">Name:{localStorage.getItem("userName")}</div>
      <div className="email">Email:{localStorage.getItem("userEmail")}</div>
      <div className="phone">Phone No:{localStorage.getItem("userPhone")}</div>
      <div>
        {<img height="500" width="500" src={image} alt="profile" />}
      </div>
      <div>
        <Link to="/Signup">
          <button onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
