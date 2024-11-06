// src/components/admin/RoleManagement.jsx
import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Input from '../common/Input';

const RoleManagement = () => {
  const [showAddRole, setShowAddRole] = useState(false);
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Admin',
      permissions: ['all'],
      description: 'Full system access'
    },
    {
      id: 2,
      name: 'Manager',
      permissions: ['view_reports', 'manage_users', 'manage_bookings', 'manage_cargo'],
      description: 'Department manager access'
    },
    {
      id: 3,
      name: 'Employee',
      permissions: ['create_booking', 'view_bookings'],
      description: 'Regular employee access'
    }
  ]);

  const [newRole, setNewRole] = useState({
    name: '',
    description: '',
    permissions: []
  });

  const availablePermissions = [
    'view_reports',
    'manage_users',
    'manage_bookings',
    'manage_cargo',
    'create_booking',
    'view_bookings',
    'manage_finance'
  ];

  const handleAddRole = (e) => {
    e.preventDefault();
    setRoles([
      ...roles,
      {
        ...newRole,
        id: roles.length + 1
      }
    ]);
    setShowAddRole(false);
    setNewRole({
      name: '',
      description: '',
      permissions: []
    });
  };

  const handlePermissionToggle = (permission) => {
    setNewRole(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter(p => p !== permission)
        : [...prev.permissions, permission]
    }));
  };

  return (
    <div className="role-management">
      <div className="section-header">
        <h2>Role Management</h2>
        <Button onClick={() => setShowAddRole(true)}>Add New Role</Button>
      </div>

      {showAddRole && (
        <Card className="add-role-form">
          <h3>Add New Role</h3>
          <form onSubmit={handleAddRole}>
            <Input
              label="Role Name"
              value={newRole.name}
              onChange={(e) => setNewRole({...newRole, name: e.target.value})}
              required
            />
            <Input
              label="Description"
              value={newRole.description}
              onChange={(e) => setNewRole({...newRole, description: e.target.value})}
              required
            />
            <div className="permissions-section">
              <label className="input-label">Permissions</label>
              <div className="permissions-grid">
                {availablePermissions.map(permission => (
                  <label key={permission} className="permission-checkbox">
                    <input
                      type="checkbox"
                      checked={newRole.permissions.includes(permission)}
                      onChange={() => handlePermissionToggle(permission)}
                    />
                    <span>{permission.split('_').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-actions">
              <Button type="button" variant="secondary" onClick={() => setShowAddRole(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Create Role
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="roles-list">
        {roles.map(role => (
          <Card key={role.id} className="role-card">
            <div className="role-card-header">
              <h3>{role.name}</h3>
              <Button variant="secondary" className="edit-btn">
                Edit
              </Button>
            </div>
            <p className="role-description">{role.description}</p>
            <div className="role-permissions">
              <label>Permissions:</label>
              <div className="permission-tags">
                {role.permissions.map(permission => (
                  <span key={permission} className="permission-tag">
                    {permission.split('_').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoleManagement;
