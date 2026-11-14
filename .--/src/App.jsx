
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">TeamSync<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#login">Login</a>
        </div>

        <button className="nav-button">Join Now</button>
      </nav>

      <section className="hero" id="home">
        <p className="tagline">COLLABORATE. CREATE. INNOVATE.</p>

        <h1>
          Find Your <span>Perfect Team.</span>
        </h1>

        <p className="hero-text">
          Great ideas need great teammates. Connect with students
          who share your interests, complement your skills and are
          ready to build something amazing together.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">Find Teammates →</button>
          <button className="secondary-button">Create a Team</button>
        </div>

        <div className="hero-card">
          <h3>🚀 Your next great team starts here</h3>
          <p>Skills • Interests • Availability</p>
        </div>
      </section>

      <section className="features" id="features">
        <p className="tagline">WHY TEAMSYNC?</p>
        <h2>Everything you need to find your team</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">🎯</div>
            <h3>Skill Matching</h3>
            <p>
              Find teammates whose skills complement yours.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">💡</div>
            <h3>Shared Interests</h3>
            <p>
              Connect with students who love the same ideas.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">⏰</div>
            <h3>Availability</h3>
            <p>
              Build a team that fits your schedule.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <h3>TeamSync.</h3>
        <p>Built for students, powered by collaboration.</p>
      </footer>
    </div>
  );
}

export default App;
