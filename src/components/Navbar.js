import React from "react";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <h2>William Lowrimore</h2>
      <nav className="--nav">
        <a
          href="#about"
          onClick={() => setCurrentPage(AboutPage)}
          data-selected={currentPage === AboutPage}
        >
          About Me
        </a>
        <a
          href="#portfolio"
          onClick={() => setCurrentPage(ProjectPage)}
          data-selected={currentPage === ProjectPage}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => setCurrentPage(ContactPage)}
          data-selected={currentPage === ContactPage}
        >
          Contact
        </a>
        <a
          href="resume"
          onClick={() => setCurrentPage(ResumePage)}
          data-selected={currentPage === ResumePage}
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
