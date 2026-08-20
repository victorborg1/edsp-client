import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

export default function Cancel() {
  const navigate = useNavigate()

  return (
    <div className="status-page">
      <div className="status-panel cancel">
        <div className="status-mark">×</div>

        <div className="status-content">
          <span className="status-label">CHECKOUT</span>
          <h2>Payment Cancelled</h2>

          <p>
            Your payment was not completed.
          </p>

          <p>
            You can return and try again anytime.
          </p>

          <Button onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
