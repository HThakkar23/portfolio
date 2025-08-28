"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Msg = { role: "user" | "assistant"; content: string }

export default function AIPage() {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSend() {
    if (!input) return
    const user: Msg = { role: "user", content: input }
    const updated = [...msgs, user]
    setMsgs(updated)
    setInput("")
    setLoading(true)

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updated })
    })
    const { reply } = await res.json()
    setMsgs([...updated, { role: "assistant", content: reply } as Msg])
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Harit’s AI Chatbot</h1>
      <div className="space-y-3 mb-4">
        {msgs.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span className={`inline-block p-2 rounded ${m.role === "user" ? "bg-blue-200" : "bg-gray-200"}`}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask me anything..."
        />
        <Button onClick={handleSend} disabled={loading}>
          {loading ? "..." : "Send"}
        </Button>
      </div>
    </div>
  )
}
