import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Chatbot } from "@/components/Chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harit Thakkar - Computer Engineering Student & Full-Stack Developer",
  description:
    "Incoming Computer Engineering Student @ University of Waterloo. Full-Stack Web Developer specializing in MERN stack, API integration, and AI-powered solutions.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "fun"]}
        >
          <Navigation />
          <main>{children}</main>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
