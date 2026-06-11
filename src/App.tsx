import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Grid from "./components/Grid"
import Profile from "./pages/Profile"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import Library from "./pages/Library"

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main" style={{ position: "relative" }}>
        <Grid />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/library" element={<Library />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}