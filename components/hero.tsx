"use client"
import { Button } from "@/components/ui/button"
import { CloudLightning, Code, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 via-blue-500/70 to-indigo-600/70"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hi there 👋, I&apos;m Kovendhan
          </h1>
          <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
            ✨ Passionate about Cloud Computing, DevOps, and Cyber Security ✨
          </p>
          <p className="mx-auto max-w-[700px] text-lg">
            A dedicated learner with a strong focus on mastering Cloud Computing and DevOps, 
            followed by Cyber Security and Full Stack Development.
          </p>
          <div className="flex items-center gap-8 mt-8">
            <div className="flex flex-col items-center gap-2 text-white">
              <CloudLightning className="h-10 w-10" />
              <span className="text-sm font-semibold">Cloud Expert</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Code className="h-10 w-10" />
              <span className="text-sm font-semibold">DevOps Enthusiast</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Shield className="h-10 w-10" />
              <span className="text-sm font-semibold">Security Advocate</span>
            </div>
          </div>
          <Button 
            className="mt-8"
            variant="outline"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

