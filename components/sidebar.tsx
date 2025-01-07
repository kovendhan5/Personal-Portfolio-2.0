import Image from 'next/image'
import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="w-80 min-h-screen p-6 border-r border-border/40 bg-card">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-48 h-48 overflow-hidden rounded-full gradient-border">
          <Image
            src="/placeholder.svg"
            alt="Kovendhan P"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gradient">Kovendhan P</h1>
          <p className="text-sm text-muted-foreground">
            Frontend Developer | Cloud Computing & DevOps Beginner
          </p>
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:kovendhan2022@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              kovendhan2022@gmail.com
            </a>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">+91 7695582909</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Cheyyar, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link href="https://github.com/kovendhan5" className="social-icon">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/kovendhan-p-7b6b80226/" className="social-icon">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://instagram.com" className="social-icon">
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </aside>
  )
}

