import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api/client"
import Input from "../components/Input"
import Button from "../components/Button"
import AuthCard from "../components/AuthCard"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      })

      login(res.data.token)
      navigate("/")
    } catch (err) {
      console.error(err)
      alert("Login failed. Please check your credentials.")
    }
  }

  return (
    <div className="auth-page">
      <AuthCard>
        <h2>Sign-In</h2>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin}>Sign in</Button>
      </AuthCard>
    </div>
  )
}