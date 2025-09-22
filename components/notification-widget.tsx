"use client"

import { useState, useEffect } from "react"
import { X, Bell } from "lucide-react"

export function NotificationWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

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
        <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-sm p-4 animate-slide-up">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-900">Live Update</span>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setIsMinimized(true)} className="text-gray-400 hover:text-gray-600 p-1">
                <div className="w-3 h-0.5 bg-current"></div>
              </button>
              <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-800 font-medium">🔥 Limited Time: Early Bird Pricing</p>
            <p className="text-xs text-gray-600">
              3 students enrolled in the last hour. Secure your spot before prices increase!
            </p>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"
              onClick={() =>
                window.open("https://wnh.thrivecart.com/virtual-tour-profit-system/?coupon=START1000", "_blank")
              }
            >
              Enroll Now - Save $200
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
