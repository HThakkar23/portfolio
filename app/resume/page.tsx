"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Mail, MapPin, Linkedin, Github } from "lucide-react"
import { ExperienceSection } from "@/components/experience-section"

export default function ResumePage() {
  const handleDownloadPDF = () => {
    const resumeContent = `
Harit Thakkar - Resume

Contact Information:
Email: thakkarharit02@gmail.com
GitHub: github.com/HThakkar23
LinkedIn: https://www.linkedin.com/in/harit-thakkar-43a4b9279/
Location: Canada

Education:
Computer Engineering Student (Incoming)
University of Waterloo

Professional Summary:
Full-Stack Web Developer specializing in MERN stack, API integration, and AI-powered solutions.
Passionate about solving real-world problems through technology, with experience in healthcare automation
and productivity tools.

Technical Skills:
- Languages: JavaScript, TypeScript, Python, Java, C++
- Frontend: React, HTML5, CSS3, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Tools: Git, GitHub, Postman, Figma, Arduino, AWS
- Specialties: API Design & Integration, AI/ML, Hardware Projects

Current Projects:
- AI SaaS for automating SOAP notes, billing, and summaries for solo practitioners
- Study Planner with Pomodoro Timer, Task Manager, and Productivity Insights

Learning Focus:
- Edge AI & RISC-V chip design
- Backend scalability patterns  
- OpenAI APIs (GPT-4o, Whisper)
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Harit_Thakkar_Resume.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Harit Thakkar</h1>
            <p className="text-xl text-muted-foreground mb-4">Computer Engineering Student & Full-Stack Developer</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                thakkarharit02@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Canada
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/harit-thakkar-43a4b9279/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/HThakkar23" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <a href='./SWE_Fast_Learner.pdf' download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Professional Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Incoming Computer Engineering student at University of Waterloo with a passion for full-stack web
                development and AI-powered solutions. Experienced in MERN stack development, API integration, and
                building scalable applications that solve real-world problems. Currently developing AI SaaS for
                healthcare automation and productivity tools, driven by impact and user-centered design.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Bachelor of Computer Engineering (Incoming)</h3>
                  <p className="text-muted-foreground">University of Waterloo</p>
                  <p className="text-sm text-muted-foreground">Focus: Software Engineering, AI/ML, Hardware Design</p>
                </div>
                <Badge variant="outline">2024 - 2029</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Current Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Current Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">AI Healthcare SaaS</h3>
                    <p className="text-muted-foreground">Solo Developer</p>
                  </div>
                  <Badge variant="outline">In Development</Badge>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Automating SOAP notes, billing, and summaries for solo practitioners</li>
                  <li>Integrating OpenAI APIs (GPT-4o, Whisper) for intelligent document processing</li>
                  <li>Building scalable backend with Node.js and MongoDB</li>
                  <li>Focusing on user experience and healthcare workflow optimization</li>
                </ul>
              </div>

              <Separator />

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Study Planner & Productivity Suite</h3>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
                  </div>
                  <Badge variant="outline">In Development</Badge>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Pomodoro Timer with customizable work/break intervals</li>
                  <li>Task Manager with priority-based organization</li>
                  <li>Productivity insights and analytics dashboard</li>
                  <li>Built with React, Node.js, and MongoDB</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "Python", "Java", "C++"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Frontend & Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "HTML5", "CSS3"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "Postman", "Figma", "Arduino", "AWS", "API Design"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI/ML Integration",
                      "API Development",
                      "Full-Stack Development",
                      "Hardware Projects",
                      "Product Mindset",
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Focus */}
          <Card>
            <CardHeader>
              <CardTitle>Currently Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">Edge AI & RISC-V Chip Design</h4>
                    <p className="text-sm text-muted-foreground">Hardware-software integration and optimization</p>
                  </div>
                  <Badge variant="outline">2024</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">Backend Scalability Patterns</h4>
                    <p className="text-sm text-muted-foreground">
                      Microservices, load balancing, and distributed systems
                    </p>
                  </div>
                  <Badge variant="outline">2024</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">OpenAI APIs (GPT-4o, Whisper)</h4>
                    <p className="text-sm text-muted-foreground">Advanced AI integration and prompt engineering</p>
                  </div>
                  <Badge variant="outline">2024</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
        <ExperienceSection />
      </div>
    </div>
  )
}
