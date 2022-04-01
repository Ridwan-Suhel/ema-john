import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  // console.log();
  let quantity = 0;

  let total = 0;
  let shippingTotal = 0;
  let tax = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;

    total = total + product.price * product.quantity;
    shippingTotal = shippingTotal + product.shipping;
  }
  // tax = (total / 100) * 10;
  tax = total * 0.1;
  let grandTotal = total + shippingTotal + tax;

  return (
    <div className="cart-area">
      <h2>Order Summary</h2>
      <div className="cart-info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charges: ${shippingTotal}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Cart;
