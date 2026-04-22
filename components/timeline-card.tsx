import { RefreshCw, Clock } from 'lucide-react'
import Image from 'next/image'

interface TimelineCardProps {
  item: {
    id: string
    day: number
    city: string
    activities: string[]
    travelTime: string
    isLoading?: boolean
    image?: string
  }
  onRegenerate: () => void
}

export default function TimelineCard({ item, onRegenerate }: TimelineCardProps) {
  return (
    <div className={`relative bg-card text-card-foreground border-4 border-border rounded-lg overflow-hidden shadow-sm transition-all ${
      item.isLoading ? 'opacity-70' : ''
    }`}>
      {/* Loading overlay */}
      {item.isLoading && (
        <div className="absolute inset-0 bg-background/50 border-4 border-border rounded-lg flex items-center justify-center backdrop-blur-sm z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="font-bold text-sm">Regenerating...</p>
          </div>
        </div>
      )}

      {/* Image if provided */}
      {item.image && (
        <div className="relative w-full h-48 border-b-4 border-border">
          <Image
            src={item.image}
            alt={item.city}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Header with city and travel info */}
        <div className="mb-4">
        <h3 className="text-2xl font-bold font-serif mb-2">{item.city}</h3>
        <div className="flex items-center gap-2 text-muted-foreground font-semibold">
          <Clock size={18} />
          <span>{item.travelTime}</span>
        </div>
      </div>

      {/* Activities list */}
      <div className="mb-6 space-y-2">
        {item.activities.map((activity, index) => (
          <div key={index} className="flex gap-3">
            <div className="w-6 h-6 bg-primary text-primary-foreground border-2 border-border rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <p className="text-foreground font-semibold">{activity}</p>
          </div>
        ))}
      </div>

        {/* Regenerate button */}
        <button
          onClick={onRegenerate}
          disabled={item.isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground border-3 border-border rounded-lg font-bold hover:shadow-sm transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw size={16} className={item.isLoading ? 'animate-spin' : ''} />
          Regenerate Day
        </button>
      </div>
    </div>
  )
}
