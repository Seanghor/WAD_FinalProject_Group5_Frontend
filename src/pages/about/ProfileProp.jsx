import React from "react";
import ".././styles/profile.css";

const ProfileProp = (prop) => {
  return (
    <div className="container justify-content-center">
      <div className="row text-center">
        <h2>Profile</h2>
        <p>{prop.title}</p>
      </div>
      <div className="row">
        <div className="col-md-5 p-5">
          <h5>About me</h5>
          <p>{prop.aboutme}</p>
        </div>
        <div className="col-md-3 pt-5">
          <img src={prop.image} alt="" className="img" />
        </div>
        <div className="col-md-4 p-4">
          <h5>Details</h5>
          <h6>Name: </h6>
          <p>{prop.name}</p>
          <h6>Age: </h6>
          <p>{prop.age}</p>
          <h6>Location:</h6>
          <p>{prop.location}</p>
          <div className="d-flex">
            <i className="bi bi-facebook icon"></i>
            <i className="bi bi-twitter icon"></i>
            <i className="bi bi-instagram icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProp;
