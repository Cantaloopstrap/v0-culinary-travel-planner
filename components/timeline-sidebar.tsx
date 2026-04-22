'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetFooter } from '@/components/ui/sheet'
import { RefreshCw, Edit2 } from 'lucide-react'
import TimelineCard from './timeline-card'

interface ItineraryDestination {
  name: string
  addedAt: Date
}

interface TimelineSidebarProps {
  isOpen: boolean
  onClose: () => void
  itinerary: ItineraryDestination[]
  quizAnswers: Record<string, string>
  onEditPreferences: () => void
}

export default function TimelineSidebar({
  isOpen,
  onClose,
  itinerary,
  quizAnswers,
  onEditPreferences,
}: TimelineSidebarProps) {
  const [regeneratingDay, setRegeneratingDay] = useState<number | null>(null)

  const handleRegenerateDay = (dayIndex: number) => {
    setRegeneratingDay(dayIndex)
    setTimeout(() => {
      setRegeneratingDay(null)
    }, 1500)
  }

  const handleEditPreferences = () => {
    onClose()
    onEditPreferences()
  }

  // Generate timeline items from itinerary
  const timelineItems = itinerary.map((dest, idx) => ({
    id: idx.toString(),
    day: idx + 1,
    city: dest.name,
    activities: [
      'Explore local attractions',
      'Try local cuisine',
      'Visit cultural sites',
    ],
    travelTime: idx === 0 ? 'Day 1' : `${idx} nights travel`,
    isLoading: regeneratingDay === idx,
    image: `https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop`,
  }))

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:w-96 bg-background border-l-4 border-border overflow-y-auto"
      >
        <SheetHeader className="border-b-4 border-border">
          <h2 className="text-2xl font-black font-serif">Itinerary Anda</h2>
          <p className="text-sm text-foreground/60">
            {itinerary.length} destinasi - Perjalanan {quizAnswers?.['duration'] || 'impian'} Anda
          </p>
        </SheetHeader>

        {/* Timeline visualization */}
        <div className="py-6 px-4 relative">
          {/* Vertical line background */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-border" />

          {/* Timeline items */}
          <div className="space-y-6 relative z-10">
            {timelineItems.map((item, idx) => (
              <div key={item.id} className="relative pl-16">
                {/* Node (dot) */}
                <div className="absolute -left-3 top-6 w-8 h-8 bg-primary border-4 border-border rounded-full flex items-center justify-center font-black text-xs text-primary-foreground shadow-[2px_2px_0_0] shadow-border">
                  {item.day}
                </div>

                {/* Card content */}
                <div className="bg-card border-4 border-border p-4 shadow-[4px_4px_0_0] shadow-border">
                  <h3 className="text-lg font-black font-serif mb-2">{item.city}</h3>
                  <ul className="space-y-1 mb-3 text-sm">
                    {item.activities.map((activity, i) => (
                      <li key={i} className="flex gap-2 text-foreground/70">
                        <span className="text-primary">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Regenerate button */}
                  <button
                    onClick={() => handleRegenerateDay(idx)}
                    disabled={item.isLoading}
                    className="flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground border-3 border-border font-bold text-sm hover:shadow-[2px_2px_0_0] hover:shadow-border disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <RefreshCw
                      size={14}
                      className={item.isLoading ? 'animate-spin' : ''}
                    />
                    Regen Hari
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Edit Preferences button */}
        <SheetFooter className="border-t-4 border-border">
          <button
            onClick={handleEditPreferences}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground border-4 border-border font-black shadow-[4px_4px_0_0] shadow-border hover:shadow-[2px_2px_0_0] hover:shadow-border hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            <Edit2 size={18} />
            Edit Preferences
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
