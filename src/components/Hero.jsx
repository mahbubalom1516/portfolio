import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            <span className="hero-name">Md. Mahbub Alom</span>
            <span className="hero-role">UI/UX Designer</span>
          </h1>
          <p className="hero-description">
            Designing digital products that are simple, smart, and user-focused.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img src="https://i.ibb.co.com/7BG7xJ1/profile.png" alt="Profile" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
