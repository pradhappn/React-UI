// src/components/Mentors.js
import React from "react";

const Mentors = () => {
  const mentors = [
    { name: "Leslie Alexander", course: "UI Design", img: "🧑‍🎨" },
    { name: "Robert Fox", course: "Marketing", img: "🧑‍💼" },
    { name: "Courtney Henry", course: "Brand Design", img: "👩‍💻" },
  ];

  return (
    <div className="card mentors">
      <h3>Mentors</h3>
      <div className="mentor-list">
        {mentors.map((m, i) => (
          <div className="mentor-item" key={i}>
            <div className="mentor-avatar">{m.img}</div>
            <div>
              <div className="mentor-name">{m.name}</div>
              <div className="mentor-course">{m.course}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
