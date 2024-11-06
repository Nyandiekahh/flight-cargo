// src/components/cargo/CargoForm.jsx
import React, { useState } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const CargoForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    senderName: '',
    receiverName: '',
    origin: '',
    destination: '',
    weight: '',
    type: '',
    departureDate: '',
    estimatedArrival: '',
    cost: ''
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
    <form onSubmit={handleSubmit} className="cargo-form">
      <h2>New Cargo Shipment</h2>
      
      <div className="form-grid">
        <Input
          label="Sender Name"
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
          required
        />

        <Input
          label="Receiver Name"
          name="receiverName"
          value={formData.receiverName}
          onChange={handleChange}
          required
        />

        <Input
          label="Origin"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          required
        />

        <Input
          label="Destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />

        <Input
          type="number"
          label="Weight (kg)"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <Input
          label="Cargo Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />

        <Input
          type="date"
          label="Departure Date"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
        />

        <Input
          type="date"
          label="Estimated Arrival"
          name="estimatedArrival"
          value={formData.estimatedArrival}
          onChange={handleChange}
          required
        />

        <Input
          type="number"
          label="Cost"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Create Shipment
        </Button>
      </div>
    </form>
  );
};

export default CargoForm;