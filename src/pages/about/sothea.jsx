import React from "react";
import ".././styles/profile.css";
import SotheaImg from "../.././assets/image/profile/sothea.jpg";
const Sothea = () => {
  return (
    <div className="container justify-content-center">
      <div className="row text-center">
        <h2>Profile</h2>
        <p>I am a frontend developer</p>
      </div>
      <div className="row">
        <div className="col-md-5 p-5">
          <h5>About me</h5>
          <p>
            I am a student of Kirirom Institute of Technology. I am allround web
            developer. I am a senior programmer with good knowledg of front-end
            techniques. I love working with tech enviroment and willing to learn
            and experience new things
          </p>
        </div>
        <div className="col-md-3 pt-5">
          <img src={SotheaImg} alt="" className="img" />
        </div>
        <div className="col-md-4 p-5">
          <h5>Details</h5>
          <h6>Name: </h6>
          <p>Ban Sothea</p>
          <h6>Age: </h6>
          <p>20</p>
          <h6>Location:</h6>
          <p>Cambodia, Phnom Penh City</p>
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

export default Sothea;
