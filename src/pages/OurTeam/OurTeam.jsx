import React from "react";
import SwiperComponent from "../../components/Swiper/SwiperComponent";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <>
    <div className="our-team-content" aria-labelledby="ourTeamContent">
      <h2>Our Team</h2>
      <div className="team-content-para">
      <p>
                    We believe that great ideas come to life through
                    collaboration and innovation. Our team is a diverse group of
                    passionate professionals, each bringing unique skills and
                    experiences to the table. From creative designers and
                    strategic thinkers to technical experts and problem-solvers,
                    we are united by a shared vision of delivering excellence in
                    everything we do.
                  </p>
                  <p>
                    Our mission is to empower businesses and individuals by
                    creating innovative, sustainable, and user-friendly designs.
                    With a culture that values integrity, growth, and teamwork,
                    we are committed to creating meaningful solutions that make
                    a difference. Whether it’s crafting cutting-edge designs,
                    developing user-centered interfaces, or building sustainable
                    solutions, our team thrives on turning challenges into
                    opportunities.
                  </p>
      </div>
    <SwiperComponent />
      
    </div>
    </>
  );
};

export default OurTeam;