import React from "react";
import ".././styles/signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [work, setWork] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [province, setProvince] = useState("");
  const [street, setStreet] = useState("");
  return (
    <div className="container">
      sda
    </div>
  );
};

export default Signup;
