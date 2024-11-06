// src/components/reports/CargoStatistics.jsx
import React from 'react';
import Card from '../common/Card';

const CargoStatistics = ({ dateRange }) => {
  // Mock data for demonstration
  const cargoStats = {
    totalShipments: 856,
    totalWeight: 125840,
    averageWeight: 147,
    statusDistribution: {
      inTransit: 124,
      delivered: 698,
      pending: 34
    },
    topDestinations: [
      { destination: 'Singapore', shipments: 156, weight: 22450 },
      { destination: 'Dubai', shipments: 142, weight: 19800 },
      { destination: 'London', shipments: 98, weight: 15600 }
    ],
    cargoTypes: [
      { type: 'Electronics', percentage: 35 },
      { type: 'Perishables', percentage: 25 },
      { type: 'Documents', percentage: 20 },
      { type: 'Others', percentage: 20 }
    ]
  };

  return (
    <div className="analytics-section">
      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-header">
            <h3>Total Shipments</h3>
            <span className="stat-value">{cargoStats.totalShipments}</span>
          </div>
          <div className="status-distribution">
            <div className="status-item">
              <label>In Transit</label>
              <span className="in-transit">{cargoStats.statusDistribution.inTransit}</span>
            </div>
            <div className="status-item">
              <label>Delivered</label>
              <span className="completed">{cargoStats.statusDistribution.delivered}</span>
            </div>
            <div className="status-item">
              <label>Pending</label>
              <span className="pending">{cargoStats.statusDistribution.pending}</span>
            </div>
          </div>
        </Card>

        <Card className="stat-card">
          <div className="stat-header">
            <h3>Total Weight Handled</h3>
            <span className="stat-value">{(cargoStats.totalWeight / 1000).toFixed(1)}T</span>
          </div>
          <div className="sub-stat">
            <label>Average Weight per Shipment</label>
            <span>{cargoStats.averageWeight} kg</span>
          </div>
        </Card>
      </div>

      <div className="detailed-analysis">
        <Card className="analysis-card">
          <h3>Top Destinations</h3>
          <div className="destinations-list">
            {cargoStats.topDestinations.map((dest, index) => (
              <div key={index} className="destination-item">
                <div className="destination-info">
                  <span className="destination-name">{dest.destination}</span>
                  <div className="destination-stats">
                    <span>{dest.shipments} shipments</span>
                    <span>{(dest.weight / 1000).toFixed(1)}T</span>
                  </div>
                </div>
                <div className="destination-bar">
                  <div 
                    className="bar-fill" 
                    style={{ 
                      width: `${(dest.shipments / Math.max(...cargoStats.topDestinations.map(d => d.shipments))) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="analysis-card">
          <h3>Cargo Types Distribution</h3>
          <div className="cargo-types-chart">
            {cargoStats.cargoTypes.map((type, index) => (
              <div key={index} className="type-item">
                <div className="type-info">
                  <span className="type-name">{type.type}</span>
                  <span className="type-percentage">{type.percentage}%</span>
                </div>
                <div className="type-bar">
                  <div 
                    className="bar-fill"
                    style={{ width: `${type.percentage}%` }}
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

export default CargoStatistics;