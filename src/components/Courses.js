// src/components/Courses.js
import React from "react";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-section">
      {/* Title */}
      <div className="courses-header">
        <h2>Courses.</h2>
        <div className="user-top">
          <span className="user-name">Grace Walker</span>
          <div className="user-icon">GW</div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="course-tabs">
        <button className="tab active">Design</button>
        <button className="tab">Marketing</button>
        <button className="tab">Illustration</button>
        <button className="tab">Brand</button>
      </div>

      {/* Course Cards */}
      <div className="course-cards">
        <div className="course-card purple">
          <h3>UX/UI: Web Interfaces</h3>
          <p>Start: 15 November – 1 January</p>
          <p className="price">Price: $1600</p>
          <div className="tags">
            <span>UX/UI Design</span>
            <span>Web Design</span>
          </div>
        </div>

        <div className="course-card blue">
          <h3>Creative Director</h3>
          <p>Start: 23 November – 18 January</p>
          <p className="price">Price: $9800</p>
          <div className="tags">
            <span>Innovation</span>
            <span>Solutions</span>
          </div>
        </div>

        <div className="course-card orange">
          <h3>Motion Design, Basic</h3>
          <p>Start: 2 November – 10 January</p>
          <p className="price">Price: $2000</p>
          <div className="tags">
            <span>Adobe After Effects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
