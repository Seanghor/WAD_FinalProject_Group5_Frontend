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
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reproduct, setReproduct] = useState([]);

  // fect: get product by Id
  const getSingleProduct = async () => {
    const res = await client.get(`/product/${id}`);
    if (res.status !== 200) {
      throw new Error("Failed to get product ...");
    }
    const data = await res.data.product;

    setLoading(false);
    setProduct(data);


    console.log("Get success ...: ", res.data.product);
    console.log("Get Name ...: ", res.data.product.name);
    return;
  };

  // getCateGory:
  const allproductsOfCategory = async () => {
    const cateId = await product.category_id;
    const res = await getCategory(+cateId);
    const data = await res.Product;
    setReproduct(data);
    console.log("Related :", data);
  };
  useEffect(() => {
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
                  <img id="main-image" src={product.profile} width="250" />{" "}
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
                  <div className="price d-flex flex-row align-items-center">
                    {" "}
                    <span className="act-price">
                      {" "}
                      {product?.discount_active == true &&
                      product?.discount_percent != 0 ? (
                        <h4 className="dis-price">
                          {" "}
                          ${product.discount_price}
                        </h4>
                      ) : null}
                    </span>
                    <div className="ml-2">
                      {" "}

                      <small id="discountPrice">${product.price}</small>{" "}

                      {product?.discount_active == true &&
                      product?.discount_percent != 0 ? (
                        <span >{product.discount_percent}% OFF</span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="cart  align-items-center">
                  <button className="btn btn-danger text-uppercase ">
                    <Link to="/cart">Add to cart</Link>
                  </button>
                </div>
                <h5 className=" mt-5">Product Details</h5>
                <p className="about">
                  Anodized to absorb, distribute and transfer heat evenly and
                  efficiently, these two frying pans sautée mushrooms, fry eggs,
                  caramelize onions and bake frittatas. Ergonomic handles
                  provide a sturdy grip as you stir and flip. Oven-safe for
                  versatility.
                </p>
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
            <RelatededProductCard {...product} classNameName="product-card" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
