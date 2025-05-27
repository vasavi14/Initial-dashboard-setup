import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Healthcare.</div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." disabled />
        <span className="notification-icon" role="img" aria-label="notifications">🔔</span>
      </div>

      {/* <div className="header-icons"> */}
        {/* Remove original notification icon from here */}
        {/* <div className="user-profile">
          <span className="profile-icon-avatar" role="img" aria-label="girl doctor emoji">👩‍⚕️</span>
          <span className="user-name">Dr. John</span>
        </div>
        <button className="add-btn" aria-label="Add new">＋</button>
      </div> */}
    </header>
  );
};

export default Header;
