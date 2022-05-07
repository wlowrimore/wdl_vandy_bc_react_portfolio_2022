import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

const DEFAULT_PAGE = About;

const App = (props) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const CurrentPageComponent = currentPage;
  return (
    <div>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <CurrentPageComponent />
      <Footer />
    </div>
  );
};

export default App;
