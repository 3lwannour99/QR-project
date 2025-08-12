// import React, { useState } from 'react';
// import { FiUsers, FiClock, FiFileText, FiSettings, FiBell, FiLogOut, FiHome, FiUserPlus, FiPieChart } from 'react-icons/fi';
// import './AdminDashboard.css';

// function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState('attendance');
//   const [employees, setEmployees] = useState([
//     { id: 1, name: 'Ahmed Mohamed', position: 'Developer', status: 'present', checkIn: '08:00', checkOut: '17:00' },
//     { id: 2, name: 'Mariam Ali', position: 'Designer', status: 'late', checkIn: '08:45', checkOut: '17:30' },
//     { id: 3, name: 'Omar Khalid', position: 'Manager', status: 'absent', checkIn: '--', checkOut: '--' },
//     { id: 4, name: 'Fatima Hassan', position: 'HR', status: 'present', checkIn: '07:55', checkOut: '16:58' },
//   ]);
//   const [newNotification, setNewNotification] = useState('');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return (
//           <div className="dashboard-content">
//             <div className="stats-container">
//               <div className="stat-card">
//                 <h3>Total Employees</h3>
//                 <p className="stat-value">24</p>
//                 <div className="stat-icon"><FiUsers /></div>
//               </div>
//               <div className="stat-card">
//                 <h3>Present Today</h3>
//                 <p className="stat-value">18</p>
//                 <div className="stat-icon"><FiClock /></div>
//               </div>
//               <div className="stat-card">
//                 <h3>Late Today</h3>
//                 <p className="stat-value">3</p>
//                 <div className="stat-icon"><FiClock /></div>
//               </div>
//               <div className="stat-card">
//                 <h3>Absent Today</h3>
//                 <p className="stat-value">3</p>
//                 <div className="stat-icon"><FiClock /></div>
//               </div>
//             </div>

//             <div className="recent-activity">
//               <h2>Recent Activity</h2>
//               <div className="activity-list">
//                 {employees.slice(0, 5).map(emp => (
//                   <div key={emp.id} className="activity-item">
//                     <div className={`status-indicator ${emp.status}`}></div>
//                     <div className="activity-details">
//                       <p><strong>{emp.name}</strong> checked {emp.status === 'present' ? 'in' : emp.status === 'late' ? 'in late' : 'out'} at {emp.checkIn}</p>
//                       <small>Today</small>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       case 'attendance':
//         return (
//           <div className="attendance-content">
//             <div className="attendance-header">
//               <h2>Today's Attendance</h2>
//               <div className="attendance-filters">
//                 <select>
//                   <option>All</option>
//                   <option>Present</option>
//                   <option>Late</option>
//                   <option>Absent</option>
//                 </select>
//                 <button className="export-btn">Export to Excel</button>
//               </div>
//             </div>
            
//             <div className="attendance-table">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Employee ID</th>
//                     <th>Name</th>
//                     <th>Position</th>
//                     <th>Status</th>
//                     <th>Check In</th>
//                     <th>Check Out</th>
//                     <th>Working Hours</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map(emp => (
//                     <tr key={emp.id}>
//                       <td>{emp.id}</td>
//                       <td>{emp.name}</td>
//                       <td>{emp.position}</td>
//                       <td><span className={`status-badge ${emp.status}`}>{emp.status}</span></td>
//                       <td>{emp.checkIn}</td>
//                       <td>{emp.checkOut}</td>
//                       <td>{emp.status !== 'absent' ? '8h 15m' : '--'}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );
//       case 'employees':
//         return (
//           <div className="employees-content">
//             <div className="employees-header">
//               <h2>Employee Management</h2>
//               <button className="add-employee-btn">
//                 <FiUserPlus /> Add Employee
//               </button>
//             </div>
            
//             <div className="employees-table">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Position</th>
//                     <th>Department</th>
//                     <th>Join Date</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employees.map(emp => (
//                     <tr key={emp.id}>
//                       <td>{emp.id}</td>
//                       <td>{emp.name}</td>
//                       <td>{emp.name.replace(/\s+/g, '').toLowerCase()}@company.com</td>
//                       <td>{emp.position}</td>
//                       <td>IT</td>
//                       <td>15/03/2023</td>
//                       <td>
//                         <button className="edit-btn">Edit</button>
//                         <button className="delete-btn">Delete</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );
//       case 'reports':
//         return (
//           <div className="reports-content">
//             <h2>Generate Reports</h2>
//             <div className="report-filters">
//               <div className="filter-group">
//                 <label>Report Type</label>
//                 <select>
//                   <option>Attendance Report</option>
//                   <option>Late Arrivals</option>
//                   <option>Absences</option>
//                   <option>Working Hours</option>
//                 </select>
//               </div>
//               <div className="filter-group">
//                 <label>From Date</label>
//                 <input type="date" />
//               </div>
//               <div className="filter-group">
//                 <label>To Date</label>
//                 <input type="date" />
//               </div>
//               <div className="filter-group">
//                 <label>Format</label>
//                 <select>
//                   <option>PDF</option>
//                   <option>Excel</option>
//                   <option>CSV</option>
//                 </select>
//               </div>
//               <button className="generate-btn">Generate Report</button>
//             </div>
            
//             <div className="report-preview">
//               <FiPieChart className="chart-icon" />
//               <p>Select filters and generate report to view data</p>
//             </div>
//           </div>
//         );
//       case 'notifications':
//         return (
//           <div className="notifications-content">
//             <h2>Send Notification</h2>
//             <div className="notification-form">
//               <textarea 
//                 placeholder="Type your notification message here..."
//                 value={newNotification}
//                 onChange={(e) => setNewNotification(e.target.value)}
//               ></textarea>
//               <div className="notification-actions">
//                 <button className="send-btn">Send to All Employees</button>
//                 <button className="schedule-btn">Schedule Notification</button>
//               </div>
//             </div>
            
//             <div className="notification-history">
//               <h3>Recent Notifications</h3>
//               <div className="history-list">
//                 <div className="history-item">
//                   <div className="notification-message">
//                     <strong>Meeting Tomorrow</strong>
//                     <p>Team meeting at 10:00 AM in conference room</p>
//                   </div>
//                   <div className="notification-meta">
//                     <span>Sent: Today 14:30</span>
//                     <span>Recipients: 24 employees</span>
//                   </div>
//                 </div>
//                 <div className="history-item">
//                   <div className="notification-message">
//                     <strong>System Maintenance</strong>
//                     <p>System will be down for maintenance from 12AM to 2AM tonight</p>
//                   </div>
//                   <div className="notification-meta">
//                     <span>Sent: Yesterday 16:45</span>
//                     <span>Recipients: 24 employees</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       case 'settings':
//         return (
//           <div className="settings-content">
//             <h2>System Settings</h2>
            
//             <div className="settings-section">
//               <h3>Working Hours</h3>
//               <div className="time-settings">
//                 <div className="time-input">
//                   <label>Start Time</label>
//                   <input type="time" defaultValue="08:00" />
//                 </div>
//                 <div className="time-input">
//                   <label>End Time</label>
//                   <input type="time" defaultValue="17:00" />
//                 </div>
//               </div>
//             </div>
            
//             <div className="settings-section">
//               <h3>Change Password</h3>
//               <div className="password-form">
//                 <div className="form-group">
//                   <label>Current Password</label>
//                   <input type="password" />
//                 </div>
//                 <div className="form-group">
//                   <label>New Password</label>
//                   <input type="password" />
//                 </div>
//                 <div className="form-group">
//                   <label>Confirm New Password</label>
//                   <input type="password" />
//                 </div>
//                 <button className="save-btn">Save Changes</button>
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="floating-elements">
//         <div className="floating-element"></div>
//         <div className="floating-element"></div>
//         <div className="floating-element"></div>
//       </div>
      
//       <div className="sidebar">
//         <div className="logo">
//           <h1>QRTime</h1>
//           <p>Admin Dashboard</p>
//         </div>
        
//         <nav className="nav-menu">
//           <ul>
//             <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
//               <FiHome /> Dashboard
//             </li>
//             <li className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>
//               <FiClock /> Attendance
//             </li>
//             <li className={activeTab === 'employees' ? 'active' : ''} onClick={() => setActiveTab('employees')}>
//               <FiUsers /> Employees
//             </li>
//             <li className={activeTab === 'reports' ? 'active' : ''} onClick={() => setActiveTab('reports')}>
//               <FiFileText /> Reports
//             </li>
//             <li className={activeTab === 'notifications' ? 'active' : ''} onClick={() => setActiveTab('notifications')}>
//               <FiBell /> Notifications
//             </li>
//             <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
//               <FiSettings /> Settings
//             </li>
//           </ul>
//         </nav>
        
//         <div className="logout-btn">
//           <FiLogOut /> Logout
//         </div>
//       </div>
      
//       <div className="main-content">
//         <div className="content-container">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;
import React, { useState } from 'react';
import './AdminDashboard.css';
import Sidebar from './components/Sidebar.jsx';
import DashboardContent from './components/DashboardContent.jsx';
import AttendanceContent from './components/AttendanceContent.jsx';
import EmployeesContent from './components/EmployeesContent.jsx';
import ReportsContent from './components/ReportsContent.jsx';
import NotificationsContent from './components/NotificationsContent.jsx';
import SettingsContent from './components/SettingsContent.jsx';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [employees] = useState([
    { id: 1, name: 'Ahmed Mohamed', position: 'Developer', status: 'present', checkIn: '08:00', checkOut: '17:00' },
    { id: 2, name: 'Mariam Ali', position: 'Designer', status: 'late', checkIn: '08:45', checkOut: '17:30' },
    { id: 3, name: 'Omar Khalid', position: 'Manager', status: 'absent', checkIn: '--', checkOut: '--' },
    { id: 4, name: 'Fatima Hassan', position: 'HR', status: 'present', checkIn: '07:55', checkOut: '16:58' },
    
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent employees={employees} />;
      case 'attendance':
        return <AttendanceContent employees={employees} />;
      case 'employees':
        return <EmployeesContent employees={employees} />;
      case 'reports':
        return <ReportsContent />;
      case 'notifications':
        return <NotificationsContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent employees={employees} />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="main-content">
        <div className="content-container">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;