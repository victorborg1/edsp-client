export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-text">
            © {new Date().getFullYear()} Victor Borg
          </span>
        </div>
        <div className="footer-right">
          <span className="footer-link">Privacy</span>
          <span className="footer-link">Terms</span>
          <span className="footer-link">Contact</span>
        </div>
      </div>
    </footer>
  )
}