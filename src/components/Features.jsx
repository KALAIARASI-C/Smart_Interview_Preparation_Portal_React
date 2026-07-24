import "../css/Features.css";

function Features() {

  return (

    <section className="features">

      <h2>
        Our Features
      </h2>

      <div className="feature-container">

        <div className="card">
          <h3>Coding Practice</h3>
          <p>
            Solve programming questions
            with multiple difficulty levels.
          </p>
        </div>

        <div className="card">
          <h3>Aptitude Test</h3>
          <p>
            Improve logical reasoning
            and quantitative aptitude.
          </p>
        </div>

        <div className="card">
          <h3>Mock Interview</h3>
          <p>
            Prepare confidently using
            interview simulations.
          </p>
        </div>

        <div className="card">
          <h3>Company Preparation</h3>
          <p>
            Company-wise interview
            preparation resources.
          </p>
        </div>

      </div>

    </section>

  );
}

export default Features;