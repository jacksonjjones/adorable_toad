import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-column">
        <p className="resume-heading">Resumé</p>

        <a
          className="resume-button is-primary"
          href={resume}
          target="_blank" rel="noreferrer"
        >
          <span className="resume-icon">
            <FontAwesomeIcon icon={faDownload} size="2x" />
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="resume-column">
        <p className="resume-heading">Skills</p>
        <ul className="skills-list">
          <li>HTML, CSS, JavaScript</li>
          <li>Express.js, Node.js, React</li>
          <li>MySQL, MongoDB, GraphQl</li>
          <li>Github Repo Management, Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
