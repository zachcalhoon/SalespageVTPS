"use client"

import { useState, useEffect } from "react"
import { CheckCircle, X } from "lucide-react"

interface SignupData {
  name: string
  location: string
  timeAgo: string
}

const names = [
  "Sarah Johnson",
  "Michael Chen",
  "Emily Rodriguez",
  "David Thompson",
  "Jessica Williams",
  "Robert Martinez",
  "Amanda Davis",
  "Christopher Lee",
  "Nicole Brown",
  "Kevin Anderson",
  "Rachel Taylor",
  "Brandon Wilson",
  "Stephanie Moore",
  "Justin Garcia",
  "Ashley Miller",
  "Tyler Jackson",
  "Megan White",
  "Daniel Harris",
  "Lauren Clark",
  "Ryan Lewis",
  "Samantha Walker",
  "Jordan Hall",
  "Brittany Allen",
  "Nathan Young",
  "Kayla King",
  "Marcus Wright",
  "Alexis Lopez",
  "Trevor Hill",
  "Vanessa Scott",
  "Cameron Green",
  "Jasmine Adams",
  "Derek Baker",
  "Courtney Nelson",
  "Austin Carter",
  "Brooke Mitchell",
]

const locations = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Austin, TX",
  "Jacksonville, FL",
  "Fort Worth, TX",
  "Columbus, OH",
  "Charlotte, NC",
  "San Francisco, CA",
  "Indianapolis, IN",
  "Seattle, WA",
  "Denver, CO",
  "Washington, DC",
  "Boston, MA",
  "El Paso, TX",
  "Nashville, TN",
  "Detroit, MI",
  "Oklahoma City, OK",
  "Portland, OR",
  "Las Vegas, NV",
  "Memphis, TN",
  "Louisville, KY",
  "Baltimore, MD",
  "Milwaukee, WI",
  "Albuquerque, NM",
  "Tucson, AZ",
  "Fresno, CA",
  "Sacramento, CA",
  "Mesa, AZ",
  "Kansas City, MO",
  "Atlanta, GA",
  "Long Beach, CA",
  "Colorado Springs, CO",
  "Raleigh, NC",
  "Miami, FL",
  "Virginia Beach, VA",
  "Omaha, NE",
  "Oakland, CA",
  "Minneapolis, MN",
  "Tulsa, OK",
  "Arlington, TX",
  "Tampa, FL",
  "New Orleans, LA",
]

function generateRandomSignup(): SignupData {
  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomLocation = locations[Math.floor(Math.random() * locations.length)]
  const randomMinutes = Math.floor(Math.random() * 40) + 5 // 5-45 minutes ago

  return {
    name: randomName,
    location: randomLocation,
    timeAgo: `${randomMinutes} minutes ago`,
  }
}

export function SignupNotification() {
  const [currentSignup, setCurrentSignup] = useState<SignupData | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    const showNotification = () => {
      const signup = generateRandomSignup()
      setCurrentSignup(signup)
      setIsVisible(true)

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }

    // Show first notification after 2 seconds
    const initialTimeout = setTimeout(showNotification, 2000)

    // Then show every 4-7 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 3000) + 4000 // 4-7 seconds
      setTimeout(showNotification, randomDelay)
    }, 7000) // Base interval of 7 seconds

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (isDismissed || !currentSignup) return null

  return (
    <div
      className={`fixed bottom-6 left-6 z-[100000] transition-all duration-500 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{currentSignup.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{currentSignup.location}</p>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                  Just registered • {currentSignup.timeAgo}
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
