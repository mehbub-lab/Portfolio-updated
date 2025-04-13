"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  originX: number
  originY: number
}

interface Line {
  start: Point
  end: Point
  distance: number
  opacity: number
}

export function ParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configuration
    const config = {
      particleCount: 80,
      particleColor: "#5eead4",
      lineColor: "#5eead4",
      particleRadius: 1.5,
      lineWidth: 0.5,
      cursorInnerCircle: 20,
      cursorOuterCircle: 100,
      gridSize: 35,
      mouseForce: 30,
      friction: 0.95,
      ease: 0.25,
    }

    let width = window.innerWidth
    let height = window.innerHeight
    let mouseX = width / 2
    let mouseY = height / 2
    const mouseRadius = config.cursorOuterCircle
    let mouseActive = false

    // Resize canvas to match window size
    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initParticles() // Reinitialize particles on resize
    }

    // Initialize canvas
    canvas.width = width
    canvas.height = height

    // Particles and lines arrays
    let particles: Point[] = []
    let lines: Line[] = []

    // Initialize particles
    const initParticles = () => {
      particles = []
      const gridStep = Math.round(Math.sqrt((width * height) / config.particleCount))

      // Create particles in a grid pattern
      for (let y = 0; y < height; y += gridStep) {
        for (let x = 0; x < width; x += gridStep) {
          if (particles.length < config.particleCount) {
            // Add some randomness to the grid
            const xPos = x + Math.random() * gridStep
            const yPos = y + Math.random() * gridStep

            particles.push({
              x: xPos,
              y: yPos,
              originX: xPos,
              originY: yPos,
              vx: 0,
              vy: 0,
            })
          }
        }
      }
    }

    // Calculate distance between two points
    const distance = (p1: Point, p2: Point) => {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
    }

    // Update particle positions
    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse interaction
        if (mouseActive) {
          const dist = distance(p, { x: mouseX, y: mouseY } as Point)
          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius
            const angle = Math.atan2(p.y - mouseY, p.x - mouseX)
            p.vx += force * Math.cos(angle) * config.mouseForce
            p.vy += force * Math.sin(angle) * config.mouseForce
          }
        }

        // Apply velocity with friction
        p.x += p.vx
        p.y += p.vy
        p.vx *= config.friction
        p.vy *= config.friction

        // Spring back to original position
        const dx = p.originX - p.x
        const dy = p.originY - p.y
        p.vx += dx * config.ease
        p.vy += dy * config.ease
      }
    }

    // Find and update connecting lines
    const updateLines = () => {
      lines = []

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dist = distance(p1, p2)

          // Only connect nearby particles
          if (dist < config.gridSize * 1.5) {
            lines.push({
              start: p1,
              end: p2,
              distance: dist,
              opacity: 1 - dist / (config.gridSize * 1.5),
            })
          }
        }
      }
    }

    // Draw everything
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw background
      ctx.fillStyle = "#002029"
      ctx.fillRect(0, 0, width, height)

      // Draw lines
      ctx.lineWidth = config.lineWidth

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        ctx.beginPath()
        ctx.moveTo(line.start.x, line.start.y)
        ctx.lineTo(line.end.x, line.end.y)
        ctx.strokeStyle = `rgba(94, 234, 212, ${line.opacity * 0.5})`
        ctx.stroke()
      }

      // Draw particles
      ctx.fillStyle = config.particleColor

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, config.particleRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw mouse cursor effect if active
      if (mouseActive) {
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, config.cursorInnerCircle, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(94, 234, 212, 0.5)"
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(mouseX, mouseY, mouseRadius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(94, 234, 212, 0.2)"
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      updateParticles()
      updateLines()
      draw()
      requestAnimationFrame(animate)
    }

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      mouseActive = true
    }

    const handleMouseLeave = () => {
      mouseActive = false
    }

    // Touch event handlers for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
        mouseActive = true
      }
    }

    const handleTouchEnd = () => {
      mouseActive = false
    }

    // Initialize and start animation
    initParticles()
    animate()

    // Add event listeners
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchmove", handleTouchMove)
    canvas.addEventListener("touchend", handleTouchEnd)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "auto" }} />
}
