import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Car selling website design",
      img: "https://cdn.dribbble.com/userupload/47301000/file/07c3e802facd9c8eef98fa672434471f.jpg?resize=1024x1104&vertical=center",
      category: "Web Design",
      description:
        "A modern car selling website with intuitive navigation and seamless booking experience.",
      tags: ["UI Design", "Web Design", "Prototyping"],
      link: "https://dribbble.com/shots/27253974-A-Modern-Car-Selling-Landing-Page-Design?utm_source=Clipboard_Shot&utm_campaign=mahbubalomuiux16&utm_content=A%20Modern%20Car%20Selling%20Landing%20Page%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=mahbubalomuiux16&utm_content=A%20Modern%20Car%20Selling%20Landing%20Page%20Design&utm_medium=Social_Share",
      color: "#0ea5e9",
    },
    {
      id: 2,
      title: "Barber Shop Website UI Design",
      category: "Web Design",
      description:
        "This project is a modern and visually appealing Barber Shop Website UI Design created to provide a premium user experience.",
      tags: ["UI Design", "UX Design", "Web Design"],
      img: "https://cdn.dribbble.com/userupload/47236918/file/fb1ababc3c6927fd3305ed367093e3c7.jpg?resize=1024x728&vertical=center",
      link: "https://dribbble.com/shots/27235316-Barber-Shop-Website-UI-Design",
      color: "#06b6d4",
    },
    {
      id: 3,
      title: "Case Study Health & Wellness Website",
      category: "Case Study",
      description:
        "This project is designed as a modern platform focused on promoting healthy living through accessible and engaging content.",
      tags: ["Web Design", "UI Design", "Case Study"],
      link: "https://dribbble.com/shots/27314996-Case-Study-Health-Wellness-Website",
      img: "https://cdn.dribbble.com/userupload/47410907/file/2e15bee62196b31d93811a900ae9f428.png?resize=1024x712&vertical=center",
      color: "#14b8a6",
    },
    {
      id: 4,
      title: "A Modern Multi Role Mobile App UI Design",
      category: "Mobile APP Design",
      description:
        "Clean, modern, and user-focused mobile app interface designed to ensure smooth navigation and a seamless user experience. Focused on clarity, usability, and minimal aesthetics.",
      tags: ["UI/UX", "Mobile App", "App Design"],
      link: "https://www.behance.net/gallery/244212995/Influencer-Mobile-App-Ui-Design",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a413c8244212995.6992dc7c2ad1e.jpg",
      color: "#0891b2",
    },
    {
      id: 5,
      title: "Investment Mobile App Ui Design",
      category: "Mobile APP Design",
      description:
        "A clean, modern, and user-focused mobile app interface designed to ensure smooth navigation and a seamless user experience.",
      tags: ["Mobile App", "App Design", "UI Design"],
      link: "https://www.behance.net/gallery/244946889/Investment-Mobile-App-Ui-Design",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e2899e244946889.69a27c7e8214a.jpg",
      color: "#06b6d4",
    },
    {
      id: 6,
      title: "Doctor Service Dashboard UI/UX design",
      category: "Web Design",
      description:
        "MedSync360 is a modern and intuitive doctor service dashboard designed to simplify healthcare management for clinics, hospitals, and medical professionals.",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ddd418245655687.69b24ea529a33.jpg",
      link: "https://www.behance.net/gallery/245655687/Doctor-Service-Dashboard-UiUX-design",
      tags: ["Dashboard Design", "UI Design", "UX Design"],
      color: "#0ea5e9",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of my recent work showcasing various design challenges and
          solutions
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-image"
                style={{
                  background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
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
