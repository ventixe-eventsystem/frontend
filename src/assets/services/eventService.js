const eventUrl = "https://mvp-eventservice-d9ech9f0dba3fbfe.swedencentral-01.azurewebsites.net/api/events"
const packagesUrl = "https://mvp-eventservice-d9ech9f0dba3fbfe.swedencentral-01.azurewebsites.net/api/package/getallpackages"

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem('token')

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    ...(options.headers || {})
  }

  const response = await fetch(url, {
    ...options,
    headers
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`HTTP ${response.status}: ${errorText}`)
  }

  if (response.status === 204 ||
  response.headers.get("Content-Length") === "0" ||
  !response.headers.get("Content-Type")?.includes("application/json")) return null
  
  return response.json()
}

export async function getEvents() {
  return fetchWithAuth(`${eventUrl}`)
}

export async function getEvent(id) {
  return fetchWithAuth(`${eventUrl}/${id}`)
}

export async function createEvent(eventData) {
  return fetchWithAuth(`${eventUrl}`, {
    method: "POST",
    body: JSON.stringify(eventData)
  })
}

export async function removeEvent(eventId) {
  return fetchWithAuth(`${eventUrl}/${eventId}`, {
    method: "DELETE"
  })
}

export async function getPackages() {
  return fetchWithAuth(`${packagesUrl}`)
}