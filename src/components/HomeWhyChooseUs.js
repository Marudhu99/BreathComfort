import React from "react";
import "../assets/css/homewhychooseus.css";

const features = [
  {
    icon: "bi-people",
    title: "Experienced Team",
    description: "18+ years in AC sales & service with certified professionals.",
  },
  {
    icon: "bi-buildings",
    title: "Multi-Brand Dealer",
    description: "Authorized dealer for Mitsubishi, Daikin, Blue Star, and more.",
  },
  {
    icon: "bi-star-fill",
    title: "Customer Satisfaction",
    description: "Prompt pre & post-sales support with a dedicated service team.",
  },
  {
    icon: "bi-tools",
    title: "Professional Installation",
    description: "Safety-focused & high-quality setup by trained technicians.",
  },
  {
    icon: "bi-leaf",
    title: "Energy-Efficient",
    description: "Eco-friendly and cost-effective air conditioning solutions.",
  },
  {
    icon: "bi-clock",
    title: "24/7 Support",
    description: "Round-the-clock emergency service and maintenance.",
  },
];

const HomeWhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">Why BCAS?</h2>
          <p className="text-muted mx-auto w-75">
            We believe that customer satisfaction leads to long-term success.
            Our expertise, partnerships, and professional approach set us apart in the industry.
          </p>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="feature-card p-4 shadow-sm text-center">
                <div className="feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h3 className="fw-bold my-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
