import React from "react";
import "../../pages/styles/RelatededProductCard.css";
function RelatededProductCard(props) {
  const { profile, description, name, discount_price, price } = props;

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          // src={ profile}
          src="https://static.appliancesconnection.com/www/250x250/product-info/images/static-pages/content-images/1168-AppliancesConnection-Ranges.jpg"
          className="product-thumb"
          alt=""
        />
      </div>
      <div className="product-info">
        <h2 className="product-brand">{name}</h2>
        <p className="product-short-description">
          a short line about the cloth..
        </p>
        <span className="price">${discount_price}</span>
        <span className="actual-price">${price}</span>
      </div>
    </div>
  );
}

export default RelatededProductCard;
