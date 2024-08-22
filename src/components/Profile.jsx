import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <img src="/path/to/profile-photo.jpg" alt="Profile" className="profile-photo" />
      <div className="profile-info">
        <h2>John Doe</h2>
        <p>CEO & Founder</p>
        <p>John is a visionary leader who has been leading our company towards success...</p>
      </div>
    </div>
  );
};

export default Profile;