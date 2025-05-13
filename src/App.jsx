import React from "react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <div
      style={{ fontFamily: "font1" }}
      className="bg-[#ffffff] overflow-hidden"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}
export default App;
