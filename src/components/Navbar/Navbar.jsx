import React from "react";
import { Link } from "react-router-dom"; 
import {
  Container,
  Nav,
  Navbar as BSNavbar,
  Offcanvas,
  Button,
} from "react-bootstrap";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const NavbarComponent = ({ page, setPage, showOffcanvas, setShowOffcanvas }) => {
  return (
    <>
      <BSNavbar 
        bg="light" 
        expand="lg" 
        className="px-3 py-3" 
        role="navigation" 
        aria-label="Main Navigation"
      >
        <Container>
          <BSNavbar.Brand>
            <Link to="/" className="navbar-brand">
              <img 
                src={logo}
                alt="Company Logo" 
                className="navbar-logo" 
                id="company-logo" 
              />
            </Link>
          </BSNavbar.Brand>

          {/* Mobile Menu Button */}
          <Button
            variant="none"
            className="text-right d-lg-none menu-btn"
            onClick={() => setShowOffcanvas(true)}
            data-aos="fade-right"
            aria-label="Open menu"
            id="menu-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="24"
              height="24"
              strokeWidth="2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l10 0"></path>
              <path d="M4 18l14 0"></path>
            </svg>
          </Button>

          {/* Desktop Navigation */}
          <Nav className="d-none d-lg-flex" aria-label="Primary Navigation">
            <Link 
              to="/ourteam" 
              id="nav-ourteam"
              className={`nav-link ${page === "ourteam" ? "active-link" : ""}`} 
              onClick={() => setPage("ourteam")}
            >
              Our Team
            </Link>
            <Link 
              to="/personal" 
              id="nav-personal"
              className={`nav-link ${page === "personal" ? "active-link" : ""}`} 
              onClick={() => setPage("personal")}
            >
              Personal Details
            </Link>
            <Link 
              to="/contact" 
              id="nav-contact"
              className={`nav-link ${page === "contact" ? "active-link" : ""}`} 
              onClick={() => setPage("contact")}
            >
              Contact Us
            </Link>
          </Nav>
        </Container>
      </BSNavbar>

      {/* Offcanvas (Mobile Sidebar Navigation) */}
      <Offcanvas 
        show={showOffcanvas} 
        onHide={() => setShowOffcanvas(false)} 
        placement="start"
        aria-labelledby="mobile-menu" 
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="mobile-menu">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Link 
              to="/ourteam" 
              id="offcanvas-ourteam"
              className={`nav-link ${page === "ourteam" ? "active-link" : ""}`} 
              onClick={() => { setPage("ourteam"); setShowOffcanvas(false); }}
            >
              Our Team
            </Link>
            <Link 
              to="/personal" 
              id="offcanvas-personal"
              className={`nav-link ${page === "personal" ? "active-link" : ""}`} 
              onClick={() => { setPage("personal"); setShowOffcanvas(false); }}
            >
              Personal Details
            </Link>
            <Link 
              to="/contact" 
              id="offcanvas-contact"
              className={`nav-link ${page === "contact" ? "active-link" : ""}`} 
              onClick={() => { setPage("contact"); setShowOffcanvas(false); }}
            >
              Contact Us
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;
