import { React } from "react";
import Products from "../../components/shop/Products";
import ".././styles/shop.css";
const Shop = () => {
  return (
    <div>
      <div className=" " id="container1">
        <div className="" id="container2">
          {/* Shop Container Start */}
          <div className="smallContainer">
            <img
              src="https://media.istockphoto.com/id/1071414426/photo/wooden-tabletop-over-defocused-kitchen-background.jpg?s=612x612&w=0&k=20&c=Ml9hyox3LoPw9KZsx-12OdZv-nkCsBwxu9fpGmS-V5c="
              alt=""
              className="shopimg"
            />
            <div className="centered">
              <h1>Shop</h1>
              <h4>Home {">"} Shop</h4>
            </div>
          </div>

          {/* Shop Container End */}

          {/* Container Section Start */}
          <Products />
          {/* Container Section End */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
