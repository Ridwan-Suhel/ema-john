import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
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
            <CustomLink to="/shop">Shop</CustomLink>
          </li>
          <li>
            <CustomLink to="/orders">Orders</CustomLink>
          </li>
          <li>
            <CustomLink to="/inventory">Inventory</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
