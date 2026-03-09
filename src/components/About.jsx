import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate UI/UX designer with a keen eye for detail and a love for creating
              seamless user experiences. With expertise in user research, wireframing, prototyping,
              and visual design, I transform complex problems into elegant, intuitive solutions.
            </p>
            <p className="about-description">
              My design philosophy centers around understanding user needs, iterative design processes,
              and creating accessible experiences that work for everyone. I believe great design is
              invisible—it just works.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">30+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
