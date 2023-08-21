import React from "react";
import slider1 from "../assets/images/slider/image.gif";
import slider2 from "../assets/images/slider/image 2.gif";
import slider3 from "../assets/images/slider/image 3.gif";
import slider4 from "../assets/images/slider/image2.webp";
import slider5 from "../assets/images/slider/image4.webp";

function Slider() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      style={{ paddingBottom: "40px" }}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider5} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
