import React from "react";
import { CalendarDays } from "lucide-react";
import "./ActivityFeed.css";

const activityData = [
  { day: "Mon", height: 60, color: "#00CFE8" },
  { day: "Tues", height: 90, color: "#4A6CF7" },
  { day: "Wed", height: 65, color: "#00CFE8" },
  { day: "Thurs", height: 75, color: "#4A6CF7" },
  { day: "Fri", height: 40, color: "#00CFE8" },
  { day: "Sat", height: 100, color: "#4A6CF7" },
  { day: "Sun", height: 45, color: "#00CFE8" },
];

const ActivityFeed = () => {
  return (
    <section className="activity-feed">
      <div className="activity-header">
        <div className="activity-title">
          <CalendarDays className="activity-icon" />
          <h3>Activity</h3>
        </div>
        <p>3 appointments on this week</p>
      </div>

      <div className="activity-graph-container">
        <div className="activity-bar-chart">
          {activityData.map(({ day, height, color }, idx) => (
            <div className="bar-container" key={idx}>
              <div
                className="bar"
                style={{ height: `${height}%`, backgroundColor: color }}
              ></div>
              <span className="bar-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityFeed;
