import React from "react";
import Pan from "../.././assets/image/pan/pan5-removebg.png";
import Bowl from "../.././assets/image/removebg2/bowl.png";
import Microwave from "../.././assets/image/microwave/microwave1.jpg";
import Bin from "../.././assets/image/removebg2/bin.png";
import CuttingBoard from "../.././assets/image/removebg2/cutting_board.png";
import Pot from "../.././assets/image/pot/pot1.jpg";
import Pan2 from "../.././assets/image/removebg2/pan.png";
import Cards from "../../components/home/Card";
import ".././styles/home.css";
import ProductCard from "../../components/home/ProductCard";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
const Home = () => {
  return (
    <div className="container-fluid" >
      <div >
        <div className="row" id="Bg">
          <div className="col-md-6">
            <div className="card" id="card1">
              <div className="model">
                <h3>New Model</h3>
                <NavLink className="nav-item" to="/shop">
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

       <div className="row p-5 " id="detail">
        <div className="col-md-3">
          <div className="row">
            <div className="col-sm-1 m-3">
              <i class="bi bi-airplane iCon"></i>
            </div>
           
            <div className="col">
              <h3>Free Delivery</h3>
              <p>On all order above $99</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="row">
            <div className="col-sm-1 m-3">
            <i class="bi bi-wallet2 iCon"></i>
            </div>
           
            <div className="col">
              <h3>Secure Payment</h3>
              <p>100% Secure Payment</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="row">
            <div className="col-sm-1 m-3">
            <i class="bi bi-clipboard-check iCon"></i>
            </div>
           
            <div className="col">
              <h3>Join Risk Free</h3>
              <p>30 days return policy</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="row">
            <div className="col-sm-1 m-3">
              <i class="bi bi-truck iCon"></i>
            </div>
           
            <div className="col">
              <h3>Contact Delivery</h3>
              <p>We alwarys ensure your safety</p>
            </div>
          </div>
        </div>
       </div>
