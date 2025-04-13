"use client"

import { useState } from "react"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true)
  const [opacity, setOpacity] = useState(1)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setOpacity(0)
    }, 2000)

    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 bg-[#002029] flex flex-col items-center justify-center z-50"
      style={{ opacity, transition: "opacity 0.5s ease-out" }}
    >
      <div className="code-tag text-4xl md:text-6xl mb-8">{"<MMM/>"}</div>
      <div className="w-64 md:w-80">
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  )
}
