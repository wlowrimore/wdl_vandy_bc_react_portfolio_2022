import React from "react";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import ProjectWindow from "../components/ProjectWindow";

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <h2>William Lowrimore</h2>
      <nav className="--nav">
        <a
          href="#about"
          onClick={() => setCurrentPage(About)}
          className={currentPage === About}
        >
          About Me
        </a>
        <a
          href="#portfolio"
          onClick={() => setCurrentPage(ProjectWindow)}
          className={currentPage === ProjectWindow}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => setCurrentPage(Contact)}
          className={currentPage === Contact}
        >
          Contact
        </a>
        <a
          href="resume"
          onClick={() => setCurrentPage(Resume)}
          className={currentPage === Resume}
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
