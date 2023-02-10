import { React, useState } from "react";
import ".././styles/cart.css";
import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TableRow, Stack, Divider } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getOrders } from "./../../service/order";
import { useEffect } from "react";

const columns = [
  { id: "product_name", label: "Product Name", minWidth: 170 },
  { id: "quantity", label: "Quantity", minWidth: 70 },
  { id: "price", label: "Price", minWidth: 70 },
  { id: "total", label: "Total", minWidth: 70 },
  { id: "actions", label: "", maxWidth: 20 },
];

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const shipping = 5;
  let sum = 0;
  orders.forEach((ord) => {
    sum += Number(ord.total_price);
    return sum;
  });

  // get all order:
  const orderList = async () => {
    const data = await getOrders();
    setOrders(data);
    setLoading(true);
    console.log("Get all order: ", data);
  };

  // --- useEffect:
  useEffect(() => {
    orderList();
  }, []);
  return (
    <div className="container ">
      <div className="row pt-5">
        <div className="col-md-9 pt-5">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          width: "auto",
                          color: "white",
                          backgroundColor: "#262626",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {orders.map((product) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {product.productName}{" "}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {product.quantity}{" "}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        ${parseFloat(product.price).toFixed(2)}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        ${parseFloat(product.total_price).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <DeleteIcon sx={{ color: "red" }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>

        <div className="col-md-3 pt-5">
          <Card sx={{ maxWidth: 345, backgroundColor: "#FBE7C6" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#0081C9" }}
              >
                Order Summary
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Subtotal</Typography>
                <Typography>${parseFloat(sum).toFixed(2)}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Shipping</Typography>
                <Typography>${parseFloat(shipping).toFixed(2)}</Typography>
              </Stack>
              <Divider
                sx={{
                  bgcolor: "grey",
                  borderBottomWidth: 3,
                  marginBottom: 1,
                  marginTop: 5,
                }}
              />
              <Stack direction="row" justifyContent="space-between">
                <Typography>Total</Typography>
                <Typography>${sum + shipping}</Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <Link to="/placeOrder" sx={{ color: "white" }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ height: 45, maxWidth: "full" }}
                >
                  Checkout
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>

        {/* <div className="col-lg-4 checkout-bg ">
          <div className="card position-sticky top-0">
            <div className="p-3 checkout">
              <h6 className="card-title mb-3">Order Summary</h6>
              <div className="d-flex justify-content-between mb-1 small">
                <span>Subtotal</span> <span>${x}</span>
              </div>
              <div className="d-flex justify-content-between mb-1 small">
                <span>Shipping</span>{" "}
                <span>${parseFloat(shipping).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4 small">
                <span>TOTAL</span>{" "}
                <strong className="text-dark">${parseFloat(x + shipping).toFixed(2)}</strong>
              </div>

              <Link to="/placeOrder" className="btn  w-100 mt-2">
                Check Out
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
