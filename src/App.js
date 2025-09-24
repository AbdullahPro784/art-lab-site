import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portraits from "./components/Portraits";
import Contact from "./components/Contact";
import Browse from "./components/Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Router>
  );
}

export default App;
