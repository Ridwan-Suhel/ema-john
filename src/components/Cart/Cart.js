import React from "react";
import "./Cart.css";
const Cart = (props) => {
  console.log(props);
  return (
    <div className="cart-area">
      <h2>Order Summary</h2>
      <p>Selected Items: {props.cart.length}</p>
      <p>Selected Items: {props.cart.length}</p>
    </div>
  );
};

export default Cart;
