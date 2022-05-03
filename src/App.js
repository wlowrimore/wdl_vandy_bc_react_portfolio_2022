import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Main from "./components/Main";
import About from './components/About';

export default function App() {
  return (
    <section>
      <header>
        <Navbar />
      </header>

      <main>
        <About />
        {/* <Main /> */}
      </main>
      
      <footer className="ftr-pos">
        <Footer />
      </footer>
    </section>
  );
}
