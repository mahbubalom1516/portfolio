import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      category: 'Mobile Design',
      description: 'A modern e-commerce app with intuitive navigation and seamless checkout experience.',
      tags: ['UI Design', 'UX Research', 'Prototyping'],
      color: '#0ea5e9'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'Web Design',
      description: 'Complex data visualization dashboard made simple and accessible for all users.',
      tags: ['UI Design', 'Data Viz', 'Web App'],
      color: '#06b6d4'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'Mobile Design',
      description: 'Gamified fitness tracking app that motivates users to achieve their health goals.',
      tags: ['Mobile', 'UX Design', 'Interaction'],
      color: '#14b8a6'
    },
    {
      id: 4,
      title: 'Banking Platform',
      category: 'Web Design',
      description: 'Secure and user-friendly banking interface with focus on accessibility.',
      tags: ['UI/UX', 'Fintech', 'Web'],
      color: '#0891b2'
    },
    {
      id: 5,
      title: 'Social Media App',
      category: 'Mobile Design',
      description: 'Engaging social platform with innovative features for content creators.',
      tags: ['Mobile', 'Social', 'UI Design'],
      color: '#06b6d4'
    },
    {
      id: 6,
      title: 'Restaurant Booking',
      category: 'Web Design',
      description: 'Streamlined restaurant reservation system with real-time availability.',
      tags: ['Web App', 'Booking', 'UX'],
      color: '#0ea5e9'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of my recent work showcasing various design challenges and solutions
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image" style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)` }}>
                <div className="project-overlay">
                  <button className="project-link">View Project</button>
                </div>
              </div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
