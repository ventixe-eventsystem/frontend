import '../assets/css/eventbooking.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEvent } from '../assets/services/eventService'
import { createBooking } from '../assets/services/bookingService'
import ConfirmMessage from '../assets/components/ConfirmMessage'

const EventBooking = () => {
  const { eventId } = useParams()
  const [message, setMessage] = useState(false)
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bookingDate: '',
    eventId: '',
    numberOfTickets: 1
  })

  const fetchEvent = async () => {
    const result = await getEvent(eventId)
    setEvent(result)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const now = new Date().toISOString()
    const { id, description, ...rest } = event

    const updatedEvent = {
      ...rest,
      ...formData,
      bookingDate: now,
      eventId: event.id
    }
    try {
      const success = createBooking(updatedEvent)

      if (!success) throw new Error("Faild to create booking")
      setMessage(true)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEvent()
  }, [eventId])

  return (
    <div className='eventbooking-container'>
      <h6>Book event - {event.name}</h6>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input name='id' type="text" hidden readOnly value={event.id || ''} />
            <p>Price for the future</p>
            <select type="number" />
          </div>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input id='firstName' name='firstName' type="text" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input id='lastName' name='lastName' type="text" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type="text" onChange={handleChange} />
          </div>
          <button type='submit'>Confirm</button>
        </form>
      </div>

      {message && <ConfirmMessage event={event} user={formData} />}
    </div>
  )
}

export default EventBooking
