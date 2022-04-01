import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useProducts();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <section>
      <div className="shop row">
        <div className="container">
          <div className="shop-cart-area">
            <h2>Our Products.</h2>
            <div className="cart-wrapper">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                ></Product>
              ))}
            </div>
          </div>
        </div>
        <div className="order-summary">
          <Cart cart={cart}>
            <Link className="Btn" to="/orders">
              <button>
                Review Order{" "}
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </section>
  );
};

export default Shop;
