import React from 'react'
import '../css/packages.css'

const Packages = () => {
  return (
    <div className='packages'>
    <p className='packages-header'>Packages</p>
      <ul className='packages-ul'>
        <li className='packages-li'>
          <div className='li-flex'>
            <p>General Admission Package</p>
            <span>50 Kr</span>
          </div>
          <div className='li-seating'>
            <p>Standing</p>
            <p>Access to Festival Grounds</p>
          </div>
        </li>
        <li className='packages-li'>
          <div className='li-flex'>
            <p>Silver Package</p>
            <span>70 Kr</span>
          </div>
          <div className='li-seating'>
            <p>Seating</p>
            <p>Near Stage</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Packages
