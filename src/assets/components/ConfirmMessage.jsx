import React, { useEffect, useState } from 'react'
import '../css/confirmmessage.css'
import styles from '../css/buttons.module.css'
import SuccessImg from '/src/assets/icons/successimg.svg?react'
import { useNavigate } from 'react-router-dom'

const ConfirmMessage = ({ event, user }) => {
  const [countdown, setCountfown] = useState(5)
  const navigate = useNavigate()

  useEffect(()=> {
    const timer = setInterval(()=> {
      setCountfown(prev => prev - 1)
    }, 1000)
    if (countdown === 0){
      navigate('/events')
    }
    return () => clearInterval(timer)
  }, [countdown, navigate])

  const handleRedirect = () => {
    navigate('/events')
  }

  return (
    <div className='message-container'>
      <SuccessImg className='success-img' />
      <h5>{event.name}</h5>
      <p>{new Date(event.dateAndTime).toLocaleDateString('sv-SE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })} - {new Date(event.dateAndTime).toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit'
      })}</p>
      <div className='succes-info'>
        <p>Thanks for booking with us, <span>{user.firstName}</span>!</p>
        <p> We've sent a confirmation to <span>{user.email}</span>.</p>
        <p> We're excited to have you!</p>
      </div>
      <p>Redirecting in {countdown}...</p>
      <button className={`${styles.primary} ${styles.centerXY}`} onClick={handleRedirect}>Close</button>
    </div>
  )
}

export default ConfirmMessage
