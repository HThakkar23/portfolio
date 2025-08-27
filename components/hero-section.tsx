import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image with Glow Effect */}
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
          </div>

          {/* Main Heading with Gradient Text */}
          <div className="space-y-4 mb-8">
            <h1 className="text-6xl md:text-7xl font-bold">
              👋 Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                Harit Thakkar
              </span>
            </h1>

            <div className="space-y-3 text-lg md:text-xl text-gray-600 dark:text-gray-300">
              <p className="flex items-center justify-center gap-2 font-semibold">
                🎓 Incoming Computer Engineering Student @
                <span className="text-blue-600 dark:text-blue-400">University of Waterloo</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                💻 Full-Stack Web Developer | MERN | API Integrator | AI Enthusiast
              </p>
              <p className="flex items-center justify-center gap-2">
                🌐 Passionate about solving real-world problems through technology
              </p>
              <p className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400 font-medium">
                🚀 Currently building AI-powered SaaS for healthcare & futuristic productivity tools
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
            >
              <Link href="/blog">Read Blog</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
            >
              <Link href="/resume">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { href: "https://github.com/HThakkar23", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/harit-thakkar", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:your-email@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
