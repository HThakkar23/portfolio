import { type NextRequest, NextResponse } from "next/server"

// Mock blog posts database
const blogPosts: any[] = []

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get("published")
    const tag = searchParams.get("tag")

    let filteredPosts = blogPosts

    if (published === "true") {
      filteredPosts = filteredPosts.filter((post) => post.published)
    }

    if (tag) {
      filteredPosts = filteredPosts.filter((post: any) => post.tags.some((t: string) => t.toLowerCase().includes(tag.toLowerCase())))
    }

    return NextResponse.json({ posts: filteredPosts })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, excerpt, content, tags, published = false } = body

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 })
    }

    const newPost = {
      id: blogPosts.length + 1,
      title,
      excerpt: excerpt || content.substring(0, 200) + "...",
      content,
      date: new Date().toISOString().split("T")[0],
      readTime: `${Math.ceil(content.split(" ").length / 200)} min read`,
      tags: tags || [],
      published,
      author: "Harit Thakkar",
      slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    }

    blogPosts.push(newPost)

    return NextResponse.json({ success: true, post: newPost }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
  }
}
