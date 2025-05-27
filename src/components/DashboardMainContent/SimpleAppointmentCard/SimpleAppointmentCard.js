// components/SimpleAppointmentCard/SimpleAppointmentCard.js
import React from "react";
import "./SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case "heart-icon":
        return "❤️";
      case "eye-icon":
        return "👁️";
      case "brain-icon":
        return "🧠";
      case "stethoscope-icon":
        return "🩺";
      default:
        return "📅";
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-info">
        <span className="appointment-title">{title}</span>
        <span className="appointment-time">{time}</span>
      </div>
      <div className="appointment-icon">{renderIcon()}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
