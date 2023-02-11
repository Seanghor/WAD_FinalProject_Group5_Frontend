import React from "react";
import "./navbar.css";
import kitchiLogo from "../.././assets/image/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getOrders } from "../../service/order";

const Navbar = () => {
  const [notification, setNotification] = useState(0);
  const [loading, setLoading] = useState(false);
  // get all order:
  const orderList = async () => {
    const data = await getOrders();
    setNotification(data.length);
    setLoading(true);
  };
  console.log("Notification : ", notification);
  // --- useEffect:
  useEffect(() => {
    orderList();
  }, [notification]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light pt-2 pb-0">
        <div className="container-fluid pb-0">
          <div className="logo">
            <img src={kitchiLogo} alt="" className="kitchilogo" />
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

          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-1 mb-lg-0 ml-xl-5 ml-sm-5 text-center">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  <i className="bi bi-person-exclamation icon"></i>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <i className="bi bi-cart icon"></i>
                  {notification != 0 ? (
                    <span className="badge" id="lblCartCount">
                      {" "}
                      {notification}{" "}
                    </span>
                  ) : null}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
