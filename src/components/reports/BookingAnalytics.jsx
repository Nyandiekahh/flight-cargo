// src/components/reports/BookingAnalytics.jsx
import React from 'react';
import Card from '../common/Card';

const BookingAnalytics = ({ dateRange }) => {
  // Mock data for demonstration
  const bookingStats = {
    totalBookings: 1250,
    completedBookings: 980,
    cancelledBookings: 45,
    pendingBookings: 225,
    popularRoutes: [
      { route: 'New York - London', bookings: 156 },
      { route: 'Dubai - Singapore', bookings: 142 },
      { route: 'Paris - Tokyo', bookings: 98 }
    ],
    monthlyTrend: [
      { month: 'Jan', bookings: 95 },
      { month: 'Feb', bookings: 102 },
      { month: 'Mar', bookings: 124 },
      { month: 'Apr', bookings: 98 }
    ]
  };

  return (
    <div className="analytics-section">
      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-header">
            <h3>Total Bookings</h3>
            <span className="stat-value">{bookingStats.totalBookings}</span>
          </div>
          <div className="stat-chart">
            {/* Add chart visualization here */}
          </div>
        </Card>

        <Card className="stat-card">
          <div className="stat-header">
            <h3>Booking Status</h3>
          </div>
          <div className="status-distribution">
            <div className="status-item">
              <label>Completed</label>
              <span className="completed">{bookingStats.completedBookings}</span>
            </div>
            <div className="status-item">
              <label>Pending</label>
              <span className="pending">{bookingStats.pendingBookings}</span>
            </div>
            <div className="status-item">
              <label>Cancelled</label>
              <span className="cancelled">{bookingStats.cancelledBookings}</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="detailed-analysis">
        <Card className="analysis-card">
          <h3>Popular Routes</h3>
          <div className="routes-list">
            {bookingStats.popularRoutes.map((route, index) => (
              <div key={index} className="route-item">
                <div className="route-info">
                  <span className="route-name">{route.route}</span>
                  <span className="route-bookings">{route.bookings} bookings</span>
                </div>
                <div className="route-bar">
                  <div 
                    className="bar-fill" 
                    style={{ 
                      width: `${(route.bookings / Math.max(...bookingStats.popularRoutes.map(r => r.bookings))) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="analysis-card">
          <h3>Monthly Trend</h3>
          <div className="trend-chart">
            {bookingStats.monthlyTrend.map((data, index) => (
              <div key={index} className="trend-bar">
                <div 
                  className="bar" 
                  style={{ 
                    height: `${(data.bookings / Math.max(...bookingStats.monthlyTrend.map(d => d.bookings))) * 100}%` 
                  }}
                >
                  <span className="bar-value">{data.bookings}</span>
                </div>
                <span className="bar-label">{data.month}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BookingAnalytics;