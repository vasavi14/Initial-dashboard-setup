import React from "react";
import "./CalenderView.css";

const appointments = {
  26: [{ time: "09:00", title: "Dentist", doctor: "Dr. Cameron Williamson", icon: "🦷" }],
  27: [{ time: "11:00", title: "Physiotherapy Appointment", doctor: "Dr. Meredith Grey", icon: "🦴" }],
  28: [{ time: "13:00", title: "General Checkup", icon: "🩺" }],
  29: [{ time: "15:00", title: "Eye Test", icon: "👁️" }]
};

const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = ["09:00", "11:00", "13:00", "15:00"];

const CalendarView = () => {
  return (
    <div className="calendar-container">
      {/* Header */}
      <section className="calendar-overview">
        <div className="top-bar">
          <h2 className="calendar-title">October 2021</h2>
          <div className="nav-icons">
            <span className="arrow" role="button" tabIndex={0} aria-label="Previous month">←</span>
            <span className="arrow" role="button" tabIndex={0} aria-label="Next month">→</span>
            <div className="user-profile" aria-label="User profile">👩‍⚕️ DR. Supriya</div>
            <button className="add-btn" aria-label="Add new appointment">+</button>
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {daysInWeek.map((day, i) => {
          const currentDay = 25 + i;
          return (
            <div key={i} className="day-column">
              <div className="day-header">
                {day}
                <br />
                {currentDay}
              </div>
              {times.map((time, j) => {
                const match = appointments[currentDay]?.find(a => a.time === time);
                return (
                  <div key={j} className={`time-slot ${match ? "has-appointment" : ""}`}>
                    {match ? (
                      <div className="appointment-box">
                        <span className="icon">{match.icon}</span>
                        <div>
                          <div className="title">{match.title}</div>
                          {match.doctor && <div className="doctor">{match.doctor}</div>}
                          <div className="time">{match.time}</div>
                        </div>
                      </div>
                    ) : (
                      <span className="slot-time">{time}</span>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Static Appointment Cards */}
      <div className="appointment-cards">
        <div className="appointment-card">
          <div className="card-icon">🦷</div>
          <div className="card-details">
            <h4>Dentist</h4>
            <p>Dr. Cameron Williamson</p>
            <p>26th Oct, 09:00 AM</p>
          </div>
        </div>

        <div className="appointment-card">
          <div className="card-icon">🦴</div>
          <div className="card-details">
            <h4>Physiotherapy Appointment</h4>
            <p>Dr. Meredith Grey</p>
            <p>27th Oct, 11:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
