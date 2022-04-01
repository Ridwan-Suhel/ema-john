import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { handleRemoveProduct, product } = props;
  const { name, price, shipping, quantity, img } = product;
  return (
    <div className="single-card">
      <img src={img} alt="img" />

      <div className="info-wrapper">
        <div className="review-info">
          <h2 title={name}>{name.slice(0, 20)} </h2>

          <p>Price: ${price}</p>
          <p>Shipping Charge: {shipping}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="delete-item">
          <button onClick={() => handleRemoveProduct(product)}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
