import { useState } from "react"
import { api } from "../api/client"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"
import AuthCard from "../components/AuthCard"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const signup = async () => {
    try {
      await api.post("/user/signup", {
        name,
        email,
        password,
      })
      navigate("/login")
    } catch (err) {
      console.error(err)
      alert("Signup failed. Please try again.")
    }
  }

  return (
    <div className="auth-page">
      <AuthCard>
        <h2>Sign-Up</h2>

        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

        <Button onClick={signup}>Create account</Button>
      </AuthCard>
    </div>
  )
}