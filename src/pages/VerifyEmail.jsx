import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const VerifyEmail = () => {
  const [searchParams] = useSearchParams()
  const [message, setMessage] = useState("Verifying...")

  useEffect(() => {
    const token = searchParams.get("token")
    const email = searchParams.get("email")

    const verify = async () => {
      try {
        const response = await fetch(`https://mvp-authservice-bdeze5hffeg7h2a0.swedencentral-01.azurewebsites.net/api/auth/verify-email?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`)
        if (response.ok) {
          setMessage("Email verified! You can now log in.")
        } else {
          setMessage("Verification failed. Token might be invalid or expired.")
        }
      } catch (err) {
        setMessage("An error occurred.")
      }
    }

    verify()
  }, [searchParams])

  return <p>{message}</p>
}

export default VerifyEmail