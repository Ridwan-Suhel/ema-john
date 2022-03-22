import React, { useEffect, useState } from "react";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section>
      <div className="container">
        <div className="shop row">
          <div className="shop-cart-area">
            <h2>Our Products.</h2>
            {products.map((product) => console.log(product))}
          </div>
          <div className="order-summary">Lorem ipsum dolor sit.</div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
