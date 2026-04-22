'use client'

import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'
import ChatbotFAB from '@/components/chatbot-fab'
import HomeScreen from '@/components/screens/home-screen'
import CityDashboard from '@/components/screens/city-dashboard'
import NewsReviews from '@/components/screens/news-reviews'
import DestinationDetail from '@/components/screens/destination-detail'

type Screen = 'home' | 'city' | 'news' | 'detail'

interface ItineraryDestination {
  name: string
  addedAt: Date
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null)
  const [itinerary, setItinerary] = useState<ItineraryDestination[]>([])
  const { theme, setTheme } = useTheme()

  const handleDestinationSelect = (destination: string) => {
    setSelectedDestination(destination)
    setCurrentScreen('detail')
  }

  const handleAddToItinerary = (destinationName: string) => {
    setItinerary((prev) => [
      ...prev,
      { name: destinationName, addedAt: new Date() },
    ])
    console.log('[v0] Added to itinerary:', destinationName)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b-4 border-border bg-background sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold font-serif text-primary">Indo Lanner</h1>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 border-4 border-border rounded-lg bg-secondary text-secondary-foreground hover:shadow-md transition-shadow font-bold"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {currentScreen === 'home' && (
          <HomeScreen onSelectDestination={handleDestinationSelect} />
        )}
        {currentScreen === 'city' && (
          <CityDashboard />
        )}
        {currentScreen === 'news' && (
          <NewsReviews />
        )}
        {currentScreen === 'detail' && selectedDestination && (
          <DestinationDetail destination={selectedDestination} onBack={() => setCurrentScreen('home')} />
        )}
      </main>

      {/* Bottom Navigation */}
      <Navbar currentScreen={currentScreen} onScreenChange={setCurrentScreen} />

      {/* Chatbot FAB */}
      <ChatbotFAB onAddDestinationToItinerary={handleAddToItinerary} />
    </div>
  )
}
