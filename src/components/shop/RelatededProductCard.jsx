import React from "react";
import "../../pages/styles/RelatededProductCard.css";
function RelatededProductCard(props) {
  const { profile, description, name, discount_price, price} = props;

  return (
    <div class="product-card">
      <div class="product-image">
        <img
          src={ profile}
          class="product-thumb"
          alt=""
        />
      </div>
      <div class="product-info">
        <h2 class="product-brand">{name}</h2>
        <p class="product-short-description">a short line about the cloth..</p>
        <span class="price">${discount_price }</span>
        <span class="actual-price">${price}</span>
      </div>
    </div>
  );
}

export default RelatededProductCard;
