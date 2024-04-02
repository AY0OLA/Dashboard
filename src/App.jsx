import React from "react";
import "./App.css";
import Sidebar from "./Component/Side-bar/Side-bar";
import Navbar from "./Component/Navb/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes className="flex">
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
