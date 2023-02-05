import { React, useRef, useState, useEffect } from "react";
import "../.././pages/styles/shop.css";
import Slider from "@mui/material/Slider";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

import { getAllCategoryIncludeProduct } from "../../service/product";
import { getProducts } from "./../../service/product";
import { getAllCategory } from "../../service/category";

const Products = () => {
  const categoriesList = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState(data);
  const [product, setaProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let componentMounted = true;

  useEffect(() => {
    const allCategory = async () => {
      await getAllCategory()
        .then((response) => response.allProductCategory)
        .then((res) => {
          setTimeout(() => {
            setLoading(false);
            setCategoryList(res);
          }, 2000);
        });
    };
    const allProducts = async () => {
      await getProducts()
        .then((response) => response.products)
        .then((res) => {
          setTimeout(() => {
            setLoading(false);
            setaProduct(res);
          }, 2000);
        });
    };
    allCategory();
    allProducts();
  }, []);
  console.log("Category Test:", categoryList);
  console.log("Product Test: ", product);

  // Loading Process
  const Loading = () => {
    return (
      <div>
        <div className="col-sm-4 py-2">
          <Skeleton height={350} />
        </div>
        <div className="col-sm-4 py-2">
          <Skeleton height={350} />
        </div>
        <div className="col-sm-4 py-2">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const filterProdcut = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const SelectCategory = () => {
    return <div>dssd</div>;
  };
  // Show Product Process
  const ShowProducts = () => {
    return (
      <div>
        {!loading ? (
          <div>
            {product.map((product, j) => {
              return (
                <div key={j} value={product.id}>
                  <div className="col-sm-4 py-2">
                    <div className="card h-100 text-center p-4">
                      <div className="card-main">
                        <div className="">
                          <img
                            src={product.profile}
                            alt=""
                            className="card-img-top"
                            height="250px"
                          />
                        </div>
                        <div classnameave="cart-line"></div>
                      </div>

                      <div className="content">
                        <h6 id="productTitle" className="card-title mb-0">
                          {product.name}
                        </h6>
                        <div className="rating">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <p>
                          <span className="money">
                            $ {product.discount_price}
                          </span>
                          <span className="price-old">$ {product.price}</span>
                        </p>
                        <NavLink
                          to={`/products/${product.id}`}
                          className="btn btn-outline-dark"
                        >
                          Buy Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>loading....!</p>
        )}
      </div>
    );
  };

  // show list of category at the lefe side:
  const ShowCategory = () => {
    return (
      <div>
        {categoryList.map((el, i) => (
          <div className="categorylist" key={i}>
            <li className="col-2 link" onClick={() => setFilter(data)}>
              {el.name}
            </li>
          </div>
        ))}
      </div>
    );
  };

  // --------- Big Return
  return (
    <div>
      <section className="bg-color p-5">
        {/* Filter Row And Search bar Start */}
        <div className="d-flex">
          <div className="p-2 flex-fill">
            <div className="filter" id="Filter">
              <div className="filterIcon">
                <i className="bi bi-filter"></i> <span>Filter</span>
              </div>
              <div className="vl"></div>
              <span>Show 1-16 of 32 results</span>
            </div>
          </div>
          <div className="p-2 flex-fill">
            {/* Search bar Start */}
            <div className="col-md-5 mx-auto pt-4">
              <form className="d-flex flex-row position-relative">
                <input
                  type="search"
                  className="form-control"
                  id="example-search-input"
                />
                <button
                  className="btn border-0 position-absolute end-0 "
                  type="submit"
                >
                  <i className="bi bi-search" style={{ color: "blue" }}></i>
                </button>
              </form>
            </div>
            {/* Search bar End */}
          </div>
        </div>
        {/* Filter Row And Search bar End */}

        {/* Category & Product Card Start */}
        <div className="row">
          {/* Left Sidee */}
          <div className="col-12 col-sm-3">
            <div className="filter">
              {/* Category List Start */}
              <div className="Category">
                <h3>Categories</h3>
                <div className="categorylist">
                  <ShowCategory />
                </div>
              </div>
              {/* Category List End */}
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-sm-9">
            {/* Card Start */}
            <div className="row">
              <ShowProducts />
            </div>

            {/* Pagination Start */}

            {/* Pagination End */}
          </div>
        </div>

        {/* Category & Product Card End */}

        <div className="d-flex ServiceDetail" id="service">
          <div className="p-2 flex-fill">
            <h1>Free Delivery</h1>
            <h5>For all orders over $50$, consectetur adipiscing elit </h5>
          </div>
          <div className="p-2 flex-fill">
            <h1>90 Days Return</h1>
            <h5>If goods have problems, consectetur adipiscing elit</h5>
          </div>
          <div className="p-2 flex-fill">
            <h1>Secure Payment</h1>
            <h5>100% Secure payment, consectetur adipiscing elit</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
