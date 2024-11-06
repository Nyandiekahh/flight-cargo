// src/components/admin/UserManagement.jsx
import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Input from '../common/Input';

const UserManagement = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'john.doe',
      fullName: 'John Doe',
      email: 'john@example.com',
      role: 'manager',
      department: 'booking',
      status: 'active'
    },
    {
      id: 2,
      username: 'jane.smith',
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      role: 'employee',
      department: 'cargo',
      status: 'active'
    }
  ]);

  const [newUser, setNewUser] = useState({
    username: '',
    fullName: '',
    email: '',
    role: '',
    department: '',
    password: ''
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      {
        ...newUser,
        id: users.length + 1,
        status: 'active'
      }
    ]);
    setShowAddUser(false);
    setNewUser({
      username: '',
      fullName: '',
      email: '',
      role: '',
      department: '',
      password: ''
    });
  };

  const handleUserStatus = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  return (
    <div className="user-management">
      <div className="section-header">
        <h2>User Management</h2>
        <Button onClick={() => setShowAddUser(true)}>Add New User</Button>
      </div>

      {showAddUser && (
        <Card className="add-user-form">
          <h3>Add New User</h3>
          <form onSubmit={handleAddUser}>
            <Input
              label="Username"
              value={newUser.username}
              onChange={(e) => setNewUser({...newUser, username: e.target.value})}
              required
            />
            <Input
              label="Full Name"
              value={newUser.fullName}
              onChange={(e) => setNewUser({...newUser, fullName: e.target.value})}
              required
            />
            <Input
              type="email"
              label="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              required
            />
            <div className="input-group">
              <label className="input-label">Role</label>
              <select
                className="input-field"
                value={newUser.role}
                onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
                <option value="field">Field Operations</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Department</label>
              <select
                className="input-field"
                value={newUser.department}
                onChange={(e) => setNewUser({...newUser, department: e.target.value})}
                required
              >
                <option value="">Select Department</option>
                <option value="booking">Booking</option>
                <option value="cargo">Cargo</option>
                <option value="finance">Finance</option>
              </select>
            </div>
            <Input
              type="password"
              label="Password"
              value={newUser.password}
              onChange={(e) => setNewUser({...newUser, password: e.target.value})}
              required
            />
            <div className="form-actions">
              <Button type="button" variant="secondary" onClick={() => setShowAddUser(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Create User
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="users-list">
        {users.map(user => (
          <Card key={user.id} className="user-card">
            <div className="user-card-header">
              <div className="user-info">
                <h3>{user.fullName}</h3>
                <span className="username">@{user.username}</span>
              </div>
              <span className={`status-badge status-${user.status}`}>
                {user.status}
              </span>
            </div>
            <div className="user-details">
              <div className="detail-group">
                <label>Email</label>
                <span>{user.email}</span>
              </div>
              <div className="detail-group">
                <label>Role</label>
                <span className="role-badge">{user.role}</span>
              </div>
              <div className="detail-group">
                <label>Department</label>
                <span>{user.department}</span>
              </div>
            </div>
            <div className="user-actions">
              <Button 
                variant="secondary"
                onClick={() => console.log('Edit user', user.id)}
              >
                Edit
              </Button>
              {user.status === 'active' ? (
                <Button 
                  variant="secondary"
                  className="danger"
                  onClick={() => handleUserStatus(user.id, 'inactive')}
                >
                  Deactivate
                </Button>
              ) : (
                <Button 
                  variant="secondary"
                  onClick={() => handleUserStatus(user.id, 'active')}
                >
                  Activate
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;