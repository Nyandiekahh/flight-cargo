// src/components/layout/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';
import '../../assets/styles/layout.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="user-info">
          <span className="user-name">{user?.username}</span>
        </div>
        <Button 
          variant="secondary" 
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;