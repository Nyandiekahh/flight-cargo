// src/components/admin/SystemSettings.jsx
import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Input from '../common/Input';

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    companyName: 'FlyCargo System',
    supportEmail: 'support@flycargo.com',
    bookingSettings: {
      maxBookingsPerDay: 100,
      advanceBookingDays: 30,
      cancellationPeriodHours: 24
    },
    cargoSettings: {
      maxWeightKg: 1000,
      restrictedItems: ['Explosives', 'Flammables', 'Batteries'],
      operatingHours: '8:00 AM - 6:00 PM'
    },
    notificationSettings: {
      emailNotifications: true,
      smsNotifications: false,
      bookingConfirmation: true,
      statusUpdates: true
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedSettings, setEditedSettings] = useState(settings);

  const handleSave = () => {
    setSettings(editedSettings);
    setIsEditing(false);
  };

  return (
    <div className="system-settings">
      <div className="section-header">
        <h2>System Settings</h2>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>Edit Settings</Button>
        )}
      </div>

      <div className="settings-grid">
        <Card className="settings-card">
          <h3>General Settings</h3>
          <div className="settings-form">
            <Input
              label="Company Name"
              value={isEditing ? editedSettings.companyName : settings.companyName}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                companyName: e.target.value
              })}
              disabled={!isEditing}
            />
            <Input
              label="Support Email"
              type="email"
              value={isEditing ? editedSettings.supportEmail : settings.supportEmail}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                supportEmail: e.target.value
              })}
              disabled={!isEditing}
            />
          </div>
        </Card>

        <Card className="settings-card">
          <h3>Booking Settings</h3>
          <div className="settings-form">
            <Input
              label="Max Bookings Per Day"
              type="number"
              value={isEditing ? editedSettings.bookingSettings.maxBookingsPerDay : settings.bookingSettings.maxBookingsPerDay}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                bookingSettings: {
                  ...editedSettings.bookingSettings,
                  maxBookingsPerDay: parseInt(e.target.value)
                }
              })}
              disabled={!isEditing}
            />
            <Input
              label="Advance Booking Days"
              type="number"
              value={isEditing ? editedSettings.bookingSettings.advanceBookingDays : settings.bookingSettings.advanceBookingDays}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                bookingSettings: {
                  ...editedSettings.bookingSettings,
                  advanceBookingDays: parseInt(e.target.value)
                }
              })}
              disabled={!isEditing}
            />
            <Input
              label="Cancellation Period (Hours)"
              type="number"
              value={isEditing ? editedSettings.bookingSettings.cancellationPeriodHours : settings.bookingSettings.cancellationPeriodHours}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                bookingSettings: {
                  ...editedSettings.bookingSettings,
                  cancellationPeriodHours: parseInt(e.target.value)
                }
              })}
              disabled={!isEditing}
            />
          </div>
        </Card>

        <Card className="settings-card">
          <h3>Cargo Settings</h3>
          <div className="settings-form">
            <Input
              label="Maximum Weight (kg)"
              type="number"
              value={isEditing ? editedSettings.cargoSettings.maxWeightKg : settings.cargoSettings.maxWeightKg}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                cargoSettings: {
                  ...editedSettings.cargoSettings,
                  maxWeightKg: parseInt(e.target.value)
                }
              })}
              disabled={!isEditing}
            />
            <Input
              label="Operating Hours"
              value={isEditing ? editedSettings.cargoSettings.operatingHours : settings.cargoSettings.operatingHours}
              onChange={(e) => setEditedSettings({
                ...editedSettings,
                cargoSettings: {
                  ...editedSettings.cargoSettings,
                  operatingHours: e.target.value
                }
              })}
              disabled={!isEditing}
            />
          </div>
        </Card>

        <Card className="settings-card">
          <h3>Notification Settings</h3>
          <div className="settings-form">
            {Object.entries(settings.notificationSettings).map(([key, value]) => (
              <div key={key} className="checkbox-setting">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={isEditing ? editedSettings.notificationSettings[key] : value}
                    onChange={(e) => setEditedSettings({
                      ...editedSettings,
                      notificationSettings: {
                        ...editedSettings.notificationSettings,
                        [key]: e.target.checked
                      }
                    })}
                    disabled={!isEditing}
                  />
                  <span>{key.split(/(?=[A-Z])/).join(' ')}</span>
                </label>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {isEditing && (
        <div className="settings-actions">
          <Button variant="secondary" onClick={() => {
            setEditedSettings(settings);
            setIsEditing(false);
          }}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default SystemSettings;