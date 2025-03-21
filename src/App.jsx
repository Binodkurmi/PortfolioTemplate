import React from "react";
import "./App.css";
import Navbar from "./components/Nabar";
import Home from "./components/Home";
import WorkShow from "./components/WorkShow";
import Logo from "./components/Logo";
import About from "./components/About";
import Ourblog from "./components/Ourblog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative">
      <div className="pink-grid-bg"></div>

      <Navbar />
      <div className="relative z-10 space-y-16">
        <Home />
        <WorkShow />
        <Logo />
        <About />
        <Ourblog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
