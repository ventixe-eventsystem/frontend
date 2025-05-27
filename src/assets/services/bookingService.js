const bookingtUrl = "https://mvp-bookingservice-fecxb3bbb8efgwhg.swedencentral-01.azurewebsites.net/api/booking"

export async function createBooking(eventData) {
  const response = await fetch(`${bookingtUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventData)
  })
  if (!response.ok) throw new Error("Faild to create booking")
  return response.ok
}

export async function getAllBookings() {
  const response = await fetch(`${bookingtUrl}`, {
    method: "GET"
  })
  const data = await response.json()
  return data
}

export async function getBooking(id){
  const response = await fetch(`${bookingtUrl}/${id}`,{
    method: "GET"
  })
  const data = await response.json()
  return data
}