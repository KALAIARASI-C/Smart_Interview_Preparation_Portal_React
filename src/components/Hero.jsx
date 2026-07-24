import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Crack Your Dream Job
          <br />
          with Smart Interview
          <span> Preparation Portal</span>
        </h1>

        <p>
          Practice Coding, Aptitude,
          Mock Interviews and prepare
          for top product companies
          in one platform.
        </p>

        <button>
          Get Started
        </button>

      </div>

      <div className="hero-right">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="student"
        />

      </div>

    </section>
  );
}

export default Hero;