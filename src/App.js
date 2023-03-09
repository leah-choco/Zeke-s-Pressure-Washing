import React from "react";
import "./App.css";
import Navbar from "../src/Navbar/Navbar";
import Mission from "../src/Mission/Mission";
import Services from "../src/Services/Services";
import Gallery from "../src/Gallery/Gallery";
import Estimate from "../src/Estimate/Estimate";
import Contact from "../src/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Mission />
      <Services />
      <Gallery />
      <Estimate />
      <Contact />
    </>
  );
}

export default App;
