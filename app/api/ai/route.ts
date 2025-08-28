import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    const { messages } = await request.json()
    const system = {
        role: "system",
        content: `You are a friendly assistant who knows Harit Thakkar:
- Incoming Computer Engineering student @ University of Waterloo
- Full-Stack Web Developer (MERN, AI/ML, hardware)
- Passionate about healthcare automation and productivity tools.`
    }

    const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [system, ...messages]
        })
    })

    const data = await apiRes.json()

    if (!apiRes.ok) {
        console.error("OpenAI API error:", data)
        return NextResponse.json(
            { reply: data.error?.message ?? "OpenAI API error" },
            { status: apiRes.status }
        )
    }

    const reply = data.choices?.[0]?.message?.content ?? "I couldn’t generate a response."
    return NextResponse.json({ reply })
}
