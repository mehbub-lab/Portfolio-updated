"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface HoverEffectProps {
  children: ReactNode
  effect?: "scale" | "lift" | "glow" | "rotate" | "tilt"
  className?: string
}

export function HoverEffect({ children, effect = "scale", className = "" }: HoverEffectProps) {
  // Define different hover effects
  const hoverStyles = {
    scale: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    lift: {
      y: -8,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 },
    },
    glow: {
      boxShadow: "0 0 15px 2px rgba(94, 234, 212, 0.5)",
      transition: { duration: 0.2 },
    },
    rotate: {
      rotate: 3,
      transition: { duration: 0.2 },
    },
    tilt: {
      rotateX: 10,
      rotateY: 10,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div whileHover={hoverStyles[effect]} className={className}>
      {children}
    </motion.div>
  )
}
