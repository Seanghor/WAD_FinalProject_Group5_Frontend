import React from "react";
import { useNavigate } from "react-router";
import "./footer.css";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted mt-auto">
        <section className="">
          <div className="container text-center text-md-start mt-55">
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/*  Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Group Project
                </h6>
                <p>Web development final project Group5</p>
              </div>
              {/* Grid column  */}

              {/* Grid column  */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" id="footerlink">
                {/*  Links */}
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                  <li
                    href="/"
                    className="text-reset"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </li>
                </p>
                <p>
                  <li
                    href="/shop"
                    className="text-reset"
                    onClick={() => navigate("/shop")}
                  >
                    Shop
                  </li>
                </p>
                <p>
                  <li
                    href="/about"
                    className="text-reset"
                    onClick={() => navigate("/about")}
                  >
                    About
                  </li>
                </p>
                <p>
                  <li
                    href="/contact"
                    className="text-reset"
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </li>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" id="footerlink">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4" >Help</h6>
                <p>
                  <li href="#!" className="text-reset">
                    Payment Options
                  </li>
                </p>
                <p>
                  <li href="#!" className="text-reset">
                    Returns
                  </li>
                </p>
                <p>
                  <li href="#!" className="text-reset">
                    Privacy Policies
                  </li>
                </p>
              </div>
              {/* Grid column */}

              {/*  Grid column  */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <div>
                  <h4>Newsletter</h4>
                  <div>
                    <label htmlFor="Newsletter" className="form-label">
                      Subscribe To Our Newsletter
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                    <button className="btn btn-danger mt-3">Subscribe</button>
                  </div>
                </div>
              </div>
              {/* Grid Column */}
              <div
                className="text-center p-4 mb-4"
                style={{ backgroundColor: (0, 0, 0, 0.05) }}
              >
                <p className="text-reset fw-bold">
                  <span>© 2023 Copyright :</span> Group5 All rights reserved
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
