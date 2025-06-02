const signInUrl = "mvp-authservice-bdeze5hffeg7h2a0.swedencentral-01.azurewebsites.net/api/auth/signin"
const singUpUrl = "mvp-authservice-bdeze5hffeg7h2a0.swedencentral-01.azurewebsites.net/api/auth/signup"
const emailUrl = "mvp-authservice-bdeze5hffeg7h2a0.swedencentral-01.azurewebsites.net/api/auth/email"


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

export async function emailExists(email) {
  const response = await fetch(`${emailUrl}?email=${email}`, { 
    method: 'POST'
  })
  const data = await response.json()
  return data.exists
}