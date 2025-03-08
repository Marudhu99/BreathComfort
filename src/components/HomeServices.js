import React from "react";
import "../assets/css/homeservices.css";

const services = [
  {
    icon: "bi-tools",
    title: "Sales & Installation",
    description:
      "Expert AC installation with comprehensive safety measures and professional setup.",
  },
  {
    icon: "bi-wrench",
    title: "Maintenance & Repairs",
    description:
      "Regular preventive maintenance and prompt repair services for all AC brands.",
  },
  {
    icon: "bi-rulers",
    title: "Custom HVAC Solutions",
    description:
      "Specialized design and planning for ventilation, ducts, and cooling requirements.",
  },
  {
    icon: "bi-clock-history",
    title: "Timely Project Completion",
    description: "Efficient execution with dedicated professional team support.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">End-to-End AC Solutions & Services</h2>
          <p className="text-muted mx-auto w-75">
            Comprehensive air conditioning solutions tailored to meet your
            specific needs with professional expertise and dedication.
          </p>
        </div>
        <div className="row mt-5">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3  mb-4">
               <div className=" text-center  shadow-sm  p-4  service-card h-100">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3 className="fw-bold my-3">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-color-service px-4 py-2">Explore Our Services</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
