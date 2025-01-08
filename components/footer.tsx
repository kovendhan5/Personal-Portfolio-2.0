import { Github, Linkedin, Mail, Rocket } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-white md:text-left">
            © 2024 Kovendhan. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <Button asChild variant="ghost" size="icon" className="text-white hover:text-gray-200 transition-colors">
            <a href="https://github.com/kovendhan5" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-white hover:text-gray-200 transition-colors">
            <a href="mailto:kovendhanofficial5@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Contact</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-white hover:text-gray-200 transition-colors">
            <a href="#projects">
              <Rocket className="h-5 w-5" />
              <span className="sr-only">Projects</span>
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-white hover:text-gray-200 transition-colors">
            <a href="https://www.linkedin.com/in/kovendhan-p-7b6b80226/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

