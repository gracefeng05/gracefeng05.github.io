import React from "react";
import "./Projects.css";
import SpotifAI from "./assets/SpotifAI.png";
import NaiveBayes from "./assets/NaiveBayes.png";

const projects = [
  {
    title: "SpotifAI",
    description: "Spotify clone with added features.",
    image: SpotifAI,
    github: "https://github.com/ucsb-cs148-w24/project-pj10-spotifai",
  },
  {
    title: "ML Weather Predictor",
    description: "Naive Bayes machine learning model trained to predict weather",
    image: NaiveBayes,
    github: "https://github.com/gracefeng05/Weather-Classifier-ML/tree/main",
  },
];

function Projects() {
  return (
    <div className="projects-page">
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
