import Image from 'next/image'
import { Server, Shield, Code, Database, Cloud, Lock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillsData = [
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Jenkins"]
  },
  {
    title: "Security",
    icon: <Shield className="h-6 w-6" />,
    skills: ["Cyber Security", "Network Security", "Cloud Security", "DevSecOps", "Intel Certified"]
  },
  {
    title: "Programming",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "JavaScript", "Java", "C++", "Bash Scripting"]
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "Infrastructure",
    icon: <Server className="h-6 w-6" />,
    skills: ["AWS EC2", "S3", "Lambda", "Azure VMs", "Google Compute Engine"]
  },
  {
    title: "Security Tools",
    icon: <Lock className="h-6 w-6" />,
    skills: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "OWASP ZAP"]
  }
]

export default function Skills() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden" id="skills">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Skills background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-white">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
                    {skill.icon}
                  </div>
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="secondary"
                      className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

