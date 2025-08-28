"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Msg = { sender: "user" | "bot"; text: string }

export function Chatbot() {
    const [open, setOpen] = useState(false)
    const [msgs, setMsgs] = useState<Msg[]>([])
    const [input, setInput] = useState("")

    // Knowledge base for rule‐based AI (no API key required)
    const knowledgeBase = [
        { keywords: ["hello", "hi", "hey"], response: "Hello! How can I help you?" },
        { keywords: ["name"], response: "I'm Harit Thakkar." },
        { keywords: ["email", "contact"], response: "You can reach me at thakkarharit02@gmail.com." },
        { keywords: ["github"], response: "My GitHub: https://github.com/HThakkar23." },
        { keywords: ["linkedin"], response: "My LinkedIn: https://www.linkedin.com/in/harit-thakkar-43a4b9279/." },
        { keywords: ["location", "live"], response: "I live in Canada." },
        { keywords: ["university", "education", "waterloo"], response: "Incoming Computer Engineering student at University of Waterloo." },
        { keywords: ["stack", "skills", "technology"], response: "I specialize in React, Node.js, Express, MongoDB, Tailwind CSS, and hardware projects." },
        { keywords: ["project"], response: "Recently built a Study Planner & Productivity Suite. Also, currently working on an AI healthcare SaaS." },
        { keywords: ["learning", "focus"], response: "Learning Edge AI & RISC-V chip design, backend scalability patterns, and OpenAI APIs." },
    ]

    function getReply(question: string) {
        const q = question.toLowerCase()
        for (const item of knowledgeBase) {
            if (item.keywords.some((k) => q.includes(k))) {
                return item.response
            }
        }
        return "Sorry, I only know info from my resume."
    }

    function send() {
        if (!input.trim()) return
        const userMsg: Msg = { sender: "user", text: input }
        const botMsg: Msg = { sender: "bot", text: getReply(input) }
        setMsgs((m) => [...m, userMsg, botMsg])
        setInput("")
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 pointer-events-auto">
            <Button
                onClick={() => setOpen(!open)}
                size="sm"
                variant="secondary"
                className="bg-blue-600 text-white"
            >
                Chat
            </Button>

            {open && (
                <div className="mt-2 w-80 bg-white border rounded shadow-lg flex flex-col">
                    <div className="flex-1 p-2 overflow-y-auto h-60">
                        {msgs.map((m, i) => (
                            <div
                                key={i}
                                className={m.sender === "user" ? "text-right" : "text-left"}
                            >
                                <span
                                    className={`inline-block px-2 py-1 m-1 rounded ${m.sender === "user" ? "bg-blue-200" : "bg-gray-200"
                                        }`}
                                >
                                    {m.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 border-t flex gap-2">
                        <input
                            className="flex-1 border px-2"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && send()}
                            placeholder="Ask a question..."
                        />
                        <Button onClick={send}>Send</Button>
                    </div>
                </div>
            )}
        </div>
    )
}
