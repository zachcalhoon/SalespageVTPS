"use client"

import { useState, useEffect, useRef } from "react"
import { X, Play } from "lucide-react"

interface VideoEmbedProps {
  src: string
  poster?: string
  title?: string
  description?: string
  enableStickyOnScroll?: boolean
  stickyPosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  className?: string
  showEnrollButton?: boolean
}

export function VideoEmbed({
  src,
  poster,
  title = "Watch Video",
  description,
  enableStickyOnScroll = false,
  stickyPosition = "top-right",
  className = "",
  showEnrollButton = false,
}: VideoEmbedProps) {
  const [showStickyVideo, setShowStickyVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const videoElementRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!enableStickyOnScroll) return

    const handleScroll = () => {
      if (videoRef.current) {
        const videoRect = videoRef.current.getBoundingClientRect()
        const isVideoOutOfView = videoRect.bottom < 0
        setShowStickyVideo(isVideoOutOfView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [enableStickyOnScroll])

  const handlePlay = () => {
    setIsPlaying(true)
    if (videoElementRef.current) {
      videoElementRef.current.play()
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const getStickyPositionClasses = () => {
    switch (stickyPosition) {
      case "top-left":
        return "top-20 left-4"
      case "bottom-right":
        return "bottom-4 right-4"
      case "bottom-left":
        return "bottom-4 left-4"
      default:
        return "top-20 right-4"
    }
  }

  const VideoPlayer = ({ isSticky = false }: { isSticky?: boolean }) => (
    <div
      className={`relative ${isSticky ? "aspect-video" : "aspect-video"} bg-black/20 rounded-2xl overflow-hidden shadow-2xl group backdrop-blur-sm`}
    >
      <video
        ref={!isSticky ? videoElementRef : undefined}
        controls
        className="w-full h-full"
        poster={poster}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="glass-strong rounded-full p-4 shadow-lg animate-glow">
            <Play className="w-8 h-8 text-primary" fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Main Video */}
      <div ref={videoRef} className={`space-y-6 ${className}`}>
        {description && <p className="text-lg text-foreground font-medium">{description}</p>}

        <div className="glass-card rounded-3xl p-4 hover-lift shadow-2xl">
          <VideoPlayer />
        </div>
      </div>

      {/* Sticky Video */}
      {enableStickyOnScroll && showStickyVideo && (
        <div
          className={`fixed ${getStickyPositionClasses()} z-[99999] w-80 bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl border border-border/50 overflow-hidden animate-in slide-in-from-right-4 duration-300`}
        >
          <div className="relative">
            <button
              onClick={() => setShowStickyVideo(false)}
              className="absolute top-2 right-2 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close sticky video"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="p-3">
              <VideoPlayer isSticky />
              {title && (
                <div className="mt-2">
                  <h4 className="text-sm font-semibold text-foreground">{title}</h4>
                </div>
              )}

              {showEnrollButton && (
                <div className="mt-3">
                  <button
                    onClick={() =>
                      window.open("https://wnh.thrivecart.com/virtual-tour-profit-system/?coupon=START1000", "_blank")
                    }
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Enroll Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
