import React from "react";
import i2 from "../assets/images/top-pick-logo/img1.webp";
import i3 from "../assets/images/top-pick-logo/img2.webp";
import i4 from "../assets/images/top-pick-logo/img3.webp";
import i5 from "../assets/images/top-pick-logo/img4.webp";
import i6 from "../assets/images/top-pick-logo/ima5.webp";
import i1 from "../assets/images/top-pick-logo/img6.webp";

const TopPick = () => {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "60px", marginBottom: "20px" }}
      >
        <h3 className="text-center">TOP PICK OF THE WEEK</h3>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide m-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-4">
                <img className="rounded" src={i1} alt="" />
              </div>
              <div className="col-lg-4">
                <img className="rounded" src={i2} alt="" />
              </div>
              <div className="col-lg-4">
                <img className="rounded" src={i3} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4">
                <img className="rounded" src={i4} alt="" />
              </div>
              <div className="col-lg-4">
                <img className="rounded" src={i5} alt="" />
              </div>
              <div className="col-lg-4">
                <img className="rounded" src={i6} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4">
                <img className="rounded" src={i2} alt="" />
              </div>
              <div className="col-lg-4">
                <img className="rounded" src={i3} alt="" />
              </div>
              <div className="col-lg-4">
                <img className="rounded" src={i4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPick;
