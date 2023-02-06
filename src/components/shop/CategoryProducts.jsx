import { React, useRef, useState, useEffect } from "react";
import "../.././pages/styles/shop.css";
import { getProducts } from "../../service/product";
import { getAllCategory } from "../../service/category";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";


export const CategoryProducts = (data) => {
   
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState(data);
  const [product, setaProduct] = useState([]);


  useEffect(() => {
    const allProducts = async () => {
      await getProducts()
        .then((response) => response.products)
        .then((res) => {
          setTimeout(() => {
            setLoading(false);
            setaProduct(res);
            product = data
          }, 2000);
        });
    };
    allProducts();

    const allCategory = async () => {
      await getAllCategory()
        .then((response) => response.allProductCategory)
        .then((res) => {
          setTimeout(() => {
            setLoading(false);
            setData(res);
            setCategoryList(res);
          }, 2000);
        });
    };
    allCategory();
  }, []);

  return (
    <div>
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
                <Rating name="read-only" value={product.rating} readOnly />
                <Typography display="flex">
                  <Typography
                    variant="h4"
                    marginRight={3}
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    $ {product.price}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    marginRight={3}
                    marginTop={1}
                    component="div"
                    color="text.secondary"
                    style={{ textDecoration: "line-through" }}
                  >
                    ${product.price - product.discount_price}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    marginTop={1}
                    component="div"
                    style={{ color: "green" }}
                  >
                    {product.discount_percent}% off
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions style={{ paddingLeft: 20 }}>
                <button variant="outlined" color="primary">
                  Add to cart
                </button>
              </CardActions>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
};
