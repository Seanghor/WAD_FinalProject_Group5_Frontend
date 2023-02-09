import React from "react";
import ".././styles/cart.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getOrders } from "./../../service/order";
import { useEffect } from "react";

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const shipping = 0;
  let x = 0;
  orders.forEach((ord) => {
    x += Number(ord.total_price);
    return x;
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
      <div className="row ">
        <div className="col">
          <div className="card ">
            <div className="card-body ">
              <div className="row align-items-center table-item">
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small table-title">Name</p>
                  </div>
                </div>

                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small  table-title">Quantity</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small table-title">Price</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  <div>
                    <p className="small table-title">Total</p>
                  </div>
                </div>
              </div>
            </div>
            {loading ? (
              <div>
                {orders.map((data) => (
                  <div className="row align-items-center">
                    <div className="col-md-2">{data.productName}</div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="lead fw-normal mb-0">
                          {data.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="lead fw-normal mb-0">${parseFloat(data.price).toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="lead fw-normal mb-0">
                          ${parseFloat(data.total_price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h1>Data is loading</h1>
            )}
          </div>
        </div>
        <div className="col-lg-4 checkout-bg ">
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
