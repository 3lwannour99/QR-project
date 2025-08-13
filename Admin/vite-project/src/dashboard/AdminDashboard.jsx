import React, { useState } from "react";
import "./AdminDashboard.css";
import Sidebar from "./components/Sidebar.jsx";
import DashboardContent from "./components/DashboardContent.jsx";
import AttendanceContent from "./components/AttendanceContent.jsx";
import EmployeesContent from "./components/EmployeesContent.jsx";
import ReportsContent from "./components/ReportsContent.jsx";
import NotificationsContent from "./components/NotificationsContent.jsx";
import SettingsContent from "./components/SettingsContent.jsx";
import { EmployeeProvider } from "./EmployeeContext.jsx";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "attendance":
        return <AttendanceContent />;
      case "employees":
        return <EmployeesContent />;
      case "reports":
        return <ReportsContent />;
      case "notifications":
        return <NotificationsContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <EmployeeProvider>
      <div className="admin-dashboard">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>

        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="main-content">
          <div className="content-container">{renderContent()}</div>
        </div>
      </div>
    </EmployeeProvider>
  );
}

export default AdminDashboard;