import React from "react";
import "./App.css";
import Sidebar from "./Component/Side-bar/Side-bar";
import Navbar from "./Component/Navb/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workout from "./Component/Workout";
import Diet from "./Component/Diet";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes className="flex">
          <Route path="/" element={<Navbar />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/diet" element={<Diet />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
