import React from "react";
import Justin from "./Data/Justins";

function createCard(justin, indx) {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 mt-4" key={indx}>
      <div className="card w-100">
        <div style={{ padding: "0 17%" }}>
          <a href="Productdetial.html">
            <img src={justin.scr} className="card-img-top" alt={justin.scr} />
          </a>
          <div className="card-body">
            <div className="row">
              <div className="container text-center">
                <p>{justin.Title}</p>
                <p>{justin.Prize}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", padding: "10px" }}>
          <i
            className="fa-regular fa-heart"
            style={{
              border: "1px solid #000000",
              borderRadius: "1px",
              padding: "10px",
              borderRadius: "10px",
              margin: "5px",
            }}
          />
          <a
            href="Productdetial.html"
            className="btn btn-primary m-auto"
            style={{
              width: "100%",
              height: "40px",
              fontSize: "19px",
              backgroundColor: "black",
              border: "none",
            }}
          >
            SELECT SHADE
          </a>
        </div>
      </div>
    </div>
  );
}

const JustIn = () => {
  return (
    <div className="container-fluid mb-5">
      <div
        style={{
          fontSize: "28px",
          textAlign: "center",
          fontWeight: 600,
          color: "rgb(0, 0, 0)",
          marginTop: "10px",
        }}
        className="col-12"
      >
        <p>JUST IN</p>
      </div>
      <div className="container">
        <div className="row">{Justin.map(createCard)}</div>
      </div>
    </div>
  );
};

export default JustIn;
