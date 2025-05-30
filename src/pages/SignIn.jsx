import '../assets/css/signin.css'
import btn from '../assets/css/buttons.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signIn } from '../assets/services/authService'
import { useAuth } from '../assets/components/AuthContext'
import { validate } from '../assets/services/validate'

const SignIn = () => {
  const [form, setForm] = useState({})
  const [message, setMessage] = useState('')
  const [error, setError] = useState({})
  const { setUser } = useAuth()
  const navigate = useNavigate()
  const roleStartPages = { Admin: '/dashboard', User: '/events' }

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm(prev => ({
      ...prev, [name]: value
    }))

    const error = validate(name, value)
    setError(prev => ({
      ...prev,
      [name]: error
    }))


    if (message)
      setMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await signIn(form)
      if (result.isSuccess) {
        setUser(result.user)
        localStorage.setItem("user", JSON.stringify(result.user))
        localStorage.setItem("token", result.token)

        const userRoles = result.user.roles
        const startPage = userRoles.map(role => roleStartPages[role]).find(Boolean)
        navigate(startPage)
      }
    }
    catch (error) {
      setMessage(error.message)
      console.log('Login failed:', error.message)
    }
  }

  return (

    <div className='bg-signin'>
      <div className='signin-container'>
        <div className="signin-header">
          <img src='/src/assets/icons/logo.svg' />
          <h4>Ventixe</h4>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className='form-container'>
            <div className="group">
              <label htmlFor='email'>Email</label>
              <div className="sub-group">
                <input id='email' type="email" name='email' className="group-input" onChange={handleChange} />
                {error.email && <small className='input-error'>{error.email}</small>}
              </div>
            </div>
            <div className="group">
              <label htmlFor='password'>Password</label>
              <div className="sub-group"><input id='password' type="password" name='password' className="group-input" onChange={handleChange} />
                {error.password && <small className='input-error'>{error.password}</small>}
              </div>
            </div>
            <button type='submit' className={`${btn.primary}`}>Sign in</button>
          </div>
        </form>
        <div className={`error-msg ${message ? 'show' : ''}`} >
          <p>{message}</p>
        </div>
        <div className='no-account'>
          <p>Don't have an account <span><Link to={'/signup'}>Sign up</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
