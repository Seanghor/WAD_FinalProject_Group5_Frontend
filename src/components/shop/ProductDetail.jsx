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
import { Stack, Typography, Button, Rating, CardActions } from "@mui/material/";
import { userInfo } from "../../service/auth";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";


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
  // const isCustomer = !!localStorage.getItem("accessToken");

  // check customer infor
  const infoOfCustomer = async () => {
    const data = await userInfo();
    const profileData = await data.profile;
    setCustomerInfor(profileData);
    setCustomerId(profileData.customerId);
    setQuantity(Number(1));
    setproductId(Number(id));
  };


  // fect: get product by Id
  const getSingleProduct = async () => {
    // const res = await client.get(`/product/${id}`);
    // if (res.status !== 200) {
    //   throw new Error("Failed to get product ...");
    // }
    // const data = await res.data.product;
    // setLoading(false);
    // setProduct(data);
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
    getSingleProduct();
    infoOfCustomer();
    allproductsOfCategory();
  });

  const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div className="images ">
                <img src={product.profile} alt="" />
              </div>
            </div>
            {/* Product Detail Start */}
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
                      {product.discount_active === true ? (
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

                      {product.discount_percent !== 0 &&
                      product.discount_active === true ? (
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
                  <Stack direction="column" gap={6}>
                    <Stack direction="row" alignItems="center" gap={4}>
                      <Button
                        size="smaller"
                        style={{ width: 4, height: 35 }}
                        variant="contained"
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <Typography
                        variant="body2"
                        style={{ fontWeight: "600", fontSize: 20 }}
                      >
                        5
                      </Typography>
                      <Button
                        size="small"
                        style={{ width: 1, height: 35 }}
                        variant="contained"
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </Stack>

                    <Stack>
                      <Link to="/cart">
                        <Button
                          size="small"
                          style={{ width: 130, height: 45 }}
                          variant="contained"
                        >
                          Add to cart
                        </Button>
                      </Link>
                    </Stack>
                  </Stack>
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
            {/* Product Detail End */}
          </div>
        </div>

        <div className="row text-center ">
          <h2 style={{ color: "blue" }}>Related Product</h2>
        </div>
      </div>

      {/* Horizontal Scroll Start */}
      <div className="horizontal-scroll">
        <div className="buttons">
          <KeyboardDoubleArrowLeftIcon
            className="scroll"
            onClick={() => {
              sideScroll(product.current, 25, 100, -270);
            }}
          />
          <KeyboardDoubleArrowRightIcon
            className="scroll"
            onClick={() => {
              sideScroll(product.current, 25, 100, 270);
            }}
          />
        </div>

        <div className="product-list" ref={product}>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ height: 530 }}
            className="card4 card5"
          >
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
                <Rating name="read-only" value={product.rating} readOnly />
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
                  <Link to={`/cart`}>Add To Cart</Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345 }}
            style={{ height: 530 }}
            className="card4 card5"
          >
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
                <Rating name="read-only" value={product.rating} readOnly />
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
                  <Link to={`/cart`}>Add To Cart</Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345 }}
            style={{ height: 530 }}
            className="card4 card5"
          >
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
                <Rating name="read-only" value={product.rating} readOnly />
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
                  <Link to={`/product/${product.id}`}>Add To Cart</Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345 }}
            style={{ height: 530 }}
            className="card4 card5"
          >
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
                <Rating name="read-only" value={product.rating} readOnly />
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
                  <Link to={`/product/${product.id}`}>Add To Cart</Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345 }}
            style={{ height: 530 }}
            className="card4 card5"
          >
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
                <Rating name="read-only" value={product.rating} readOnly />
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
                  <Link to={`/product/${product.id}`}>Add To Cart</Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>

          <Card
            sx={{ maxWidth: 345 }}
            style={{ height: 530 }}
            className="card4 card5"
          >
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
                <Rating name="read-only" value={product.rating} readOnly />
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
                  <Link to={`/product/${product.id}`}>Add To Cart</Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </div>
      </div>

      {/* Horizontal Scroll End */}
    </div>
  );
};

export default ProductDetail;
