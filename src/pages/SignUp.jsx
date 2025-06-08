import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/signup.css'
import btn from '../assets/css/buttons.module.css'
import { signUp, emailExists } from '../assets/services/authService'
import { validate } from '../assets/services/validate'
import logo from '../assets/icons/logo.svg'

const SignUp = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [isValid, setIsValid] = useState(false)
  const [error, setError] = useState({})
  const [formData, setFormData] = useState({
    email: '', password: '', firstName: '', lastName: ''
  });
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = async (e) => {
    if (Object.values(formData).every(value => value !== '')) {
      setIsLoading(true)
      const res = await signUp(formData)
      setStep(3)
    }
    else if (formData.email && formData.password)
      setStep(2)
  }

  const handleBlur = async (e) => {
    const res = await emailExists(e.target.value)
    if (res) {
      setIsValid(res)
    }
    else {
      setIsValid(false)
      setError({ email: 'Alredy registerd' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    const error = validate(name, value, formData)
    setError(prev => ({
      ...prev,
      [name]: error
    }))
  }

  return (
    <div className='bg-signin'>
      <div className='signup-container'>
        <div className='signup-header'>
          <img src={logo} />
          <h1>Ventixe</h1>
        </div>
        <form className='this-form'>
          {step === 1 &&
            <div className='form-group'>
              <h4>Setp 1: Account</h4>
              <div className='group'>
                <label htmlFor='email' className={`email-label ${isValid ? 'valid' : ''}`}>Email</label>

                <input id='email' type="email" name='email' className="group-input" onChange={handleChange} onBlur={handleBlur} />
                <small className='input-error'>{error.email}</small>

              </div>
              <div className='group'>
                <label htmlFor='password'>Password</label>
                <input id='password' type="password" name='password' className="group-input" onChange={handleChange} />
                <small className='input-error'>{error.password}</small>
              </div>
              <div className='group'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input id='confirmPassword' type="password" name='confirmPassword' className="group-input" onChange={handleChange} />
                <small className='input-error'>{error.confirmPassword}</small>
              </div>
              <button type='button' className={`${btn.primary}`} onClick={handleNext}>Next</button>
            </div>
          }
          {step === 2 &&
            <div className='form-group'>
              <h4>Step 2: Profile</h4>
              {isLoading ? (
                <div className='spinner' />
              ) : (
                <>
                  <div className='group'>
                    <label htmlFor='firstName'>First name</label>
                    <input id='firstName' type="text" name='firstName' className="group-input" onChange={handleChange} />
                  </div>
                  <div className='group'>
                    <label htmlFor='lastName'>Last name</label>
                    <input id='lastName' type="text" name='lastName' className="group-input" onChange={handleChange} />
                  </div>
                </>
              )}
              <button type='button' className={`${btn.primary}`} onClick={handleNext}>Next</button>
            </div>
          }
        </form>
        {step === 3 &&
          <div className='confirm'>
            <p>A verification email has been sent to </p>
            <h5>{formData.email}</h5>
            <p>please verify your email</p>
            <button className={`${btn.primary}`} onClick={() => navigate('/login')}>Sign in</button>
          </div>
        }
        {step !== 3 &&
          <div className='have-account'>
            <p>Have an account <span><Link to={'/login'}>Sign in</Link></span></p>
          </div>
        }
      </div>
    </div>
  )
}

export default SignUp
