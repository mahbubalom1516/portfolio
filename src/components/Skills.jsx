import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Design Tools',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision']
    },
    {
      title: 'UX Skills',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Information Architecture', 'User Flows']
    },
    {
      title: 'UI Skills',
      skills: ['Visual Design', 'Design Systems', 'Typography', 'Color Theory', 'Iconography', 'Responsive Design']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          A comprehensive toolkit for creating exceptional digital experiences
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-icon">✓</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
