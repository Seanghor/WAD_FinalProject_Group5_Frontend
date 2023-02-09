import { React, useState, useEffect } from "react";
import "../.././pages/styles/shop.css";
import { NavLink } from "react-router-dom";
import { CDropdown } from "@coreui/react";
import { CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import { getProducts } from "./../../service/product";
import { getAllCategory } from "../../service/category";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import TextField from '@mui/material/TextField';
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import {  getProfile, isAuth } from "../../service/auth";
import SearchIcon from '@mui/icons-material/Search';


// import Skeleton ,{ SkeletonTheme }from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import { getOrders } from './../../service/order';
import { userInfo } from './../../service/auth';


const Products = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState(data);
  const [product, setaProduct] = useState([]);
  const [id2, setId] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  // testing
  const test = async() => {
    const data = await userInfo()
    console.log("Testing : ", data);
  }

  // just checke role user now
  const isCustomer = async () => {
    const isCustomer = await isAuth();
    setCustomer(isCustomer);
  };
  console.log("isCustomer : ", customer);

  // fect: get all product
  const allProducts = async () => {
    await getProducts()
      .then((response) => response.products)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setaProduct(res);
        });
      });
  };

  // fect: get all Category:
  const allCategory = async () => {
    await getAllCategory()
      .then((response) => response.allProductCategory)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setData(res);
          setCategoryList(res);
        });
      });
  };

  // --- useEffect:
  useEffect(() => {
    test()
    isCustomer()
    allProducts();
    allCategory();
  }, []);
  // console.log("Category Test:", categoryList);
  console.log("Product Test: ", product);

  // Loading Process
  const Loading = () => {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3 py-2">
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" height={100} />
              <Skeleton />
              <Skeleton width="60%" height={100} />
            </Box>
          </div>
          <div className="col-sm-3 py-2">
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" height={100} />
              <Skeleton />
              <Skeleton width="60%" height={100} />
            </Box>
          </div>
          <div className="col-sm-3 py-2">
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" height={100} />
              <Skeleton />
              <Skeleton width="60%" height={100} />
            </Box>
          </div>
          <div className="col-sm-3 py-2">
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" height={100} />
              <Skeleton />
              <Skeleton width="60%" height={100} />
            </Box>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 py-2">
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" height={100} />
              <Skeleton />
              <Skeleton width="60%" height={100} />
            </Box>
          </div>
          <div className="col-sm-3 py-2">
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" height={100} />
              <Skeleton />
              <Skeleton width="60%" height={100} />
            </Box>
          </div>
          <div className="col-sm-3 py-2">
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" height={100} />
              <Skeleton />
              <Skeleton width="60%" height={100} />
            </Box>
          </div>
          <div className="col-sm-3 py-2">
            <Box sx={{ pt: 1 }}>
              <Skeleton />
              <Skeleton width="60%" height={100} />
              <Skeleton />
              <Skeleton width="60%" height={100} />
            </Box>
          </div>
        </div>
      </div>
    );
  };

  const filterProdcut = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const onClickCategory = async (id) => {
    const dataC = await categoryList.find((cate) => {
      return cate.id === id;
    });
    setCategory(true);
    setData(dataC);
    console.log("Category:", data.Product);
    return;
  };

  const SelectCategory = () => {
    return (
      <CDropdown className="cate">
        <CDropdownToggle className="p-2 mb-2 bg-white text-dark">
          <i className="bi bi-filter"></i> Category
        </CDropdownToggle>
        <CDropdownMenu className="manu">
          {!loading ? (
            <div>
              {categoryList.map((el, i) => (
                <CDropdownItem href="#" className="categorylist" key={i}>
                  <div onClick={() => onClickCategory(el.id)}> {el.name}</div>
                </CDropdownItem>
              ))}
            </div>
          ) : (
            <p>loading....!</p>
          )}
        </CDropdownMenu>
      </CDropdown>
    );
  };

  // Show Product Process
  const ShowProducts = () => {
    return (
      <>
        {!category ? (
          <>
            <div className="row text-center">
              <h2>All Products</h2>
            </div>
            {product.map((product, j) => (
              <div key={j} value={product.id} className="col-sm-3 py-2">
                <Card sx={{ maxWidth: 345 }} style={{ height: 480 }}>
                  <CardActionArea>
                    <CardMedia
                      style={{
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        padding: 3,
                      }}
                      component="img"
                      height="260"
                      image={product.profile}
                      alt="green iguana"
                    />
                    <CardContent style={{ paddingLeft: 20 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ fontWeight: "bold" }}
                      >
                        {product.name}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={product.rating}
                        readOnly
                      />
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
                              style={{ textDecoration: "line-through" }}
                            >
                              ${product.price}
                            </Typography>
                          ) : null}
                        </Stack>

                        <Stack style={{}}>
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
                    </CardContent>
                    <CardActions style={{ paddingLeft: 20 }}>
                      <Button
                        className="card4"
                        variant="outlined"
                        color="primary"
                        sx={{ width: 120, height: 40, padding: 1, margin: 0 }}
                      >
                        {customer ? (
                          <NavLink to={`/product/${product.id}`}></NavLink>
                        ) : null}
                        <NavLink to={`/product/${product.id}`}>
                          Add To Cart
                        </NavLink>
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </>
        ) : (
          <>
            {" "}
            <div className="row text-center">
              <h2>{data.name}</h2>
            </div>
            {data.Product.map((product, j) => (
              <div key={j} value={product.id} className="col-sm-3 py-2">
                <Card sx={{ maxWidth: 345 }} style={{ height: 480 }}>
                  <CardActionArea>
                    <CardMedia
                      style={{
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        padding: 3,
                      }}
                      component="img"
                      height="260"
                      image={product.profile}
                      alt="green iguana"
                    />
                    <CardContent style={{ paddingLeft: 20 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ fontWeight: "bold" }}
                      >
                        {product.name}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={product.rating}
                        readOnly
                      />
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
                              style={{ textDecoration: "line-through" }}
                            >
                              ${product.price}
                            </Typography>
                          ) : null}
                        </Stack>

                        <Stack style={{}}>
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
                    </CardContent>
                    <CardActions style={{ paddingLeft: 20 }}>
                      <Button
                        className="card4"
                        variant="outlined"
                        color="primary"
                        sx={{ width: 120, height: 40, padding: 1, margin: 0 }}
                      >
                        <NavLink to={`/product/${product.id}`}>
                          Add To Cart
                        </NavLink>
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </>
        )}
      </>
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
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button
                  variant="contained"
                  className="btn"
                  type="submit"
                  style={{width: 30, marginLeft:30, borderRadius: 50}}
                >
                  <SearchIcon />
                </Button>

               
              </form>
            </div>
            {/* Search bar End */}
          </div>
        </div>
        {/* Filter Row And Search bar End */}

        {/* Category & Product Card Start */}
        <div className="row">
          {/* Left Sidee */}
          <div className="col-12 col-sm-2">
            <div className="filter">
              {/* Category List Start */}
              <div className="Category">
                <h3>Categories</h3>
                <div className="categorylist">
                  <SelectCategory />
                </div>
              </div>
              {/* Category List End */}
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-sm-10">
            {/* Card Start */}
            <div className="row">
              {/* <ShowProducts /> */}
              {loading ? <Loading /> : <ShowProducts />}
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
