import React from "react";
import hotlink1 from "../assets/images/products/hotlink/hotlinks-1.png";
import hotlink2 from "../assets/images/products/hotlink/hotlinks-2.png";
import hotlink3 from "../assets/images/products/hotlink/hotlinks-3.png";
import hotlink4 from "../assets/images/products/hotlink/hotlinks-4.png";

function HotDeals() {
  return (
    <div className="container-fluid my-5 text-center">
      <div
        style={{
          fontSize: "28px",
          textAlign: "center",
          fontWeight: "600",
          color: "rgb(0, 0, 0)",
          marginTop: "10px",
        }}
        className="col-12"
      >
        <p>HOT DEALS</p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 mt-4 ">
            <div className="card new-launch" style={{ border: "transparent" }}>
              <a href="#">
                <img src={hotlink1} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mt-4 mb-4">
            <div className="card new-launch" style={{ border: "transparent" }}>
              <a href="">
                <img src={hotlink2} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mt-4 mb-4">
            <div className="card new-launch" style={{ border: "transparent" }}>
              <a href="">
                <img src={hotlink3} className="card-img-top" alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotDeals;
