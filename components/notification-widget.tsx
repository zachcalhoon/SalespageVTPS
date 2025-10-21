"use client"

import { useState, useEffect } from "react"
import { X, Bell } from "lucide-react"

export function NotificationWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentNotification, setCurrentNotification] = useState({ name: "", timeAgo: "" })

  const names = [
    "Sarah M.",
    "Mike R.",
    "Jennifer L.",
    "David K.",
    "Amanda S.",
    "Chris P.",
    "Lisa W.",
    "Ryan T.",
    "Michelle B.",
    "Jason H.",
    "Nicole F.",
    "Brandon C.",
    "Ashley D.",
    "Kevin M.",
    "Rachel G.",
    "Tyler J.",
    "Stephanie A.",
    "Derek L.",
    "Melissa R.",
    "Jordan S.",
    "Brittany K.",
    "Austin W.",
    "Samantha P.",
    "Cody B.",
  ]

  const getRandomTimeAgo = () => {
    const now = new Date()
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
    const randomTime = new Date(twoWeeksAgo.getTime() + Math.random() * (now.getTime() - twoWeeksAgo.getTime()))

    const diffInHours = Math.floor((now.getTime() - randomTime.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - randomTime.getTime()) / (1000 * 60))
      return `${diffInMinutes} minutes ago`
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays} days ago`
    }
  }

  const generateRandomNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const timeAgo = getRandomTimeAgo()
    setCurrentNotification({ name: randomName, timeAgo })
  }

  useEffect(() => {
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      generateRandomNotification()
      setIsVisible(true)
    }, 3000)

    const interval = setInterval(() => {
      if (isVisible && !isMinimized) {
        generateRandomNotification()
      }
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [isVisible, isMinimized])

  const handleNotificationClick = () => {
    window.open("https://buy.cloudpano.com/virtual-tour-profit-system/?coupon=VTPSPROCLOUDPANO", "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {isMinimized ? (
        // Minimized state - just the bell icon
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
        >
          <Bell className="w-5 h-5" />
        </button>
      ) : (
        // Full notification widget
        <div
          onClick={handleNotificationClick}
          className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-sm p-4 animate-slide-up cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-900">Recent Sign-up</span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMinimized(true)
                }}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <div className="w-3 h-0.5 bg-current"></div>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsVisible(false)
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-800 font-medium">{currentNotification.name} just signed up!</p>
            <p className="text-xs text-gray-600">
              {currentNotification.timeAgo} • Join hundreds of others building profitable virtual tour businesses
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
