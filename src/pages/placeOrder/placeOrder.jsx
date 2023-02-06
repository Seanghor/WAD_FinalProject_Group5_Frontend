import React from "react";
import ".././styles/placeOrder.css";
const placeOrder = () => {
  return (
    <div className="container">
      
      <div className="row">
        {/* Left Side */}
        <div className="col-md-6">
          <h1>Billing details</h1>
          {/* First Name Last name */}
          <form action="#">
            <div className="row">
              <div className="col-md-4 name">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="firstname"
                />
              </div>
              <div className="col-md-4 name">
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="lastname"
                />
              </div>
            </div>
            {/* Company Name */}
            <div className="information">
              <div className="form-group company_name">
                <label htmlFor="company">Company Name (optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
              <div className="street form-group">
                <label htmlFor="street">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phnom Penh "
                />
              </div>
              <div className="town form-group">
                <label htmlFor="town">Town / City </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City Name"
                />
              </div>
              <div className="province form-group">
                <label htmlFor="province">Province</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Province Name"
                />
              </div>
              <div className="zipCode form-group">
                <label htmlFor="zip">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="####"
                />
              </div>
              <div className="phone form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group email">
                <label htmlFor="inputEmail">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="addMore form-group">
                <label htmlFor="add-More"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add more infomation"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-6 placeOder">
          <div className="row order">
            <div className="col">
              <h1>product</h1>
              <p>Coca</p>
              <p>Subtotal</p>
              <h2 className="total">Total</h2>
            </div>
            <div className="col">
              <h1>Subtotal</h1>
              <p>70.00$</p>
              <p>70.00$</p>
              <h2 className="total">70.00$</h2>
            </div>
          </div>
          <hr />
          <div className="description">
            <ul className="describe">
              <li>
                <p>
                  <strong>Direct Bank Transfer</strong>{" "}
                </p>
              </li>
            </ul>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <ul type="circle">
              <li>Direct Bank Transfer</li>
              <li>Cash On Delivery</li>
            </ul>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="checkout-btb">
            <button type="submit">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default placeOrder;
