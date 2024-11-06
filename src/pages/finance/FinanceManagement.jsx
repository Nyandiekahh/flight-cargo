// src/pages/finance/FinanceManagement.jsx
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import TransactionList from '../../components/finance/TransactionList';
import TransactionForm from '../../components/finance/TransactionForm';
import FinanceDashboard from '../../components/finance/FinanceDashboard';
import '../../assets/styles/finance.css';

const FinanceManagement = () => {
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [selectedView, setSelectedView] = useState('dashboard'); // 'dashboard' | 'transactions'
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'income',
      category: 'flight-booking',
      amount: 450.00,
      reference: 'FLT-001',
      description: 'Flight Booking - New York to London',
      date: '2024-11-15',
      status: 'completed',
      processedBy: 'employee1'
    },
    {
      id: 2,
      type: 'income',
      category: 'cargo-shipping',
      amount: 1250.00,
      reference: 'CRG-001',
      description: 'Cargo Shipment - Dubai to Singapore',
      date: '2024-11-15',
      status: 'completed',
      processedBy: 'employee1'
    },
    {
      id: 3,
      type: 'expense',
      category: 'fuel',
      amount: 2000.00,
      reference: 'EXP-001',
      description: 'Fuel Payment - November Batch 1',
      date: '2024-11-14',
      status: 'completed',
      processedBy: 'employee1'
    }
  ]);

  const handleAddTransaction = (newTransaction) => {
    const reference = newTransaction.type === 'income' ? 
      `INC-${String(transactions.length + 1).padStart(3, '0')}` : 
      `EXP-${String(transactions.length + 1).padStart(3, '0')}`;
      
    setTransactions([
      ...transactions,
      {
        ...newTransaction,
        id: transactions.length + 1,
        reference,
        status: 'completed',
        processedBy: 'employee1'
      }
    ]);
    setShowTransactionForm(false);
  };

  return (
    <div className="finance-page">
      <div className="finance-header">
        <h1>Finance Management</h1>
        <Button 
          onClick={() => setShowTransactionForm(true)}
          className="new-transaction-btn"
        >
          New Transaction
        </Button>
      </div>

      <div className="finance-tabs">
        <button 
          className={`tab-btn ${selectedView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setSelectedView('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`tab-btn ${selectedView === 'transactions' ? 'active' : ''}`}
          onClick={() => setSelectedView('transactions')}
        >
          Transactions
        </button>
      </div>

      {showTransactionForm ? (
        <Card className="transaction-form-card">
          <TransactionForm 
            onSubmit={handleAddTransaction}
            onCancel={() => setShowTransactionForm(false)}
          />
        </Card>
      ) : (
        selectedView === 'dashboard' ? (
          <FinanceDashboard transactions={transactions} />
        ) : (
          <TransactionList transactions={transactions} />
        )
      )}
    </div>
  );
};

export default FinanceManagement;