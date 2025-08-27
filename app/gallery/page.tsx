"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type GalleryItem = { filename: string; tags: string[] }

export default function GalleryPage() {
  const [tab, setTab] = useState<"view" | "upload">("view")
  const [items, setItems] = useState<GalleryItem[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [tags, setTags] = useState("")           // new
  const [secret, setSecret] = useState("")       // shared for upload/delete
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (tab === "view") {
      fetch("/api/gallery")
        .then((res) => res.json())
        .then((data) => setItems(data.images || []))
    }
  }, [tab])

  async function onUpload(e: React.FormEvent) {
    e.preventDefault()
    if (!file) {
      setMessage("Please select a file.")
      return
    }
    const formData = new FormData()
    formData.append("file", file)
    formData.append("tags", tags)               // new
    formData.append("secret", secret)

    const res = await fetch("/api/gallery", { method: "POST", body: formData })
    const data = await res.json()
    if (res.ok) {
      setMessage(`Uploaded: ${data.filename}`)
      setFile(null)
      setTags("")                              // reset tags
      setSecret("")
    } else {
      setMessage(data.error || "Upload failed")
    }
  }

  async function onDelete(filename: string) {
    if (!secret) {
      setMessage("Secret is required to delete")
      return
    }
    const res = await fetch("/api/gallery", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename, secret }),
    })
    const data = await res.json()
    if (res.ok) {
      setMessage(`Deleted: ${filename}`)
      setItems(items.filter((i) => i.filename !== filename))
    } else {
      setMessage(data.error || "Delete failed")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-4 mb-6">
        <Button onClick={() => setTab("view")} variant={tab === "view" ? "default" : "outline"}>
          Gallery
        </Button>
        <Button onClick={() => setTab("upload")} variant={tab === "upload" ? "default" : "outline"}>
          Upload
        </Button>
      </div>

      {tab === "view" ? (
        <div>
          <input
            type="password"
            placeholder="Admin Secret (required to delete)"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="w-full mb-4 border p-2"
          />
          {items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {items.map((item) => (
                <div key={item.filename} className="relative">
                  <img
                    src={`/gallery/${item.filename}`}
                    alt={item.filename}
                    className="w-full h-auto object-cover rounded"
                  />
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => onDelete(item.filename)}
                    className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No images in the gallery.</p>
          )}
        </div>
      ) : (
        <form onSubmit={onUpload} className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
            aria-label="Select image file to upload"
            className="w-full border p-2"
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border p-2"
          />
          <input
            type="password"
            placeholder="Secret"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="w-full border p-2"
            required
          />
          <Button type="submit">Upload Picture</Button>
        </form>
      )}

      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
