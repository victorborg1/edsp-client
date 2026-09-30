import { useState, useMemo } from "react"

type Props = {
  side?: "top" | "bottom" | "vertical"
  count?: number
  fallChance?: number
}

type CharConfig = {
  delay: number
  duration: number
  driftX: number
}

export default function YenBorder({
  side = "top",
  count = 90,
  fallChance = 0.02,
}: Props) {
  const [falling, setFalling] = useState<Set<number>>(() => new Set())

  const configs = useMemo<CharConfig[]>(() => {
    return Array.from({ length: count }).map((_, i) => {
      const waveBias = (i / count) * 3.5
      const jitter = Math.random() * 4.5
      return {
        delay: waveBias + jitter,
        duration: 6.5 + Math.random() * 3.5,
        driftX: (Math.random() - 0.5) * 40,
      }
    })
  }, [count])

  const triggerFall = (i: number) => {
    setFalling((prev) => {
      if (prev.has(i)) return prev
      const next = new Set(prev)
      next.add(i)
      return next
    })
  }

  // called at the end of every pulse cycle (per char)
  const handlePulseIteration = (i: number) => {
    if (Math.random() < fallChance) triggerFall(i)
  }

  const handleFallEnd = (i: number) => {
    setFalling((prev) => {
      if (!prev.has(i)) return prev
      const next = new Set(prev)
      next.delete(i)
      return next
    })
  }

  return (
    <div className={`yen-border yen-border-${side}`} aria-hidden="true">
      {configs.map((cfg, i) => {
        const isFalling = falling.has(i)

        return (
          <span
            key={i}
            className="yen-slot"
            onPointerEnter={() => triggerFall(i)}
          >
            <span
              className={`yen-char${isFalling ? " is-hidden" : ""}`}
              style={{
                animationDelay: `${cfg.delay.toFixed(3)}s`,
                animationDuration: `${cfg.duration.toFixed(3)}s`,
              }}
              onAnimationIteration={() => handlePulseIteration(i)}
            >
              λ
            </span>

            {isFalling && (
              <span
                className="yen-char-falling"
                style={
                  { "--drift-x": `${cfg.driftX.toFixed(1)}px` } as React.CSSProperties
                }
                onAnimationEnd={() => handleFallEnd(i)}
              >
                λ
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
