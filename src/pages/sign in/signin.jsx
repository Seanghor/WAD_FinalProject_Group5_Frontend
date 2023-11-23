import React from "react";
import ".././styles/signin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../../service/auth";
import { Checkbox, Button, Typography, Stack } from "@mui/material/";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = async () => {
    if (!email) {
      alert("email is required");
      return;
    }
    if (!password) {
      alert("password is required");
      return;
    }

    await login({ email, password });
    console.log("Test email:", email);
    console.log("Test password:", password);
    console.log("Test : ", test);
  };
  return (
    <div className="container">
      <div className="row">
        {/* Login Form Left Side */}
        <div className="col-md-6 ">
          <h1 className="login">Login</h1>
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Username or Email address </label>
              <input
                type="email"
                className="form-control"
                id="input-email"
                aria-describedby="emailHelp"
                placeholder="kitchi"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                className="form-control"
                id="input-password"
                placeholder="123345"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {/* Rememeber me & Forget pwd */}
            <div className="col">
              <div className="col-md-4">
                <Stack direction="row">
                  <Checkbox {...label} />
                  <Typography
                    style={{ fontSize: 16, marginTop: 10 }}
                    component="div"
                    fontSize={30}
                  >
                    Remember Me
                  </Typography>
                </Stack>
              </div>
              <div className="col-md-4 forgetpassword">
                <p>Forgot password?</p>
              </div>
            </div>

            {/* Login Btn */}
            <div className="">
              <Button
                size="small"
                variant="contained"
                onClick={onLogin}
                sx={{ width: 120, height: 40, padding: 1, margin: 0 }}
              >
                Login
              </Button>
            </div>
            <div className="row pt-5">
              <p>
                Don't you have account? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </form>
        </div>

        {/* Welcome Right Side */}
        <div className="col-md-6 welcome d-flex justify-content-center">
          <div className=" text-center">
            <p>Welcome Back!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
