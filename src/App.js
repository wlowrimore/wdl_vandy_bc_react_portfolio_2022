import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import ResumePage from "./components/ResumePage";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <AboutPage />;
      case "portfolio":
        return <ProjectPage />;
      case "contact-form":
        return <ContactPage />;
      case "resume":
        return <ResumePage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>{renderTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
