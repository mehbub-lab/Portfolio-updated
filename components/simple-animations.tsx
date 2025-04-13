"use client"

import { useEffect, useState, useRef } from "react"

// Simple version of the ScrollAnimation component without Framer Motion
export function SimpleScrollAnimation({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use setTimeout to respect the delay prop
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  )
}

// Simple version of HoverEffect without Framer Motion
export function SimpleHoverEffect({ children, className = "" }) {
  return <div className={`transition-all duration-200 hover:scale-105 ${className}`}>{children}</div>
}
