import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getPosts, addPost, removePost } from "@/lib/blog"

// Simple in-memory storage for demo purposes
let blogPosts: any[] = []

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const tag = searchParams.get('tag')

    let posts = getPosts()
    let filteredPosts = posts

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
    const { title, excerpt, content, tags, published = false, secret } = body

    // Check for authentication if secret is provided
    if (secret && secret !== process.env.BLOG_SECRET) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

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

    // Also add to the lib if addPost function exists
    if (typeof addPost === 'function') {
      addPost({ title, excerpt, content, tags })
    }

    return NextResponse.json({ success: true, post: newPost }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id, secret } = await request.json()
    if (secret !== process.env.BLOG_SECRET) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }
    const ok = removePost(id)
    if (!ok) {
      return NextResponse.json({ message: "Not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 })
  }
}
