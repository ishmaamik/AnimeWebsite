import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import OneAnime from "./pages/OneAnime";
import UserProvider from "./pages/UserContext";
import { Box } from "@mui/material";

function App() {
  return (
    <Box 
    bgcolor={"#FAF9F6"}
    overflowX="hidden"  // Prevent horizontal overflow
    minHeight="100vh"
    display="flex"
    maxWidth={"100%"}
    flexDirection="column"
    boxSizing="border-box" // Ensure padding and borders are included in the element's total width and height
    overflow={"hidden"}  // Ensure padding and borders are included in the element's total width and height
    >
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animes/:animename" element={<OneAnime />} />
      </Routes>
    </Router>
    </UserProvider>
    </Box>
  );
}

export default App;
