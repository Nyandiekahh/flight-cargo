// src/pages/booking/FlightBooking.jsx
import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import BookingForm from '../../components/booking/BookingForm';
import BookingList from '../../components/booking/BookingList';
import '../../assets/styles/booking.css';

const FlightBooking = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookings, setBookings] = useState([
    {
      id: 1,
      passengerName: "John Doe",
      flightNumber: "FL123",
      from: "New York",
      to: "London",
      date: "2024-11-15",
      status: "confirmed",
      price: 450.00,
      bookedBy: "employee1"
    },
    {
      id: 2,
      passengerName: "Jane Smith",
      flightNumber: "FL456",
      from: "Paris",
      to: "Tokyo",
      date: "2024-11-20",
      status: "pending",
      price: 850.00,
      bookedBy: "employee1"
    }
  ]);

  const handleAddBooking = (newBooking) => {
    setBookings([
      ...bookings, 
      { 
        ...newBooking, 
        id: bookings.length + 1,
        status: 'pending',
        bookedBy: 'employee1' // This would come from auth context in real app
      }
    ]);
    setShowBookingForm(false);
  };

  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>Flight Bookings</h1>
        <Button 
          onClick={() => setShowBookingForm(true)}
          className="new-booking-btn"
        >
          New Booking
        </Button>
      </div>

      {showBookingForm ? (
        <Card className="booking-form-card">
          <BookingForm 
            onSubmit={handleAddBooking}
            onCancel={() => setShowBookingForm(false)}
          />
        </Card>
      ) : (
        <BookingList bookings={bookings} />
      )}
    </div>
  );
};

export default FlightBooking;