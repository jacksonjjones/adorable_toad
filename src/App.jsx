import React, { useState } from "react"; // Import React and useState hook
import Header from "../src/components/Header/Header"; // Import Header component
import About from "../src/components/About/About"; // Import About component
import Contact from "../src/components/Contact/Contact"; // Import Contact component
import Portfolio from "../src/components/Portfolio/Portfolio"; // Import Portfolio component
import Resume from "../src/components/Resume/Resume"; // Import Resume component
import Footer from "../src/components/Footer/Footer"; // Import Footer component
import "./App.css"; // Import CSS file for styling

function App() {
  const [currentTab, handleTabChange] = useState("about"); // Define state for currentTab using useState hook

  // Define a method to render the corresponding component based on the currentTab state
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
      <title>Jackson Jones | {currentTab} </title> {/* Set title dynamically based on currentTab */}
      <Header
        currentTab={currentTab} // Pass currentTab state as prop to Header component
        handleTabChange={handleTabChange} // Pass handleTabChange function as prop to Header component
      ></Header>
      <main>{renderTab()}</main> {/* Render the corresponding tab content */}
      <Footer></Footer> {/* Render Footer component */}
    </>
  );
}

export default App; // Export App component
