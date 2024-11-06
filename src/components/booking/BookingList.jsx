// src/components/booking/BookingList.jsx
import React from 'react';
import Card from '../common/Card';

const BookingList = ({ bookings }) => {
  return (
    <div className="booking-list">
      {bookings.map(booking => (
        <Card key={booking.id} className="booking-card">
          <div className="booking-card-header">
            <h3>{booking.passengerName}</h3>
            <span className={`status-badge status-${booking.status}`}>
              {booking.status}
            </span>
          </div>
          
          <div className="booking-card-content">
            <div className="booking-details">
              <div className="detail-group">
                <label>Flight</label>
                <span>{booking.flightNumber}</span>
              </div>
              
              <div className="detail-group">
                <label>Route</label>
                <span>{booking.from} → {booking.to}</span>
              </div>
              
              <div className="detail-group">
                <label>Date</label>
                <span>{new Date(booking.date).toLocaleDateString()}</span>
              </div>
              
              <div className="detail-group">
                <label>Price</label>
                <span>${booking.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BookingList;