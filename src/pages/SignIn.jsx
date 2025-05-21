import '../assets/css/signin.css'
import btn from '../assets/css/buttons.module.css'
import { Link } from 'react-router-dom'


const SignIn = () => {
  return (
    <div className='signin-container'>
      <div className="signin-header">
        <img src='/src/assets/icons/logo.svg' />
        <h4>Ventixe</h4>
      </div>
      <form>
        <div className='form-container'>
          <div className="group">
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" name='email' className="group-input" />
          </div>
          <div className="group">
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" name='password' className="group-input" />
          </div>
          <button className={`${btn.primary}`}>Sign in</button>
        </div>
      </form>
      <div className='no-account'>
        <p>Don't have an account <span><Link>Sign up</Link></span></p>
      </div>
    </div>
  )
}

export default SignIn
