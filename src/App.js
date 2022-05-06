import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectWindow from "./components/ProjectWindow";
import Contact from "./components/Contact";
import About from "./components/About";

export default function App() {
  return (
    <section>
      <header>
        <Navbar />
      </header>

      <main>
        <About />
        <ProjectWindow />
        <Contact />
      </main>

      <footer className="ftr-pos">
        <Footer />
      </footer>
    </section>
  );
}
