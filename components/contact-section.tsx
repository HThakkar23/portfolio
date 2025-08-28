"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pronoun, setPronoun] = useState("")
  const [userMessage, setUserMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = [
      `Name: ${name}`,
      `Pronoun: ${pronoun}`,
      `Email: ${email}`,
      `Message: ${userMessage}`,
    ].join("%0D%0A")
    window.location.href =
      `mailto:thakkarharit02@gmail.com` +
      `?subject=Message from ${encodeURIComponent(name)}` +
      `&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden animate-fade-in-up">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something that matters.
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            I'm always interested in collaborating on projects that solve real-world
            problems and create meaningful impact. Let's connect and discuss how we
            can work together!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg transform transition-transform hover:scale-110 animate-bounce-hover"
            >
              <Link href="mailto:thakkarharit02@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent transform transition-transform hover:scale-110 animate-bounce-hover"
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
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent transform transition-transform hover:scale-110 animate-bounce-hover"
            >
              <Link
                href="https://www.linkedin.com/in/harit-thakkar-43a4b9279/"
                target="_blank"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
          </div>

          <div className="text-blue-200">
            <p>
              © 2024 Harit Thakkar. Building the future, one line of code at a
              time.
            </p>
          </div>
        </div>

        {/* Animated Contact Form */}
        <div className="max-w-md mx-auto p-6 bg-white bg-opacity-20 backdrop-blur rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Send me a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border border-white bg-transparent placeholder-white text-white focus:ring-2 focus:ring-white"
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded border border-white bg-transparent placeholder-white text-white focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Your Pronoun"
              value={pronoun}
              onChange={(e) => setPronoun(e.target.value)}
              className="w-full p-2 rounded border border-white bg-transparent placeholder-white text-white focus:ring-2 focus:ring-white"
            />
            <textarea
              required
              placeholder="Your Message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full p-2 rounded border border-white bg-transparent placeholder-white text-white focus:ring-2 focus:ring-white h-24 resize-none"
            ></textarea>
            <Button
              type="submit"
              className="w-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg transform transition-transform hover:scale-110"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
