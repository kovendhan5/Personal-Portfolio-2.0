import { Server, Shield, Code, Database, Cloud, Lock, Terminal, Globe, Cpu, Network } from 'lucide-react'
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
    <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg" id="skills">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-white animate-fade-in">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-lg border-none text-white animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                      className="bg-blue-500/20 text-blue-300 animate-scale hover:bg-blue-500/30 transition-all duration-300"
                      style={{ animationDelay: `${(index * 0.1) + (itemIndex * 0.05)}s` }}
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

