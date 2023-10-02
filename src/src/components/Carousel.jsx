import React from "react";

function Carousel() {
  return (
    <>
      <div className=" text-center">
        <h5 className="destacados" style={{ color: "white" }}>
          Events
        </h5>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mt-3 text-center  "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="/img/game_zone.jpg"
              className="d-block w-50 mx-auto carouselMid img-fluid pb-5 "
              style={{ height: "300px" }}
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/gaming_byte.jpg"
              className="d-block w-50 mx-auto carouselMid img-fluid pb-5"
              style={{ height: "300px" }}
              alt="Image 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/torneo_fifa.png"
              className="d-block w-50 mx-auto carouselMid img-fluid pb-5"
              style={{ height: "300px" }}
              alt="Image 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
