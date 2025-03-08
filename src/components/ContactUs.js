import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setShowModal(true);
  };

  return (
    <Container className="py-5">
      <Row className="g-4">
        {/* Contact Info Section */}
        <Col md={6}>
          <div className="bg-white shadow-sm rounded p-4">
            <h2 className="mb-4">Contact Information</h2>
            <p><strong>Breath Comfort Air Systems</strong></p>
            <p>2025 Innovation Drive</p>
            <p>Silicon Valley, CA 94025</p>
            <p><i className="bi bi-telephone me-2"></i> 7358052100</p>
            <p><i className="bi bi-envelope me-2"></i> admin@breathcomfort.in</p>

            <h3 className="mt-4">Business Hours</h3>
            <p>Mon – Fri: 9 AM – 6 PM</p>
            <p>Saturday: 10 AM – 4 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="bg-white shadow-sm rounded p-4 mt-3">
            <h3>Need Immediate Assistance?</h3>
            <p>Call our 24/7 support line:</p>
            <p className="fw-bold text-primary">
              <i className="bi bi-phone me-2"></i> 7358052100
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-white shadow-sm rounded p-4 mt-3">
            <h3>Connect With Us</h3>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-dark fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-dark fs-4"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <div className="bg-white shadow-sm rounded p-4">
            <h2>Send Us a Message</h2>
            <Form onSubmit={handleSubmit} className="mt-3">
              <Form.Group className="mb-3">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button type="submit" className="w-100 btn btn-primary">
                Send Message
              </Button>

              <p className="text-muted mt-2">We will respond within 24 hours.</p>
            </Form>
          </div>
        </Col>
      </Row>

      {/* Map Section */}
      <Row className="mt-4">
        <Col>
          <div className="bg-white shadow-sm rounded p-4">
            <h2>Our Location</h2>
            <img
              src="https://public.readdy.ai/ai/img_res/a3ff1144cea6c666abe5f016e97e8fd6.jpg"
              alt="Location Map"
              className="w-100 rounded"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
        </Col>
      </Row>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          <i className="bi bi-check-circle text-success display-4 mb-3"></i>
          <h4>Message Sent Successfully!</h4>
          <p>We will get back to you within 24 hours.</p>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ContactUs;
