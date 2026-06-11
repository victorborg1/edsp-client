import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <div className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link className="brand" to="/">
            <span className="logo-mark">~λ</span> EigenDSP
          </Link>

          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="#" className="nav-item">
            Blog
          </Link>
          <div className="nav-item dropdown">
            <span>Products</span>
            <div className="dropdown-menu">
              <Link to="#">Eigen Compressor</Link>
              <Link to="#">Eigen Saturator</Link>
              <Link to="#">Eigen Reverb</Link>
            </div>
          </div>
            <div className="nav-item dropdown">
            <span>Freeware</span>
            <div className="dropdown-menu">
              <Link to="#">Eigen Compressor</Link>
              <Link to="#">Eigen Saturator</Link>
              <Link to="#">Eigen Reverb</Link>
            </div>
          </div>
        </div>
        

        <div className="right">
          {user ? (
            <>
              <div className="nav-item dropdown">
                <span className="user">{user.email}</span>
                <div className="dropdown-menu">
                  <Link to="/profile">Profile</Link>
                  <Link to="/library">Library</Link>
                </div>
              </div>
              <button onClick={logout}>Sign-Out</button>
            </>
          ) : (
            <>
              <Link to="/login">Sign-In</Link>
              <Link to="/signup">Sign-Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}