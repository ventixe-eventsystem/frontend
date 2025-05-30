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
import { useAuth } from './AuthContext'
import RoleGuard from './RoleGuard'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const location = useLocation().pathname.replace('/', '')
  const pageName = location ? location.charAt(0).toUpperCase() + location.slice(1) : ""

  const handleSignOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
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
        <RoleGuard roles={['Admin']} >
          <li>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}><Dashboard className='icon' />
              <p>Dashboard</p>
            </NavLink>
          </li>
        </RoleGuard>
        <li>
          <NavLink to='/bookings' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}><Booking className='icon' />
            <p>Bookings</p>
          </NavLink>
        </li>
        <RoleGuard roles={['Admin']}>
          <li className='disable'>
            <a><Invoices className='icon' />
              <p>Invoices <span className="notImp">(Not implemented)</span></p>
            </a>
          </li>
        </RoleGuard>
        <li className='disable'>
          <a>
            <Inbox className='icon' />
            <p>Inbox <span className="notImp">(Not implemented)</span></p>
          </a>
        </li>
        <li className='disable'>
          <a><Calendar className='icon' />
            <p>Calendar <span className="notImp">(Not implemented)</span></p>
          </a>
        </li>
        <li >
          <NavLink to='/events' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}><Events className='icon' />
            <p>Events</p>
          </NavLink>
        </li>
        <RoleGuard roles={['Admin']}>
          <li className='disable'>
            <a><Financials className='icon' />
              <p>Financials <span className="notImp">(Not implemented)</span></p>
            </a>
          </li>
        </RoleGuard>
        <li className='disable'>
          <a><Gallery className='icon' />
            <p>Gallery <span className="notImp">(Not implemented)</span></p>
          </a>
        </li>
        <li className='disable'>
          <a><Feedback className='icon' />
            <p>Feedback <span className='notImp'>(Not implemented)</span></p>
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
