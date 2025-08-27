import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredProjects = [
  {
    title: "AI Healthcare SaaS",
    description: "Automating SOAP notes, billing, and summaries for solo practitioners using OpenAI APIs.",
    tags: ["AI", "Healthcare", "OpenAI", "Node.js", "React"],
    github: "#",
    demo: "#",
    status: "In Development",
  },
  {
    title: "Study Planner",
    description: "Productivity tool with Pomodoro Timer, Task Manager, and insights for students.",
    tags: ["React", "Node.js", "MongoDB", "Productivity"],
    github: "#",
    demo: "#",
    status: "In Development",
  },
  {
    title: "MERN Stack Projects",
    description: "Full-stack web applications built with React, Node.js, MongoDB, and Express.",
    tags: ["MERN", "Full-Stack", "API", "Database"],
    github: "#",
    demo: "#",
    status: "Completed",
  },
]

export function ProjectsPreview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Recent Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Building solutions that make a real impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="bg-white/90 text-gray-800"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Link href={project.github}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.demo}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
