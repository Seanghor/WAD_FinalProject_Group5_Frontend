import React from "react";
import "../../pages/styles/product-detail.css";
import arrow from "../.././assets/image/arrow.png";
import RelatededProductCard from "./RelatededProductCard";
import { useState } from "react";
import { useParams } from "react-router";
import { getSingleProduct } from "../../service/product";
import { client } from "../../utils/http";
import { useEffect } from "react";
import { getCategory } from "../../service/category";
import { isAuth } from "../../service/auth";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material/";
import { userInfo } from "../../service/auth";
import { createOrders } from "./../../service/order";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reproduct, setReproduct] = useState([]);
  const [customerInfo, setCustomerInfor] = useState([]);
  const [productId, setproductId] = useState(Number);
  const [customerId, setCustomerId] = useState(Number);
  const [quantity, setQuantity] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  // check accessToekn:
  const isCustomer = !!localStorage.getItem("accessToken");

  // check customer infor
  const infoOfCustomer = async () => {
    const data = await userInfo();
    const profileData = await data.profile;
    setCustomerInfor(profileData);
    setCustomerId(profileData.customerId);
    setQuantity(Number(1));
    setproductId(Number(id));
  };
  // setIsAuth(isCustomer)
  const onClickCustomer = async () => {
    if (isCustomer) {
      console.log("customerId : ", customerInfo.customerId);
      console.log("productId : ", id);
      console.log("quantity : ", quantity);
      await createOrders({ productId, quantity, customerId });
    }
  };

  // fect: get product by Id
  const getSingleProduct = async () => {
    const res = await client.get(`/product/${id}`);
    if (res.status !== 200) {
      throw new Error("Failed to get product ...");
    }
    const data = await res.data.product;
    setLoading(false);
    setProduct(data);
    return;
  };

  // getCateGory:
  const allproductsOfCategory = async () => {
    const cateId = await product.category_id;
    console.log("CategoryId : ", cateId);
    const res = await getCategory(+cateId);
    const data = await res.Product;
    setReproduct(data);
  };
  // console.log("Related :", reproduct);

  useEffect(() => {
    // onClickCustomer()
    infoOfCustomer();
    getSingleProduct();
    allproductsOfCategory();
  }, []);
  const productContainers = [
    ...document.querySelectorAll(".product-container"),
  ];
  const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
  const preBtn = [...document.querySelectorAll(".pre-btn")];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div className="images p-3">
                <div className="text-center p-4">
                  {" "}
                  <img
                    id="main-image"
                    src={ product.profile}
                    width="250"
                  />{" "}
                </div>
                <div className="thumbnail text-center">
                  {" "}
                  <img
                    onclick="change_image(this)"
                    src="https://i.imgur.com/Rx7uKd0.jpg"
                    width="70"
                  />{" "}
                  <img
                    onclick="change_image(this)"
                    src="https://i.imgur.com/Dhebu4F.jpg"
                    width="70"
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product ">
                <div className="mb-3">
                  <h5 className="text-uppercase">{product.name}</h5>
                  <Stack direction="row" justifyContent={"space-between"}>
                    <Stack direction={"row"}>
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: "bold",
                          marginRight: 10,
                          color: "#111",
                        }}
                      >
                        ${product.discount_price}
                      </Typography>
                      {product.discount_active == true ? (
                        <Typography
                          gutterBottom
                          variant="h6"
                          marginTop={1}
                          color="text.secondary"
                          style={{
                            textDecoration: "line-through",
                            marginRight: 35,
                          }}
                        >
                          ${product.price}
                        </Typography>
                      ) : null}

                      {product.discount_percent != 0 &&
                      product.discount_active == true ? (
                        <Typography
                          gutterBottom
                          variant="h6"
                          marginTop={1}
                          component="div"
                          style={{ color: "red" }}
                        >
                          {product.discount_percent}%off
                        </Typography>
                      ) : null}
                    </Stack>
                  </Stack>
                </div>
                <div className="cart  align-items-center">

                  <button
                    className="btn btn-danger text-uppercase "
                    onClick={() => onClickCustomer()}
                  >
                    {isCustomer ? (
                      <Link to="/cart">Add to cart</Link>
                    ) : (
                      <Link to="/signin">Add to cart</Link>
                    )}
                  </button>
                </div>
                <h5 className=" mt-5">Product Details</h5>
                <h5 className="about">
                  Anodized to absorb, distribute and transfer heat evenly and
                  efficiently, these two frying pans sautée mushrooms, fry eggs,
                  caramelize onions and bake frittatas. Ergonomic handles
                  provide a sturdy grip as you stir and flip. Oven-safe for
                  versatility.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="re-product ">
          <h2 className="text">Related Product</h2>
        </div>
      </div>
      <section className="product-slider">
        <button className="pre-btn">
          <img src={arrow} alt="" />
        </button>
        <button className="nxt-btn">
          <img src={arrow} alt="" />
        </button>
        <div classNameName="product-container">
          {" "}
          {reproduct.map((product, index) => (
           <div key={index}>dadasda</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
