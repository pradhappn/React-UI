// src/components/Topbar.js
import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-box">
        🔍 <input type="text" placeholder="Search courses..." />
      </div>

      <div className="profile-box">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="profile-img"
        />
        <div className="profile-info">
          <div className="profile-name">Grace Walker</div>
          <div className="profile-role">Student</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
