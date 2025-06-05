const bookingUrl = "https://mvp-bookingservice-fecxb3bbb8efgwhg.swedencentral-01.azurewebsites.net/api/booking"

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

  if (response.status === 204) return null
  return response.json()
}

export async function createBooking(eventData) {
  return fetchWithAuth(`${bookingUrl}`, {
    method: "POST",
    body: JSON.stringify(eventData)
  })
}

export async function getAllBookings() {
  return fetchWithAuth(`${bookingUrl}`)
}

export async function getBooking(id) {
  return fetchWithAuth(`${bookingUrl}/${id}`)
}