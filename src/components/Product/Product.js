import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  //   console.log(props.product);
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="product-cart">
      <div className="cart-top">
        <img src={img} alt="img" />
      </div>
      <div className="cart-info">
        <h2>{name}</h2>
        <h3>Price: ${price}</h3>
        <div className="info-bottom">
          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p>
            <small>Rating: {ratings}</small>
          </p>
        </div>
      </div>
      <div className="cart-footer">
        <button onClick={() => handleAddToCart(product)} className="cart-btn">
          Add to Cart{" "}
          <span>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
