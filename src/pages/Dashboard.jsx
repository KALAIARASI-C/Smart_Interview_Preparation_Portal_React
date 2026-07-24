import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Welcome to Smart Interview Portal</h1>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>

      <p>Choose a module and start your interview preparation.</p>

      <div className="dashboard-container">

        <div className="dashboard-card">
          <h2>💻 Coding Practice</h2>
          <p>Solve coding questions from basic to advanced.</p>
          <button onClick={() => navigate("/coding")}>
            Start
          </button>
        </div>

        <div className="dashboard-card">
          <h2>🧠 Aptitude</h2>
          <p>Practice aptitude and reasoning.</p>
          <button onClick={() => navigate("/aptitude")}>
            Start
          </button>
        </div>

        <div className="dashboard-card">
          <h2>🎤 Mock Interview</h2>
          <p>Practice technical and HR interviews.</p>
          <button onClick={() => navigate("/mock-interview")}>
            Start
          </button>
        </div>

        <div className="dashboard-card">
          <h2>🏢 Company Preparation</h2>
          <p>Prepare company-wise interview questions.</p>
          <button onClick={() => navigate("/company-preparation")}>
            Start
          </button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;