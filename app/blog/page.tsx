import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Plus } from "lucide-react"
import Link from "next/link"

// Mock blog posts data
const blogPosts: any[] = []
export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg">
              Insights on AI development, full-stack engineering, and building impactful solutions
            </p>
          </div>
          <Button asChild>
            <Link href="/blog/write">
              <Plus className="mr-2 h-4 w-4" />
              Write Post
            </Link>
          </Button>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        {blogPosts.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground mb-4">No blog posts yet.</p>
              <Button asChild>
                <Link href="/blog/write">Write your first post</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
