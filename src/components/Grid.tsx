import { useEffect, useRef } from "react"

const CELL = 56

export default function Grid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const draw = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      ctx.fillStyle = "#D9D9E4"
      ctx.fillRect(0, 0, width, height)

      const cols = Math.ceil(width / CELL) + 1
      const rows = Math.ceil(height / CELL) + 1

      ctx.strokeStyle = "rgba(41, 39, 49, 0.09)"
      ctx.lineWidth = 1

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * CELL
          const y = row * CELL

          ctx.beginPath()
          ctx.moveTo(x, y + CELL)
          ctx.lineTo(x + CELL, y)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + CELL, y + CELL)
          ctx.stroke()
        }
      }

      ctx.fillStyle = "rgba(41, 39, 49, 0.13)"

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * CELL
          const y = row * CELL

          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    draw()

    window.addEventListener("resize", draw)

    return () => {
      window.removeEventListener("resize", draw)
    }
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
