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
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import { deleteOrder } from "./../../service/order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const columns = [
  { id: "product_name", label: "Product Name", minWidth: 170 },
  { id: "quantity", label: "Quantity", minWidth: 70 },
  { id: "price", label: "Price", minWidth: 70 },
  { id: "total", label: "Total", minWidth: 70 },
  { id: "actions", label: "Option", maxWidth: 70 },
];

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const shipping = 1.99;
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

  // handle remove
  const onClickRemove = async (id) => {
    await deleteOrder(id)
      .then((res) => {
        console.log("Res : ", res);
        orderList();
        return toast("Remove Successfull");
        // window.location.reload(false)   //for refresh notification
      })
      .catch((err) => {
        console.error(err);
      });
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
            <TableContainer sx={{}}>
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
                        ${product.price}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        ${product.total_price}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="delete"
                          size="large"
                          style={{ color: "red" }}
                          component="th"
                          scope="row"
                          onClick={() => {
                            onClickRemove(product.id);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <ToastContainer
                          position="top-right"
                          autoClose={100}
                          hideProgressBar={true}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover={false}
                          theme="light"
                        />
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
                {orders.length != 0 ? (
                  <Typography>${parseFloat(shipping).toFixed(2)}</Typography>
                ) : (
                  <Typography>${parseFloat(0).toFixed(2)}</Typography>
                )}
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
                {orders.length != 0 ? (
                  <Typography>
                    ${parseFloat(sum + shipping).toFixed(2)}
                  </Typography>
                ) : (
                  <Typography>${parseFloat(0).toFixed(2)}</Typography>
                )}
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
