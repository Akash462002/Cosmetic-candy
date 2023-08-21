import reffer_img from "../assets/images/top-pick-logo/Reffer.webp";
import React from "react";

const Reffer = () => {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "80px", marginBottom: "20px" }}
      >
        <h3 className="text-center">REFER YOUR FRIENDS</h3>
      </div>
      <div
        className="container-fluid d-md-none d-lg-block d-xs-none text-center"
        style={{
          height: "400px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img src={reffer_img} className="border rounded" alt="" />
      </div>
    </>
  );
};

export default Reffer;
