
import React from "react";
import "../.././pages/styles/home.css";
const Card = (prop) => {
  return (
    <div className="card">
      <img src={prop.img} alt="" />
      <div className="card-body text-center">
      <h4 className="card-title">{prop.name}</h4>
      <li href="/" className="viewmore">{prop.linkName}</li>
      </div>
    </div>
  )
};

export default Card;