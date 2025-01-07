export interface NavItem {
  href: string
  label: string
}

export interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export interface SkillCardProps {
  title: string
  icon: React.ReactNode
  skills: string[]
}

