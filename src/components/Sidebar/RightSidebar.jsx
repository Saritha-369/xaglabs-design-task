import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import "aos/dist/aos.css";

const RightSidebar = ({ page, setPage }) => {
  const sidebarClass = "sidebar right-sidebar p-3 vh-100";

  return (
    <div
      className="right-sidebar-container d-none d-lg-block"
      role="navigation"
      aria-labelledby="right-sidebar-heading"
    >
      <h2 id="right-sidebar-heading" className="visually-hidden">
        Right Sidebar Navigation
      </h2>
      <div className="d-flex">
        {page === "ourteam" && (
          <>
            <div
              className={`${sidebarClass} bg-danger text-white`}
              id="personal-link-section"
            >
              <Nav.Link
                as={Link}
                to="/personal"
                id="personal-link"
                className={`nav-link ${
                  page === "personal" ? "active-link" : ""
                }`}
                onClick={() => setPage("personal")}
                aria-label="Navigate to Personal Details page"
                aria-current={page === "personal" ? "page" : undefined}
              >
                Personal Details
              </Nav.Link>
            </div>
            <div
              className={`${sidebarClass} bg-warning text-white`}
              id="contact-link-section"
            >
              <Nav.Link
                as={Link}
                to="/contact"
                id="contact-link"
                className={`nav-link ${
                  page === "contact" ? "active-link" : ""
                }`}
                onClick={() => setPage("contact")}
                aria-label="Navigate to Contact Us page"
                aria-current={page === "contact" ? "page" : undefined}
              >
                Contact Us
              </Nav.Link>
            </div>
          </>
        )}
        {page === "personal" && (
          <div
            className={`${sidebarClass} bg-warning text-white`}
            id="contact-link-section"
          >
            <Nav.Link
              as={Link}
              to="/contact"
              id="contact-link"
              className={`nav-link ${page === "contact" ? "active-link" : ""}`}
              onClick={() => setPage("contact")}
              aria-label="Navigate to Contact Us page"
              aria-current={page === "contact" ? "page" : undefined}
            >
              Contact Us
            </Nav.Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
