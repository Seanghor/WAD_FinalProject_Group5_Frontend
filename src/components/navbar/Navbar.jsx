import React from "react";
import "./navbar.css";
import Pan from "../.././assets/image/pan/pan5-removebg.png";
import kitchiLogo from "../.././assets/image/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-0">
        <div className="container-fluid">
          <div className="logo">
            <img src={kitchiLogo} alt="" className="kitchilogo" />
          </div>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-1 mb-lg-0 ml-xl-5 ml-sm-5">
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
          </div>
          <div
            className="collapse navbar-collapse pr-xl-5 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  <i className="bi bi-person-exclamation icon"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="bi bi-heart icon"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <i className="bi bi-cart icon"></i>
                  <span class="badge" id="lblCartCount">
                    {" "}
                    5{" "}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row" id="Bg">
        <div className="col-md-6">
          <div className="card" id="card1">
            <div className="model">
              <h3>New Model</h3>
              <NavLink className="btn-learn-more" to="/shop">
                <li className="nav-link" href="/shop">
                  Shop Now
                </li>
              </NavLink>
              <h4>
                Anodized to absorb, distribute and transfer
                <br /> heat evenly and efficiently, these two frying
                <br /> pans sautée mushrooms, fry eggs, caramelize
                <br /> onions and bake frittatas.
              </h4>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card" id="card">
            <div className="model">
              <div className="">
                <img src={Pan} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
