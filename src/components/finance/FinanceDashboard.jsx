// src/components/finance/FinanceDashboard.jsx
import React from 'react';
import Card from '../common/Card';

const FinanceDashboard = ({ transactions }) => {
  // Calculate financial metrics
  const calculateMetrics = () => {
    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();

    const monthlyTransactions = transactions.filter(t => {
      const tDate = new Date(t.date);
      return tDate.getMonth() === thisMonth && tDate.getFullYear() === thisYear;
    });

    const totalIncome = monthlyTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = monthlyTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const netIncome = totalIncome - totalExpenses;

    const categorySummary = monthlyTransactions.reduce((acc, t) => {
      if (!acc[t.category]) acc[t.category] = 0;
      acc[t.category] += t.amount;
      return acc;
    }, {});

    return {
      totalIncome,
      totalExpenses,
      netIncome,
      categorySummary
    };
  };

  const metrics = calculateMetrics();

  return (
    <div className="finance-dashboard">
      <div className="metrics-grid">
        <Card className="metric-card">
          <h3>Monthly Income</h3>
          <div className="metric-value income">
            ${metrics.totalIncome.toFixed(2)}
          </div>
        </Card>

        <Card className="metric-card">
          <h3>Monthly Expenses</h3>
          <div className="metric-value expense">
            ${metrics.totalExpenses.toFixed(2)}
          </div>
        </Card>

        <Card className="metric-card">
          <h3>Net Income</h3>
          <div className={`metric-value ${metrics.netIncome >= 0 ? 'income' : 'expense'}`}>
            ${Math.abs(metrics.netIncome).toFixed(2)}
          </div>
        </Card>
      </div>

      <Card className="category-summary">
        <h3>Category Summary</h3>
        <div className="category-grid">
          {Object.entries(metrics.categorySummary).map(([category, amount]) => (
            <div key={category} className="category-item">
              <span className="category-name">
                {category.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </span>
              <span className="category-amount">
                ${amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FinanceDashboard;