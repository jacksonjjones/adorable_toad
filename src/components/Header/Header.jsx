import React from "react";
import Nav from "../Navigation/Navigation"; // Importing the Navigation component

function Header(props) {
  // Destructuring props to extract currentTab and handleTabChange
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      {/* Header section */}
      <section>
        <header className="flex-row">
          <div>
            <h1>Jackson Jones</h1> {/* Main title */}
          </div>
          <div>
            {/* Rendering the Navigation component */}
            <Nav
              currentTab={currentTab} // Passing currentTab prop to Navigation
              handleTabChange={handleTabChange} // Passing handleTabChange prop to Navigation
            ></Nav>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
