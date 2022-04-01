import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);

    removeFromDb(product.id);
  };

  return (
    <section>
      <div className="shop row">
        <div className="container">
          <div className="shop-cart-area">
            <h2>Our Products.</h2>
            <div className="reviewItem-wrapper">
              {cart.map((product) => (
                <ReviewItem
                  key={product.id}
                  product={product}
                  handleRemoveProduct={handleRemoveProduct}
                ></ReviewItem>
              ))}
            </div>
          </div>
        </div>
        <div className="order-summary">
          <Cart cart={cart}>
            <button onClick={() => navigate("/inventory")} className="Btn">
              Proceed Checkout
              <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>
            </button>
          </Cart>
        </div>
      </div>
    </section>
  );
};

export default Orders;
