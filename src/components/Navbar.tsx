import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import YenBorder from "./YenBorder"

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <div className="nav">
      <YenBorder side="bottom" count={200} />
      <div className="nav-inner">

        <Link to="/?filter=products" className="nav-item">/products</Link>

        <Link to="/?filter=freeware" className="nav-item">/freeware</Link>

        <Link className="brand" to="/">
          <span className="brand-prefix">/eigen</span>
          <span className="brand-expand">dsp</span>
        </Link>

      
        {user ? (
          <>
            <Link to="/library" className="nav-item">Library</Link>
            <Link to="/profile" className="nav-item">Profile</Link>
            <button onClick={logout} className="nav-item">/signout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-item">/signin</Link>
            <Link to="/signup" className="nav-item">/signup</Link>
          </>
        )}
      </div>
    </div>
  )
}
