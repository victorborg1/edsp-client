import { useEffect, useRef } from "react"

const CELL = 42

export default function Grid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")!

    // set initial size only
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const W = canvas.width
    const H = canvas.height
    const cx = W * 0.5
    const cy = H * 0.5

    const cols = Math.ceil(W / CELL)
    const rows = Math.ceil(H / CELL)

    ctx.fillStyle = "#07090d"
    ctx.fillRect(0, 0, W, H)

    ctx.strokeStyle = "rgba(160, 180, 255, 0.03)"
    ctx.lineWidth = 1

    ctx.beginPath()
    for (let c = 0; c <= cols; c++) {
      const x = c * CELL
      ctx.moveTo(x, 0)
      ctx.lineTo(x, H)
    }
    ctx.stroke()

    ctx.beginPath()
    for (let r = 0; r <= rows; r++) {
      const y = r * CELL
      ctx.moveTo(0, y)
      ctx.lineTo(W, y)
    }
    ctx.stroke()

    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.7)
    glow.addColorStop(0, "rgba(120,160,255,0.03)")
    glow.addColorStop(1, "rgba(0,0,0,0)")
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, W, H)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  )
}