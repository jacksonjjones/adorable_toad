import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import About from "../src/components/About/About";
// import Contact from "../src/components/Contact/Contact";
// import Portfolio from "../src/components/Portfolio/Portfolio";
// import Resume from "../src/components/Resume/Resume";
import Footer from "../src/components/Footer/Footer";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("about");

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
      <title>Jackson Jones | {currentTab} </title>
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;