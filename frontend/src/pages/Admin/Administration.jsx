import React from "react";
import { Outlet, Link } from "react-router-dom";

function Administration() {
  return (
    <div>
      <div className="menus">
        <Link to="/">Accueil</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Administration;
