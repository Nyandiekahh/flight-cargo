// src/pages/dashboard/Dashboard.jsx
import React from 'react';
import Card from '../../components/common/Card';
import '../../assets/styles/dashboard.css';

const Dashboard = () => {
  const stats = [
    { title: 'Total Bookings', value: '156', trend: '+12%' },
    { title: 'Active Shipments', value: '43', trend: '+5%' },
    { title: 'Revenue', value: '$24,500', trend: '+8%' },
    { title: 'Pending Tasks', value: '12', trend: '-3%' }
  ];

  return (
    <div className="dashboard">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card">
            <h3 className="stat-title">{stat.title}</h3>
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <span className={`stat-trend ${
                stat.trend.startsWith('+') ? 'positive' : 'negative'
              }`}>
                {stat.trend}
              </span>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="dashboard-grid">
        <Card className="recent-bookings">
          <h2>Recent Bookings</h2>
          <p>Coming soon...</p>
        </Card>
        
        <Card className="active-shipments">
          <h2>Active Shipments</h2>
          <p>Coming soon...</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;