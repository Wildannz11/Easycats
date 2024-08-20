import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Fetch profile image from API or local storage
    // Example:
    // const storedImage = localStorage.getItem('profileImage');
    // if (storedImage) {
    //   setProfileImage(storedImage);
    // }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        // Store image in local storage or send to API
        // Example:
        // localStorage.setItem('profileImage', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="profile-section">
          <img src={profileImage || 'placeholder.jpg'} alt="Profile" className="profile-image" />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <ul>
          <li><Link to="/dashboard/projects">Projects</Link></li>
          <li><Link to="/dashboard/clients">Clients</Link></li>
          <li><Link to="/dashboard/team">Team</Link></li>
          <li><Link to="/login">Team</Link></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
      <main className="dashboard-content">
        {/* Dashboard content goes here */}
      </main>
    </div>
  );
};

export default Dashboard;
