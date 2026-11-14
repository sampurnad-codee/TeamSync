
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">TeamSync<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#discover">Discover</a>
        </div>

        <button className="login-btn">Log In</button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">
            ✨ FIND YOUR PERFECT TEAM
          </p>

          <h1>
            Great ideas need
            <br />
            <span>great teammates.</span>
          </h1>

          <p className="description">
            Connect with students who share your interests,
            complement your skills, and are ready to build
            something amazing together.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Find Teammates →
            </button>

            <button className="secondary-btn">
              Create a Team
            </button>
          </div>

          <p className="small-text">
            Built for hackathons. Made for collaboration.
          </p>
        </div>

        <div className="hero-card">
          <div className="emoji">🚀</div>
          <h3>Your next great team starts here.</h3>
          <p>Skills • Interests • Availability</p>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Everything you need to find your team</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Skill Matching</h3>
            <p>Find teammates with complementary technical skills.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Shared Interests</h3>
            <p>Connect with students who love the same projects.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗓️</div>
            <h3>Availability</h3>
            <p>Build teams that can actually work together.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
