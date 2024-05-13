import React from "react"; // Importing React library
import { VscGithubAlt } from "react-icons/vsc"; // Importing GitHub icon from react-icons/vsc
import { AiOutlineLinkedin } from "react-icons/ai"; // Importing LinkedIn icon from react-icons/ai
import { FaStackOverflow } from "react-icons/fa"; // Importing Stack Overflow icon from react-icons/fa

function Footer() {
  return (
    <footer>
      <ul>
        {/* GitHub link */}
        <a href="https://github.com/jacksonjjones">
          <li className="logo">
            <VscGithubAlt size="1.25em" /> {/* GitHub icon */}
          </li>
        </a>
        {/* LinkedIn link */}
        <a href="https://www.linkedin.com/in/jackson-jones-9b6017219/">
          <li className="logo">
            <AiOutlineLinkedin size="1.25em" /> {/* LinkedIn icon */}
          </li>
        </a>
        {/* Stack Overflow link */}
        <a href="https://stackoverflow.com/users/0000"> 
          <li className="logo">
            <FaStackOverflow size="1.25em" /> {/* Stack Overflow icon */}
          </li>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
