import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="contact-subtitle">
        We'd love to hear from you. Feel free to contact us anytime.
      </p>

      <div className="contact-wrapper">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>📍 Coimbatore, Tamil Nadu, India</p>

          <p>📧 smartinterviewportal@gmail.com</p>

          <p>📞 +91 98765 43210</p>

          <p>🕒 Monday - Saturday : 9 AM - 6 PM</p>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      <div className="map-section">

        <h2>Our Location</h2>

        <div className="map-placeholder">
          Google Map will be added here
        </div>

      </div>

    </div>
  );
}

export default Contact;