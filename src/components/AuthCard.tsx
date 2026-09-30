
export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="card" style={{ position: "relative" }}>
        {children}
      </div>
    </div>
  )
}
