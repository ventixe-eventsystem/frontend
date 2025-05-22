import React from 'react'
import '../css/header.css'
import UserInfo from './UserInfo'
import { useLocation } from 'react-router-dom'
import Search from '/src/assets/icons/search.svg?react'
import Notification from '/src/assets/icons/notification.svg?react'
import Settings from '/src/assets/icons/settings.svg?react'

const header = () => {
  const location = useLocation().pathname.replace('/', '')
  const pageName = location ? location.charAt(0).toUpperCase() + location.slice(1) : ""
  const user = JSON.parse(localStorage.getItem('user'))


  return (
    <header>
      <div className='page-title'>
        {(pageName !== 'Dashboard') &&
          <p style={{ fontSize: 'var(--title-11)' }}>BreedCrum</p>
        }
        <h4>{pageName}</h4>
        {(pageName === 'Dashboard') &&
          <p className='user-greating'>Hello {user.firstName} {user.lastName}, welcome back!</p>
        }
      </div>
      <div className='search'>
        <input className='search-input' type='text' placeholder='Search anything'></input>
        <Search className='search-icon' />
      </div>
      <div className='notification'>
        <Notification />
      </div>
      <div className="settings">
        <Settings />
      </div>
      <UserInfo />
    </header>
  )
}

export default header
