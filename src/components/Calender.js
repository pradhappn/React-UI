// src/components/Calendar.js
import React from "react";

const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="card calendar">
      <h3>Calendar</h3>
      <div className="calendar-grid">
        {days.map((d, i) => (
          <div key={i} className="day-name">{d}</div>
        ))}
        {dates.map((n, i) => (
          <div key={i} className={`date ${n === 15 ? "active" : ""}`}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
