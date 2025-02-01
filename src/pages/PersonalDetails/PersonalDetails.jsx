import React from "react";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  return (
    <div className="personal-details-content" >
      <h2>Personal Details</h2>
      <div className="personal-details-form py-3">
        <div className="form-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
              fill="#161616"
            />
          </svg>
          <input
            type="text"
            id="nameInput"
            placeholder="Enter your Name"
            aria-label="Name"
          />
        </div>
        <div className="form-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
              fill="#161616"
            />
          </svg>
          <input
            type="text"
            id="mobileInput"
            placeholder="Enter your Mobile Number"
            aria-label="Mobile Number"
          />
        </div>
        <div>
          <textarea
            rows="3"
            id="addressInput"
            placeholder="Enter your Address"
            className="textarea"
            aria-label="Address"
          ></textarea>
        </div>
        {/* <button type="submit" className="personal-details-btn">
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default PersonalDetails;
