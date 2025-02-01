import React, { useState, useEffect } from "react"; 
import { Route, Routes, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingIcons from "./components/FloatingIcons/FloatingIcons";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import RightSidebar from "./components/Sidebar/RightSidebar";
import OurTeam from "./pages/OurTeam/OurTeam";
import PersonalDetails from "./pages/PersonalDetails/PersonalDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const location = useLocation();

  const getCurrentPage = () => {
    if (location.pathname === "/") return "ourteam";
    if (location.pathname === "/personal") return "personal";
    if (location.pathname === "/contact") return "contact";
    return "ourteam";
  };

  const [page, setPage] = useState(getCurrentPage); // Use getCurrentPage after its definition
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    setPage(getCurrentPage());
  }, [location]);

  return (
    <>
      {/* Navbar */}
      <Navbar
        page={page}
        setPage={setPage}
        showOffcanvas={showOffcanvas}
        setShowOffcanvas={setShowOffcanvas}
        aria-label="Main navigation"
      />

      <div className="main-container">
        <aside role="navigation" aria-label="Left Sidebar Navigation">
          {/* Left Sidebar */}
          <LeftSidebar
            page={page}
            setPage={setPage}
          />
        </aside>

        <main role="main" className={`content flex-grow-1 ${page}-bg`} aria-labelledby="page-heading" data-aos="fade-right">
          <h1 id="page-heading" className="visually-hidden">
            {page === "ourteam" ? "Our Team" : page === "personal" ? "Personal Details" : "Contact Us"}
          </h1>
          <Container>
            <Routes>
              <Route path="/" element={<OurTeam />} />
              <Route path="/ourteam" element={<OurTeam />} />
              <Route path="/personal" element={<PersonalDetails />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </Container>
        </main>

        <aside role="navigation" aria-label="Right Sidebar Navigation">
          {/* Right Sidebar */}
          <RightSidebar
            page={page}
            setPage={setPage}
          />
        </aside>
      </div>

      {/* Footer */}
      <Footer aria-label="Footer section" />

      {/* Floating Icons */}
      <FloatingIcons page={page} setPage={setPage} aria-label="Floating Icons" />
    </>
  );
};

export default App;
