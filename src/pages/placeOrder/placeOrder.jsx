import React from "react";
import ".././styles/placeOrder.css";
import { useState } from "react";
import { useEffect } from "react";
import { deleteAllOrder, getOrders } from "../../service/order";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button } from "@mui/material";

const PlaceOrder = () => {
  const [username, setUsername] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipe, setZipe] = useState();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  // const [username, setUsername] = useState("")
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pay, setPay] = useState(false);
  const [haveToPay, setHaveToPay] = useState(true);
  const [haveToDeal, setHaveToDeal] = useState();

  const shipping = 1.99;
  let sum = 0;

  orders.forEach((ord) => {
    sum += Number(ord.total_price);
    return sum;
  });

  const toDeal = sum + shipping;

  // get all order:
  const orderList = async () => {
    const data = await getOrders();
    setOrders(data);
    setLoading(true);
    if (data.length == 0) {
      setHaveToPay(false);
    }
    console.log("Get all order: ", data);
  };

  // api: pay
  const onClickPay = async () => {
    await deleteAllOrder()
      .then((res) => {
        setPay(true);
        console.log("Pay success");
      })
      .catch((err) => {
        console.log(err);
      });
    orderList();
    window.location.reload(false);
  };

  // --- useEffect:
  useEffect(() => {
    orderList();
  }, []);
  return (
    <div className="container p-5">
      <div className="row">
        {/* Left Side */}
        <div className="col-md-6 pt-5">
          <h2>Billing details</h2>

          <form action="#">
            {/* Company Name */}
            <div className="information">
              <div className="form-group company_name">
                <label htmlFor="company">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="form-group company_name">
                <label htmlFor="company">Company Name (optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
              </div>

              <div className="town form-group">
                <label htmlFor="town">Town / City </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City Name"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <div className="street form-group">
                <label htmlFor="street">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="###"
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </div>
              <div className="province form-group">
                <label htmlFor="province">Province</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Province Name"
                  onChange={(e) => {
                    setProvince(e.target.value);
                  }}
                />
              </div>
              <div className="zipCode form-group">
                <label htmlFor="zip">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="####"
                  onChange={(e) => {
                    setZipe(e.target.value);
                  }}
                />
              </div>
              <div className="phone form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="form-group email">
                <label htmlFor="inputEmail">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="addMore form-group">
                <label htmlFor="add-More"></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add more infomation"
                  onChange={(e) => {
                    setMoreInfo(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        {haveToPay ? (
          <div className="col-md-6 pt-5">
            <div className="row">
              <div className="col">
                <h6>Product</h6>
                {orders.map((pro, index) => (
                  <p key={index} value={pro.id}>
                    {pro.productName} (x {pro.quantity})
                  </p>
                ))}
                <p style={{ color: "blue" }}>shipping</p>
                <h2 className="total">Total</h2>
              </div>
              <div className="col">
                <h6>Subtotal</h6>
                {orders.map((pro, index) => (
                  <p key={index} value={pro.id}>
                    ${pro.total_price}
                  </p>
                ))}
                <p style={{ color: "blue" }}>${shipping}</p>
                <h2 className="total">${sum + shipping}</h2>
              </div>
            </div>

            <hr />
            <div className="description">
              <ul className="describe">
                <li>
                  <h2>Direct Bank Transfer</h2>
                </li>
              </ul>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <ul type="circle">
                <li>Direct Bank Transfer</li>
                <li>Cash On Delivery</li>
              </ul>
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
            </div>
            <div className="checkout-btb">
              {orders.length == 0 ||
              !username ||
              !company ||
              !city ||
              !street ||
              !province ||
              !zipe ||
              !phone ||
              !email ? (
                <Button size="small" disabled startIcon={<PaymentIcon />}>
                  Pay Now
                </Button>
              ) : (
                <Button
                  size="small"
                  startIcon={<PaymentIcon />}
                  onClick={() => onClickPay()}
                >
                  Pay Now
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="col-md-6 pt-5">
            <div className="row">
              <div className="col">
                <h2 className="total">Deal</h2>
              </div>
              <div className="col">
                <h2 className="total">Successfull</h2>
              </div>
            </div>

            <hr />
            <div className="description">
              <ul className="describe">
                <li>
                  <h2>Thank You</h2>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
