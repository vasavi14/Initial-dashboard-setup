import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import {
  Home,
  History,
  Calendar,
  CalendarCheck,
  BarChart,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
  Menu,
  X,
} from "lucide-react";

const iconMap = {
  Home,
  History,
  Calendar,
  CalendarCheck,
  BarChart,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
};

const navLinks = [
  { name: "Dashboard", icon: "Home" },
  { name: "History", icon: "History" },
  { name: "Calendar", icon: "Calendar" },
  { name: "Appointments", icon: "CalendarCheck" },
  { name: "Statistics", icon: "BarChart" },
  { name: "Tests", icon: "TestTube" },
  { name: "Chat", icon: "MessageCircle" },
  { name: "Support", icon: "HelpCircle" },
  { name: "Settings", icon: "Settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        ref={toggleRef}
        className={`sidebar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo-container">
          <h2 className="logo-text">
            <span style={{ color: "#00C6AD" }}>Health</span>
            <span style={{ color: "#4A4A4A" }}>care.</span>
          </h2>
        </div>

        <h4 className="sidebar-section-title">General</h4>

        <ul className="nav-list">
          {navLinks.map(({ name, icon }) => {
            const IconComponent = iconMap[icon];
            return (
              <li
                key={name}
                className="nav-item"
                onClick={() => setIsOpen(false)}
              >
                {IconComponent && (
                  <IconComponent size={20} className="nav-icon" />
                )}
                <span className="nav-label">{name}</span>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
