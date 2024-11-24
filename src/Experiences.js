import React from "react";
import "./Experiences.css";
import { FaClock } from "react-icons/fa";

const experiences = [
  { company: "UCSB College of Engineering", role: "Teaching Assistant", location: "Santa Barbara, CA", time: "July 2024 - Present" },
  { company: "West Monroe", role: "Consulting Intern", location: "San Francisco, CA", time: "June 2024 - August 2024" },
  { company: "West Monroe", role: "Consulting Intern", location: "San Francisco, CA", time: "June 2024 - August 2024" },
  // Add more experiences as needed
];

function Experiences() {
  return (
    <div className="experiences-page">
      <table className="experiences-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Location</th>
            <th>
              <FaClock />
            </th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((exp, index) => (
            <tr key={index}>
              <td>{exp.company}</td>
              <td>{exp.role}</td>
              <td>{exp.location}</td>
              <td>{exp.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Experiences;