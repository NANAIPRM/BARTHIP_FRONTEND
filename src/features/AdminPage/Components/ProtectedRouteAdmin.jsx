import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

function ProtectedRouteAdmin({ children }) {
  const { user } = useAuth()
  const Admin = user?.isAdmin
  console.log(Admin)

  if (!Admin) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRouteAdmin
