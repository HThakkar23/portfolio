import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechStackSection } from "@/components/tech-stack-section"
import ProjectsPreview from "../components/projects-preview"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-5xl font-bold mb-4">Hi, I&#39;m Harit Thakkar</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Computer Engineering Student & Full-Stack Web Developer
        </p>
        <div className="flex gap-4">
          <Link href="/resume" passHref>
            <Button>View Resume</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button variant="outline">Read Blog</Button>
          </Link>
        </div>
      </div>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsPreview />
      <ContactSection />
    </div>
  )
}
