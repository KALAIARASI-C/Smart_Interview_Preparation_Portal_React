import "../css/Companies.css";

function Companies() {
  return (
    <section className="companies">

      <h2>Top Companies Hiring</h2>

      <p>
        Prepare for interviews from leading product and service-based companies.
      </p>

      <div className="company-container">

        <div className="company-card">Google</div>

        <div className="company-card">Microsoft</div>

        <div className="company-card">Amazon</div>

        <div className="company-card">Infosys</div>

        <div className="company-card">TCS</div>

        <div className="company-card">Wipro</div>

        <div className="company-card">Accenture</div>

        <div className="company-card">Zoho</div>

      </div>

    </section>
  );
}

export default Companies;