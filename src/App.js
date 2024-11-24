import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import headshot from "./assets/headshot.png";
import { FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa";
import Projects from "./Projects";
import Experiences from "./Experiences";

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experiences">Experiences</Link></li>
            <li><Link to="/socials">Socials</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            {/* Landing Page */}
            <Route
              path="/"
              element={
                <div className="headshot-container">
                  <img src={headshot} alt="Grace Feng Headshot" className="headshot" />
                  <div className="headshot-overlay">
                    <h1 className="name">Grace Feng</h1>
                    <p className="greeting">
                      Hi! I'm a 3rd year Computer Science major at the University of California, Santa Barbara.
                      I love to be creative with tech — keep reading to find out more!
                    </p>
                    <div className="social-icons">
                      <a href="https://github.com/gracefeng05" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                      </a>
                      <a href="https://www.linkedin.com/in/gracetfeng" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                      </a>
                      <a href="mailto:gracefeng@ucsb.edu">
                        <FaEnvelope size={30} />
                      </a>
                    </div>
                    <button className="resume-button" onClick={handleResumeDownload}>
                      Download Resume
                    </button>
                  </div>
                </div>
              }
            />

            {/* Projects Page */}
            <Route path="/projects" element={<Projects />} />

            {/* Experiences Page */}
            <Route path="/experiences" element={<Experiences />} />

            {/* Socials Page */}
            <Route
              path="/socials"
              element={
                <div className="socials-page">
                  <h1>Socials</h1>
                  <p>Follow me on GitHub and LinkedIn!</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
