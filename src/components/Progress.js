// src/components/Progress.js
import React from "react";

const Progress = () => {
  const progressList = [
    { label: "UI Design", value: 75 },
    { label: "Marketing", value: 60 },
    { label: "Motion Design", value: 90 },
  ];

  return (
    <div className="card progress">
      <h3>Learning Progress</h3>
      <div className="progress-list">
        {progressList.map((p, i) => (
          <div className="progress-item" key={i}>
            <div className="progress-label">
              <span>{p.label}</span>
              <span>{p.value}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${p.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
