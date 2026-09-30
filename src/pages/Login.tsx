import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api/client"
import Input from "../components/Input"
import Button from "../components/Button"
import AuthCard from "../components/AuthCard"
import YenBorder from "../components/YenBorder"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password })
      login(res.data.token)
      navigate("/")
    } catch (err) {
      console.error(err)
      alert("Login failed. Please check your credentials.")
    }
  }

  return (
    <div className="auth-page">
      {/* LEFT: empty intro */}
      <div className="auth-intro" />

      {/* MIDDLE: vertical ¥ border */}
      <div className="auth-divider">
        <YenBorder side="vertical" count={69} fallChance={0.02} />
      </div>

      {/* RIGHT: form */}
      <div className="auth-form-side">
        <div className="auth-form">
          <div className="auth-header">
            <h2>Sign-In</h2>
          </div>

          <AuthCard>
            <Input
              placeholder=">email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder=">password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Sign In</Button>
          </AuthCard>
        </div>
      </div>
    </div>
  )
}
