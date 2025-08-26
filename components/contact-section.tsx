import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something that matters.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            I'm always interested in collaborating on projects that solve real-world problems and create meaningful
            impact. Let's connect and discuss how we can work together!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
            >
              <Link href="mailto:your-email@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="https://github.com/HThakkar23" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="https://linkedin.com/in/harit-thakkar" target="_blank">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
          </div>

          <div className="text-blue-200">
            <p>© 2024 Harit Thakkar. Building the future, one line of code at a time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
