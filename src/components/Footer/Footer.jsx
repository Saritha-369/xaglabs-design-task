import React from "react";
import { Link } from "react-router-dom"; 
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white text-center p-3 py-4">
      <div className="container d-flex justify-content-between footer-content">
        <p>We’ve got one planet—let’s treat it right.</p>
        <p>&copy; 2025 Company Name.</p>
        <div className="privacyandterms">
          <Link 
            to="/privacy-policy" 
            id="privacy-policy-link"
            className="nav-link footer-link text-white" 
            aria-label="View Privacy Policy"
          >
            Privacy Policy
          </Link>
          <span className="footer-divider" aria-hidden="true">&nbsp;&nbsp;|&nbsp;</span> 
          <Link 
            to="/terms" 
            id="terms-link"
            className="nav-link footer-link text-white" 
            aria-label="View Terms and Conditions" 
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
