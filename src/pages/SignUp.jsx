import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/signup.css'
import btn from '../assets/css/buttons.module.css'
import { signUp } from '../assets/services/authService'

const SignUp = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '', password: '', firstName: '', lastName: ''
  });

  const handleNext = async (e) => {
    if (Object.values(formData).every(value => value !== '')) {
      const res = await signUp(formData)
      setStep(3)
    }
    else if (formData.email && formData.password)
      setStep(2)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <div className='signup-header'>
        <img src='/src/assets/icons/logo.svg' />
        <h4>Ventixe</h4>
      </div>
      <form>
        {step === 1 &&
          <div className=''>
            <h4>Setp 1: Account</h4>
            <div className=''>
              <label htmlFor='email'>Email</label>
              <input id='email' type="email" name='email' className="group-input" onChange={handleChange} />

            </div>
            <div className=''>
              <label htmlFor='password'>Password</label>
              <input id='password' type="password" name='password' className="group-input" onChange={handleChange} />
            </div>
            {/* <div className=''>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input id='confirmPassword' type="password" name='confirmPassword' className="group-input" onChange={handleChange} />
            </div> */}
            <button type='button' className={`${btn.primary}`} onClick={handleNext}>Next</button>
          </div>
        }
        {step === 2 &&
          <div className=''>
            <h4>Step 2: Profile</h4>
            <div className=''>
              <label htmlFor='firstName'>First name</label>
              <input id='firstName' type="text" name='firstName' className="group-input" onChange={handleChange} />
            </div>
            <div className=''>
              <label htmlFor='lastName'>Last name</label>
              <input id='lastName' type="text" name='lastName' className="group-input" onChange={handleChange} />
              <button type='button' className={`${btn.primary}`} onClick={handleNext}>Next</button>
            </div>
          </div>
        }
      </form>
      {step === 3 &&
        <div>
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
    </>
  )
}

export default SignUp
