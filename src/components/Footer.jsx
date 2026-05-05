import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-text">
              Creating beautiful and functional designs that make a difference.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-links">
              <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button>
              <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
              <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button>
            </nav>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/md-mahbub-alom-9548553bb" target="_blank" className="footer-social-link">LinkedIn</a>
              <a href="https://dribbble.com/mahbubalomuiux16/" target="_blank" className="footer-social-link">Dribbble</a>
              <a href="https://www.behance.net/mdmahbubalom9" target="_blank" className="footer-social-link">Behance</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Md. Mahbub Alom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
