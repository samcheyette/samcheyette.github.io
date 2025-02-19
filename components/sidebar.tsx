import Image from "next/image"
import { Github, Book, Linkedin } from "lucide-react"

interface SidebarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Sidebar({ activeSection, scrollToSection }: SidebarProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "papers", label: "Papers" },
    { id: "cv", label: "CV" },
  ]

  return (
    <aside className="w-88 bg-section-background-2 shadow-md p-6 flex flex-col text-foreground">
      <div className="mb-8 text-center">
        <Image
          src="./headshot.png"
          alt="Samuel Cheyette"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">Sam Cheyette</h1>
        <p className="text-lg text-muted-foreground">Postdoctoral Researcher</p>
        <p className="text-lg text-muted-foreground">MIT Brain & Cognitive Sciences</p>
        <p className="text-sm text-muted-foreground">cheyette@mit.edu</p>

        <div className="flex justify-center gap-4 mt-4">
          <a 
            href="https://github.com/samcheyette" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://scholar.google.com/citations?user=YOUR_ID" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <Book className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/samuel-cheyette-41619081/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:cheyette@mit.edu" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-6 w-6">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </div>
      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left py-2 px-4 rounded transition-colors text-lg ${
              activeSection === item.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

