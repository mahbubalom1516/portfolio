import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              As a UI/UX designer, I focus on crafting experiences that balance usability, functionality, and visual clarity. I enjoy solving design challenges by exploring user behavior and translating insights into thoughtful interface solutions.
            </p>
            <p className="about-description">
              My process involves research, structured design thinking, and continuous iteration to ensure every product delivers real value to its users. I believe the best digital products are the ones that feel simple, intuitive, and purposeful.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3 className="stat-number">2+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">30+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">25+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="../../public/about-me.jpg" alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
