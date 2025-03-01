import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/homeherosection.css";

const HomeHeroSection = () => {

  return (
    <section className="position-relative vh-100 d-flex align-items-center text-white" id="home">
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <img
          src="https://public.readdy.ai/ai/img_res/ba8693d81dda7e8f28d90ccedaa43167.jpg"
          alt="Hero Background"
          className="w-100 h-100 object-fit-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"></div>
      </div>

      {/* Content */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold">BREATH COMFORT AIR SYSTEMS</h1>
            <p className="fs-4">Changes for a Greener Tomorrow</p>
            <p className="fs-5 mb-4">
              Providing premium air conditioning solutions with expert service for over 18 years.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#services" className="btn btn-color btn-lg">
                Explore Our Services
              </a>
              <button
                className="btn btn-outline-light btn-lg"
              >
                Get a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
