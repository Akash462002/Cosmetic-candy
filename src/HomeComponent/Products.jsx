import React from "react";

function Products() {
  return (
    <div id="carouselExample" className="carousel slide mt-4 product-bg">
      <h2 className="text-white text-center pt-4">BEST SELLER</h2>
      <div className="carousel-inner">
        {/* First Carousel Item */}
        <div className="carousel-item active item-height">
          <div className="container-fluid mb-5">
            {/* ... (Repeat the card components for each item) */}
          </div>
        </div>
        {/* Repeat for additional Carousel Items */}
        <div className="carousel-item item-height">
          <div className="container-fluid mb-5">
            {/* ... (Repeat the card components for each item) */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev cursor-icon-pre"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="" aria-hidden="false">
          <img
            style={{ width: "50px" }}
            src="css/images/logo/pre-icon.png"
            alt=""
          />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next cursor-icon-nxt"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="" aria-hidden="false">
          <img
            style={{ width: "50px" }}
            src="css/images/logo/nxt-icon.png"
            alt=""
          />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Products;
