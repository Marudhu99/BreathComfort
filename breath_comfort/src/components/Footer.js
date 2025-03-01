import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";


function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row mb-4">
          {/* Company Info */}
          <div className="col-md-3">
            <h5 className="fw-bold">BCAS</h5>
            <p className="text-secondary py-2">
              Your trusted partner for premium air conditioning solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <a href="#home" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>
              <li className="py-2">
                <a href="#about" className="text-secondary text-decoration-none">
                  About
                </a>
              </li>
              <li className="py-2">
                <a href="#services" className="text-secondary text-decoration-none">
                  Services
                </a>
              </li>
              <li className="py-2">
                <a href="#contact" className="text-secondary text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="fw-bold">Contact Info</h5>
            <ul className="list-unstyled text-secondary">
              <li className="py-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                No. 9 Venkateshwara Nagar, Sethu Street, Madhanandhapuram,
                Chennai 600125
              </li>
              <li className="py-2">
                <i className="bi bi-telephone-fill me-2"></i>
                <a href="tel:7358052100" className="text-secondary text-decoration-none">
                  7358052100
                </a>
              </li>
              <li className="py-2">
                <i className="bi bi-envelope-fill me-2"></i>
                <a href="mailto:admin@breathcomfort.in" className="text-secondary text-decoration-none">
                  admin@breathcomfort.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary fs-4">
                <i className="bi bi-facebook me-2"></i>
              </a>
              <a href="#" className="text-secondary fs-4">
                <i className="bi bi-linkedin me-2"></i>
              </a>
              <a href="#" className="text-secondary fs-4">
                <i className="bi bi-instagram me-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-top pt-3 text-secondary">
          <p className="mb-0">© 2024 BCAS | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
