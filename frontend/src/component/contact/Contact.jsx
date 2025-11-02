// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     lname: "",
//     email: "",
//     password: "",
//   });

//   const [contacts, setContacts] = useState([]); // store saved contacts
//   const [loading, setLoading] = useState(false); // loading state for submit

//   // Fetch all contacts on component mount
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/contacts`);
//         if (res.data.success) {
//           setContacts(res.data.data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch contacts:", error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/add-contact`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message);
//         console.log("Saved Contact:", data);

//         // Add new contact to state
//         setContacts([
//           ...contacts,
//           { ...formData, contact_id: data.contact_id },
//         ]);

//         // Clear the form
//         setFormData({ name: "", lname: "", email: "", password: "" });
//       } else {
//         // Show backend error
//         alert(data.error || "Failed to save contact.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to save contact. Check server connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="div-signup">
//       <div className="signup-page">
//         <h1>Contact Page</h1>
//       </div>

//       <div className="div-form">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="lname"
//             placeholder="Enter your lastname"
//             value={formData.lname}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Saving..." : "Submit"}
//           </button>
//         </form>

//         {/* Display saved contacts */}
//         <div className="saved-contacts">
//           <h2>Saved Contacts</h2>
//           <ul>
//             {contacts.map((c) => (
//               <li key={c.contact_id}>
//                 {c.name} - {c.lname} - {c.email}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;





import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
  });

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null); // id of contact being edited

  // Fetch all contacts on mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/contacts`);
      if (res.data.success) {
        setContacts(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit add/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res;
      if (editingId) {
        // Update contact
        res = await axios.put(
          `${import.meta.env.VITE_API_URL}/contacts/${editingId}`,
          formData
        );
      } else {
        // Add new contact
        res = await axios.post(
          `${import.meta.env.VITE_API_URL}/add-contact`,
          formData
        );
      }

      const data = res.data;

      if (data.success) {
        alert(data.message);

        // Refresh contacts
        fetchContacts();

        // Reset form
        setFormData({ name: "", lname: "", email: "", password: "" });
        setEditingId(null);
      } else {
        alert(data.error || "Failed to save contact.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to save contact. Check server connection.");
    } finally {
      setLoading(false);
    }
  };

  // Delete contact
  const handleDelete = async (contact_id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/contacts/${contact_id}`
      );

      if (res.data.success) {
        setContacts(contacts.filter((c) => c.contact_id !== contact_id));
        alert("Contact deleted successfully!");
      } else {
        alert(res.data.error || "Failed to delete contact.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete contact. Check server connection.");
    }
  };

  // Populate form for editing
  const handleEdit = (contact) => {
    setFormData({
      name: contact.name,
      lname: contact.lname,
      email: contact.email,
      password: "", // leave blank for security
    });
    setEditingId(contact.contact_id);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setFormData({ name: "", lname: "", email: "", password: "" });
    setEditingId(null);
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
            required
          />
          <input
            type="text"
            name="lname"
            placeholder="Enter your lastname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required={!editingId} // password required only for new
          />
          <button type="submit" disabled={loading}>
            {loading
              ? "Saving..."
              : editingId
              ? "Update Contact"
              : "Add Contact"}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          )}
        </form>

        {/* Display saved contacts */}
        <div className="saved-contacts">
          <h2>Saved Contacts</h2>
          <ul>
            {contacts.map((c) => (
              <li key={c.contact_id}>
                {c.name} - {c.lname} - {c.email}{" "}
                <button onClick={() => handleEdit(c)}>Edit</button>
                <button onClick={() => handleDelete(c.contact_id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

