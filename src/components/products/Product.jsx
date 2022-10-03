import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div className="wrapper">
      <div>Shopping Cart: 0 items.</div>
      <div>Total: 0</div>
      <div className="product">
        <span role="img" aria-label="ice cream">
          🍦
        </span>
      </div>
      <button>Add</button> <button>Remove</button>
    </div>
  );
}
