import React from "react";
import "./App.css";
import Navbar from "../src/containers/Navbar/Navbar";
import Mission from "../src/containers/Mission/Mission";
import Services from "../src/containers/Services/Services";
import Gallery from "../src/containers/Gallery/Gallery";
import Estimate from "../src/containers/Estimate/Estimate";
import Contact from "../src/containers/Contact/Contact";

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
