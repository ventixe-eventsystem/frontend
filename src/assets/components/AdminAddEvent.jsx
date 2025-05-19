import React, { useState } from 'react'
import { createEvent, getEvents } from '../services/eventService'

const AdminAddEvent = ({ onAdd }) => {
  const today = new Date().toISOString().split('T')[0]
  const todayTime = new Date().toTimeString().slice(0,5)
  const [event, setEvent] = useState({ name: "", location: "", description: "", dateandtime: today, time: todayTime })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fullDateTime = `${event.dateandtime}T${event.time}`

    const newEvent = {
      ...event,
      dateandtime: fullDateTime
    }
    delete newEvent.time

    try {
      await createEvent(newEvent)
      onAdd(await getEvents())
      setEvent({ name: '', location: "", description: "", dateandtime: today, time: todayTime })
    }
    catch (error) {
      console.log('Error creating event: ', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h6>Add new event</h6>
        <label htmlFor="title">Title</label>
        <input id='title' type="text" name='name' value={event.name} onChange={handleChange} />
        <label htmlFor="location">Location</label>
        <input id='location' type="text" name='location' value={event.location} onChange={handleChange} />
        <label htmlFor="description">Description</label>
        <input id='description' type="text" name='description' value={event.description} onChange={handleChange} />
        <label htmlFor="date">Date</label>
        <input id='date' type="date" name='dateandtime' value={event.dateandtime} min={today} onChange={handleChange} />
        <label htmlFor="time">Time</label>
        <input id='time' type="time" name='time' value={event.time} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AdminAddEvent
