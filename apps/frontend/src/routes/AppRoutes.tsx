import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from "../constants/routes";
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path={ROUTES.REGISTER}
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* Protected routes */}
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  )
}

export default AppRoutes
