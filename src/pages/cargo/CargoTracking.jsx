// src/components/cargo/CargoTracking.jsx
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const CargoTracking = ({ shipments }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const result = shipments.find(
      s => s.trackingNumber.toLowerCase() === trackingNumber.toLowerCase()
    );
    setSearchResult(result || 'not-found');
  };

  return (
    <div className="tracking-section">
      <Card className="tracking-search-card">
        <h2>Track Your Shipment</h2>
        <form onSubmit={handleSearch} className="tracking-form">
          <Input
            label="Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number (e.g., CRG001)"
            required
          />
          <Button type="submit">
            Track Shipment
          </Button>
        </form>
      </Card>

      {searchResult && searchResult !== 'not-found' && (
        <Card className="tracking-result-card">
          <div className="tracking-header">
            <h3>Shipment Found</h3>
            <span className={`status-badge status-${searchResult.status}`}>
              {searchResult.status}
            </span>
          </div>

          <div className="tracking-timeline">
            <div className={`timeline-point ${
              ['pending', 'in-transit', 'delivered'].includes(searchResult.status) 
              ? 'active' : ''
            }`}>
              <div className="point-label">Pending</div>
            </div>
            <div className={`timeline-point ${
              ['in-transit', 'delivered'].includes(searchResult.status) 
              ? 'active' : ''
            }`}>
              <div className="point-label">In Transit</div>
            </div>
            <div className={`timeline-point ${
              searchResult.status === 'delivered' ? 'active' : ''
            }`}>
              <div className="point-label">Delivered</div>
            </div>
          </div>

          <div className="tracking-details">
            <div className="route-info">
              <div className="origin">
                <label>From</label>
                <span>{searchResult.origin}</span>
                <small>{searchResult.senderName}</small>
              </div>
              <div className="destination">
                <label>To</label>
                <span>{searchResult.destination}</span>
                <small>{searchResult.receiverName}</small>
              </div>
            </div>
            
            <div className="shipment-info">
              <div className="info-item">
                <label>Weight</label>
                <span>{searchResult.weight} kg</span>
              </div>
              <div className="info-item">
                <label>Type</label>
                <span>{searchResult.type}</span>
              </div>
              <div className="info-item">
                <label>Departure</label>
                <span>{new Date(searchResult.departureDate).toLocaleDateString()}</span>
              </div>
              <div className="info-item">
                <label>Expected Arrival</label>
                <span>{new Date(searchResult.estimatedArrival).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </Card>
      )}

      {searchResult === 'not-found' && (
        <Card className="tracking-result-card">
          <div className="not-found-message">
            <h3>Shipment Not Found</h3>
            <p>No shipment found with tracking number: {trackingNumber}</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CargoTracking;