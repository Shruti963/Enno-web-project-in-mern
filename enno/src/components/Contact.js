// enno/src/components/Contact.js

import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const contactInfo = [
  {
    icon: "bi-geo-alt",
    title: "Address",
    content: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: "bi-telephone",
    title: "Call Us",
    content: "+1 5589 55488 55",
  },
  {
    icon: "bi-envelope",
    title: "Email Us",
    content: "info@example.com",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/create`,
        formData
      );

      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="Head-title">
        <span>Section Title</span>
        <h1>Contact</h1>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container contact-main">
        <div className="row gy-4">
          {/* LEFT INFO */}
          <div className="col-lg-5">
            <div className="info-wrap">
              {contactInfo.map((item, index) => (
                <div className="info-item d-flex" key={index}>
                  <i className={`bi ${item.icon}`}></i>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                style={{ border: 0, width: "100%", height: "270px" }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status && <p className="status-message">{status}</p>}
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
