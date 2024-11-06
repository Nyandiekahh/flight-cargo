// src/components/cargo/CargoList.jsx
import React from 'react';
import Card from '../../components/common/Card';

const CargoList = ({ shipments }) => {
  return (
    <div className="cargo-list">
      {shipments.map(shipment => (
        <Card key={shipment.id} className="cargo-card">
          <div className="cargo-card-header">
            <div className="tracking-info">
              <h3>{shipment.trackingNumber}</h3>
              <span className={`status-badge status-${shipment.status}`}>
                {shipment.status}
              </span>
            </div>
            <div className="cargo-type">{shipment.type}</div>
          </div>
          
          <div className="cargo-card-content">
            <div className="cargo-details">
              <div className="detail-group">
                <label>From</label>
                <span>{shipment.origin}</span>
                <small>{shipment.senderName}</small>
              </div>
              
              <div className="detail-group">
                <label>To</label>
                <span>{shipment.destination}</span>
                <small>{shipment.receiverName}</small>
              </div>
              
              <div className="detail-group">
                <label>Weight</label>
                <span>{shipment.weight} kg</span>
              </div>
              
              <div className="detail-group">
                <label>Cost</label>
                <span>${shipment.cost.toFixed(2)}</span>
              </div>
            </div>

            <div className="cargo-dates">
              <div className="detail-group">
                <label>Departure</label>
                <span>{new Date(shipment.departureDate).toLocaleDateString()}</span>
              </div>
              
              <div className="detail-group">
                <label>Expected Arrival</label>
                <span>{new Date(shipment.estimatedArrival).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CargoList;