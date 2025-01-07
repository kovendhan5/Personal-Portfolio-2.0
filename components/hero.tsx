import { Github, Linkedin, Mail, Rocket, Shield, Code, CloudLightning } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 animate-float">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Hi there 👋, I&apos;m Kovendhan
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in">
              ✨ Passionate about Cloud Computing, DevOps, and Cyber Security ✨
            </p>
          </div>
          <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="mx-auto max-w-[700px] text-gray-300">
              A dedicated learner with a strong focus on mastering Cloud Computing and DevOps, 
              followed by Cyber Security and Full Stack Development. Currently pursuing my B.Tech, 
              driven by a relentless curiosity to explore the latest trends and technologies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300">
              <a href="https://github.com/kovendhan5" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
              <a href="mailto:kovendhanofficial5@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
              <a href="#projects">
                <Code className="mr-2 h-4 w-4" />
                Projects
              </a>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
              <a href="https://www.linkedin.com/in/kovendhan-p-7b6b80226/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-8 mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center gap-2 text-white">
              <CloudLightning className="h-8 w-8" />
              <span className="text-sm">Cloud Expert</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Code className="h-8 w-8" />
              <span className="text-sm">DevOps Enthusiast</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Shield className="h-8 w-8" />
              <span className="text-sm">Security Advocate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

