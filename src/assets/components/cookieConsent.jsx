import '../css/cookieconsent.css'
import btn from '../css/buttons.module.css'
import Cookie from '../icons/cookie.svg?react'
import { useEffect, useState } from 'react'

const cookieConsent = () => {
  const [showCookie, setShowCookie] = useState(false)
  const [consent, setConsent] = useState({
    functional: false,
    analytics: false,
    marketing: false
  })

  const handleShow = () => {
    const consent = JSON.parse(localStorage.getItem('cookieConsent'))
    if (consent) setConsent(consent)
    setShowCookie(true)
  }

  const handleAcceptAll = () => {

    const allTrue = {
      functional: true,
      analytics: true,
      marketing: true
    }

    localStorage.setItem('cookieConsent', JSON.stringify(allTrue))
    setShowCookie(false)
  }

  const handleConfirmChoices = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowCookie(false)
  }

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent)
      setShowCookie(true)
  }, [])

  return (
    <>
      {showCookie &&
        <div id="cookieModal" className="cookie-overlay">
          <div className="cookie-bg">
            <div className="consent-text">
              <h2>We value your privacy</h2>
              <p>We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.</p>
              <p>By clicking "Accept All", you consent to our use of cookies. For more information, see our policy.</p>
              <a href="#">Cookie Policy.</a>
            </div>
            <form id="cookieConsentForm">
              <div className="consent-cookies">
                <h4>Cookies</h4>
                <div className="consent-option">
                  <p>Essentials (Always active)</p>
                  <label className="switch">
                    <input type="checkbox" disabled checked id="cookieEssential" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="consent-option">
                  <p>Functional</p>
                  <label className="switch">
                    <input type="checkbox" checked={consent.functional} onChange={(e) => setConsent({ ...consent, functional: e.target.checked })} />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="consent-option">
                  <p>Analytics & Statistics</p>
                  <label className="switch">
                    <input type="checkbox" checked={consent.analytics} onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })} />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="consent-option">
                  <p>Marketing</p>
                  <label className='switch'>
                    <input type="checkbox" checked={consent.marketing} onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })} />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="btn-container">
                  <button type='button' className={btn.secondary} onClick={handleAcceptAll}>Accept All</button>
                  <button type='button' className={btn.secondary} onClick={handleConfirmChoices}>Confirm Choices</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      }

      <div className="cookieIcon" onClick={handleShow} >
        <Cookie className="cookie-color" />
      </div>
    </>
  )
}

export default cookieConsent
