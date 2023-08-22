import React from "react";
import Header from "../HomeComponent/Header";
import Footer from "../HomeComponent/Footer";
import Navbar from "../HomeComponent/Navbar";
import main from "../assets/images/banner & Background/aboutus-banner.png";
import ruther from "../assets/images/banner & Background/ruletheworld.png";

function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div style={{ width: "100%", height: "50px" }}></div>
        <div className="container-fluid">
          <h6
            className="mb-4"
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "5px",
            }}
          >
            About Us
          </h6>
          <div
            className="container con-pad"
            style={{ backgroundColor: "white" }}
          >
            <div className="row">
              <div className="col-4 m-auto">
                <img src={main} className="img-fluid" alt="..." />
              </div>
              <div className="col-7 m-5">
                <h4
                  className="m-3"
                  style={{
                    fontSize: "19px",
                    color: "#FA4EAB",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  HELLO, GORGEOUS!
                </h4>
                <h4
                  className="m-3"
                  style={{
                    fontSize: "21px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  WELCOME TO SUGAR COSMETICS
                </h4>
                <p
                  className="m-3"
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    color: "grey",
                  }}
                >
                  A brand of choice for the women of today! And we're here to
                  ensure you have a <br /> lot of fun with our makeup.
                </p>
                <p
                  className="m-3"
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    color: "grey",
                  }}
                >
                  We're a brand that believes in empowerment. That's why, we
                  carefully curate products from around the globe which meet
                  every want and need there could possibly be when it comes to
                  your makeup and skincare regime. We believe in every
                  interpretation of beauty. Bold to subdued, quirky to crazy,
                  everyday to glam goddess! Our aim is to celebrate every aspect
                  of you, no matter what your style is. Parent brand
                  “Vellvette”.
                </p>
                <p
                  className="m-3"
                  style={{
                    fontSize: "17px",
                    textAlign: "center",
                    color: "grey",
                  }}
                >
                  "The “SUGAR Cosmetics” trademark is wholly owned and operated
                  by “Vellvette Lifestyle Private Limited”. Any products
                  marketed or manufactured under the label “SUGAR” is the
                  property of the same Company and
                </p>
                <h4
                  className="m-3"
                  style={{
                    fontSize: "19px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  So, go ahead and pick your faves.
                </h4>
                <h4
                  className="m-3"
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  It's time to
                </h4>
                <img
                  src={ruther}
                  style={{ width: "250px" }}
                  className="img-fluid mx-auto d-block mb-4"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "100px" }}></div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
