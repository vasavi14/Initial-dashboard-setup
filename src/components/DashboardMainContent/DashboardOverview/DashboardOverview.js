import React from "react";
import { Bell } from "lucide-react";
import "./DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <div className="top-bar">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            disabled
          />
          <span className="notification-icon" role="button" aria-label="Notifications">
            <Bell size={18} color="#4a6cf7" />
          </span>
        </div>
      </div>

      <h2 className="dashboard-title">Dashboard</h2>
    </section>
  );
};

export default DashboardOverview;
