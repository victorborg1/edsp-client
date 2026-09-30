import YenBorder from "./YenBorder"

export default function Footer() {
  return (
    <footer className="footer">
      <YenBorder side="top" count={200} />
      <div className="footer-inner">
        <span className="footer-link">/github</span>
        <span className="footer-text">
          {new Date().getFullYear()}
        </span>        
        <span className="footer-link">/contact</span>
      </div>
    </footer>
  )
}
