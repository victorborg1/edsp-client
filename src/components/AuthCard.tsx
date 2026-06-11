export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="card">{children}</div>
    </div>
  )
}