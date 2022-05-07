import React from "react";

export default function Navbar() {
  function handleClick() {
    console.log("Welcome!");
  }

  return (
    <header className="header">
      <h2>William Lowrimore</h2>
      <nav className="--nav">
        <a href="#about" onClick={handleClick}>
          About Me
        </a>
        <a href="#portfolio" onClick={handleClick}>
          Portfolio
        </a>
        <a href="#contact" onClick={handleClick}>
          Contact Me
        </a>
        <a href="resume" onClick={handleClick}>
          Resume
        </a>
      </nav>
    </header>
  );
}
