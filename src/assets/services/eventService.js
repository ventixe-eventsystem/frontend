const eventUrl = "https://mvp-eventservice-d9ech9f0dba3fbfe.swedencentral-01.azurewebsites.net/api/events"

export async function getEvents() {
  const response = await fetch(`${eventUrl}`)
  return response.json()
}

export async function getEvent(id) {
  const response = await fetch(`${eventUrl}/${id}`)
  return response.json()
}

export async function createEvent(eventData) {
  const response = await fetch(`${eventUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventData)
  })
  if (!response.ok) throw new Error("Faild to create event")
  return response.ok
}

export async function removeEvent(eventId) {
  const response = await fetch(`${eventUrl}/${eventId}`, { method: 'DELETE' })
  return response.ok
}