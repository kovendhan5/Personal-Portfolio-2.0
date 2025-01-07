import { Code, Cloud, Layout, HelpCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Web Design",
    description: "The most modern and high-quality design made at a professional level.",
    icon: <Layout className="w-10 h-10 text-primary" />
  },
  {
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
    icon: <Code className="w-10 h-10 text-primary" />
  },
  {
    title: "Cloud Deployment",
    description: "Deploying a website or application to a cloud service provider.",
    icon: <Cloud className="w-10 h-10 text-primary" />
  },
  {
    title: "Advisory Services",
    description: "Offering guidance and recommendations based on your expertise.",
    icon: <HelpCircle className="w-10 h-10 text-primary" />
  }
]

export default function Services() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gradient">What I'm Doing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                {service.icon}
                <span>{service.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

