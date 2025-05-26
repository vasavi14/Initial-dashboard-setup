import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import "./styles/global.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <DashboardMainContent />
      </main>
    </div>
  );
};

export default App;
