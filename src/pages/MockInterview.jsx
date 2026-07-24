import "../css/MockInterview.css";

function MockInterview() {
  return (
    <div className="mock-interview">

      <h1>Mock Interview</h1>

      <p>
        Practice interview questions and improve your confidence.
      </p>

      <div className="mock-container">

        <div className="mock-card">
          <h2>💻 Technical Interview</h2>
          <p>Java, Python, C++, SQL and Web Development questions.</p>
          <button>Start Interview</button>
        </div>

        <div className="mock-card">
          <h2>👤 HR Interview</h2>
          <p>Practice HR questions with sample answers.</p>
          <button>Start Interview</button>
        </div>

        <div className="mock-card">
          <h2>🧠 Aptitude Round</h2>
          <p>Attempt aptitude and logical reasoning questions.</p>
          <button>Start Test</button>
        </div>

        <div className="mock-card">
          <h2>🎤 Communication Round</h2>
          <p>Improve speaking and presentation skills.</p>
          <button>Start Practice</button>
        </div>

      </div>

    </div>
  );
}

export default MockInterview;