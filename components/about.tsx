"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Rocket } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I'm a passionate developer with expertise in Cloud Computing, DevOps, and Cyber Security. 
              My journey in tech is driven by a constant desire to learn and innovate.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/kovendhan5" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/kovendhan-p-7b6b80226/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="mailto:kovendhanofficial5@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="#projects">
                  <Rocket className="h-5 w-5" />
                  <span className="sr-only">Projects</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="About me"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

