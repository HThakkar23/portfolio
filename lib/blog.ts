import fs from "fs"
import path from "path"

export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  date: string
  readTime: string
}

const dataFile = path.join(process.cwd(), "data", "blogPosts.json")

export function getPosts(): Post[] {
  const file = fs.readFileSync(dataFile, "utf-8")
  const posts: Post[] = JSON.parse(file)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function addPost(postData: Omit<Post, "id" | "date" | "readTime">): Post {
  const posts = getPosts()
  const date = new Date().toISOString()
  const words = postData.content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  const readTime = `${minutes} min read`
  const newPost: Post = {
    id: Date.now().toString(),
    date,
    readTime,
    ...postData,
  }
  posts.push(newPost)
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2))
  return newPost
}

export function removePost(id: string): boolean {
  const posts = getPosts()
  const filtered = posts.filter((p) => p.id !== id)
  if (filtered.length === posts.length) return false
  fs.writeFileSync(dataFile, JSON.stringify(filtered, null, 2))
  return true
}
