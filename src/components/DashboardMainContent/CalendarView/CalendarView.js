import React from "react";
import "./CalenderView.css";

const appointments = [
  {
    title: "Dentist",
    doctor: "Dr. Cameron Williamson",
    time: "09:00 AM",
    date: "26 Oct",
    icon: "🦷",
  },
  {
    title: "Physiotherapy",
    doctor: "Dr. Kevin Djones",
    time: "11:00 AM",
    date: "28 Oct",
    icon: "🦴",
  },
];

const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dates = [25, 26, 27, 28, 29, 30];
const times = ["09:00", "11:00", "13:00", "15:00"];

const CalendarView = () => {
  return (
    <div className="calendar-container">
      {/* Header */}
      <section className="calendar-overview">
        <div className="top-bar">
          <h2 className="calendar-title">October 2021</h2>
          <div className="nav-icons">
            <span className="arrow">←</span>
            <span className="arrow">→</span>
            <div className="user-profile">👩‍⚕️</div>
            <span>Dr. Vasavi</span>
            <button className="add-btn">+</button>
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {daysInWeek.map((day, i) => (
          <div
            key={i}
            className={`day-column ${
              dates[i] === 26 || dates[i] === 28 ? "highlight-column" : ""
            }`}
          >
            <div className="day-header">
              {day}
              <br />
              {dates[i]}
            </div>
            {times.map((time, j) => (
              <div
                key={j}
                className={`time-slot ${
                  (dates[i] === 26 && time === "09:00") ||
                  (dates[i] === 28 && time === "11:00")
                    ? "highlight-slot"
                    : ""
                }`}
              >
                <span className="slot-time">{time}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="appointment-cards">
        {appointments.map((appt, index) => {
          const type = appt.title.toLowerCase().trim();
          const cardClass =
            type.includes("dentist")
              ? "dentist-card"
              : type.includes("physio")
              ? "physio-card"
              : "";

          return (
            <div key={index} className={`appointment-card ${cardClass}`}>
              <div className="card-details">
                <h4 style={{ color: "white", margin: 0 }}>{appt.title}</h4>
                <p style={{ color: "white", margin: "4px 0" }}>{appt.doctor}</p>
                <p style={{ color: "white", margin: 0 }}>
                  {appt.date}, {appt.time}
                </p>
              </div>
              <div className="card-icon" style={{ fontSize: "2rem" }}>
                {appt.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
