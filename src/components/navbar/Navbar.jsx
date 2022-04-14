import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <img></img>
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
