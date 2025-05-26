import React from "react";
import bodyImg from "../../../assets/body.png"; // Adjust path to your image
import "./AnatomySection.css";

// Declare indicators **inside** the file
const indicators = [
  { id: 3, label: "Teeth", emoji: "🦷", status: "issue", position: { top: "12%", left: "49%" } },
  { id: 1, label: "Healthy Heart", emoji: "❤️", status: "healthy", position: { top: "25%", left: "75%" } },
  { id: 2, label: "Lungs", emoji: "🫁", status: "healthy", position: { top: "33%", left: "59%" } },
  { id: 4, label: "Bone", emoji: "🦴", status: "healthy", position: { top: "70%", left: "49%" } },
];

const AnatomySection = () => {
  return (
    <section className="anatomy-section">
      <div className="anatomy-card">
        <div className="anatomy-wrapper" style={{ position: "relative" }}>
          <img src={bodyImg} alt="Anatomy" className="anatomy-img" />
          {indicators.map(({ id, label, emoji, status, position }) => (
            <span
              key={id}
              className={`label ${status}`}
              style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                padding: "2px 5px",
                borderRadius: "4px",
                transform: "translate(-50%, -50%)",
                whiteSpace: "nowrap",
              }}
            >
              {emoji} {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// Make sure to export **default**
export default AnatomySection;
