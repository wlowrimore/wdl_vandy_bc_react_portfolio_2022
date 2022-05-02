import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
