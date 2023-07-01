import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

function ProtectedRouteAdmin({ children }) {
  const { user } = useAuth()
  console.log(user)
  const Admin = user?.isAdmin
  console.log(typeof Admin)

  if (!Admin) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRouteAdmin
