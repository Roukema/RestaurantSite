import React from "react";
import logo from "./logo-5.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} />
      <div className="reserveerContainer">
        <a className="reserveerButton" href="#">
          Reserveer een tafel
        </a>
      </div>
    </div>
  );
}

export default Header;
