import React from "react"; // Import React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Import faDownload icon from FontAwesome
import resume from "../assets/resume.pdf"; // Import resume PDF file

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-column">
        <p className="resume-heading">Resumé</p> {/* Display heading for resume section */}

        {/* Link to download resume PDF */}
        <a
          className="resume-button is-primary"
          href={resume} // Set href to resume PDF file
          target="_blank" rel="noreferrer" // Open link in a new tab
        >
          <span className="resume-icon">
            <FontAwesomeIcon icon={faDownload} size="2x" /> {/* Display download icon */}
          </span>
          <span>Download My Resume</span> {/* Display text for download link */}
        </a>
      </div>
      <div className="resume-column">
        <p className="resume-heading">Skills</p> {/* Display heading for skills section */}
        <ul className="skills-list">
          {/* List of skills */}
          <li>HTML, CSS, JavaScript</li>
          <li>Express.js, Node.js, React</li>
          <li>MySQL, MongoDB, GraphQl</li>
          <li>Github Repo Management, Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume; // Export Resume component

