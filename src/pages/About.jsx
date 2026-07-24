import "../css/About.css";

function About() {
  return (
    <div className="about">

      <h1>About Smart Interview Portal</h1>

      <p className="about-intro">
        Smart Interview Portal is an online platform designed to help students
        prepare for placement interviews through coding practice, aptitude
        tests, mock interviews and company-specific preparation.
      </p>

      <div className="about-container">

        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            To help every student become placement-ready with structured
            learning.
          </p>
        </div>

        <div className="about-card">
          <h2>💡 Our Vision</h2>
          <p>
            To build a single platform for interview preparation and career
            growth.
          </p>
        </div>

        <div className="about-card">
          <h2>🚀 Features</h2>
          <p>
            Coding Practice, Aptitude, Mock Interviews, Company Preparation,
            Progress Tracking and Profile Management.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;