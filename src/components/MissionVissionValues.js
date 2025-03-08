import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/missionvissionvalues.css';

const MissionVisionValues = () => {
  const visions = [
    { icon: 'bi-lightbulb', title: 'Innovation', description: 'Delivering innovative and energy-efficient cooling solutions for residential and commercial spaces.' },
    { icon: 'bi-award', title: 'Excellence', description: 'Setting industry benchmarks in customer satisbiction and service excellence.' },
    { icon: 'bi-globe', title: 'Expansion', description: 'Expanding our service reach while maintaining high standards in quality and professionalism.' },
    { icon: 'bi-handshake', title: 'Partnerships', description: 'Building long-term partnerships with top brands and manubicturers to offer the best products.' },
    { icon: 'bi-leaf', title: 'Sustainability', description: 'Promoting sustainable and eco-friendly air conditioning solutions for a better future.' },
    { icon: 'bi-users', title: 'Community', description: 'Creating positive impact in communities through responsible business practices.' },
  ];

  const values = [
    { title: 'Integrity', description: 'We conduct our business with the highest standards of professional behavior and ethics.' },
    { title: 'Innovation', description: 'We continuously seek new ways to improve and provide better solutions.' },
    { title: 'Excellence', description: 'We strive for excellence in every aspect of our service delivery.' },
    { title: 'Sustainability', description: 'We are committed to environmental responsibility and sustainable practices.' },
  ];

  return (
    <>
      {/* Mission Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Our Mission</h2>
          <div className="mx-auto mb-4 separator"></div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                {["High-Quality and Competitive Air Conditioning Solutions tailored to customer needs.",
                  "Efficient Pre- and Post-Sales Support to ensure long-term satisfaction.",
                  "Well-Trained and Committed Professionals delivering excellent service.",
                  "Continuous Business Process Improvement for greater efficiency.",
                  "Strong Customer Relationships built on trust and reliability."]
                  .map((item, index) => (
                    <li key={index} className="list-group-item d-flex align-items-start">
                      <i className="fas fa-check-circle text-primary me-2 mt-1"></i>
                      {item}
                    </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <img src="https://public.readdy.ai/ai/img_res/17cb5afa27646dde8d27dd71c9f35fad.jpg" className="img-fluid rounded" alt="Mission" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Our Vision</h2>
          <div className="mx-auto mb-4 separator"></div>
          <div className="row">
            {visions.map((vision, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm p-4 text-center">
                  <i className={`fas ${vision.icon} text-primary mb-3`}></i>
                  <h5 className="fw-semibold">{vision.title}</h5>
                  <p className="text-muted">{vision.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Our Core Values</h2>
          <div className="mx-auto mb-4 separator"></div>
          <div className="row">
            {values.map((value, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="border border-secondary p-4 rounded text-center hover-border-primary">
                  <h5 className="fw-semibold">{value.title}</h5>
                  <p className="">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionValues;