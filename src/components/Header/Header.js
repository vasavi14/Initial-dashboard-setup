import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Healthcare.</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." disabled />
      </div>
      <div className="header-icons">
        <span className="notification-icon">🔔</span>
        <div className="user-profile">
          {/* Remove the <img> if not using */}
          <span className="profile-icon-avatar" role="img" aria-label="girl doctor emoji">👩‍⚕️</span>
          <span className="user-name">Dr. John</span>
        </div>
        <button className="add-btn">＋</button>
      </div>
    </header>
  );
};

export default Header;
