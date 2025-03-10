import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./PAGES/LoginPage";
import DashboardPage from "./PAGES/DashboardPage";
import TimesheetPage from "./PAGES/TimesheetPage";  // Import TimesheetPage
import DelegateTimeLog from "./PAGES/DelegateTimeLog";  // Import DelegateTimeLog
import TimeSheetForm from "./PAGES/TimeSheetForm";  // Corrected import for TimeSheetForm
import ModifyTimeLog from "./PAGES/ModifyTimelog"; // Make sure the path is correct


function App() {
  const [user, setUser] = useState(null);  // State to hold user data

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/dashboard/*" element={<DashboardPage user={user} />} />

        <Route path="/dashboard/timesheet" element={<TimesheetPage />} /> {/* Timesheet route */}
        <Route path="/dashboard/create-time-log" element={<TimeSheetForm />} /> {/* TimeSheetForm route */}
        <Route path="/dashboard/delegate-time-log" element={<DelegateTimeLog />} />
        <Route path="/dashboard/modify-time-log" element={<ModifyTimeLog />} /> 



        <Route path="/" element={<LoginPage setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
