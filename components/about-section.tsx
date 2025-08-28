import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 animate-fade-in-up bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              🧠 About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <CardHeader className="p-8">
                  <CardDescription className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I'm a{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">builder at heart</span> — I create
                    scalable solutions for real-world problems. From helping underserved students learn better to
                    automating admin work for doctors, I'm driven by{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">impact, not just code</span>
                    .
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
              <CardHeader className="p-8 relative z-10">
                <CardTitle className="flex items-center gap-3 text-xl mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Code className="h-6 w-6" />
                  </div>
                  Currently Working On
                </CardTitle>
                <CardDescription className="text-blue-100 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-2xl">🧠</span>
                    <div>
                      <strong className="text-white">AI SaaS</strong> for automating SOAP notes, billing, and summaries
                      for solo practitioners
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-2xl">📚</span>
                    <div>
                      <strong className="text-white">Study Planner</strong> with Pomodoro Timer, Task Manager, and
                      Productivity Insights
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-500 to-green-600 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent"></div>
              <CardHeader className="p-8 relative z-10">
                <CardTitle className="flex items-center gap-3 text-xl mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Brain className="h-6 w-6" />
                  </div>
                  Currently Learning
                </CardTitle>
                <CardDescription className="text-green-100 space-y-2">
                  <div>• Edge AI & RISC-V chip design</div>
                  <div>• Backend scalability patterns</div>
                  <div>• OpenAI APIs (GPT-4o, Whisper)</div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent"></div>
              <CardHeader className="p-8 relative z-10">
                <CardTitle className="flex items-center gap-3 text-xl mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Zap className="h-6 w-6" />
                  </div>
                  Ask Me About
                </CardTitle>
                <CardDescription className="text-purple-100 space-y-2">
                  <div>• Full-stack web development (React, Node.js, MongoDB, Express)</div>
                  <div>• API design & integration</div>
                  <div>• Hardware projects with Arduino</div>
                  <div>• Building for real users with a product mindset</div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
