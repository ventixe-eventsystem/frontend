import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({ children }) => {
  return (
    <div className='auth-wrapper'>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
