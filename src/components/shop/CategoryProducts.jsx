import { React, useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../.././pages/styles/shop.css";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { CDropdown } from "@coreui/react";
import { CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { getProducts } from "./../../service/product";
import { getAllCategory } from "../../service/category";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { getCategory } from "./../../service/category";

export const CategoryProducts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState(data);
  const [product, setaProduct] = useState([]);
  const [isCategory, setIsCategory] = useState(false);

  // Fect data Product:
  const allProducts = async (data) => {
    await getProducts()
      .then((response) => response.products)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setaProduct(res);
        }, 2000);
      });
  };

  // Fect data Category
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

  // UseEffect
  useEffect(() => {
    allProducts();
    allCategory();
  }, []);
  return (
   <div><h1>Category Product</h1></div>
  );
};
