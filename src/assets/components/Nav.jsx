import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import '../css/nav.css'
import Dashboard from '/src/assets/icons/dashboard.svg?react'
import Booking from '/src/assets/icons/bookings.svg?react'
import Invoices from '/src/assets/icons/invoices.svg?react'
import Inbox from '/src/assets/icons/inbox.svg?react'
import Calendar from '/src/assets/icons/calendar.svg?react'
import Events from '/src/assets/icons/events.svg?react'
import Financials from '/src/assets/icons/financials.svg?react'
import Gallery from '/src/assets/icons/gallery.svg?react'
import Feedback from '/src/assets/icons/feedback.svg?react'
import Signout from '/src/assets/icons/signout.svg?react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const navigate = useNavigate()

  const location = useLocation().pathname.replace('/', '')
  const pageName = location ? location.charAt(0).toUpperCase() + location.slice(1) : ""

  const handleSignOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  const toggleMenu = () => {
    if (isMobile)
      setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      if (!mobile)
        setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav>
      <div className='container-logo'>
        <img className='nav-logo' src='/src/assets/icons/logo.svg' />
        <h4>Ventixe</h4>
        <p className='show-mobile self-center-fornow'>{pageName}</p>
        <img className='show-mobile hamburger-menu' src='src/assets/icons/hamburger.svg' onClick={toggleMenu} />
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li>
          <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}><Dashboard className='icon' />
            <p>Dashboard</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/bookings' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}><Booking className='icon' />
            <p>Bookings</p>
          </NavLink>
        </li>
        <li>
          <a><Invoices className='icon' />
            <p>Invoices</p>
          </a>
        </li>
        <li>
          <a>
            <Inbox className='icon' />
            <p>Inbox</p>
          </a>
        </li>
        <li>
          <a><Calendar className='icon' />
            <p>Calendar</p>
          </a>
        </li>
        <li>
          <NavLink to='/events' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}><Events className='icon' />
            <p>Events</p>
          </NavLink>
        </li>
        <li>
          <a><Financials className='icon' />
            <p>Financials</p>
          </a>
        </li>
        <li>
          <a><Gallery className='icon' />
            <p>Gallery</p>
          </a>
        </li>
        <li>
          <a><Feedback className='icon' />
            <p>Feedback</p>
          </a>
        </li>
      </ul>
      {(isOpen || !isMobile) &&
        <div className='signout-contianer' onClick={handleSignOut}>
          <Signout className='icon' />
          <p>Sign out</p>
        </div>
      }
    </nav>
  )
}

export default Nav
