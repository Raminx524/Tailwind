import React from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

function NavBar() {
  return (
    <nav className="flex justify-between p-7">
      <img src={logo} alt="Insure" />
      <img src={hamburger} alt="See More" />
    </nav>
  );
}

export default NavBar;
