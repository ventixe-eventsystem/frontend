import '../css/userinfo.css'

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='profile-info'>
      <div className='profile-img'></div>
      <div className='name-role-container'>
        <p className='fullname'>{user.firstName} {user.lastName}</p>
        <p className='user-role'>Role: {user.roles[0]}</p>
      </div>
    </div>
  )
}

export default UserInfo
