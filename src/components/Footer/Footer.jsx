import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>
        <ul>
          <a href="https://github.com/jacksonjjones">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jackson-jones-9b6017219/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://stackoverflow.com/users/0000"> 
            <li className="logo">
              <FaStackOverflow />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
