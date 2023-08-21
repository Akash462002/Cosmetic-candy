import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetials from "../pages/ProductDetials";
import About from "../pages/AboutPage";

function Navbar() {
  return (
    <div className="container-fluid p-2" style={{ backgroundColor: "#141414" }}>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to={"/"} className="nav-link text-light">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/productDetial"} className="nav-link text-light">
            PRODUCTS
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link text-light">
            NEW LAUNCHES
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={"/about"}
            className="nav-link text-light"
            href="aboutus.html"
          >
            ABOUT US
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link text-light">
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
