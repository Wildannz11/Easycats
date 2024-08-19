import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCat, FaStethoscope, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="account-menu">
        <FaUserCircle className="icon" />
        <span>Nama Akun</span>
      </div>
      <ul>
        <li>
          <Link to="/">
            <FaHome className="icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/cat-data">
            <FaCat className="icon" /> Data Kucing
          </Link>
        </li>
        <li>
          <Link to="/check-disease">
            <FaStethoscope className="icon" /> Cek Penyakit
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;