import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <section id="about-me" className="my-5 about">
      <div className="flex-row">
        <h1 id="about" className="section-title">
          About Me
        </h1>
      </div>
      <div className="avatar">
      <FontAwesomeIcon icon={faUserAstronaut} size="4x" />
      </div>
      <div className="flex-row">
        <div className="about-info">
          <p>
            Hello, I am Jackson. I'm trying to be nice at coding!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

