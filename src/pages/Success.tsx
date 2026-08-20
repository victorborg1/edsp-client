import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

export default function Success() {
  const navigate = useNavigate()

  return (
    <div className="status-page">
      <div className="status-panel success">
        <div className="status-mark">✓</div>

        <div className="status-content">
          <span className="status-label">CHECKOUT</span>
          <h2>Payment Successful</h2>

          <p>
            Your purchase was completed successfully.
          </p>

          <p>
            Your plugin is now available in your library.
          </p>

          <Button onClick={() => navigate("/library")}>
            Go to Library
          </Button>
        </div>
      </div>
    </div>
  )
}
