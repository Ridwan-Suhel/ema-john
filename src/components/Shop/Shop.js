import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <section>
      <div className="container">
        <div className="shop row">
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
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
