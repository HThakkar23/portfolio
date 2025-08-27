import Link from "next/link";

export const dynamic = "force-dynamic";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export default async function ProjectsPage() {
  // pull username/token from env
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;
  if (!username) throw new Error("Missing GITHUB_USERNAME in .env.local");
  if (!token) throw new Error("Missing GITHUB_TOKEN in .env.local");

  // fetch latest 20 updated repos
  const url = `https://api.github.com/users/${username}/repos?visibility=public&sort=updated&per_page=20`;
  let res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 3600 },
  });
  if (res.status === 401) {
    // fallback to public (unauthenticated) fetch
    res = await fetch(url, { next: { revalidate: 3600 } });
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch projects (${res.status})`);
  }

  const data = await res.json();

  const projects: Repo[] = data.map((r: any) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    html_url: r.html_url,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((proj) => (
          <li
            key={proj.id}
            className="border p-4 rounded hover:shadow-lg transition"
          >
            <Link
              href={proj.html_url}
              target="_blank"
              className="text-2xl font-semibold text-primary hover:underline"
            >
              {proj.name}
            </Link>
            {proj.description && (
              <p className="mt-2 text-muted-foreground">
                {proj.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


