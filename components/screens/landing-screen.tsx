'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ImageCarousel from '../image-carousel'
import CityStatusGrid from '../city-status-grid'

interface LandingScreenProps {
  onNavigateToChat: () => void
}

export default function LandingScreen({ onNavigateToChat }: LandingScreenProps) {
  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Hero Carousel */}
      <section className="border-b-4 border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <ImageCarousel />
        </div>
      </section>

      {/* City Status Grid */}
      <section className="border-b-4 border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8 font-serif">Top Destinations</h2>
          <CityStatusGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4 font-serif">Ready to Explore?</h2>
          <p className="text-lg mb-8 max-w-md">
            Chat with our AI to discover culinary adventures tailored to your taste
          </p>
          <button
            onClick={onNavigateToChat}
            className="px-8 py-4 bg-accent-foreground text-accent font-bold text-lg border-4 border-accent-foreground rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Planning Your Journey
          </button>
        </div>
      </section>
    </div>
  )
}
