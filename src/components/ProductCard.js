import React from "react";
import "./ProductCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddToCartButton from "../components/AddToCartButton";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.product.images[0]} className="img-fluid" alt="" />
      <p className="text-center">
        <b>{props.product.product.toUpperCase()}</b>
        <br />
        {props.product.price}
        <br />
        <AddToCartButton product={props.product} />
      </p>
    </div>
  );
}
