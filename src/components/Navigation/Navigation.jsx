import React, { useEffect } from 'react'; // Import React library and useEffect hook

// Define Nav component
function Nav(props) {
  const { currentTab, handleTabChange } = props; // Destructure props to extract currentTab and handleTabChange

  return (
    <nav>
      <ul className="nav nav-tabs">
        {/* Navigation item for About */}
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')} // Handle click event for About tab
            // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        {/* Navigation item for Portfolio */}
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleTabChange('Portfolio')} // Handle click event for Portfolio tab
            // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        {/* Navigation item for Contact */}
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')} // Handle click event for Contact tab
            // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        {/* Navigation item for Resume */}
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')} // Handle click event for Resume tab
            // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav; // Export Nav component
