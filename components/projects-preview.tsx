import { getRepos, Repo } from "@/lib/github"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function ProjectsPreview() {
  let repos: Repo[] = []
  let errorMsg: string | null = null

  try {
    repos = await getRepos()
  } catch (err: any) {
    console.error(err)
    errorMsg = err.message || "Unknown error"
  }

  if (errorMsg) {
    return (
      <section className="py-20 text-center text-red-500">
        <h2 className="text-3xl font-bold mb-4">Recent Work</h2>
        <p>Unable to load projects: {errorMsg}</p>
      </section>
    )
  }

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Recent Work</h2>
      {repos.length === 0 ? (
        <p className="text-center text-muted-foreground">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <Card key={repo.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    <Link href={repo.html_url} target="_blank">
                      {repo.name}
                    </Link>
                  </CardTitle>
                  {repo.language && <Badge variant="outline">{repo.language}</Badge>}
                </div>
                {repo.description && <CardDescription>{repo.description}</CardDescription>}
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
