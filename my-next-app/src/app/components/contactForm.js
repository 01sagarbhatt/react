"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccessMessage("Error sending message!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 display-6">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow" method="POST">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          {successMessage && <p className="mt-3 text-center text-success">{successMessage}</p>}                                     
          </form>
        </div>
      </div>
    </div>
  );
}
