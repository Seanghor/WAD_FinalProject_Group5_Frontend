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
    <div className="container-fluid" id="parent">
      <div id="child">
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
        {/* Container Section Start */}
        <section className="bg-color">
          <div className="">
            <div className="row justify-content-center">
              <Cards 
                img={Bin} 
                name="Bin"
                newPrice="30.00"
                oldPrice="25.00"
                desc="Moving into a new house or buying your first home??Kit out your kitchen with this kitchen utensils list containing 46 of the most essential items!"
              />
              <Cards 
                img={CuttingBoard} 
                name="Cutting Board"
                newPrice="8.00"
                oldPrice="15.00"
                desc="Moving into a new house or buying your first home??Kit out your kitchen with this kitchen utensils list containing 46 of the most essential items!"
              />
              <Cards 
                img={Pan2} 
                name="Mit"
                newPrice="10.00"
                oldPrice="15.00"
                desc="Moving into a new house or buying your first home??Kit out your kitchen with this kitchen utensils list containing 46 of the most essential items!"
              />
            </div>

            {/* Top Picks For You Start */}
            <div className="title">
              <h2>
                <span>Top Picks For You</span>
              </h2>
              <p>
                Find a bright ideal to suit your taste with our great selection
                of suspension, florr and table lights.
              </p>
            </div>
            {/* Top Picks For You End */}

            {/* Product Card Start */}
            <Grid className="row">
              <ProductCard
                img={Pan}
                name="Pan"
                newPrice="10.00"
                oldPrice="15.00"
                discount=" 15"
                desc="Moving into a new house or buying your first home??Kit out your kitchen with this kitchen utensils list containing 46 of the most essential items!"
              />
              <ProductCard
                img={Bowl}
                name="Bowl"
                newPrice="4.00"
                oldPrice="9.00"
                discount=" 15"
                desc="Moving into a new house or buying your first home??Kit out your kitchen with this kitchen utensils list containing 46 of the most essential items!"
              />
              <ProductCard
                img={Microwave}
                name="Microwave"
                newPrice="81.00"
                oldPrice="89.00"
                discount=" 15"
                desc="Moving into a new house or buying your first home??Kit out your kitchen with this kitchen utensils list containing 46 of the most essential items!"
              />
              <ProductCard
                img={Pot}
                name="Pot"
                newPrice="15.00"
                oldPrice="19.00"
                discount=" 15"
                desc="Moving into a new house or buying your first home??Kit out your kitchen with this kitchen utensils list containing 46 of the most essential items!"
              />
            </Grid>
            {/* Product Card End */}
          </div>
        </section>{" "}
        {/* Container Section End */}
      </div>
    </div>
  );
};

export default Home;
