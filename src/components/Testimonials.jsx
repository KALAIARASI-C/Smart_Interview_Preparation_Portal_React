import "../css/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Students Say</h2>

      <p className="testimonial-subtitle">
        Success stories from students who prepared using our portal.
      </p>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "The coding practice and mock interviews helped me crack my
            placement interview with confidence."
          </p>
          <h4>- Rahul, TCS</h4>
        </div>

        <div className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "The aptitude tests improved my problem-solving skills. Highly
            recommended for placement preparation."
          </p>
          <h4>- Priya, Infosys</h4>
        </div>

        <div className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "Company-wise interview questions gave me a clear idea of what to
            expect in real interviews."
          </p>
          <h4>- Arjun, Accenture</h4>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;