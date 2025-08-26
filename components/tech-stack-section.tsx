import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const techStack = {
  "Languages & Frameworks": [
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Python", color: "bg-green-600" },
    { name: "Java", color: "bg-red-600" },
    { name: "C++", color: "bg-blue-800" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Express", color: "bg-gray-700" },
    { name: "React", color: "bg-cyan-500" },
    { name: "MongoDB", color: "bg-green-700" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
  ],
  "Tools & Platforms": [
    { name: "Git", color: "bg-orange-600" },
    { name: "GitHub", color: "bg-gray-800" },
    { name: "Postman", color: "bg-orange-500" },
    { name: "Figma", color: "bg-purple-600" },
    { name: "Arduino", color: "bg-teal-600" },
    { name: "AWS", color: "bg-yellow-600" },
    { name: "API", color: "bg-indigo-600" },
  ],
}

export function TechStackSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              🛠️ Tech Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Technologies I use to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(techStack).map(([category, technologies]) => (
              <Card key={category} className="border-0 shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl mb-6 text-center">{category}</CardTitle>
                  <div className="grid grid-cols-2 gap-4">
                    {technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="group relative overflow-hidden rounded-lg p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <div
                          className={`absolute inset-0 ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        ></div>
                        <div className="relative z-10 flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                          <span className="font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
