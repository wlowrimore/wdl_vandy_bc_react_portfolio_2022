import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <div className="Title">
        <img src="../public/logo192.png" alt="temp logo" />
        <h1>William Lowrimore</h1>
      </div>
      <nav className="--nav">
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact Me</a>
        <a href="resume">Resume</a>
      </nav>
    </header>
  );
}
