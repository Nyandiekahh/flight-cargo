// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import RoleProtectedRoute from './components/common/RoleProtectedRoute';
import LoginForm from './components/auth/LoginForm';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import FlightBooking from './pages/booking/FlightBooking';
import CargoManagement from './pages/cargo/CargoManagement';
import FinanceManagement from './pages/finance/FinanceManagement';
import AdminDashboard from './pages/admin/AdminDashboard';
import Reports from './pages/reports/Reports';
import './assets/styles/global.css';
import './assets/styles/variables.css';
import './assets/styles/admin.css';
import './assets/styles/reports.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          
          <Route path="/" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="booking" element={<FlightBooking />} />
            <Route path="cargo" element={<CargoManagement />} />
            <Route path="finance" element={<FinanceManagement />} />
            <Route path="reports" element={
              <RoleProtectedRoute allowedRoles={['admin', 'manager']}>
                <Reports />
              </RoleProtectedRoute>
            } />
            <Route path="admin" element={
              <RoleProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </RoleProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;