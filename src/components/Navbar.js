import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <h2>William Lowrimore</h2>
      <nav className="--nav">
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact Me</a>
        <a href="resume">Resume</a>
      </nav>
    </header>
  );
}
