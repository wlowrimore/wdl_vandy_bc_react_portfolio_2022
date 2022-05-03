import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
      <div className="ftr-pos">
        <Footer />
      </div>
    </section>
  );
}
