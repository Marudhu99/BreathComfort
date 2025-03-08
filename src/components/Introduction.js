import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/introduction.css"; // Custom styles

const Introduction = () => {
  return (
    <section className="intro-section py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold display-6">Welcome to Breath Comfort Air Systems</h2>
            <p className="mt-3 text-muted fs-5">
              As a trusted name in air conditioning sales and services, we bring deep 
              industry understanding and unwavering commitment to customer satisfaction. 
              Our focus remains on delivering cutting-edge solutions that perfectly 
              match our clients' diverse needs.
            </p>
          </div>
          {/* Image Section */}
          <div className="col-lg-6">
            <div className="intro-image">
              <img
                src="https://public.readdy.ai/ai/img_res/f329c8f48ea73a5fc90f9b548b55bed6.jpg"
                className="img-fluid rounded"
                alt="Professional Team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
