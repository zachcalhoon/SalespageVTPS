"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface WebinarNavProps {
  currentPage: "landing" | "watch" | "replay"
}

export function WebinarNav({ currentPage }: WebinarNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">{/* Empty div to maintain layout structure */}</div>

        {currentPage !== "landing" && (
          <Link href="/">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Join VTPS Training
            </Button>
          </Link>
        )}
      </div>
    </nav>
  )
}
