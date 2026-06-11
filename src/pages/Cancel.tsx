import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import AuthCard from "../components/AuthCard"

export default function Cancel() {
  const navigate = useNavigate()

  return (
    <div className="auth-page">
      <AuthCard>
        <h2>Payment Cancelled</h2>

        <p style={{ marginTop: "10px", color: "#a3a3a3", fontSize: "14px" }}>
          Your payment was not completed.
        </p>

        <p style={{ marginTop: "6px", color: "#a3a3a3", fontSize: "14px" }}>
          You can return and try again anytime.
        </p>

        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </AuthCard>
    </div>
  )
}