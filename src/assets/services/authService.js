// const authUrl = "https://mvp-bookingservice-fecxb3bbb8efgwhg.swedencentral-01.azurewebsites.net/api/booking"
const signInUrl = "https://localhost:7066/api/auth/signin"
const singUpUrl = "https://localhost:7066/api/auth/signup"


export async function signIn(user) {
  const response = await fetch(`${signInUrl}`, {
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
  return data
}

export async function signUp(user){
  const response = await fetch(`${singUpUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  if (!response.ok){
    const text = await response.text()
    throw new Error(text)
  }
  const data = await response.json()
  return true
}