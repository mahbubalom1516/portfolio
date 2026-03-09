import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            <span className="hero-name">Your Name</span>
            <span className="hero-role">UI/UX Designer</span>
          </h1>
          <p className="hero-description">
            Creating beautiful, intuitive, and user-centered digital experiences
            that solve real problems and delight users.
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
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
