import "./SimpleAppointmentCard.css";

const iconMap = {
  "eye-icon": "👁️",
  "heart-icon": "❤️",
  "brain-icon": "🧠",
  "tooth-icon": "🦷",
};

const SimpleAppointmentCard = ({ title, time, icon = "default-icon" }) => {
  const emoji = iconMap[icon] || "🩺";

  return (
    <div className="simple-appointment-card">
      <span className="icon" aria-hidden="true">{emoji}</span>
      <div className="details">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
