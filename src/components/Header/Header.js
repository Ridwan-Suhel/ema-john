import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="/home">Shop</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="/nventory">Inventory</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
