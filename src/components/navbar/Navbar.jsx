import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <img></img>
      </div>
      <div>
        <p>
          <a>Home</a>
        </p>
        <p>
          <a>Mint</a>
        </p>
        <p>
          <a>Community</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
