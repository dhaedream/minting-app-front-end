import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo-container">
        <img className="navbar__logo" src={logo} alt="logo" />
      </div>
      <div>
        <p>
          <Link to="/" className="navbar_links-item">
            Home
          </Link>
        </p>
        <p>
          <Link to="/mint" className="navbar_links-item">
            Mint
          </Link>
        </p>
        <p>
          <Link to="/community" className="navbar_links-item">
            Community
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
