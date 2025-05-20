import React, { useEffect, useState } from 'react'
import { getAllBookings } from '../assets/services/bookingService'


const Bookings = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getAllBookings().then(setBookings).catch(console.error)
  }, [])

  return (
    <div>
      <p>Bookings</p>
      {bookings.length > 0 ? bookings.map(b => <p key={b.id}>{b.firstName} {b.lastName}</p>) : <p>No bookings</p>}
    </div>
  )
}

export default Bookings
