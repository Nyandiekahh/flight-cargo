// src/components/booking/BookingForm.jsx
import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const BookingForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    passengerName: '',
    flightNumber: '',
    from: '',
    to: '',
    date: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>New Flight Booking</h2>
      
      <div className="form-grid">
        <Input
          label="Passenger Name"
          name="passengerName"
          value={formData.passengerName}
          onChange={handleChange}
          required
        />

        <Input
          label="Flight Number"
          name="flightNumber"
          value={formData.flightNumber}
          onChange={handleChange}
          required
        />

        <Input
          label="From"
          name="from"
          value={formData.from}
          onChange={handleChange}
          required
        />

        <Input
          label="To"
          name="to"
          value={formData.to}
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

        <Input
          type="number"
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Create Booking
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;