// src/pages/reports/Reports.jsx
import React, { useState } from 'react';
import Button from '../../components/common/Button';
import BookingAnalytics from '../../components/reports/BookingAnalytics';
import CargoStatistics from '../../components/reports/CargoStatistics';
import FinancialReports from '../../components/reports/FinancialReports';
import '../../assets/styles/reports.css';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('booking');
  const [dateRange, setDateRange] = useState('month'); // month, quarter, year

  return (
    <div className="reports-page">
      <div className="reports-header">
        <div className="header-left">
          <h1>Reports & Analytics</h1>
          <div className="date-range-selector">
            <button 
              className={`range-btn ${dateRange === 'month' ? 'active' : ''}`}
              onClick={() => setDateRange('month')}
            >
              Monthly
            </button>
            <button 
              className={`range-btn ${dateRange === 'quarter' ? 'active' : ''}`}
              onClick={() => setDateRange('quarter')}
            >
              Quarterly
            </button>
            <button 
              className={`range-btn ${dateRange === 'year' ? 'active' : ''}`}
              onClick={() => setDateRange('year')}
            >
              Yearly
            </button>
          </div>
        </div>
        <Button>Export Report</Button>
      </div>

      <div className="reports-nav">
        <button 
          className={`nav-btn ${selectedReport === 'booking' ? 'active' : ''}`}
          onClick={() => setSelectedReport('booking')}
        >
          Booking Analytics
        </button>
        <button 
          className={`nav-btn ${selectedReport === 'cargo' ? 'active' : ''}`}
          onClick={() => setSelectedReport('cargo')}
        >
          Cargo Statistics
        </button>
        <button 
          className={`nav-btn ${selectedReport === 'financial' ? 'active' : ''}`}
          onClick={() => setSelectedReport('financial')}
        >
          Financial Reports
        </button>
      </div>

      <div className="reports-summary">
        {selectedReport === 'booking' && <BookingAnalytics dateRange={dateRange} />}
        {selectedReport === 'cargo' && <CargoStatistics dateRange={dateRange} />}
        {selectedReport === 'financial' && <FinancialReports dateRange={dateRange} />}
      </div>
    </div>
  );
};

export default Reports;