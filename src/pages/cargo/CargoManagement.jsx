// src/pages/cargo/CargoManagement.jsx
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import CargoForm from './CargoForm';
import CargoList from './CargoList';
import CargoTracking from './CargoTracking';
import '../../assets/styles/cargo.css';

const CargoManagement = () => {
  const [showCargoForm, setShowCargoForm] = useState(false);
  const [selectedTab, setSelectedTab] = useState('all'); // 'all' | 'tracking'
  const [shipments, setShipments] = useState([
    {
      id: 1,
      trackingNumber: "CRG001",
      senderName: "Tech Corp Ltd",
      receiverName: "Global Electronics",
      origin: "Dubai",
      destination: "Singapore",
      weight: 150.5,
      type: "Electronics",
      status: "in-transit",
      departureDate: "2024-11-15",
      estimatedArrival: "2024-11-18",
      cost: 1250.00,
      handledBy: "employee1"
    },
    {
      id: 2,
      trackingNumber: "CRG002",
      senderName: "Fresh Foods Inc",
      receiverName: "Grocery Chain Co",
      origin: "Amsterdam",
      destination: "New York",
      weight: 420.0,
      type: "Perishables",
      status: "pending",
      departureDate: "2024-11-16",
      estimatedArrival: "2024-11-17",
      cost: 2100.00,
      handledBy: "employee1"
    }
  ]);

  const handleAddCargo = (newCargo) => {
    const trackingNumber = `CRG${String(shipments.length + 1).padStart(3, '0')}`;
    setShipments([
      ...shipments,
      {
        ...newCargo,
        id: shipments.length + 1,
        trackingNumber,
        status: 'pending',
        handledBy: 'employee1'
      }
    ]);
    setShowCargoForm(false);
  };

  return (
    <div className="cargo-page">
      <div className="cargo-header">
        <h1>Cargo Management</h1>
        <Button 
          onClick={() => setShowCargoForm(true)}
          className="new-cargo-btn"
        >
          New Shipment
        </Button>
      </div>

      <div className="cargo-tabs">
        <button 
          className={`tab-btn ${selectedTab === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedTab('all')}
        >
          All Shipments
        </button>
        <button 
          className={`tab-btn ${selectedTab === 'tracking' ? 'active' : ''}`}
          onClick={() => setSelectedTab('tracking')}
        >
          Tracking
        </button>
      </div>

      {showCargoForm ? (
        <Card className="cargo-form-card">
          <CargoForm 
            onSubmit={handleAddCargo}
            onCancel={() => setShowCargoForm(false)}
          />
        </Card>
      ) : (
        selectedTab === 'all' ? (
          <CargoList shipments={shipments} />
        ) : (
          <CargoTracking shipments={shipments} />
        )
      )}
    </div>
  );
};

export default CargoManagement;