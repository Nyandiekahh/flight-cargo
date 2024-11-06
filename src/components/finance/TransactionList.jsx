// src/components/finance/TransactionList.jsx
import React from 'react';
import Card from '../common/Card';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions.map(transaction => (
        <Card key={transaction.id} className="transaction-card">
          <div className="transaction-card-header">
            <div className="transaction-info">
              <span className={`transaction-type ${transaction.type}`}>
                {transaction.type === 'income' ? '↓' : '↑'}
              </span>
              <div>
                <h3>{transaction.reference}</h3>
                <span className="transaction-category">
                  {transaction.category.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </span>
              </div>
            </div>
            <div className={`transaction-amount ${transaction.type}`}>
              {transaction.type === 'income' ? '+' : '-'}
              ${transaction.amount.toFixed(2)}
            </div>
          </div>
          
          <div className="transaction-card-content">
            <p className="transaction-description">{transaction.description}</p>
            <div className="transaction-details">
              <div className="detail-item">
                <label>Date</label>
                <span>{new Date(transaction.date).toLocaleDateString()}</span>
              </div>
              <div className="detail-item">
                <label>Status</label>
                <span className={`status-badge status-${transaction.status}`}>
                  {transaction.status}
                </span>
              </div>
              <div className="detail-item">
                <label>Processed By</label>
                <span>{transaction.processedBy}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TransactionList;