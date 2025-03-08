import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/css/homeservicesclientscta.css";

const HomeServicesClientsCTA = () => {
  return (
    <>
      {/* Clients Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Trusted by Leading Brands</h2>
            <p className="text-muted">
              We take pride in serving some of the most prestigious organizations.
            </p>
          </div>
          <Row className="gy-4 justify-content-center">
            {[
              "Mahindra & Mahindra Ltd (MRV) Chennai",
              "Turbo Energy P Ltd OMR",
              "Stellar Optic P Ltd OMR",
              "Praba's Vcare Health Clinic",
              "VeCuRa Wellness Clinic",
            ].map((client, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index} >
                <Card className="text-center client-card w-100">
                  <Card.Body >
                    <i className="bi bi-building client-icon"></i>
                    <Card.Title className="h6">{client}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="mt-5">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              spaceBetween={30}
              slidesPerView={1}
              className="testimonial-slider"
            >
              {[
                {
                  name: "Dr. Rajesh Kumar",
                  role: "Facility Manager, VeCuRa Wellness",
                  content:
                    "BCAS has been instrumental in maintaining optimal air quality in our medical facility. Their prompt service and expertise are commendable.",
                },
                {
                  name: "Priya Shankar",
                  role: "Operations Head, Stellar Optic",
                  content:
                    "The team at BCAS provided excellent HVAC solutions for our manufacturing unit. Their attention to detail and professional approach sets them apart.",
                },
                {
                  name: "Arun Prakash",
                  role: "Project Director, Turbo Energy",
                  content:
                    "We have been working with BCAS for over 5 years. Their service and technical expertise have been exceptional.",
                },
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card className="testimonial-card text-center">
                    <Card.Body>
                      <i className="bi bi-quote testimonial-icon"></i>
                      <Card.Text className="fst-italic">
                        "{testimonial.content}"
                      </Card.Text>
                      <Card.Title>{testimonial.name}</Card.Title>
                      <Card.Subtitle className="text-muted">
                        {testimonial.role}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-color text-white text-center">
        <Container>
          <h2 className="fw-bold">Need Expert AC Solutions?</h2>
          <p className="lead">Contact us today for sales, installation, and maintenance services across industries.</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="tel:7358052100" className="btn btn-color-clients btn-lg">
              <i className="fas fa-phone-alt me-2"></i>Contact Our Experts
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeServicesClientsCTA;
