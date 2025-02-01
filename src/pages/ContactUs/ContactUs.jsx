import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-content" aria-labelledby="contactUsHeading" >
      <h2 id="contactUsHeading">Contact Us</h2>
      <p className="py-3">
        We are a team of engineers, communication experts and innovators who
        specialise in developing technology propositions for the world around
        us. We noticed that in an overwhelming number of use cases, technology
        was not really the problem; mistrust came from how it was deployed by
        creators and then understood and used by consumers.
      </p>
      {/* <div className="contact-details">
        <p>
          <span className="contact-icon" role="img" aria-label="Email">📧</span>
          <a href="mailto:contact@yourcompany.com" className="contact-link" aria-label="Email us">contact@yourcompany.com</a>
        </p>

        <p>
          <span className="contact-icon" role="img" aria-label="Phone">📞</span>
          <a href="tel:+1234567890" className="contact-link" aria-label="Call us">+91 8767898764</a>
        </p>

        <p>
          <span className="contact-icon" role="img" aria-label="Location">📍</span>
          123 Street, Bangalore City
        </p>
      </div> */}
    </div>
  );
};

export default ContactUs;
