import { useState } from "react"
import { api } from "../api/client"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"
import AuthCard from "../components/AuthCard"
import YenBorder from "../components/YenBorder"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const signup = async () => {
    try {
      await api.post("/user/signup", { name, email, password })
      navigate("/login")
    } catch (err) {
      console.error(err)
      alert("Signup failed. Please try again.")
    }
  }

  return (
    <div className="auth-page">
      {/* LEFT: form */}
      <div className="auth-form-side">
        <div className="auth-form">
          <div className="auth-header">
            <h2>Sign-Up</h2>
          </div>

          <AuthCard>
            <Input
              placeholder=">name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <Button onClick={signup}>Create Account</Button>
          </AuthCard>
        </div>
      </div>

      {/* MIDDLE: vertical ¥ border */}
      <div className="auth-divider">
        <YenBorder side="vertical" count={69} fallChance={0.02} />
      </div>

      {/* RIGHT: empty intro */}
      <div className="auth-intro" />
    </div>
  )
}
