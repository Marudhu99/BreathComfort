import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/industries.css"; // Custom styles

const industries = [
  "Clean Rooms",
  "R&D Centers",
  "Factories",
  "Hospitals",
  "Hotels",
  "Showrooms",
  "Corporate Offices",
  "Institutions",
];

const Industries = () => {
  return (
    <section id="industries" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold display-6 mb-4">Industries We Serve</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          className="pb-4"
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="industry-card text-center p-4">
                <i className="bi bi-building text-primary industry-icon"></i>
                <h3 className="h5 mt-3">{industry}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>    
    </section>
  );
};

export default Industries;
