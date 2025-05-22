import '../assets/css/signin.css'
import btn from '../assets/css/buttons.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signIn } from '../assets/services/authService'

const SignIn = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const success = await signIn(user)
      if (success) {
        navigate('/dashboard')
      }
    }
    catch (error) {
      console.log('Login failed:', error.message)
    }
  }

  return (
    <div className='signin-container'>
      <div className="signin-header">
        <img src='/src/assets/icons/logo.svg' />
        <h4>Ventixe</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className="group">
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" name='email' className="group-input" onChange={handleChange} />
          </div>
          <div className="group">
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" name='password' className="group-input" onChange={handleChange} />
          </div>
          <button type='submit' className={`${btn.primary}`}>Sign in</button>
        </div>
      </form>
      <div className='no-account'>
        <p>Don't have an account <span><Link to={'/signup'}>Sign up</Link></span></p>
      </div>
    </div>
  )
}

export default SignIn
