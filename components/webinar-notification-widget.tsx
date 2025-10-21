"use client"

import { useState, useEffect } from "react"
import { X, Bell } from "lucide-react"

export function WebinarNotificationWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentNotification, setCurrentNotification] = useState({ name: "", location: "", timeAgo: "" })

  const registrations = [
    { name: "Sarah Mitchell", location: "Austin, TX" },
    { name: "Mike Rodriguez", location: "Miami, FL" },
    { name: "Jennifer Lee", location: "Seattle, WA" },
    { name: "David Kim", location: "Los Angeles, CA" },
    { name: "Amanda Stevens", location: "Chicago, IL" },
    { name: "Chris Parker", location: "Denver, CO" },
    { name: "Lisa Williams", location: "Phoenix, AZ" },
    { name: "Ryan Thompson", location: "Portland, OR" },
    { name: "Michelle Brown", location: "Atlanta, GA" },
    { name: "Jason Harris", location: "Dallas, TX" },
    { name: "Nicole Foster", location: "San Diego, CA" },
    { name: "Brandon Chen", location: "Boston, MA" },
    { name: "Ashley Davis", location: "Nashville, TN" },
    { name: "Kevin Martinez", location: "Orlando, FL" },
    { name: "Rachel Green", location: "Charlotte, NC" },
    { name: "Tyler Johnson", location: "San Francisco, CA" },
    { name: "Stephanie Anderson", location: "Philadelphia, PA" },
    { name: "Derek Lopez", location: "Las Vegas, NV" },
    { name: "Melissa Roberts", location: "Minneapolis, MN" },
    { name: "Jordan Smith", location: "Tampa, FL" },
    { name: "Brittany King", location: "Raleigh, NC" },
    { name: "Austin White", location: "Salt Lake City, UT" },
    { name: "Samantha Price", location: "Kansas City, MO" },
    { name: "Cody Baker", location: "Indianapolis, IN" },
  ]

  const getRandomTimeAgo = () => {
    const minutes = Math.floor(Math.random() * 60) + 1
    if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? "" : "s"} ago`
    }
    return "just now"
  }

  const generateRandomNotification = () => {
    const randomRegistration = registrations[Math.floor(Math.random() * registrations.length)]
    const timeAgo = getRandomTimeAgo()
    setCurrentNotification({
      name: randomRegistration.name,
      location: randomRegistration.location,
      timeAgo,
    })
  }

  const handleNotificationClick = () => {
    window.open("https://buy.cloudpano.com/virtual-tour-profit-system/?coupon=VTPSPROCLOUDPANO", "_blank")
  }

  useEffect(() => {
    // Show notification after 5 seconds
    const timer = setTimeout(() => {
      generateRandomNotification()
      setIsVisible(true)
    }, 5000)

    const interval = setInterval(() => {
      if (isVisible && !isMinimized) {
        generateRandomNotification()
      }
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [isVisible, isMinimized])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
          aria-label="Show notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
      ) : (
        <div
          onClick={handleNotificationClick}
          className="bg-background border border-border rounded-lg shadow-xl p-4 animate-slide-up cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">New Registration</span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMinimized(true)
                }}
                className="text-muted-foreground hover:text-foreground p-1"
                aria-label="Minimize"
              >
                <div className="w-3 h-0.5 bg-current"></div>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsVisible(false)
                }}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">{currentNotification.name}</p>
            <p className="text-xs text-muted-foreground">
              from <span className="font-medium">{currentNotification.location}</span>
            </p>
            <p className="text-xs text-muted-foreground">registered {currentNotification.timeAgo}</p>
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">Join them and reserve your free seat now!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
