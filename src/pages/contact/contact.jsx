import React from "react";
import ".././styles/contact.css";
const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="text">
          <h1>Get Im Touch With Us</h1>
          <p className="text-p">
            For More Information About Our Product & Services.Please Feel Free
            To Drop Us An Email.{" "}
          </p>{" "}
          <p className="text-p">
            {" "}
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        <div className="row text-align-center">
          <div className="col item-address">
            <div className="item1">
              <h5>Address</h5>
              <p>Kirirom Mountian</p>
            </div>
            <div className="item1">
              <h5>Phone</h5>
              <p>+855 123 4567</p>
            </div>
            <div className="item1">
              <h5>Working time</h5>
              <p>Mon-Fri : 9:00-6:00</p>
            </div>
          </div>
          <div className="col">
            <div className="input-text">
              <form>
                <div className="form-group ">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group ">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control "
                    ria-describedby="emailHelp"
                    placeholder="email"
                  />
                </div>
                <div className="form-group ">
                  <label for="email">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Optional"
                  />
                </div>
                <div className="form-group  ">
                  <label for="email">Message</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="email"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
