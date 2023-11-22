import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className='dashboard-name'>
        <Link to={"/dashboard"}><h3>WebName</h3></Link>
      </div>
      <div className='dashboard-list-flex'>
        <ul className='dashboard-list'>
          <li><Link to={"/dashboard/profile"}>My Profile</Link></li>
          <li><Link to={"/dashboard/notes"}>My Notes</Link></li>
          <li><Link to={"/dashboard/schedules"}>Schedules</Link></li>
          <li><Link to={"/dashboard/materials"}>Materials</Link></li>
          <li><Link to={"/dashboard/events"}>Upcoming Events</Link></li>

        </ul>
      </div>
      <div>
        <ul className='dashboard-lower'>
          <li><Link to={"#"}>Settings</Link></li>
          <li><Link to ={"#"}>Contact Us</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar
