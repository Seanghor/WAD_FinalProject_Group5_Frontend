import {React, useState} from "react";
import ".././styles/cart.css";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import {TableRow,Stack,Divider} from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const columns = [
  { id: "product_name", label: "Product Name", minWidth: 170 },
  { id: "quantity", label: "Quantity", minWidth: 70 },
  { id: "price", label: "Price", minWidth: 70 },
  { id: "total", label: "Total", minWidth: 70 },
  { id: "actions", label: "", maxWidth: 20 },
];

const Cart = () => {
  return (
    <div className="container ">
      <div className="row pt-5">
        <div className="col-md-9 pt-5">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 100 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                {columns.map((column) => (
                  <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: "auto", color: "white",backgroundColor:'#262626',}}
                  >
                  {column.label}
                  </TableCell>
                ))}
                </TableRow>
              </TableHead>
              <TableBody> 
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">Gas </TableCell>
                  <TableCell component="th" scope="row">$ 100 </TableCell>
                  <TableCell component="th" scope="row">5</TableCell>
                  <TableCell component="th" scope="row">$ 500</TableCell>
                  <TableCell>
                    <DeleteIcon sx={{color: "red"}} />
                  </TableCell>     
                  </TableRow>            
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>

        <div className="col-md-3 pt-5">
          <Card sx={{ maxWidth: 345 , backgroundColor: "#FBE7C6"}}>
            <CardContent >
              <Typography gutterBottom variant="h5" component="div" sx={{color: "#0081C9"}}>
                Order Summary
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Subtotal</Typography>
                <Typography>$ 214.50</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Shipping</Typography>
                <Typography>$ 20.00</Typography>
              </Stack>
              <Divider sx={{ bgcolor: "grey",borderBottomWidth: 3, marginBottom: 1,marginTop: 5}}/>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Total</Typography>
                <Typography>$ 224.00</Typography>
              </Stack>
             
            </CardContent>
            <CardActions>
              
                <Link to="/placeOrder" sx={{color: "white"}}>
                  <Button size="small" variant="contained" sx={{height: 45, maxWidth: "full", }}>
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
                <span>Subtotal</span> <span>$214.50</span>
              </div>
              <div className="d-flex justify-content-between mb-1 small">
                <span>Shipping</span> <span>$20.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4 small">
                <span>TOTAL</span> <strong className="text-dark">$224.50</strong>
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
