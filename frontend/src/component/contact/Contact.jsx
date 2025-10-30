import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [contacts, setContacts] = useState([]); // store saved contacts

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/add-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
      console.log("Saved Contact:", data);

      // Add new contact to state
      setContacts([...contacts, data]);

      // Clear the form
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to save contact. Check server connection.");
    }
  };

  return (
    <div className="div-signup">
      <div className="signup-page">
        <h1>Contact Page</h1>
      </div>

      <div className="div-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        {/* Display saved contacts */}
        <div className="saved-contacts">
          <h2>Saved Contacts</h2>
          <ul>
            {contacts.map((c) => (
              <li key={c.contact_id}>
                {c.name} - {c.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
