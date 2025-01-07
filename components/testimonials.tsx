import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Bejisto Joseph",
    avatar: "/placeholder.svg",
    content: "Kovendhan was hired to develop our Event Website, and we were extremely pleased with the results. His attention to detail and technical expertise made the project a success.",
    initials: "BJ"
  },
  {
    name: "Karthik",
    avatar: "/placeholder.svg",
    content: "Kovendhan was hired to create a IEEE TechX Event website. We were very pleased with the end result and would definitely recommend his services.",
    initials: "K"
  }
]

export default function Testimonials() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-gradient">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover-card animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

