import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="div-signup">
      {/* Header */}
      <div className="signup-page">
        <h1>Contact Page</h1>
      </div>

      {/* Form */}
      <div className="div-form">
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
        </form>
      </div>

      {/* Sign up / Login Links */}
      <div className="div-signup-login">
        <h1>Sign up</h1>
        <h2>Login</h2>
      </div>
    </div>
  );
}

export default Contact;
