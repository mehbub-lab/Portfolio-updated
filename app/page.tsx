"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  FileCode,
  Terminal,
  Shield,
  Cpu,
  Bomb,
  Award,
  ExternalLink,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingAnimation } from "@/components/loading-animation"
import { ParticleAnimation } from "@/components/particle-animation"
import { TypingEffect } from "@/components/typing-effect"
import { ScrollReveal, StaggeredReveal } from "@/components/scroll-reveal"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)

  useEffect(() => {
    // Set loaded state after a delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleCertificateClick = (url) => {
    if (url === "#cyber-apocalypse-certificate") {
      setShowCertificate(true)
      return
    }
    // For other certificates with actual URLs, let the default link behavior work
  }

  const skills = [
    { name: "HTML-CSS", icon: <FileCode className="h-4 w-4 mr-2" /> },
    { name: "JavaScript", icon: <Code className="h-4 w-4 mr-2" /> },
    { name: "Python", icon: <Terminal className="h-4 w-4 mr-2" /> },
    { name: "C++/C", icon: <Cpu className="h-4 w-4 mr-2" /> },
    { name: "Penetration Tester", icon: <Shield className="h-4 w-4 mr-2" /> },
    { name: "Red Teamer", icon: <Bomb className="h-4 w-4 mr-2" /> },
  ]

  // Add achievements data
  const achievements = [
    {
      title: "Hackfinity Certificate",
      issuer: "TryHackMe",
      date: "Issued Apr 2025",
      logo: "/images/tryhackme-logo.png",
      credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-KRAIPVOPZZ.pdf",
      credentialId: "THM-KRAIPVOPZZ",
      skills: ["CTF", "Ethical Hacking", "Network Security", "osint", "Cryptography", "Reverse Engineering"],
      description: "Secured 74th rank worldwide in hackfinity battle",
    },
    {
      title: "CYBER APOCALYPSE CTF 2025",
      issuer: "Hack The Box",
      date: "Issued Mar 2025",
      logo: "/images/htb-logo.svg",
      credentialUrl: "#cyber-apocalypse-certificate",
      credentialId: "CA-2025-DarkLead",
      skills: ["CTF", "Cybersecurity", "Ethical Hacking"],
      description:
        "Participated in the Cyber Apocalypse CTF 2025 competition. Ranked 910th out of 8130 teams, solved 25/77 challenges with 18,550 points.",
    },
    {
      title: "CipherVault Participants",
      issuer: "United Latino Students Association",
      date: "Issued Sep 2024",
      logo: "/images/ciphervaults-logo.jpeg",
      credentialUrl: "https://credsverse.com/credentials/66d5d5bd-3d70-4688-8624-8072d83d32ca",
      credentialId: "66d5d5bd-3d70-4688-8624-8072d83d32ca",
      skills: ["Cryptography", "Security"],
      description: "Participated in the CipherVault cybersecurity event",
    },
  ]

  const projects = [
    {
      title: "Stop-watch",
      description:
        "A JavaScript-based stopwatch application with a clean interface for tracking time. Features include start, pause, and reset functionality with millisecond precision.",
      tags: ["JavaScript", "HTML", "CSS", "Web Development"],
      repoUrl: "https://github.com/mehbub-lab/Stop-watch",
      language: "JavaScript",
      updatedAt: "Updated 3 weeks ago",
    },
    {
      title: "Navigation-Bar",
      description:
        "A responsive navigation bar component built with HTML and CSS. Includes mobile-friendly design with hamburger menu and smooth transitions for modern web applications.",
      tags: ["HTML", "CSS", "Responsive Design", "UI Component"],
      repoUrl: "https://github.com/mehbub-lab/Navigation-Bar",
      language: "HTML",
      updatedAt: "Updated 3 weeks ago",
    },
    {
      title: "Tic-tac-toe",
      description:
        "Classic Tic-tac-toe game implemented in JavaScript. Features include player turn tracking, win detection, and game state management for an interactive gaming experience.",
      tags: ["JavaScript", "Game Development", "HTML", "CSS"],
      repoUrl: "https://github.com/mehbub-lab/Tic-tac-toe",
      language: "JavaScript",
      updatedAt: "Updated 3 weeks ago",
    },
    {
      title: "RedHatTraining-DO180",
      description:
        "Repository containing exercises and projects from the Red Hat DO180 training course. Focuses on containerization with Docker and introduction to Kubernetes deployment.",
      tags: ["Docker", "Kubernetes", "DevOps", "Red Hat"],
      repoUrl: "https://github.com/mehbub-lab/RedHatTraining-DO180",
      language: "Shell",
      updatedAt: "Updated on Jan 2",
    },
    {
      title: "Portfolio",
      description:
        "Personal portfolio website showcasing my projects and skills. Built with HTML, CSS, and JavaScript to create a responsive and interactive user experience.",
      tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
      repoUrl: "https://github.com/mehbub-lab/Portfolio",
      language: "HTML",
      updatedAt: "Updated on Oct 1, 2024",
    },
  ]

  // Find the experiences array and reorder it to keep "Community Development Officer" at the top

  const experiences = [
    {
      title: "Community Development Officer",
      company: "DarkLead!",
      logo: "/images/darkleadlogo.png",
      type: "Self-employed",
      period: "Apr 2025 - Present · 1 mo",
      location: "Tiruchirappalli, Tamil Nadu, India · On-site",
      skills: ["Community Management", "Ethical Hacking"],
      description:
        "Leading community development initiatives and ethical hacking programs to build a strong cybersecurity community.",
    },
    {
      title: "Technical Specialist",
      company: "SRM IST ACM Student Chapter",
      logo: "/images/acm-logo.png",
      type: "Full-time",
      period: "Mar 2025 - Present · 2 mos",
      location: "Tiruchirappalli, Tamil Nadu, India · On-site",
      skills: ["Technical Support", "Web Development"],
      description: "Providing technical expertise and web development support for ACM chapter activities and events.",
    },
    {
      title: "Secretary | CyberAnzen",
      company: "SRM Institute of Science and Technology",
      logo: "/images/cyberanzen-logo.jpeg",
      type: "Full-time · 4 mos",
      period: "Apr 2025 - Present · 1 mo",
      location: "Tamil Nadu, India",
      skills: ["Event Management", "Event Planning"],
      description:
        "Organizing cybersecurity events, workshops, and coordinating club activities as the Secretary of CyberAnzen.",
    },
    {
      title: "Technical Head",
      company: "SRM Institute of Science and Technology",
      logo: "/images/cyberanzen-logo.jpeg",
      type: "Full-time",
      period: "Feb 2025 - Apr 2025 · 3 mos",
      location: "Tiruchirappalli, Tamil Nadu, India",
      skills: [],
      description:
        "Led technical initiatives and projects, providing guidance and technical expertise to team members.",
    },
    {
      title: "Core Member | CyberAnzen Club",
      company: "SRM Institute of Science and Technology",
      logo: "/images/cyberanzen-logo.jpeg",
      type: "Full-time",
      period: "Jan 2025 - Feb 2025 · 2 mos",
      location: "Tiruchirappalli, Tamil Nadu, India",
      skills: ["Event Management", "Event Planning"],
      description: "Event management, hosting events, and providing technical support for cybersecurity initiatives.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <LoadingAnimation />
      <ParticleAnimation />

      <div className="transition-opacity duration-500" style={{ opacity: isLoaded ? 1 : 0 }}>
        {/* Hero section */}
        <div className="flex flex-col items-center justify-center h-screen p-4 md:p-8 text-white relative">
          <div className="z-10 max-w-5xl w-full flex flex-col items-center text-center">
            <header className="w-full py-6 flex justify-center">
              <div className="code-tag text-lg md:text-xl">
                {"<"} Mehbub Muztaba Mazumder {"/>"}
              </div>
            </header>

            <div className="flex flex-col items-center justify-center py-10 md:py-0">
              <ScrollReveal variant="slide-down" delay={0.3}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight mb-6">
                  MEHBUB MUZTABA MAZUMDER
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="zoom-in" delay={0.5}>
                <p className="text-lg md:text-xl tracking-wider text-gray-300 uppercase h-8 font-sans">
                  <TypingEffect
                    phrases={[
                      "ASPIRING ETHICAL HACKER",
                      "CYBERSECURITY ENTHUSIAST",
                      "PROBLEM SOLVER",
                      "CONTINUOUS LEARNER",
                      "RED TEAMER",
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetweenPhrases={2000}
                  />
                </p>
              </ScrollReveal>

              <ScrollReveal variant="slide-up" delay={0.7} className="mt-12 flex gap-4">
                <Link href="https://github.com/mehbub-lab" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#5eead4] text-[#5eead4] hover:bg-[#5eead4]/10 hover:scale-110 transition-transform"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>

                <Link href="https://www.linkedin.com/in/mehbub-muztaba-mazumder-b47ba2322" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#5eead4] text-[#5eead4] hover:bg-[#5eead4]/10 hover:scale-110 transition-transform"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>

                <Link href="mailto:connect@mehbubmuztaba.tech">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#5eead4] text-[#5eead4] hover:bg-[#5eead4]/10 hover:scale-110 transition-transform"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* About section */}
        <section id="about" className="py-20 px-4 md:px-8 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal variant="slide-up">
              <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal variant="slide-right" delay={0.2}>
                <div>
                  <p className="text-slate-300 mb-4">
                    I'm a CyberSecurity enthusiast with a passion for building innovative web applications and exploring
                    the beauty of technology. Currently pursuing my Bachelor's degree in Computer Science w/s in
                    CyberSecurity at SRM Instutute of Science and Technology.
                  </p>
                  <p className="text-slate-300 mb-4">
                    My journey in tech began by using kali-linux and exploring the the tools. Utilizing it in both
                    ethical and unethical way inspired me to persue CyberSecurity as career.
                  </p>
                  <p className="text-slate-300">
                    Beside CyberSecurity I have interest in other fields too like making projects with IOT, developing
                    websites and other corners of tech.
                  </p>
                </div>
              </ScrollReveal>

              <div>
                <ScrollReveal variant="slide-left" delay={0.3}>
                  <h3 className="text-xl font-semibold mb-4 text-white">Skills</h3>
                </ScrollReveal>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <ScrollReveal key={skill.name} variant="zoom-in" delay={0.3 + index * 0.05}>
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm inline-block hover:-translate-y-1 transition-transform flex items-center">
                        {skill.icon}
                        {skill.name}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Achievements section */}
        <section id="achievements" className="py-20 px-4 md:px-8 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal variant="slide-up">
              <h2 className="text-3xl font-bold mb-10 text-white">Achievements</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <ScrollReveal key={achievement.title} variant="slide-up" delay={0.2 + index * 0.1}>
                  <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900/50 hover:shadow-xl hover:shadow-[#5eead4]/10 transition-all duration-300 hover:-translate-y-1 p-5 group">
                    <div className="flex items-start">
                      <div className="relative w-12 h-12 mr-4 rounded overflow-hidden bg-white/10 flex items-center justify-center">
                        <Image
                          src={achievement.logo || "/placeholder.svg"}
                          alt={`${achievement.issuer} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white group-hover:text-[#5eead4] transition-colors">
                            {achievement.title}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-[#5eead4] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-slate-300 text-sm">{achievement.issuer}</div>
                        <div className="text-slate-400 text-xs mt-1">{achievement.date}</div>

                        {achievement.credentialId && (
                          <div className="text-slate-400 text-xs mt-1">Credential ID: {achievement.credentialId}</div>
                        )}

                        {achievement.description && (
                          <div className="text-slate-300 text-sm mt-2">{achievement.description}</div>
                        )}

                        <div className="flex flex-wrap gap-1 mt-3">
                          {achievement.skills.map((skill) => (
                            <span
                              key={`${achievement.title}-${skill}`}
                              className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={achievement.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center mt-4 text-[#5eead4] text-sm font-mono hover:underline"
                          onClick={(e) => {
                            if (achievement.credentialUrl === "#cyber-apocalypse-certificate") {
                              e.preventDefault()
                              handleCertificateClick(achievement.credentialUrl)
                            }
                          }}
                        >
                          <Award className="h-4 w-4 mr-1" />
                          <span>View Credential</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-20 px-4 md:px-8 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal variant="slide-up">
              <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ScrollReveal key={project.title} variant="slide-up" delay={0.2 + index * 0.1}>
                  <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900/50 hover:shadow-xl hover:shadow-[#5eead4]/5 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <div className="h-40 bg-slate-800 flex items-center justify-center p-4">
                      <div className="flex flex-col items-center">
                        <span className="code-tag text-xl mb-2">
                          {"<"} {project.title} {"/>"}
                        </span>
                        <div className="flex items-center mt-3">
                          <span
                            className={`w-3 h-3 rounded-full mr-2 ${
                              project.language === "JavaScript"
                                ? "bg-yellow-300"
                                : project.language === "HTML"
                                  ? "bg-red-500"
                                  : project.language === "Shell"
                                    ? "bg-gray-400"
                                    : "bg-blue-500"
                            }`}
                          ></span>
                          <span className="text-xs text-slate-300">{project.language}</span>
                          <span className="text-xs text-slate-400 ml-4">{project.updatedAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                      <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={`${project.title}-${tag}`}
                            className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={project.repoUrl} target="_blank">
                        <Button
                          variant="outline"
                          className="w-full text-[#5eead4] border-[#5eead4] hover:bg-[#5eead4]/10"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Repository
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal variant="fade-in" delay={0.5} className="mt-10 text-center">
              <Link href="https://github.com/mehbub-lab?tab=repositories" target="_blank">
                <Button variant="outline" className="text-[#5eead4] border-[#5eead4] hover:bg-[#5eead4]/10">
                  View All Projects on GitHub
                  <Github className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="py-20 px-4 md:px-8 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal variant="slide-up">
              <h2 className="text-3xl font-bold mb-10 text-white">Experience</h2>
            </ScrollReveal>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ScrollReveal
                  key={`${experience.title}-${index}`}
                  variant={index % 2 === 0 ? "slide-right" : "slide-left"}
                  delay={0.2 + index * 0.1}
                >
                  <div className="p-6 bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div className="flex items-start">
                        <div className="relative w-12 h-12 mr-4 rounded-md overflow-hidden bg-black flex items-center justify-center">
                          <Image
                            src={experience.logo || "/placeholder.svg"}
                            alt={`${experience.company} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                          <div className="text-slate-300 mt-1">
                            {experience.company} · {experience.type}
                          </div>
                          <div className="text-slate-400 text-sm mt-1 font-mono">{experience.period}</div>
                          <div className="text-slate-400 text-sm mt-1">{experience.location}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{experience.description}</p>

                    {experience.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={`${experience.title}-${skill}`}
                            className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 px-4 md:px-8 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal variant="slide-up">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-in" delay={0.2}>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!
              </p>
            </ScrollReveal>

            <ScrollReveal variant="zoom-in" delay={0.4}>
              <Link href="mailto:mehbubmuztaba@gmail.com">
                <Button className="bg-[#5eead4] hover:bg-[#5eead4]/80 text-slate-900 hover:scale-105 transition-transform">
                  Say Hello
                </Button>
              </Link>
            </ScrollReveal>

            <div className="mt-12 flex justify-center gap-6">
              <StaggeredReveal baseDelay={0.5} staggerDelay={0.1} variant="zoom-in">
                <Link href="https://github.com/mehbub-lab" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-300 hover:text-white hover:bg-slate-800 hover:rotate-[360deg] transition-all duration-500"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>

                <Link href="https://www.linkedin.com/in/mehbub-muztaba-mazumder-b47ba2322" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-300 hover:text-white hover:bg-slate-800 hover:rotate-[360deg] transition-all duration-500"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>

                <Link href="mailto:mehbubmuztaba@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-300 hover:text-white hover:bg-slate-800 hover:rotate-[360deg] transition-all duration-500"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </StaggeredReveal>
            </div>
          </div>
        </section>

        <footer className="py-6 px-4 bg-slate-950 text-slate-400 text-center text-sm">
          <p>© {new Date().getFullYear()} Mehbub Muztaba Mazumder. All Rights Reserved.</p>
        </footer>
        {/* Certificate Modal */}
        {showCertificate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 p-6 rounded-lg max-w-2xl w-full border border-slate-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">CERTIFICATE OF PARTICIPATION</h3>
                <button onClick={() => setShowCertificate(false)} className="text-slate-400 hover:text-white">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="bg-black p-6 rounded-md border border-[#9FEF00]/30">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/htb-logo.svg"
                    alt="Hack The Box Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                <h2 className="text-center text-2xl font-bold text-[#9FEF00] mb-8">CYBER APOCALYPSE CTF 2025</h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-slate-400 text-sm">TEAM RANKING</p>
                    <p className="text-white font-bold">910th</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">SOLVED CHALLENGES</p>
                    <p className="text-white font-bold">25/77</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">TOTAL POINTS</p>
                    <p className="text-white font-bold">18,550</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">TOTAL TEAMS</p>
                    <p className="text-white font-bold">8130</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 text-sm">USERNAME</p>
                  <p className="text-white font-bold">Mehbub Muztaba Mazumder</p>
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 text-sm">TEAM NAME</p>
                  <p className="text-white font-bold">DarkLead!</p>
                </div>

                <div className="mb-8">
                  <p className="text-slate-400 text-sm">CTF DATE</p>
                  <p className="text-white font-bold">21/03/2025 - 26/03/2025</p>
                </div>

                <div className="text-center">
                  <p className="text-[#9FEF00] font-bold text-xl">CERTIFICATE OF PARTICIPATION</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  className="text-[#5eead4] border-[#5eead4] hover:bg-[#5eead4]/10"
                  onClick={() => setShowCertificate(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
