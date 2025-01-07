import { ProjectCard } from "@/components/project-card"

const projectsData = [
  {
    title: "AI Assistant",
    description: "Developing an AI assistant with advanced natural language processing capabilities.",
    tags: ["AI", "Machine Learning", "Python", "NLP"],
    link: "https://github.com/kovendhan5/AI-Assistant"
  },
  {
    title: "Pixelated Image Correction",
    description: "Intel certified project for correcting and enhancing pixelated images using advanced algorithms.",
    tags: ["Computer Vision", "Image Processing", "Intel Certified"],
    link: "https://github.com/kovendhan5/image-correction"
  },
  {
    title: "Cloud-Native Application",
    description: "Developed a scalable, cloud-native application using microservices architecture.",
    tags: ["Microservices", "Docker", "Kubernetes", "AWS"],
    link: "https://github.com/kovendhan5/cloud-native-app"
  },
  {
    title: "Automated CI/CD Pipeline",
    description: "Implemented a robust CI/CD pipeline for streamlined software delivery.",
    tags: ["DevOps", "Jenkins", "GitLab CI", "Ansible"],
    link: "https://github.com/kovendhan5/cicd-pipeline"
  }
]

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-white animate-fade-in">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }} />
          ))}
        </div>
      </div>
    </section>
  )
}

