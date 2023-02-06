import React from 'react'
import ".././styles/cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  
  return (
    <div class="container h-100">
    <div class="row ">
      <div class="col">
        

        <div class="card ">
          <div class="card-body ">

            <div class="row align-items-center table-item">
             
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small table-title">Name</p>
                  
                </div>
              
              </div>
              
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small  table-title">Quantity</p>
                
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small table-title">Price</p>
                 
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small table-title">Total</p>
                  
                </div>
              </div>
              
            </div>
          
            
              
            </div>
              <div class="row align-items-center">
              <div class="col-md-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                  class="img-fluid" alt="Generic placeholder image" />
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="lead fw-normal mb-0">iPad Air</p>
                </div>
               
              </div>
              
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="lead fw-normal mb-0">1</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  
                  <p class="lead fw-normal mb-0">$799</p>
                </div>
              </div>
          </div>
        </div>


      </div>
      <div class="col-lg-4 checkout-bg ">
        <div class="card position-sticky top-0">
          <div class="p-3 checkout">
            <h6 class="card-title mb-3">Order Summary</h6>
            <div class="d-flex justify-content-between mb-1 small">
              <span>Subtotal</span> <span>$214.50</span>
            </div>
            <div class="d-flex justify-content-between mb-1 small">
              <span>Shipping</span> <span>$20.00</span>
            </div>
            <hr />
            <div class="d-flex justify-content-between mb-4 small">
              <span>TOTAL</span> <strong class="text-dark">$224.50</strong>
            </div>
           
            <Link to="/placeOrder" class="btn  w-100 mt-2" >Check Out</Link>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart