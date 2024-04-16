import React from "react";
import "./App.css";
import Sidebar from "./Component/Side-bar/Side-bar";
import Navbar from "./Component/Navb/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workout from "./Component/Workout";
import Diet from "./Component/Diet";
import Goals from "./Component/Goals";
import Schedule from "./Component/Schedule";
import Progress from "./Component/Progress";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes className="flex">
          <Route path="/" element={<Navbar />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
