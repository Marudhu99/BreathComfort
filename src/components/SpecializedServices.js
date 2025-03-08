import React from "react";
import "../assets/css/specializedservices.css"; // Import CSS file
import "bootstrap/dist/css/bootstrap.min.css";


const services = [
  {
    title: "Startup Support",
    features: [
      "24/7 Technical Support",
      "Warranty Coverage",
      "Expert Installation",
      "Quality Assurance",
    ],
  },
  {
    title: "Maintenance Plans",
    features: [
      "Regular Inspections",
      "Performance Optimization",
      "Filter Replacement",
      "System Updates",
    ],
  },
  {
    title: "Emergency Services",
    features: [
      "Rapid Response",
      "Same-day Repair",
      "Parts Replacement",
      "System Diagnosis",
    ],
  },
];

const SpecializedServices = () => {
  return (
    <section id="specialized" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold display-6 mb-5">Specialized Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card specialized-card text-center">
                <div className="card-body">
                  <h3 className="h4 fw-bold mb-4">{service.title}</h3>
                  <ul className="list-unstyled">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;
