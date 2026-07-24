import "../css/FAQ.css";

function FAQ() {
  return (
    <section className="faq">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">

        <div className="faq-card">
          <h3>What is Smart Interview Portal?</h3>
          <p>
            It is an online platform that helps students prepare for coding,
            aptitude, technical interviews, and placements.
          </p>
        </div>

        <div className="faq-card">
          <h3>Is this platform free?</h3>
          <p>
            Yes. Students can access learning materials and practice tests
            without any cost.
          </p>
        </div>

        <div className="faq-card">
          <h3>Can I practice coding?</h3>
          <p>
            Yes. The portal provides coding questions from beginner to advanced
            level.
          </p>
        </div>

        <div className="faq-card">
          <h3>Do you provide mock interviews?</h3>
          <p>
            Yes. Students can attend mock interviews to improve confidence and
            communication skills.
          </p>
        </div>

        <div className="faq-card">
          <h3>Can I track my progress?</h3>
          <p>
            Yes. The dashboard helps you monitor your learning progress and
            completed activities.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FAQ;