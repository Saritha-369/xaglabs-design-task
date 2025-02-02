import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; 
import "./SwiperComponent.css";

import g1 from "../../assets/g1.png";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";

const teamMembers = [
  { img: g1, name: "Meredith Allen - CEO", alt: "Meredith Allen - CEO", ariaLabel: "Meredith Allen - CEO" },
  { img: b1, name: "Thomas Woodward - COO", alt: "Thomas Woodward - COO", ariaLabel: "Thomas Woodward - COO" },
  { img: b2, name: "Wade Barton - Business Analyst", alt: "Wade Barton - Business Analyst", ariaLabel: "Wade Barton - Business Analyst" },
  { img: b3, name: "Yahir Marquez - Marketing Executive", alt: "Yahir Marquez - Marketing Executive", ariaLabel: "Yahir Marquez - Marketing Executive" },
  { img: g1, name: "Meredith Allen - CEO", alt: "Meredith Allen - CEO", ariaLabel: "Meredith Allen - CEO" },
  { img: b1, name: "Thomas Woodward - COO", alt: "Thomas Woodward - COO", ariaLabel: "Thomas Woodward - COO" },
  { img: b2, name: "Wade Barton - Business Analyst", alt: "Wade Barton - Business Analyst", ariaLabel: "Wade Barton - Business Analyst" },
  { img: b3, name: "Yahir Marquez - Marketing Executive", alt: "Yahir Marquez - Marketing Executive", ariaLabel: "Yahir Marquez - Marketing Executive" }
];

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.3}
      breakpoints={{
        320: { slidesPerView: 2 },
        375: { slidesPerView: 2 },
        410: { slidesPerView: 2.5 },
        768: { slidesPerView: 3.2 },
        998: { slidesPerView: 3.2 },
        1440: { slidesPerView: 4.5 },
      }}
      className="team-swiper"
      aria-live="polite"
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index} className="team-slide">
          <Link to="/" className="nav-link" aria-label={member.ariaLabel}>
            <img src={member.img} alt={member.alt} className="team-img" />
            <div className="team-desc">
              <p>{member.name}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;