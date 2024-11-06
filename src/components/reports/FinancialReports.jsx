// src/components/reports/FinancialReports.jsx
import React from 'react';
import Card from '../common/Card';

const FinancialReports = ({ dateRange }) => {
  // Mock data for demonstration
  const financialStats = {
    totalRevenue: 1250000,
    totalExpenses: 875000,
    netProfit: 375000,
    revenueBreakdown: {
      flightBookings: 725000,
      cargoShipments: 485000,
      otherServices: 40000
    },
    monthlyRevenue: [
      { month: 'Jan', revenue: 295000, expenses: 198000 },
      { month: 'Feb', revenue: 315000, expenses: 225000 },
      { month: 'Mar', revenue: 342000, expenses: 248000 },
      { month: 'Apr', revenue: 298000, expenses: 204000 }
    ],
    topExpenses: [
      { category: 'Fuel', amount: 320000 },
      { category: 'Staff', amount: 280000 },
      { category: 'Maintenance', amount: 175000 },
      { category: 'Operations', amount: 100000 }
    ]
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="analytics-section">
      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-header">
            <h3>Total Revenue</h3>
            <span className="stat-value">{formatCurrency(financialStats.totalRevenue)}</span>
          </div>
          <div className="revenue-breakdown">
            {Object.entries(financialStats.revenueBreakdown).map(([key, value], index) => (
              <div key={index} className="breakdown-item">
                <label>{key.split(/(?=[A-Z])/).join(' ')}</label>
                <span>{formatCurrency(value)}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="stat-card">
          <div className="stat-header">
            <h3>Net Profit</h3>
            <span className="stat-value profit">{formatCurrency(financialStats.netProfit)}</span>
          </div>
          <div className="profit-metrics">
            <div className="metric-item">
              <label>Revenue</label>
              <span className="positive">{formatCurrency(financialStats.totalRevenue)}</span>
            </div>
            <div className="metric-item">
              <label>Expenses</label>
              <span className="negative">-{formatCurrency(financialStats.totalExpenses)}</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="detailed-analysis">
        <Card className="analysis-card">
          <h3>Monthly Revenue vs Expenses</h3>
          <div className="monthly-chart">
            {financialStats.monthlyRevenue.map((data, index) => (
              <div key={index} className="month-column">
                <div className="chart-bars">
                  <div 
                    className="revenue-bar"
                    style={{ 
                      height: `${(data.revenue / Math.max(...financialStats.monthlyRevenue.map(d => Math.max(d.revenue, d.expenses)))) * 100}%` 
                    }}
                  >
                    <span className="bar-value">{formatCurrency(data.revenue)}</span>
                  </div>
                  <div 
                    className="expenses-bar"
                    style={{ 
                      height: `${(data.expenses / Math.max(...financialStats.monthlyRevenue.map(d => Math.max(d.revenue, d.expenses)))) * 100}%` 
                    }}
                  >
                    <span className="bar-value">{formatCurrency(data.expenses)}</span>
                  </div>
                </div>
                <span className="month-label">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-color revenue"></span>
              <span>Revenue</span>
            </div>
            <div className="legend-item">
              <span className="legend-color expenses"></span>
              <span>Expenses</span>
            </div>
          </div>
        </Card>

        <Card className="analysis-card">
          <h3>Top Expenses</h3>
          <div className="expenses-list">
            {financialStats.topExpenses.map((expense, index) => (
              <div key={index} className="expense-item">
                <div className="expense-info">
                  <span className="expense-category">{expense.category}</span>
                  <span className="expense-amount">{formatCurrency(expense.amount)}</span>
                </div>
                <div className="expense-bar">
                  <div 
                    className="bar-fill"
                    style={{ 
                      width: `${(expense.amount / Math.max(...financialStats.topExpenses.map(e => e.amount))) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FinancialReports;