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
import { useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../utils/http";
import { useEffect } from "react";
const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const arr = [];
  const allProd = [];

  // fect data get product by Id
  const getSingleProduct = async (id) => {
    const res = await client.get(`/product/${id}`);
    if (res.status !== 200) {
      throw new Error("Failed to get product ...");
    }
    const data = await res.data.product;
    allProd.push(data);
    console.log(allProd);
    setLoading(false);

    return;
  };

  console.log("All Data : ", product);
  allProd.push();
  useEffect(() => {
    getSingleProduct(1);
    getSingleProduct(2);
    getSingleProduct(3);
  }, []);

  return (
    <div className="container-fluid">
      <div>
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
                  Anodized to absorb, distribute and transfer heat evenly and
                  efficiently, these two frying pans sautée mushrooms, fry eggs,
                  caramelize onions and bake frittatas.
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
                <i className="bi bi-airplane iCon"></i>
              </div>

              <div className="col Info">
                <h3>Free Delivery</h3>
                <p>On all order above $99</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row">
              <div className="col-sm-1 m-3">
                <i className="bi bi-wallet2 iCon"></i>
              </div>

              <div className="col Info">
                <h3>Secure Payment</h3>
                <p>100% Secure Payment</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row">
              <div className="col-sm-1 m-3">
                <i className="bi bi-clipboard-check iCon"></i>
              </div>

              <div className="col Info">
                <h3>Join Risk Free</h3>
                <p>30 days return policy</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row">
              <div className="col-sm-1 m-3">
                <i className="bi bi-truck iCon"></i>
              </div>

              <div className="col Info">
                <h3>Contact Delivery</h3>
                <p>We alwarys ensure your safety</p>
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

            <div className="row p-5">
              <div className="col-md-6 text-start">
                <p>ABOUT THE BRAND</p>
                <h2>Hestan</h2>
                <div className="col-md-5">
                  <p>
                    Hestan founder Stanley Cheng pioneered hard-anodized
                    aluminum cookware in the 1970s the breakthrough that ushered
                    in nonstick cookware. Hestan Culinary is born form Hestan's
                    longstanding culture of culinary innovation.
                  </p>
                </div>
              </div>
              <div className="col-md-6 ">
                <img
                  src="https://cdn.accentuate.io/hestan/1661133351905/Cangshan-Hestan-Probond-web-1-1700x900.png?v=1661133351905"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>{" "}
        {/* Container Section End */}
      </div>
    </div>
  );
};

export default Home;
