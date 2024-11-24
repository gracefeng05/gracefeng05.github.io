import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    image: "https://via.placeholder.com/150", // Replace with your image URL
    github: "https://github.com/username/project1", // Replace with the actual GitHub URL
  },
  {
    title: "Project 2",
    description: "This is a description of Project 2.",
    image: "https://via.placeholder.com/150", // Replace with your image URL
    github: "https://github.com/username/project2", // Replace with the actual GitHub URL
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
