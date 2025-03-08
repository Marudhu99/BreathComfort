import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/productherosection.css";

const ProductHeroSection = () => {

  return (
    <section className="position-relative vh-100 d-flex align-items-center text-white" id="home">
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100" style={{ height: "97%" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{backgroundColor: "#3c348d"}}></div>
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
            <h1 className="display-4 fw-bold">Discover Premium Air Conditioning & Ventilation Solutions</h1>
            <p className="fs-5 mb-4">
                Top-quality cooling and ventilation systems from industry-leading brands like Mitsubishi Electric, Blue Star, and Daikin.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <a href="/services" className="btn btn-lg" style={{ backgroundColor: "#f4a054" }}>
                Get Export Consulation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
