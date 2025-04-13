import type React from "react"
import type { Metadata } from "next"
import { Inter, Martian_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const martianMono = Martian_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-martian-mono",
})

const inter = Inter({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Mehbub Mazumder | Full-Stack Developer",
  description: "Aspiring Ethical Hacker & Red Teamer",  
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${martianMono.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'