'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Suspense } from 'react'

const blogPosts = [
  {
    title: "Building an AI Assistant: Insights and Challenges",
    description: "Exploring the development process of an AI assistant using advanced NLP techniques.",
    date: "2024-01-15",
    slug: "building-ai-assistant"
  },
  {
    title: "Enhancing Image Quality: The Pixelated Image Correction Project",
    description: "Diving into the technical details of improving pixelated images using cutting-edge algorithms.",
    date: "2024-01-10",
    slug: "pixelated-image-correction"
  },
  {
    title: "Crafting a Cloud-Native Application: A Journey Through Microservices",
    description: "Sharing experiences and best practices in developing a scalable, cloud-native application.",
    date: "2024-01-05",
    slug: "cloud-native-application"
  },
  {
    title: "Streamlining Development: Implementing a Robust CI/CD Pipeline",
    description: "A deep dive into creating an efficient CI/CD pipeline for seamless software delivery.",
    date: "2023-12-28",
    slug: "implementing-cicd-pipeline"
  }
]


export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex flex-col items-center">
        <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Suspense>
  )
}