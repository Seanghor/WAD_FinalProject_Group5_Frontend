import React from "react";
import ".././styles/signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "./../../service/auth";
import { Checkbox, Button, Typography, Stack } from "@mui/material/";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Signup = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [work, setWork] = useState("");
  // const [city, setCity] = useState("");
  // const [zip, setZip] = useState("");
  // const [province, setProvince] = useState("");
  // const [street, setStreet] = useState("");
  const OnSignup = async () => {
    if (!username) {
      alert("username is required");
      return;
    }
    if (!email) {
      alert("email is required");
      return;
    }
    if (!phone) {
      alert("phone is required");
      return;
    }
    if (!password) {
      // alert("password is required");
      toast("Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (password.length < 6) {
      alert("password must be atleast 6 characters");
      return;
    }

    // call api for signUp:
    await register({ username, email, password, phone });
    console.log("email:", email);
    console.log("password:", password);
    console.log("SignUp : Successfull");
  };
  return (
    <div className="container">
      <div className="container">
        <div className="col-md-6 register">
          <h1>Register</h1>
          <div className="text">
            <p>
              let ‘s get you all set up so you can verify your account and begin
              <br />
              setting up your profile.
            </p>
          </div>
        </div>

        <div className="">
          <div className="row ">
            {/* Left side form  */}
            <div className="col">
              <div className="first_name">
                <p>Username</p>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="sothea"
                  className="item"
                />
              </div>
              <div className="phone_number">
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="team5@kit.com"
                  className="item"
                />
              </div>
            </div>

            {/* Right side form */}
            <div className="col">
              <div className="last_name">
                <p>Phone number</p>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="1234"
                  className="item"
                />
              </div>
              <div className="email">
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="1@#$456"
                  className="item"
                />
              </div>
            </div>
          </div>

          {/* Text under Left side form */}
          <div className="text_under">
            <div className="tick1">
              <input type="checkbox" className="checkbox" />
              <label htmlFor="text"> Yes, This is my personal email.</label>
            </div>
            <div className="tick2">
              <input type="checkbox" className="checkbox" />
              <label htmlFor="text">
                {" "}
                I agree with the terms <a href="/">private policy.</a>
              </label>
            </div>
          </div>

          <div className="col-md-6 btn">
            <button type="submit" onClick={OnSignup}>
              Sign Up
            </button>
          </div>
          <p>
            Already have an Account ? <Link to="/signin">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
