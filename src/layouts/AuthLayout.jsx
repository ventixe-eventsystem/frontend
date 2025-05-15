import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({ children }) => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
