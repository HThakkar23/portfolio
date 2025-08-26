import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Fetch from GitHub API
    const response = await fetch("https://api.github.com/users/HThakkar23/repos?sort=updated&per_page=20", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Add GitHub token if needed for higher rate limits
        // 'Authorization': `token ${process.env.GITHUB_TOKEN}`
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch repositories")
    }

    const repos = await response.json()

    // Transform the data to include only what we need
    const transformedRepos = repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      topics: repo.topics || [],
      created_at: repo.created_at,
      size: repo.size,
      default_branch: repo.default_branch,
    }))

    return NextResponse.json({
      repositories: transformedRepos,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error fetching repositories:", error)
    return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 })
  }
}
