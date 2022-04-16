import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <Link to="/" className="navbar__links-item">
        Home
      </Link>

      <Link to="/mint" className="navbar__links-item">
        Mint
      </Link>

      <Link to="/community" className="navbar__links-item">
        Community
      </Link>
      <button className="footer__button">Connect</button>
    </div>
  );
};

export default Footer;
