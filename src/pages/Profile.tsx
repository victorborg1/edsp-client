import { useAuth } from "../context/AuthContext"
import { api } from "../api/client"

export default function Profile() {
  const { logout } = useAuth()

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This cannot be undone."
    )

    if (!confirmDelete) return

    try {
      await api.delete("/user/me")
      logout()
    } catch (err) {
      console.error(err)
      alert("Failed to delete account")
    }
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <h2>Account Settings</h2>
          <p>Permanently manage your account data</p>
        </div>

        <div className="profile-section danger">
          <div className="profile-text">
            <h3>Delete account</h3>
            <p>This action is permanent and cannot be undone.</p>
          </div>

          <button className="danger-button" onClick={handleDelete}>
            Delete account
          </button>
        </div>
      </div>
    </div>
  )
}