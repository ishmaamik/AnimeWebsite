import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import OneAnime from "./pages/OneAnime";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animes/:animename" element={<OneAnime />} />
      </Routes>
    </Router>
  );
}

export default App;
