import { Link } from "react-router-dom";
import "../css/CTA.css";

function CTA() {
  return (
    <section className="cta">

      <h2>Ready to Crack Your Dream Job?</h2>

      <p>
        Join thousands of students preparing for coding, aptitude,
        and technical interviews.
      </p>

      <div className="cta-buttons">
        <Link to="/register">
          <button className="register-btn">
            Get Started
          </button>
        </Link>

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>
      </div>

    </section>
  );
}

export default CTA;