'use client'

import dynamic from 'next/dynamic'

// Re-export cities data directly (this doesn't need dynamic import)
export { INDONESIAN_CITIES, type City } from '@/components/indonesia-leaflet-map'

// Dynamically import the Leaflet map with no SSR to prevent hydration errors
const DynamicIndonesiaMap = dynamic(
  () => import('@/components/indonesia-leaflet-map'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] bg-muted border-4 border-border flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-border border-t-primary animate-spin mx-auto mb-4" style={{ borderRadius: '50%' }} />
          <p className="font-bold text-lg text-foreground">Loading Map...</p>
          <p className="text-sm text-muted-foreground">Preparing interactive Indonesia map</p>
        </div>
      </div>
    )
  }
)

export default DynamicIndonesiaMap
