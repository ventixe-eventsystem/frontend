import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

const RoleBaseRedirect = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>

  if (!user) return <Navigate to="/login" replace />

  if (user.roles.includes('Admin')) return <Navigate to="/dashboard" replace />
  if (user.roles.includes('User')) return <Navigate to="/events" replace />

  return <Navigate to="/unauthorized" replace />
}

export default RoleBaseRedirect
