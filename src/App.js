import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectWindow from "./components/ProjectWindow";
import About from './components/About';

export default function App() {
  return (
    <section>
      <header>
        <Navbar />
      </header>

      <main>
        <About />
        <ProjectWindow />
      </main>

      <footer className="ftr-pos">
        <Footer />
      </footer>
    </section>
  );
}
