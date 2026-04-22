'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import TimelineCard from '../timeline-card'

interface TimelineItem {
  id: string
  day: number
  city: string
  activities: string[]
  travelTime: string
  isLoading?: boolean
  image?: string
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: '1',
    day: 1,
    city: 'Bangkok, Thailand',
    activities: [
      'Arrive at Suvarnabhumi Airport',
      'Check into hotel near Old City',
      'Evening visit to Chinatown street food stalls',
    ],
    travelTime: '12 hours flight',
    image: '/destination-bangkok.jpg',
  },
  {
    id: '2',
    day: 2,
    city: 'Bangkok Markets & Street Food',
    activities: [
      'Early morning at Chatuchak Market',
      'Cooking class at local restaurant',
      'Night market dining experience',
    ],
    travelTime: 'Local transportation',
    image: '/destination-bangkok.jpg',
  },
  {
    id: '3',
    day: 3,
    city: 'Bangkok to Tokyo',
    activities: [
      'Spa and relaxation morning',
      'Airport transfer',
      'Arrive in Tokyo evening',
    ],
    travelTime: '5.5 hours flight',
    isLoading: true,
  },
  {
    id: '4',
    day: 4,
    city: 'Tokyo Michelin Dining',
    activities: [
      'Tsukiji fish market tour',
      'Sushi making masterclass',
      'Dinner at Michelin-starred restaurant',
    ],
    travelTime: 'Local transportation',
    image: '/destination-tokyo.jpg',
  },
  {
    id: '5',
    day: 5,
    city: 'Tokyo Culinary Experience',
    activities: [
      'Ramen tour in Shibuya',
      'Traditional kaiseki dinner',
      'Night exploration of food districts',
    ],
    travelTime: 'Tokyo Metro',
    image: '/destination-tokyo.jpg',
  },
]

interface TimelineScreenProps {
  onBackToChat?: () => void
}

export default function TimelineScreen({ onBackToChat }: TimelineScreenProps = {}) {
  const [items, setItems] = useState<TimelineItem[]>(TIMELINE_DATA)

  const handleRegenerate = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isLoading: true } : item
      )
    )

    setTimeout(() => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isLoading: false } : item
        )
      )
    }, 2000)
  }

  return (
    <div className="w-full h-full overflow-y-auto bg-background flex flex-col">
      {/* Top Navigation */}
      <div className="border-b-4 border-border bg-background px-4 py-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto flex items-center">
          {onBackToChat && (
            <button
              onClick={onBackToChat}
              className="p-2 border-4 border-border rounded-lg bg-secondary text-secondary-foreground hover:shadow-md transition-shadow font-bold flex items-center gap-2"
              aria-label="Go back to chat"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2 font-serif">Your Culinary Journey</h2>
            <p className="text-lg text-muted-foreground">
              A 5-day adventure through Asia&apos;s best food destinations
            </p>
          </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-border" />

          {/* Timeline items */}
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={item.id} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-12 h-12 bg-secondary border-4 border-border rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                  {item.day}
                </div>

                {/* Card */}
                <TimelineCard
                  item={item}
                  onRegenerate={() => handleRegenerate(item.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-accent text-accent-foreground border-4 border-accent-foreground rounded-lg text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4 font-serif">Ready to Book?</h3>
          <p className="mb-6 text-lg">
            Your personalized itinerary is ready. Share with friends or book now!
          </p>
          <button className="px-6 py-3 bg-accent-foreground text-accent font-bold border-4 border-accent-foreground rounded-lg hover:shadow-md transition-shadow">
            Export & Share
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
