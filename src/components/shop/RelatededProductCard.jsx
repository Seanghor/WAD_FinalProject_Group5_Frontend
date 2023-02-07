import React from "react";
import "../../pages/styles/RelatededProductCard.css";
function RelatededProductCard(props) {
  const { profile, description, name, discount_price } = props;

  return (
    <a className="product-card" href="#dolce-gabbana-cropped">
      <img className="product-card__image" src={profile} />
      <div className="text">
        {" "}
        <p className="product-card__brand">{name}</p>
        <p className="product-card__description">Anodized to absorb</p>
        <p className="product-card__price">{discount_price}</p>
      </div>
    </a>
  );
}

export default RelatededProductCard;
