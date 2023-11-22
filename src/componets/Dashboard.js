import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing Pages
import Sidebar from './Sidebar';
import UpcomingEvents from './UpcomingEvents';
import Schedule from './Schedule';
import CalendarReminder from './CalendarReminder';
import Profile from './Profile';
import Notes from './Notes';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />

      <div className="content" style={{ marginLeft: "200px", marginTop: "50px", position: "absolute" }}>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="notes" element={<Notes/>} />
          <Route path="schedules" element={<Schedule />} />
          <Route path="events" element={<UpcomingEvents />} />
          <Route path="reminder" element={<CalendarReminder />} />
        </Routes>

      </div>
    </div>
  );
};

export default Dashboard;
