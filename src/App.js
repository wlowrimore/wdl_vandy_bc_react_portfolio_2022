import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
// import CurrentPageContent from "./CurrentPageContent";

const DEFAULT_PAGE = AboutPage;

const App = () => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const CurrentPageContent = currentPage;
  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {CurrentPageContent}

      <Footer />
    </div>
  );
};

export default App;
