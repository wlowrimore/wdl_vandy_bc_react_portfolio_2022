import React from "react";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="header">
      <h2>William Lowrimore</h2>
      <nav className="--nav">
        <ul>
          <li className={currentTab === "about" ? "navActive" : "mx-0"}>
            <span onClick={() => setCurrentTab("about")}>About Me</span>
          </li>
          <li className={currentTab === "portfolio" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
          </li>
          <li className={currentTab === "contact-form" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("contact-form")}>
              Contact Me
            </span>
          </li>
          <li className={currentTab === "resume" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("resume")}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
