import React from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

function NavBar() {
  return (
    <nav className="flex justify-between p-4">
      <img src={logo} alt="Insure" />
      <img src={hamburger} alt="Insure" />
    </nav>
  );
}

export default NavBar;
