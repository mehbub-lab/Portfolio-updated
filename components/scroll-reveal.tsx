"use client"

import React from "react"

import { useEffect, useRef, useState, type ReactNode } from "react"

type AnimationVariant =
  | "fade-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "flip"

interface ScrollRevealProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  threshold?: number
}

export function ScrollReveal({
  children,
  variant = "fade-in",
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Calculate CSS classes based on the selected animation variant
  const getAnimationClasses = () => {
    // Base animation classes
    const baseClasses = `transition-all duration-${Math.round(duration * 1000)}ms delay-${Math.round(delay * 1000)}ms ease-out`

    // Invisible state (starting position)
    let hiddenClasses = "opacity-0"

    switch (variant) {
      case "fade-in":
        hiddenClasses = "opacity-0"
        break
      case "slide-up":
        hiddenClasses = "opacity-0 translate-y-10"
        break
      case "slide-down":
        hiddenClasses = "opacity-0 -translate-y-10"
        break
      case "slide-left":
        hiddenClasses = "opacity-0 translate-x-10"
        break
      case "slide-right":
        hiddenClasses = "opacity-0 -translate-x-10"
        break
      case "zoom-in":
        hiddenClasses = "opacity-0 scale-95"
        break
      case "zoom-out":
        hiddenClasses = "opacity-0 scale-105"
        break
      case "flip":
        hiddenClasses = "opacity-0 rotateY-90"
        break
    }

    // Visible state
    const visibleClasses = "opacity-100 translate-x-0 translate-y-0 scale-100"

    return {
      base: baseClasses,
      hidden: hiddenClasses,
      visible: visibleClasses,
    }
  }

  const { base, hidden, visible } = getAnimationClasses()

  useEffect(() => {
    // Skip if already animated and once flag is true
    if (once && hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHasAnimated(true)

          // If once is true, unobserve after animation is triggered
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          // If not set to once, hide when out of view
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Adjust when animation triggers (before element is fully in view)
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, hasAnimated, threshold])

  return (
    <div
      ref={ref}
      className={`${base} ${isVisible ? visible : hidden} ${className}`}
      style={{
        // Set a custom delay for staggered animations
        transitionDelay: `${delay}s`,
        // Transform style for the flip animation if needed
        transform: variant === "flip" && !isVisible ? "rotateY(90deg)" : undefined,
      }}
    >
      {children}
    </div>
  )
}

// Helper component for creating staggered animations for multiple children
export function StaggeredReveal({
  children,
  baseDelay = 0.1,
  staggerDelay = 0.1,
  variant = "fade-in",
  className = "",
}: {
  children: ReactNode[]
  baseDelay?: number
  staggerDelay?: number
  variant?: AnimationVariant
  className?: string
}) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal variant={variant} delay={baseDelay + index * staggerDelay} className={className}>
          {child}
        </ScrollReveal>
      ))}
    </>
  )
}
