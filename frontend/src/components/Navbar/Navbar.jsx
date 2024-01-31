import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/3a/Top_14.svg/632px-Top_14.svg.png?20160521213028"
          alt="logo"
        />
      </div>
      <div className="menus">
        <Link to="/">Accueil</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
