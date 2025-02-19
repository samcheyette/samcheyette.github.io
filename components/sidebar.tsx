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
        <h1 className="text-3xl font-bold">Samuel Cheyette</h1>
        <p className="text-lg text-muted-foreground">Postdoctoral Researcher</p>
        <p className="text-lg text-muted-foreground">MIT Brain & Cognitive Sciences</p>
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

