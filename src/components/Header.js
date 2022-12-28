import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <navbar className="nav">
        <div className=" title"> </div>
        <ul className="links">
          <Link to="/">Home</Link>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </ul>
      </navbar>
    </div>
  );
}
export default Header;
