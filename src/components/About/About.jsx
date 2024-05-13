import React from "react"; // Importing React library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Importing FontAwesomeIcon component from the react-fontawesome library
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons' // Importing the user-astronaut icon from the free-solid-svg-icons library

function About() {
  return (
    <section id="about-me" className="my-5 about">
      <div className="flex-row">
        <h1 id="about" className="section-title">
          About Me
        </h1>
      </div>
      <div className="avatar">
        {/* Rendering the user-astronaut icon */}
        <FontAwesomeIcon icon={faUserAstronaut} size="4x" />
      </div>
      <div className="flex-row">
        <div className="about-info">
          <p>
            Hello, I am Jackson. I am currently studying to become a Full Stack Developer.
            <br /> I love all things tech, and I cannot wait to see where my coding journey takes me!
            <br /> Please take a look at my work, and of course feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
