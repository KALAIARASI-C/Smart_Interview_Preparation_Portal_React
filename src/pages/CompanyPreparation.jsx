import "../css/CompanyPreparation.css";

function CompanyPreparation() {
  return (
    <div className="company-page">

      <h1>Company Preparation</h1>

      <p>
        Prepare for top IT companies with company-specific interview questions.
      </p>

      <div className="company-grid">

        <div className="company-box">
          <h2>TCS</h2>
          <p>Aptitude, Coding & HR Questions</p>
          <button>Explore</button>
        </div>

        <div className="company-box">
          <h2>Infosys</h2>
          <p>Placement Preparation</p>
          <button>Explore</button>
        </div>

        <div className="company-box">
          <h2>Wipro</h2>
          <p>Interview Questions</p>
          <button>Explore</button>
        </div>

        <div className="company-box">
          <h2>Accenture</h2>
          <p>Mock Test & Coding</p>
          <button>Explore</button>
        </div>

        <div className="company-box">
          <h2>Zoho</h2>
          <p>Programming Questions</p>
          <button>Explore</button>
        </div>

        <div className="company-box">
          <h2>Amazon</h2>
          <p>DSA & System Design</p>
          <button>Explore</button>
        </div>

        <div className="company-box">
          <h2>Google</h2>
          <p>Algorithms & Coding</p>
          <button>Explore</button>
        </div>

        <div className="company-box">
          <h2>Microsoft</h2>
          <p>Interview Preparation</p>
          <button>Explore</button>
        </div>

      </div>

    </div>
  );
}

export default CompanyPreparation;