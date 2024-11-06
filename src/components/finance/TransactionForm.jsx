// src/components/finance/TransactionForm.jsx
import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const TransactionForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    type: 'income',
    category: '',
    amount: '',
    description: '',
    date: ''
  });

  const categories = {
    income: ['flight-booking', 'cargo-shipping', 'other-services'],
    expense: ['fuel', 'maintenance', 'salary', 'other-expenses']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'type' ? { category: '' } : {}) // Reset category when type changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h2>New Transaction</h2>
      
      <div className="form-grid">
        <div className="input-group">
          <label className="input-label">Transaction Type</label>
          <select 
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-label">Category</label>
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Select Category</option>
            {categories[formData.type].map(category => (
              <option key={category} value={category}>
                {category.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </option>
            ))}
          </select>
        </div>

        <Input
          type="number"
          label="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <Input
          type="date"
          label="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <div className="input-group full-width">
          <label className="input-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input-field"
            rows="3"
            required
          />
        </div>
      </div>

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Create Transaction
        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;