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
  const url = `https://api.github.com/users/${username}/repos?visibility=public&sort=updated&per_page=300`;
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

  // add manual featured projects
  const extraProjects: Repo[] = [
    {
      id: 100001,
      name: "My Portfolio",
      description: "Static portfolio site showcasing my skills and resume.",
      html_url: "https://example.com/portfolio",
    },
    {
      id: 100002,
      name: "Design System",
      description: "A reusable UI component library built with React and Tailwind.",
      html_url: "https://github.com/Hthakkar23/design-system",
    },
    {
      id: 100003,
      name: "Chatbot API",
      description: "Node.js service for conversational AI integrations.",
      html_url: "https://github.com/Hthakkar23/chatbot-api",
    },
  ];

  // combine featured with GitHub repos
  const allProjects = [...extraProjects, ...projects];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Projects
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((proj) => (
          <li
            key={proj.id}
            className="
              rounded-lg p-6 transform transition
              duration-300 ease-in-out
              bg-gradient-to-br from-gray-800 to-gray-700
              border border-gray-700
              text-white
              hover:from-gray-700 hover:to-gray-600
              hover:border-gray-500 hover:shadow-xl
            "
          >
            <Link
              href={proj.html_url}
              target="_blank"
              className="text-2xl font-semibold text-white hover:underline"
            >
              {proj.name}
            </Link>
            {proj.description && (
              <p className="mt-2 text-gray-300">{proj.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


