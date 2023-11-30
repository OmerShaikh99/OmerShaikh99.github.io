import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contact from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="listItem">Home</Link>
        <Link className="listItem">About</Link>
        <Link className="listItem">Projects</Link>
        <Link className="listItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
