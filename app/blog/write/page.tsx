"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function WritePage() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [secret, setSecret] = useState("") // new
  const router = useRouter()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        excerpt,
        content,
        tags: tags.split(",").map((t) => t.trim()),
        secret, // include secret
      }),
    })
    router.push("/blog")
  }

  return (
    <form onSubmit={onSubmit} className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Write a new post</h1>
      <input
        required
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2"
      />
      <input
        placeholder="Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        className="w-full border p-2"
      />
      <textarea
        required
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 h-40"
      />
      <input
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full border p-2"
      />
      <input
        required
        type="password" // new: password field
        placeholder="Secret"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        className="w-full border p-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Save Post
      </button>
    </form>
  )
}
