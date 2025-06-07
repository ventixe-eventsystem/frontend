import '../css/header.css'
import UserInfo from './UserInfo'
import { useLocation } from 'react-router-dom'
import Search from '/src/assets/icons/search.svg?react'
import Notification from '/src/assets/icons/notification.svg?react'
import Settings from '/src/assets/icons/settings.svg?react'

const header = () => {

  const location = useLocation()
  const segment = location.pathname.split('/').filter(Boolean)
  const pageName = segment[segment.length - 1] || 'Dashboard'
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)

  const breadcrumb = segment.length > 0
    ? [...segment.map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))].join(' / ')
    : 'Dashboard'

  const user = JSON.parse(localStorage.getItem('user'))
  const showBreadCrumb = segment.length > 1
  const isOnDashBoard = pageName.toLocaleLowerCase() === 'dashboard'

  return (
    <header>
      <div className='page-title'>
        {showBreadCrumb &&
          <p style={{ fontSize: 'var(--title-11)' }}>{breadcrumb}</p>
        }
        <h4>{formattedPageName}</h4>
        {(isOnDashBoard) &&
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
