import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import headshot from "./assets/headshot.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Projects from "./Projects";
import Experiences from "./Experiences";
import ContactForm from "./ContactForm"; // Import the new Contact component

function App() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "./assets/RESUME.pdf";
    link.download = "RESUME.pdf";
    link.click();
  };

  return (
    <Router>
      <div className="App">
        {/* Sidebar Navigation */}
        <nav className="sidebar">
          <ul className="nav-links">
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#experience">Experiences</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            {/* Landing Page */}
            <Route
              path="/"
              element={
                <>
                  {/* About Me Section */}
                  <div id="about-me" className="about-me-container">
                    <div className="headshot-container">
                      <img src={headshot} alt="Grace Feng Headshot" className="headshot" />
                      <div className="headshot-overlay">
                        <h1 className="name">Grace Feng</h1>
                        <p className="greeting">
                          Hi! I'm a 3rd year Computer Science major at the University of California, Santa Barbara.
                          I love to get creative with tech — keep reading to find out more!
                        </p>
                        <div className="social-icons">
                          <a
                            href="https://github.com/gracefeng05"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub size={30} />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/gracetfeng"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin size={30} />
                          </a>
                          <button className="resume-button" onClick={handleResumeDownload}>
                            Download My Resume
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Spotify Embed */}
                    <div className="spotify-embed">
                      <h2>More about me!</h2>
                      <p>
                        In my free time, I like to draw, bike, and listen to music! Here's what I'm listening to now:
                      </p>
                    </div>
                  </div>

                  {/* Experiences Section */}
                  <div id="experience" className="landing-experiences">
                    <h2>Experience</h2>
                    <Experiences />
                  </div>

                  {/* Projects Section */}
                  <div id="projects" className="landing-projects">
                    <h2>Projects</h2>
                    <Projects />
                  </div>

                  {/* Contact Section */}
                  <div id="contact" className="landing-contact">
                    <ContactForm />
                  </div>
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
