import React from "react";
import ".././styles/about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="containter">
      <div className="team row ">
        <div className="col-md-4 col-12 text-center">
          <img
            src="../.././assets/image/sotheaban.png"
            className="img-fluid rounded-circle w-50 p-4"
            alt=""
          />
          <div className="card mr-2 d-inline-block shadow-lg">
            <div className="card-img-top">
              <img
                src="../assets/UI-face-3.jpg"
                className="img-fluid border-radius p-4"
                alt=""
              />
            </div>
            <div className="card-body">
              <Link to="/sothea">
                <h3 className="card-title">Ban Sothea</h3>
              </Link>
              <p className="card-text">Hello, everyone! I'm from KIT.</p>
              <a href="/" className="text-secondary text-decoration-none">
                Frontend Developer
              </a>
              <p className="text">Software Engineering</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div
            id="carouselExampleControls"
            className="carousel slide "
            data-ride="carousel"
          >
            <div className="carousel-inner text-center">
              <div className="carousel-item active">
                <div className="card mr-2 d-inline-block shadow">
                  <div className="card-img-top">
                    <img
                      src="../.././assets/image/sotheaban.png"
                      className="img-fluid rounded-circle w-50 p-4"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <Link to="/kimsoure">
                      <h3 className="card-title">Kimsoure</h3>
                    </Link>
                    <p className="card-text">Hello, everyone! I'm from KIT.</p>
                    <p className="text-secondary text-decoration-none">
                      Backend Developer
                    </p>
                    <p className="text">Software Engineering </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 text-center">
          <div className="card mr-2 d-inline-block shadow-lg">
            <div className="card-img-top">
              <img
                src="../assets/UI-face-4.jpg"
                className="img-fluid border-radius p-4"
                alt=""
              />
            </div>
            <div className="card-body">
              <Link to="/seanghor">
                <h3 className="card-title">Seanghor</h3>
              </Link>
              <p className="card-text">Hello, everyone! I'm from KIT. </p>
              <p className="text-secondary text-decoration-none ">
                Backend Developer
              </p>
              <p className="text">Software Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
