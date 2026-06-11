import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import AuthCard from "../components/AuthCard"

export default function Success() {
  const navigate = useNavigate()

  return (
    <div className="auth-page">
      <AuthCard>
        <h2>Payment Successful</h2>

        <p style={{ marginTop: "10px", color: "#a3a3a3", fontSize: "14px" }}>
          Your purchase was completed successfully.
        </p>

        <p style={{ marginTop: "6px", color: "#a3a3a3", fontSize: "14px" }}>
          You can now download your plugin from your library.
        </p>

        <Button onClick={() => navigate("/library")}>Go to Library</Button>
      </AuthCard>
    </div>
  )
}