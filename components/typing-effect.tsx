"use client"

import { useEffect, useState, useRef } from "react"

interface TypingEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
  className?: string
}

export function TypingEffect({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
  className = "",
}: TypingEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)
  const currentPhrase = phrases[phraseIndex]
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleTyping = () => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // If waiting, don't do anything
      if (isWaiting) {
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false)
          setIsDeleting(true)
        }, delayBetweenPhrases)
        return
      }

      // Set the next text based on whether we're typing or deleting
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))
          timeoutRef.current = setTimeout(handleTyping, typingSpeed)
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed)
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false)
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }
      }
    }

    timeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentText, isDeleting, phraseIndex, currentPhrase, typingSpeed, deletingSpeed, delayBetweenPhrases, isWaiting])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
