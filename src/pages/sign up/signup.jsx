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
      <div className="row">
        {/* Login Form Left Side */}
        <div className="col-md-6 ">
          <h1 className="login">Register</h1>
          <form action="">
            <div className="form-group">
              <label htmlFor="text">Username</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Username or Email address </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Username or Email address </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                className="form-control"
                id="input-password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {/* Rememeber me & Forget pwd */}
            <div className="col">
              <div className="col-md-6">
                <Stack direction="row">
                  <Checkbox {...label} />
                  <Typography
                    style={{ fontSize: 16, marginTop: 10 }}
                    component="div"
                    fontSize={30}
                  >
                    Yes, This is my personal email
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Checkbox {...label} />
                  <Typography
                    style={{ fontSize: 16, marginTop: 10 }}
                    component="div"
                    fontSize={30}
                  >
                    I agree with the terms private policy.
                  </Typography>
                </Stack>
              </div>
            </div>

            {/* Login Btn */}

            <Button
              size="small"
              variant="contained"
              onClick={OnSignup}
              sx={{ width: 120, height: 40, padding: 1, marginTop: 5 }}
            >
              Sigup
            </Button>

            <div className="row pt-5">
              <p>
                Already have an account? <Link to="/signin">Login</Link>
              </p>
            </div>
          </form>
        </div>

        {/* Welcome Right Side */}
        <div className="col-md-6 welcome d-flex justify-content-center">
          <div className=" text-center">
            <p>Welcome New User!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
