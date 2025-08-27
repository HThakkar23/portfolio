import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import fs from "fs"
import path from "path"

const UPLOAD_DIR = path.join(process.cwd(), "public", "gallery")
const META_FILE = path.join(UPLOAD_DIR, "metadata.json")

function readMetadata(): Record<string, string[]> {
    if (!fs.existsSync(META_FILE)) return {}
    return JSON.parse(fs.readFileSync(META_FILE, "utf-8"))
}

function writeMetadata(meta: Record<string, string[]>) {
    fs.writeFileSync(META_FILE, JSON.stringify(meta, null, 2))
}

export async function GET() {
    if (!fs.existsSync(UPLOAD_DIR)) {
        return NextResponse.json({ images: [] })
    }
    const files = fs.readdirSync(UPLOAD_DIR).filter((f) => f !== "metadata.json")
    const meta = readMetadata()
    const images = files.map((filename) => ({
        filename,
        tags: meta[filename] || [],
    }))
    return NextResponse.json({ images })
}

export async function POST(request: NextRequest) {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const rawTags = (formData.get("tags") as string) || ""
    const secret = formData.get("secret") as string

    if (secret !== process.env.GALLERY_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    if (!file) {
        return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true })
    }
    const filename = `${Date.now()}-${file.name}`
    const buffer = Buffer.from(await file.arrayBuffer())
    fs.writeFileSync(path.join(UPLOAD_DIR, filename), buffer)

    const tags = rawTags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t)

    const meta = readMetadata()
    meta[filename] = tags
    writeMetadata(meta)

    return NextResponse.json({ success: true, filename, tags })
}

export async function DELETE(request: NextRequest) {
    const { filename, secret } = await request.json()
    if (secret !== process.env.GALLERY_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    const filePath = path.join(UPLOAD_DIR, filename)
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
        const meta = readMetadata()
        delete meta[filename]
        writeMetadata(meta)
        return NextResponse.json({ success: true })
    }
    return NextResponse.json({ error: "File not found" }, { status: 404 })
}
