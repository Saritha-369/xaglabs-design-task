import React from "react";  
import { Link } from "react-router-dom"; 
import "./Sidebar.css";


const LeftSidebar = ({ page, setPage }) => {
  const sidebarClass = "sidebar left-sidebar p-3";  

  return (
    <div 
      className="left-sidebar-container d-none d-lg-block" 
      role="navigation" 
      aria-label="Left Sidebar"
      data-aos="fade-left"  
      data-aos-duration="400"  
      data-aos-once="true" 
    >
      {(page === "personal" || page === "contact") && (
        <div className="d-flex">
          <div 
            className={`${sidebarClass} bg-white text-black`} 
            id="ourTeamLink"
            data-aos="fade-left"  
            data-aos-duration="400"
          >
            <Link
              to="/ourteam"
              className={`nav-link ${page === "ourteam" ? "active-link" : ""}`}
              onClick={() => setPage("ourteam")}
              aria-current={page === "ourteam" ? "page" : undefined}
              aria-label="Navigate to Our Team page"
            >
              Our Team
            </Link>
          </div>
          {page === "contact" && (
            <div 
              className={`${sidebarClass} sidebar-pink text-white`} 
              id="personalDetailsLink"
              data-aos="fade-left" 
              data-aos-duration="400"
             
            >
              <Link
                to="/personal"
                className={`nav-link ${page === "personal" ? "active-link" : ""}`}
                onClick={() => setPage("personal")}
                aria-current={page === "personal" ? "page" : undefined}
                aria-label="Navigate to Personal Details page"
              >
                Personal Details
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
