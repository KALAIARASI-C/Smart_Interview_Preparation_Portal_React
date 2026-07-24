import "../css/Aptitude.css";

function Aptitude() {
  return (
    <div className="aptitude">

      <h1>Aptitude Practice</h1>

      <p>Improve your aptitude skills for placement interviews.</p>

      <div className="aptitude-container">

        <div className="aptitude-card">
          <h2>🔢 Quantitative Aptitude</h2>
          <p>Practice arithmetic, algebra, percentage and more.</p>
          <button>Start</button>
        </div>

        <div className="aptitude-card">
          <h2>🧩 Logical Reasoning</h2>
          <p>Improve analytical and logical thinking skills.</p>
          <button>Start</button>
        </div>

        <div className="aptitude-card">
          <h2>📖 Verbal Ability</h2>
          <p>Enhance grammar, vocabulary and comprehension.</p>
          <button>Start</button>
        </div>

        <div className="aptitude-card">
          <h2>📊 Data Interpretation</h2>
          <p>Solve charts, graphs and data analysis questions.</p>
          <button>Start</button>
        </div>

      </div>

    </div>
  );
}

export default Aptitude;