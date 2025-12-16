import { useEffect, useRef } from 'react'

function FloatingDust() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resize)
    resize()

    const particles = []
    const count = Math.floor(window.innerWidth / 10)

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.3 + 0.1,
        drift: Math.random() * 0.1 + 0.05
      })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Check theme from document
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
                     (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

      particles.forEach(p => {
        p.y -= p.drift
        if (p.y < 0) p.y = canvas.height + p.r

        // Use white for dark theme, dark for light theme
        const color = isDark ? '255, 255, 255' : '50, 50, 50'
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}

export default FloatingDust
