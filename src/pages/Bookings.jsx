import { useEffect, useState } from 'react'
import { getAllBookings, getBooking } from '../assets/services/bookingService'
import { useAuth } from '../assets/components/AuthContext'
import { getEvent } from '../assets/services/eventService'
import '../assets/css/bookings.css'


const Bookings = () => {
  const [bookings, setBookings] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    if (!user) return

    if (user?.roles?.includes('Admin'))
      getAllBookings().then(setBookings).catch(console.error)
    else if (user) {
      const fetchBookingsAndEvents = async () => {
        const bookings = await getBooking(user.userId)
        const eventsPromises = bookings.map(b => getEvent(b.eventId))

        const events = await Promise.all(eventsPromises)
        const eventsAndBookings = bookings.map((b, index) => ({
          ...b,
          event: events[index]
        }))
        setBookings(eventsAndBookings)
      }

      fetchBookingsAndEvents()
    }
  }, [user])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      {user?.roles?.includes('Admin') ? (

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Event</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b =>
                <tr key={b.id}>
                  <td>
                    <div className='time-container'>
                      <span>{new Date(b.bookingDate).toLocaleDateString('sv-SE', { day: '2-digit', month: '2-digit', year: 'numeric' }).replaceAll('-', '/')}</span>
                      <span>{new Date(b.bookingDate).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </td>
                  <td>{b.firstName} {b.lastName}</td>
                  <td>Namn</td>
                  <td>{b.amount} 10</td>
                  <td>{b.numberOfTickets}</td>
                  <td>{(b.numberOfTickets) * (b.amount)}</td>
                  <td>no status</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      ) : (

        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Location</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th>Tickets</th>
              <th>Cost($)</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? bookings.map(b =>
              <tr key={b.id}>
                <td>{b.event.name}</td>
                <td>{b.event.location}</td>
                <td>{b.event.description}</td>
                <td>{new Date(b.event.dateAndTime).toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
                <td>{new Date(b.event.dateAndTime).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}</td>
                <td>{b.numberOfTickets}</td>
                <td>{b.amount}</td>
              </tr>
            ) : <tr><td>No bookings</td></tr>}
          </tbody>
        </table>
      )}

    </div>
  )
}

export default Bookings