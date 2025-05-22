// const authUrl = "https://mvp-bookingservice-fecxb3bbb8efgwhg.swedencentral-01.azurewebsites.net/api/booking"
const authUrl = "https://localhost:7066/api/auth/signin"

export async function signIn(user) {
  const response = await fetch(`${authUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  if (!response.ok) {
    const text = await response.text()
    throw new Error(text)
  }

  const data = await response.json()
  localStorage.setItem("user", JSON.stringify(data.user))
  localStorage.setItem("token", data.token)
  return true
}