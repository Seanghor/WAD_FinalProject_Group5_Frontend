import React from "react";
import ".././styles/cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
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
            <div className="row align-items-center">
              <div className="col-md-2"></div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="lead fw-normal mb-0">iPad Air</p>
                </div>
              </div>

              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="lead fw-normal mb-0">1</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="lead fw-normal mb-0">$799</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 checkout-bg ">
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
