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
    <div className="auth-intro">
      <div className="auth-intro-inner">
        <span className="auth-eyebrow">EIGENDSP</span>
        <h1>Shape<br />your sound.</h1>
        <p>
          Experimental audio tools designed for
          precise and creative sound shaping.
        </p>
        <span className="auth-mark">/E/D/S/P/</span>
      </div>
    </div>

    <div className="auth-form-side">
      <div className="auth-form">
        <div className="auth-header">
          <span>Welcome back</span>
          <h2>Sign-In</h2>
        </div>

        <AuthCard>
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
    </div>
  </div>
  )
}
