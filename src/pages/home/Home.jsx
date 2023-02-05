import React from "react";
import Pan from "../.././assets/image/pan/pan5-removebg.png";
import Bowl from "../.././assets/image/bowl/bowl2.jpg";
import Microwave from "../.././assets/image/microwave/microwave1.jpg";
import Bin from "../.././assets/image/bin/bin1.jpg";
import Mit from "../.././assets/image/mits/mit1.jpg";
import Pot from "../.././assets/image/pot/pot1.jpg";
import Cards from "../../components/home/Card";
import ".././styles/home.css";
import ProductCard from "../../components/home/ProductCard";
const Home = () => {
  return (
    <div className="container-fluid" id="parent">
      <div id="child">
        <div className="row" id="Bg">
          <div className="col-md-6">
            <div className="card" id="card1">
              <div className="model">
                <h2>New Model</h2>
                <p>
                  <li className="nav-link"> Shop Now</li>
                </p>
                <h5>
                  Anodized to absorb, distribute and transfer
                  <br /> heat evenly and efficiently, these two frying
                  <br /> pans sautée mushrooms, fry eggs, caramelize
                  <br /> onions and bake frittatas.
                </h5>
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
            <div className="row">
              <Cards img={Pan} name="New Product of the year" linkName=">> View More" newPrice="10" oldPrice="15"/>
              <Cards img={Pot} name="New Product of the year" linkName=">> View More" newPrice="10" oldPrice="15"/>
              <Cards img={Microwave} name="New Product of the year" linkName=">> View More" newPrice="10" oldPrice="15"/>
              
            </div>

            <div className="row">
              <Cards img={Bin} name="New Product of the year" linkName=">> View More" newPrice="10" oldPrice="15"/>
              <Cards img={Bowl} name="New Product of the year" linkName=">> View More" newPrice="10" oldPrice="15"/>
              <Cards img={Mit} name="New Product of the year" linkName=">> View More" newPrice="10" oldPrice="15"/>
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
            <div className="row">
              <ProductCard
                img={Pan}
                name="Pan"
                newPrice="10.00"
                oldPrice="15.00"
              />
              <ProductCard
                img={Bowl}
                name="Bowl"
                newPrice="4.00"
                oldPrice="9.00"
              />
              <ProductCard
                img={Microwave}
                name="Microwave"
                newPrice="81.00"
                oldPrice="89.00"
              />
              <ProductCard
                img={Pot}
                name="Pot"
                newPrice="15.00"
                oldPrice="19.00"
              />
            </div>
            {/* Product Card End */}
          </div>
        </section>
        {/* Container Section End */}
      </div>
    </div>
  );
};

export default Home;
