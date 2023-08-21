import React from "react";
import { Link } from "react-router-dom";
import candy from "../assets/images/product-logo/title-new.png";

function Header() {
  return (
    <div
      className="container-fluid text-light bg-dark"
      style={{ backgroundColor: "#000000Header" }}
    >
      <nav className="navbar navbar-expand-lg p-3">
        <div className="container-fluid d-flex">
          <div className="nav">
            <img
              src={candy}
              style={{ width: "150px", height: "60px", marginLeft: "30px" }}
              alt=""
            />
          </div>
          <div className="search d-none d-md-inline-flex">
            <form
              className="d-flex text-center"
              role="search"
              style={{ width: "850px", height: "40px" }}
            >
              <input
                className="form-control"
                type="search"
                style={{
                  backgroundColor: "#212121",
                  borderRadius: "5px 0px 0px 5px",
                }}
                placeholder='Try "Liquid Lipstick"'
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success d-flex p-2"
                style={{
                  border: "1px solid #ffffff",
                  color: "#000000",
                  borderRadius: "0px 5px 5px 0px",
                  backgroundColor: "white",
                }}
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass pe-1"></i>Search
              </button>
            </form>
          </div>
          <div className="d-flex text-center">
            <i className="fa-solid fa-circle-user m-auto fa-lg"></i>
            <p className="my-auto ms-1">
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Login/Signup
              </Link>
            </p>
          </div>
          <div className="icon d-flex d-">
            <div>
              <i className="fa-solid fa-heart px-2"></i>
            </div>
            <div>
              <i className="fa-solid fa-bag-shopping px-2"></i>
            </div>
            <div>
              <i className="fa-solid fa-tags px-2"></i>
            </div>
          </div>
        </div>
        <form
          className="d-flex d-md-none"
          role="search"
          style={{ width: "800px" }}
        >
          <input
            className="form-control me-2"
            type="search"
            style={{
              backgroundColor: "#372d2d",
              borderRadius: "5px 0px 0px 5px",
            }}
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success"
            style={{
              border: "1px solid #ffffff",
              color: "#000000",
              borderRadius: "0px 5px 5px 0px",
              backgroundColor: "white",
            }}
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Header;
