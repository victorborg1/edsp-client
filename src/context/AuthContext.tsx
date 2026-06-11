import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { getUserFromToken } from "../utils/auth"

type User = {
  id: string
  email: string
} | null

type AuthContextType = {
  user: User
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return

    const decoded = getUserFromToken(token)
    if (!decoded) return

    setUser({
      id: decoded.id,
      email: decoded.email,
    })
  }, [])

  useEffect(() => {
    if (!user) {
      const protectedPaths = ["/library", "/profile", "/success", "/cancel"]
      if (protectedPaths.includes(location.pathname)) {
        navigate("/", { replace: true })
      }
    }
  }, [user, location.pathname, navigate])

  const login = (token: string) => {
    localStorage.setItem("token", token)

    const decoded = getUserFromToken(token)
    if (!decoded) return

    setUser({
      id: decoded.id,
      email: decoded.email,
    })
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)