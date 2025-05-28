import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

const ProtectedRoute = ({ children, requiredRoles }) => {
  const token = localStorage.getItem('token')
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>

  if (!token) return <Navigate to="/login" replace />

  if (requiredRoles.length > 0 && !requiredRoles.some(role => user?.roles?.includes(role)))
    return <Navigate to="/unauthorized" replace />
  return children
}

export default ProtectedRoute
