import React from "react";
// import heroImage from "./path-to-your-image.jpg"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/serviceherosection.css";

const ServiceHeroSection = ({ setShowConsultModal }) => {
  return (
    <section className="hero-section position-relative pt-5">
      <div className="hero-container position-relative overflow-hidden">
        <img src="https://public.readdy.ai/ai/img_res/ba8693d81dda7e8f28d90ccedaa43167.jpg" alt="AC Services" className="hero-image" />
        <div className="overlay position-absolute top-0 start-0 w-100 h-100">
          <div className="container h-100 d-flex align-items-center">
            <div className="text-white text-container">
              <h1 className="display-5 fw-bold mb-4">
                Reliable & Professional AC Services
              </h1>
              <p className="lead mb-4">
                Experience superior comfort with our comprehensive HVAC
                solutions. Expert installation, maintenance, and repair
                services tailored to your needs.
              </p>
              <button
                onClick={() => setShowConsultModal(true)}
                className="btn btn-light text-primary px-4 py-2 fw-semibold"
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

export default ServiceHeroSection;
