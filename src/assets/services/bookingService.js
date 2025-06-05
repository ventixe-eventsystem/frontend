const bookingUrl = "https://mvp-bookingservice-fecxb3bbb8efgwhg.swedencentral-01.azurewebsites.net/api/booking"
// const bookingUrl = "https://localhost:7110/api/booking"

export async function createBooking(eventData) {
  const token = localStorage.getItem('token')
  const response = await fetch(`${bookingUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(eventData)
  })
  if (!response.ok) throw new Error("Faild to create booking")
  return response.ok
}

export async function getAllBookings() {
  const token = localStorage.getItem('token')
  const response = await fetch(`${bookingUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok)
    throw new Error(`HTTP error! status: ${response.status}`);

  const data = await response.json()
  return data
}

export async function getBooking(id) {
  const token = localStorage.getItem('token')
  const response = await fetch(`${bookingUrl}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  })
  const data = await response.json()
  return data
}