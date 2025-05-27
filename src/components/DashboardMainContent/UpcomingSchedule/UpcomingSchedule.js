// components/UpcomingSchedule/UpcomingSchedule.js
import React from "react";
import "./UpcomingSchedule.css";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
import { upcomingAppointments } from "../../../data/appointments";
import { capitalize } from "../../../utils/helpers";

const UpcomingSchedule = () => {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.length === 0 ? (
        <p className="no-appointments">No upcoming appointments</p>
      ) : (
        upcomingAppointments.map((day, index) => (
          <div key={index} className="day-section">
            <h4>On {capitalize(day.day)}</h4>
            <div className="appointment-list">
              {day.appointments.map((appt, idx) => (
                <SimpleAppointmentCard
                  key={idx}
                  title={capitalize(appt.title)}
                  time={appt.time}
                  icon={appt.icon}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default UpcomingSchedule;
