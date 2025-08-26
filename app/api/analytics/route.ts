import { type NextRequest, NextResponse } from "next/server"

// Mock analytics data
const analyticsData = {
  pageViews: {
    total: 15420,
    thisMonth: 2340,
    growth: 12.5,
  },
  topPages: [
    { path: "/", views: 5420, title: "Home" },
    { path: "/projects", views: 3210, title: "Projects" },
    { path: "/blog", views: 2890, title: "Blog" },
    { path: "/resume", views: 1650, title: "Resume" },
    { path: "/gallery", views: 1250, title: "Gallery" },
  ],
  visitors: {
    total: 8920,
    unique: 6540,
    returning: 2380,
  },
  technologies: {
    mostViewed: ["React", "Node.js", "AI", "MongoDB", "TypeScript"],
    projectInteractions: 450,
  },
  contactForm: {
    submissions: 23,
    responseRate: 95.7,
  },
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const timeframe = searchParams.get("timeframe") || "30d"

    // In a real app, you'd query your analytics database here
    // based on the timeframe parameter

    return NextResponse.json({
      success: true,
      data: analyticsData,
      timeframe,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch analytics data" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event, page, data } = body

    // Track page view, click, or other events
    console.log("Analytics event:", { event, page, data, timestamp: new Date() })

    // In a real app, you'd save this to your analytics database

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to track event" }, { status: 500 })
  }
}
