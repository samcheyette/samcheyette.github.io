"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import About from "@/components/about"
import Papers from "@/components/papers"
import CV from "@/components/cv"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "papers", "cv"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen bg-background justify-center">
      <div className="flex max-w-7xl w-full">
        <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
        <main className="flex-1 p-8 overflow-x-hidden">
          <div className="w-full max-w-5xl mx-auto">
            <About />
            <Papers />
            <CV />
          </div>
        </main>
      </div>
    </div>
  )
}

