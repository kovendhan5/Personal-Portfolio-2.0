"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  className?: string
  style?: React.CSSProperties
}

export function ProjectCard({ title, description, tags, link, className, style }: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className={`group cursor-pointer bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-all duration-300 ${className}`} onClick={handleClick} style={style}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/20 text-white">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

