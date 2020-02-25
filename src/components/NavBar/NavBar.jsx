import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper navbar">
          <a href="/" className="brand-logo left">
            Sg
          </a>
          <div className="nav-content center">SENTENCES GAME</div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
