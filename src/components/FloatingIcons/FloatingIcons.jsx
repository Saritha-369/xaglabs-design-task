import React from "react";
import { Link } from "react-router-dom"; 
import { FaUser, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./FloatingIcons.css";

const FloatingIcons = ({ page, setPage }) => {
  return (
    <div className="floating-icons d-lg-none" data-page={page}>
      {/* Link to the Our Team page */}
      {page !== "ourteam" && (
        <Link 
          to="/ourteam" 
          id="ourteam-icon" 
          className="nav-link floating-icon ourteam" 
          onClick={() => setPage("ourteam")}
          aria-label="Go to Our Team page"
        >
          <FaUser size={25} className="icon" fill="#000" aria-hidden="true" />
        </Link>
      )}
      
      {/* Link to the Personal Details page */}
      {page !== "personal" && (
        <Link 
          to="/personal" 
          id="personal-icon" 
          className="nav-link floating-icon personal" 
          onClick={() => setPage("personal")}
          aria-label="Go to Personal Details page" 
        >
          <FaPhone size={25} className="icon " fill="#E30655" aria-hidden="true" />
        </Link>
      )}

      {/* Link to the Contact Us page */}
      {page !== "contact" && (
        <Link 
          to="/contact" 
          id="contact-icon" 
          className="nav-link floating-icon contact" 
          onClick={() => setPage("contact")}
          aria-label="Go to Contact Us page" 
        >
          <FaMapMarkerAlt size={25} className="icon" fill="#f9a73e" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
};

export default FloatingIcons;
