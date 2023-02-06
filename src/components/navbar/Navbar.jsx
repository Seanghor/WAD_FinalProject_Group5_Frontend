import React from "react";
import "./navbar.css";
import kitchiLogo from "../.././assets/image/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="kitchilogo">
            <img src={kitchiLogo} alt="" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className="nav-item" to="/">
                <li className="nav-link" aria-current="page" href="/">
                  Home
                </li>
              </NavLink>
              <NavLink className="nav-item" to="/shop">
                <li className="nav-link" href="/shop">
                  Shop
                </li>
              </NavLink>
              <NavLink className="nav-item" to="/about">
                <li className="nav-link" href="/about">
                  About
                </li>
              </NavLink>
              <NavLink className="nav-item" to="/contact">
                <li className="nav-link" href="/contact">
                  Contact
                </li>
              </NavLink>
            </ul>
            <div className="d-flex ">
              <div className="p-4">
                <NavLink className="nav-link" to="/signin">
                  <i className="bi bi-person-exclamation icon"></i>
                </NavLink>
              </div>
              <div className="p-4">
                <i className="bi bi-heart icon"></i>
              </div>
              <div className="p-4">
                <NavLink className="nav-link" to="/cart">
                  <i className="bi bi-cart icon"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
