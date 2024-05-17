import React from "react";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Aktuelles from "./components/Aktuelles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Aktuelles />
      <Footer />
    </div>
  );
}

export default App;
