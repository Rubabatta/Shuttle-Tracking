import React from 'react'
import './SideBar.css'
import { FaBus, FaUserCircle, FaRoute, FaBell, FaQuestionCircle, FaClock, FaHome } from "react-icons/fa";
import SearchBar from '../SearchBar/SearchBar';

const SideBar = () => {
  return (
    <div className='main'>
    <aside className='sidebar'>

        <div className='menus'>
            <div className="icon"><FaHome /></div>
            <h3>Dashboard</h3>
        </div>

        <div className='menus'>
            <div className="icon"><FaBus /></div>
            <h3>Track Bus</h3>
        </div>

        <div className='menus'>
            <div className="icon"><FaRoute /></div>
            <h3>Routes</h3>
        </div>

        <div className='menus'>
            <div className="icon"><FaClock /></div>
            <h3>Timetable</h3>
        </div>

        <div className='menus'>
            <div className="icon"><FaBell /></div>
            <h3>Notifications</h3>
        </div>

        <div className='menus'>
            <div className="icon"><FaQuestionCircle /></div>
            <h3>Help & Support</h3>
        </div>

        <div className='menus'>
            <div className="icon"><FaUserCircle /></div>
            <h3>Profile</h3>
        </div>

    </aside>
  <div>
    <SearchBar/>
  </div>
    </div>
  )
}

export default SideBar