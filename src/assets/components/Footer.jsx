import React from 'react'
import '../css/footer.css'
import Facebook from '/src/assets/icons/facebook.svg?react'
import Twitter from '/src/assets/icons/twitter.svg?react'
import Instagram from '/src/assets/icons/instagram.svg?react'
import Youtube from '/src/assets/icons/youtube.svg?react'
import LinkedIn from '/src/assets/icons/linkedin.svg?react'

const Footer = () => {
  return (
    <footer>
      <p className='footer-header'>Copyright © 2025 Peterdraw</p>
      <div className='policy-terms-contact'>
        <a>Privacy Policy</a>
        <a>Term and conditions</a>
        <a>Contact</a>
      </div>
      <div className='socials'>
        <Facebook className='socials-icon' />
        <Twitter className='socials-icon' />
        <Instagram className='socials-icon' />
        <Youtube className='socials-icon' />
        <LinkedIn className='socials-icon' />
      </div>
    </footer>
  )
}

export default Footer
