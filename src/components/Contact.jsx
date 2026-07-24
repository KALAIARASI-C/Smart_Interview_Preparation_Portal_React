import "../css/Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h2>Contact Us</h2>

      <p className="contact-subtitle">
        Have questions? We'd love to hear from you.
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>📧 support@smartinterview.com</p>
          <p>📞 +91 9876543210</p>
        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter your name"
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <textarea
            rows="5"
            placeholder="Enter your message"
          ></textarea>

          <button>Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;