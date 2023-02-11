import React from "react";
import ".././styles/contact.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="container">
        <div className="text">
          <h1>Get Im Touch With Us</h1>
          <p className="text-p">
            For More Information About Our Product & Services.Please Feel Free
            To Drop Us An Email.{" "}
          </p>{" "}
          <p className="text-p">
            {" "}
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        <div className="row text-align-center">
          <div className="col item-address">
            <div className="item1">
              <h5>Address</h5>
              <p>Kirirom Mountian</p>
            </div>
            <div className="item1">
              <h5>Phone</h5>
              <p>+855 123 4567</p>
            </div>
            <div className="item1">
              <h5>Working time</h5>
              <p>Mon-Fri : 9:00-6:00</p>
            </div>
          </div>
          <div className="col">
            <div className="input-text">
              <form>
                <div className="form-group ">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter Name"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group ">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control "
                    ria-describedby="emailHelp"
                    placeholder="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group ">
                  <label for="email">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Optional"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group  ">
                  <label for="email">Message</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>

                {!username || !email || !message ? (
                  <button type="submit" className="btn btn-primary" disabled>
                    Submit
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
