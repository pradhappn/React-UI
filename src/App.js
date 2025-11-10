// src/App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Courses from "./components/Courses";
import RightPanel from "./components/Rightpanel";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        <Topbar />
        <div className="courses-section">
          <Courses />
        </div>
      </div>

      {/* Right Panel */}
      <RightPanel />
    </div>
  );
}

export default App;
