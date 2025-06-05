const eventUrl = "https://mvp-eventservice-d9ech9f0dba3fbfe.swedencentral-01.azurewebsites.net/api/events"
const packagesUrl = "https://mvp-eventservice-d9ech9f0dba3fbfe.swedencentral-01.azurewebsites.net/api/package/getallpackages"

export async function getEvents() {
  const token = localStorage.getItem('token')
  const response = await fetch(`${eventUrl}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  })
  const data = response.json()
  return data
}

export async function getEvent(id) {
  const token = localStorage.getItem('token')
  const response = await fetch(`${eventUrl}/${id}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  })
  const data = response.json()
  return data
}

export async function createEvent(eventData) {
  const token = localStorage.getItem('token')
  const response = await fetch(`${eventUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(eventData)
  })
  if (!response.ok) throw new Error("Faild to create event")
  return response.ok
}

export async function removeEvent(eventId) {
  const token = localStorage.getItem('token')
  const response = await fetch(`${eventUrl}/${eventId}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
  })
  return response.ok
}

export async function getPackages() {
  const token = localStorage.getItem('token')
  const response = await fetch(`${packagesUrl}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  })
  const data = response.json()
  return data
}