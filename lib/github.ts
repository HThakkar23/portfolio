export interface Repo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
}

export async function getRepos(): Promise<Repo[]> {
  const url = `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=pushed&per_page=6`
  const res = await fetch(url, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    const text = await res.text()
    console.error("Failed to fetch GitHub repos:", res.status, text)
    return []
  }
  return (await res.json()) as Repo[]
}
