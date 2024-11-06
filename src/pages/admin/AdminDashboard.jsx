// src/pages/admin/AdminDashboard.jsx
import React, { useState } from 'react';
import UserManagement from '../../components/admin/UserManagement';
import RoleManagement from '../../components/admin/RoleManagement';
import SystemSettings from '../../components/admin/SystemSettings';
import '../../assets/styles/admin.css';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('users');

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
      </div>

      <div className="admin-navigation">
        <button 
          className={`nav-btn ${selectedSection === 'users' ? 'active' : ''}`}
          onClick={() => setSelectedSection('users')}
        >
          User Management
        </button>
        <button 
          className={`nav-btn ${selectedSection === 'roles' ? 'active' : ''}`}
          onClick={() => setSelectedSection('roles')}
        >
          Role Management
        </button>
        <button 
          className={`nav-btn ${selectedSection === 'settings' ? 'active' : ''}`}
          onClick={() => setSelectedSection('settings')}
        >
          System Settings
        </button>
      </div>

      <div className="admin-content">
        {selectedSection === 'users' && <UserManagement />}
        {selectedSection === 'roles' && <RoleManagement />}
        {selectedSection === 'settings' && <SystemSettings />}
      </div>
    </div>
  );
};

export default AdminDashboard;