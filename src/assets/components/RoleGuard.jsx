import { useAuth } from "./AuthContext"

const RoleGuard = ({ roles, children }) => {
  const { user } = useAuth()
  if (!user) return null

  const hasAccess = roles.some(role => user.roles.includes(role))
  return hasAccess ? children : null
}

export default RoleGuard
