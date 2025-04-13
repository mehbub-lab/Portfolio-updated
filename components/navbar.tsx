"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#002029]/80 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="code-tag text-lg">
              {"<"} MM {"/>"}
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-mono">
                About
              </Link>
              <Link
                href="#achievements"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-mono"
              >
                Achievements
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-mono">
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-mono"
              >
                Experience
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-mono">
                Contact
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-4 text-[#5eead4] border-[#5eead4] hover:bg-[#5eead4]/10 font-mono"
                >
                  Resume
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#001a21]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#achievements"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="text-[#5eead4] hover:text-[#5eead4]/80 block px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
