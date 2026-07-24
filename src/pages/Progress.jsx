import "../css/Progress.css";

function Progress() {
  return (
    <div className="progress-page">

      <h1>Your Learning Progress</h1>

      <p>Track your interview preparation progress.</p>

      <div className="progress-container">

        <div className="progress-card">
          <h2>💻 Coding</h2>
          <progress value="70" max="100"></progress>
          <p>70% Completed</p>
        </div>

        <div className="progress-card">
          <h2>🧠 Aptitude</h2>
          <progress value="55" max="100"></progress>
          <p>55% Completed</p>
        </div>

        <div className="progress-card">
          <h2>🎤 Mock Interview</h2>
          <progress value="40" max="100"></progress>
          <p>40% Completed</p>
        </div>

        <div className="progress-card">
          <h2>🏢 Company Preparation</h2>
          <progress value="65" max="100"></progress>
          <p>65% Completed</p>
        </div>

      </div>

    </div>
  );
}

export default Progress;