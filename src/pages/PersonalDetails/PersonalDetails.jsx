import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast, ToastContainer } from "react-bootstrap";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const namePattern = /^[A-Za-z ]{3,}$/;
  const mobilePattern = /^[0-9]{10}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (!namePattern.test(formData.name)) {
      newErrors.name = "Min 3 letters, no numbers.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[0-9]+$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number should contain only digits.";
    } else if (!mobilePattern.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter your address.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: updatedValue };
      return updatedForm;
    });

    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name]; 
        return updatedErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setToastMessage("Please fix the errors before submitting.");
      setToastVariant("warning");
      setShowToast(true);
    } else {
      setToastMessage("Form submitted successfully!");
      setToastVariant("success");
      setShowToast(true);

      setFormData({
        name: "",
        mobile: "",
        email: "",
        address: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="personal-details-content">
      <h2>Personal Details</h2>
      <div className="personal-details-form py-3">
        <div className="form-group">
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M8 0C9.06 0 10.08 0.42 10.83 1.17C11.58 1.92 12 2.94 12 4C12 5.06 11.58 6.08 10.83 6.83C10.08 7.58 9.06 8 8 8C6.94 8 5.92 7.58 5.17 6.83C4.42 6.08 4 5.06 4 4C4 2.94 4.42 1.92 5.17 1.17C5.92 0.42 6.94 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z" fill="#161616"/>
            </svg>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              aria-label="Name"
            />
          </div>
          {errors.name && <div className="error-msg">{errors.name}</div>}
        </div>

        <div className="form-group">
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#161616"/>
            </svg>
            <input
              type="text"
              name="mobile"
              className="form-control"
              value={formData.mobile}
              onChange={handleChange}
              maxLength="10"
              placeholder="Enter your Mobile Number"
              aria-label="Mobile Number"
            />
          </div>
          {errors.mobile && <div className="error-msg">{errors.mobile}</div>}
        </div>

        <div className="form-group">
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <input
              type="text"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              aria-label="Email"
            />
          </div>
          {errors.email && <div className="error-msg">{errors.email}</div>}
        </div>

        <div className="form-group">
          <textarea
            rows="3"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your Address"
            aria-label="Address"
          ></textarea>
          {errors.address && <div className="error-msg">{errors.address}</div>}
        </div>

        <button type="submit" className="submit-btn btn btn-primary px-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <ToastContainer className="p-3" position="top-center">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={toastVariant}
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default PersonalDetails;
