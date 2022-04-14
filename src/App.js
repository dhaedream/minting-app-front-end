import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MintPage from "./pages/MintPage";
import CommunityPage from "./pages/CommunityPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/mint" element={MintPage} />
        <Route path="/community" element={CommunityPage} />
      </Routes>
    </div>
  );
}

export default App;
