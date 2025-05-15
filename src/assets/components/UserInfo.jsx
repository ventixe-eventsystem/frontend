import React from 'react'
import '../css/UserInfo.css'

const UserInfo = () => {
  return (
    <div className='profile-info'>
      <div className='profile-img'></div>
      <div className='name-role-container'>
        <p className='fullname'>FirstName LastName</p>
        <p className='user-role'>Role</p>
      </div>
    </div>
  )
}

export default UserInfo
