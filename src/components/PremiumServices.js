import React from "react";
import serviceImages1 from "../assets/images/Professional_Installation.jpg";
import serviceImages2 from "../assets/images/Preventive_Maintenance.jpg";
import serviceImages3 from "../assets/images/Repair_Replacement.jpg";
import serviceImages4 from "../assets/images/Project_Execution.jpg";
import "../assets/css/premiumservices.css"; // Import CSS file

const services = [
  {
    title: "Professional Installation",
    desc: "Expert setup of all AC brands with precision and care",
    icon: "bi-tools",
    image: serviceImages1,
  },
  {
    title: "Preventive Maintenance",
    desc: "Regular check-ups to ensure optimal performance",
    icon: "bi-shield",
    image: serviceImages2,
  },
  {
    title: "Repair & Replacement",
    desc: "24/7 emergency repair services with guaranteed results",
    icon: "bi-wrench",
    image: serviceImages3,
  },
  {
    title: "Project Execution",
    desc: "Complete HVAC solutions for commercial projects",
    icon: "bi-diagram-3",
    image: serviceImages4,
  },
];

const PremiumServices = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold display-6 mb-5">Our Premium Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} className="card-img-top" />
                </div>
                <div className="card-body text-start">
                  <i className={`fas ${service.icon} text-primary fs-2 mb-3`}></i>
                  <h3 className="h5 fw-bold">{service.title}</h3>
                  <p className="text-muted">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
