// src/components/layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import '../../assets/styles/layout.css';

const Sidebar = () => {
  const { user } = useAuth();

  // Define which roles can access each menu item
  const canAccessReports = ['admin', 'manager'].includes(user?.role);
  const canAccessAdmin = user?.role === 'admin';

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊', access: true },
    { path: '/booking', label: 'Flight Booking', icon: '✈️', access: true },
    { path: '/cargo', label: 'Cargo Management', icon: '📦', access: true },
    { path: '/finance', label: 'Finance', icon: '💰', access: true },
    { path: '/reports', label: 'Reports & Analytics', icon: '📈', access: canAccessReports },
    { path: '/admin', label: 'Admin Panel', icon: '⚙️', access: canAccessAdmin }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="company-name">FlyCargo System</h2>
        <p className="user-role">{user?.role}</p>
      </div>
      <nav className="sidebar-nav">
        {menuItems.filter(item => item.access).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;