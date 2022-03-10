import { useState, Fragment } from "react";
import "normalize.css";
import "./App.css";
import "../node_modules/nes.css/css/nes.css";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Home from "./components/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="allContainer">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Cards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
