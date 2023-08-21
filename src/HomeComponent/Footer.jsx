import AppleStore from "../assets/images/logo/Appstore.jpeg";
import GoogleStore from "../assets/images/logo/Gplay.jpeg";
import Logo from "../assets/images/product-logo/candy.png";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          padding: "150px 0",
          backgroundImage: "url(./css/images/logo/pink-bg.jpg)",
        }}
      >
        <div className="container w-50">
          <div className="touch text-center">
            <h5>Lets Get In Touch</h5>
            <p>
              Get the latest beauty tips straight to your inbox. Can’t wait to
              connect!
            </p>
            <form
              className="d-flex justify-content-center align-items-center"
              role="search"
            >
              <input
                className="form-control touch-search-bar"
                type="search"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "5px 0px 0px 5px",
                  border: "1px solid #000000",
                }}
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                style={{
                  border: "1px solid #000000",
                  color: "#000000",
                  borderRadius: "0px 5px 5px 0px",
                  backgroundColor: "#FA4EAB",
                }}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-light"
        style={{ backgroundColor: "black", position: "relative" }}
      >
        <div style={{ position: "absolute", top: "-70px", left: "47%" }}>
          <img
            style={{
              border: "15px #000000 solid",
              borderRadius: "100%",
              backgroundColor: "#000000",
            }}
            src={Logo}
            height="150px"
            width="150px"
            alt="Logo"
          />
          <h3 className="text-center">CANDY</h3>
        </div>
        <div className="footer">
          <div className="container-fluid text-sm-center">
            <div
              className="icons d-flex align-items-center justify-content-center"
              style={{ width: "100%", paddingTop: "130px" }}
            >
              <div className="btn text-light">
                {" "}
                <i className="fa-brands fa-facebook rounded-circle"></i>{" "}
              </div>
              <div className="btn text-light">
                {" "}
                <i className="fa-brands fa-youtube"></i>{" "}
              </div>
              <div className="btn text-light">
                {" "}
                <i className="fa-brands fa-x-twitter"></i>{" "}
              </div>
              <div className="btn text-light">
                {" "}
                <i className="fa-brands fa-instagram"></i>{" "}
              </div>
              <div className="btn text-light">
                {" "}
                <i className="fa-solid fa-envelope"></i>{" "}
              </div>
              <div className="btn text-light">
                {" "}
                <i className="fa-brands fa-pinterest"></i>{" "}
              </div>
            </div>
            <hr />
            <div
              className="container d-flex justify-content-around text-center text-md-center"
              style={{ width: "90vw" }}
            >
              <a
                className="link-light"
                style={{ textDecoration: "none", cursor: "pointer" }}
                href="#"
              >
                Store
              </a>
              <a
                className="link-light"
                style={{ textDecoration: "none", cursor: "pointer" }}
                href="#"
              >
                Terms and Condition
              </a>
              <a
                className="link-light"
                style={{ textDecoration: "none", cursor: "pointer" }}
                href="#"
              >
                FAQ
              </a>
              <a
                className="link-light"
                style={{ textDecoration: "none", cursor: "pointer" }}
                href="#"
              >
                About us
              </a>
            </div>
            <hr />
            <div
              className="container-fluid p-4"
              style={{ textAlign: "start", width: "95%" }}
            >
              <div className="row m-auto">
                <div className="pb-3">
                  <h4>GET IN TOUCH</h4>
                </div>
                <div className="col-lg-3 ">
                  <p>Call us At</p>
                  <p className="opacity-50">
                    1800-209-9933
                    <br />
                    Monday to Friday: 9:00 AM to 7 PM
                  </p>
                </div>
                <div className="col-lg-3">
                  <h4>Support</h4>
                  <a
                    className="link text-decoration-none text-light link-opacity-25"
                    href=""
                  >
                    hello@sugarcosmetics.com
                  </a>
                </div>
                <div className="col-lg-3">
                  <h4>Careers</h4>
                  <a
                    className="link text-decoration-none text-light link-opacity-25"
                    href=""
                  >
                    we'r hiring!
                  </a>
                </div>
                <div className="col-lg-3">
                  <h4>Influencer Collab</h4>
                  <a
                    className="link text-decoration-none text-light link-opacity-25"
                    href=""
                  >
                    Join Us
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="application m-auto" style={{ width: "40vw" }}>
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <h6>GET THE NEW SUGAR APP TODAY!</h6>
                  <p>Tap into a better shopping experience.</p>
                </div>
                <div className="col-lg-3 text-center my-auto">
                  <img
                    className="img-fluid rounded h-75 w-75"
                    src={AppleStore}
                    alt=""
                  />
                </div>
                <div className="col-lg-3 text-center my-auto">
                  <img
                    className="img-fluid rounded h-75 w-75"
                    src={GoogleStore}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <hr />
              <div className="col-lg-12 text-center p-2">
                <p>Copyright © 2023 SUGAR Cosmetics. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
