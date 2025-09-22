"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

interface WebinarNavProps {
  currentPage: "landing" | "watch" | "replay"
}

export function WebinarNav({ currentPage }: WebinarNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              Back to Main Site
            </Button>
          </Link>

          <div className="h-6 w-px bg-border" />

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/webinar"
              className={`hover:text-foreground transition-colors ${currentPage === "landing" ? "text-primary font-semibold" : ""}`}
            >
              Register
            </Link>
            <span>→</span>
            <Link
              href="/webinar/watch"
              className={`hover:text-foreground transition-colors ${currentPage === "watch" ? "text-primary font-semibold" : ""}`}
            >
              Watch Live
            </Link>
            <span>→</span>
            <Link
              href="/webinar/replay"
              className={`hover:text-foreground transition-colors ${currentPage === "replay" ? "text-primary font-semibold" : ""}`}
            >
              Replay
            </Link>
          </div>
        </div>

        <Link href="/">
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Join VTPS Training
          </Button>
        </Link>
      </div>
    </nav>
  )
}
