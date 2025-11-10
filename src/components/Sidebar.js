// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">SUCCESS</div>

      {/* User Info */}
      <div className="user-info">
        <div className="user-avatar">GW</div>
        <div className="user-name">Grace Walker</div>
      </div>

      {/* Menu Items */}
      <ul className="menu">
        <li className="menu-item active">
          <span className="menu-icon">🏠</span> Dashboard
        </li>
        <li className="menu-item">
          <span className="menu-icon">📘</span> Courses
        </li>
        <li className="menu-item">
          <span className="menu-icon">🗓️</span> Schedule
        </li>
        <li className="menu-item">
          <span className="menu-icon">💬</span> Messages
        </li>
        <li className="menu-item">
          <span className="menu-icon">📁</span> Resources
        </li>
      </ul>

      {/* Logout */}
      <div className="logout">⏻ Log out</div>
    </div>
  );
};

export default Sidebar;
