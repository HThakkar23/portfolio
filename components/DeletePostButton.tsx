"use client"
import { useRouter } from "next/navigation"
import React from "react"

export function DeletePostButton({ id }: { id: string }) {
    const router = useRouter()
    const handleDelete = async () => {
        const secret = window.prompt("Enter your secret to delete this post")
        if (!secret) return
        const res = await fetch("/api/blog", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, secret }),
        })
        if (res.ok) router.refresh()
        else alert("Failed to delete post")
    }

    return (
        <button onClick={handleDelete} className="text-sm text-red-600 hover:underline ml-2">
            Delete
        </button>
    )
}
