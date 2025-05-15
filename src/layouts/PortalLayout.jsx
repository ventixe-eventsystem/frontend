import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../assets/components/Header.jsx'
import Nav from '../assets/components/Nav.jsx'
import Footer from '../assets/components/Footer.jsx'

const PortalLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default PortalLayout
