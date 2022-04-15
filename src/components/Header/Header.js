import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <header className="header">
      <nav className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
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
          {user ? (
            <li>
              <button
                onClick={logout}
                className="btn btn-link text-decoration-none text-white"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <CustomLink to="/login">Login</CustomLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
