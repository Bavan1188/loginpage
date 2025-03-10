import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../STYLES/LoginPage.css"; // Ensure this file exists
import logo from "../IMAGES/LOGO.png"; // Ensure file name matches case
import loginImage from "../IMAGES/pgr.png"; // Ensure file exists

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login button clicked!");

    if (email.endsWith("@nmsolutions.co.in")) {
      setUser({ email });  // Pass the email to setUser
      navigate("/dashboard");  // Redirect to dashboard page
    } else {
      alert("Please use your official NutMeg email.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={logo} alt="NutMeg Logo" className="logo" />
        <p className="motto">
          Simplifying Complexity, Empowering Growth – Redefining Possibilities Through Innovation.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h1>WELCOME TO NUTMEG SOFTWARE SOLUTIONS</h1>
        
        <div className="input-container">
          <span className="icon">➔</span>
          <input
            type="email"
            placeholder="ENTER YOUR USERNAME HERE"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="sso-button" onClick={handleLogin}>
          LOGIN WITH SSO
        </button>
        <p className="sso-info">Use your official NutMeg email to proceed</p>

        {/* Illustration Image */}
        <div className="illustration">
          <img src={loginImage} alt="Login Illustration" />
        </div>

        <p className="footer">© NutMeg Software Solutions 2024</p>
      </div>
    </div>
  );
};

export default LoginPage;
