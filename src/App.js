import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Main from "./components/Main";
import About from './components/About';

export default function App() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <About />
        <Main />
      </div>
      <div className="ftr-pos">
        <Footer />
      </div>
    </section>
  );
}
