import React, { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // Logic: You can integrate Formspree here by adding their endpoint
    // For now, we simulate a successful send for the UI appeal
    setTimeout(() => {
      setStatus("Message Sent Successfully!");
      e.target.reset();
    }, 2000);
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>Have a project in mind? Let's build something amazing together.</p>
          
          <div className="info-item">
            <Mail className="contact-icon" />
            <span>haymanotebabu2@gmail.com</span>
          </div>
          <div className="info-item">
            <MessageSquare className="contact-icon" />
            <span>Available for Freelance</span>
          </div>
        </div>

        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <User className="input-icon" size={18} />
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="input-group">
              <Mail className="input-icon" size={18} />
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {status === "Sending..." ? "Processing..." : "Send Message"}
              <Send size={18} style={{ marginLeft: "10px" }} />
            </button>
            
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;