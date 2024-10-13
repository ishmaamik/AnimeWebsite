import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import OneAnime from "./pages/OneAnime";
import UserProvider from "./pages/UserContext";

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animes/:animename" element={<OneAnime />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
