import { React, useRef, useState, useEffect } from "react";
import "../.././pages/styles/shop.css";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

import { getAllCategoryIncludeProduct } from "../../service/product";
import { getProducts } from "./../../service/product";
import { getAllCategory } from "../../service/category";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
const Products = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
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

  const handleCategory = () => {

  }
  const SelectCategory = () => {
    return (
      <div>
        {!loading ? (
          <div>
            {categoryList.map((el, i) => (
              <div className="categorylist" key={i}>
                <button style={{}} className="col-2 link" onClick={() => setFilter(data) } >
                  {el.name}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>loading....!</p>
        )}
      </div>
    );
  };
  // Show Product Process
  const ShowProducts = () => {
    return (
      <div>
      {product.map((product, j) => {
        return (
          <div key={j} value={product.id} className="col-sm-3 py-2">
            <Card sx={{ maxWidth: 345 }} style={{height: 480}}>
              <CardActionArea>
                <CardMedia
                  style={{borderBottomRightRadius: 10, borderBottomLeftRadius:10, padding: 3}}
                  component="img"
                  height="260"
                  image="https://media.istockphoto.com/id/1211524213/photo/cup-of-coffee-latte-isolated-on-white-background-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=ZeCBTyCclEFJOGCkcW2EYAHGiQ6woXxviPtS8WAQWaU="
                  alt="green iguana"
                />
                <CardContent style={{paddingLeft: 20}}>
                  <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold"}}>
                    {product.name}
                  </Typography>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography display="flex" >
                    <Typography variant="h4" marginRight={3} component="div" style={{fontWeight: "bold"}}>
                    $ {product.price}
                    </Typography>
                    <Typography gutterBottom variant="h6" marginRight={3} marginTop={1} component="div" color="text.secondary" style={{textDecoration: "line-through"}}>
                    ${product.price - product.discount_price}
                    </Typography>
                    <Typography gutterBottom variant="h6" marginTop={1} component="div" style={{color: "green"}}>
                      {product.discount_percent} % off
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions style={{paddingLeft: 20}}>
                  <Button variant="outlined" color="primary" >Add to cart</Button>  
                </CardActions>
              </CardActionArea>
            </Card>
          </div>
        );
        })}
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
            <div className="row text-center">
            <h2>All Product</h2>
            </div>
              
            {/* Card Start */}
            <div className="row">
              {/* <ShowProducts /> */}
              {
                loading ? <Loading/> : <ShowProducts/>
              }
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
