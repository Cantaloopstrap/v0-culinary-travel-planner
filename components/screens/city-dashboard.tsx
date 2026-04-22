'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'

export default function CityDashboard() {
  const [selectedRegion, setSelectedRegion] = useState('Bali')
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const cityData: Record<string, {
    iqair: number
    temperature: number
    emoji: string
    pollution: 'Bagus' | 'Sedang' | 'Buruk'
    markerEmoji: string
  }> = {
    Sumatra: { iqair: 62, temperature: 28, emoji: '🌴', pollution: 'Sedang', markerEmoji: '🏞️' },
    Java: { iqair: 68, temperature: 27, emoji: '🏙️', pollution: 'Sedang', markerEmoji: '🎭' },
    Bali: { iqair: 35, temperature: 26, emoji: '😎', pollution: 'Bagus', markerEmoji: '🏖️' },
    Kalimantan: { iqair: 45, temperature: 29, emoji: '🌳', pollution: 'Bagus', markerEmoji: '🏭' },
    Sulawesi: { iqair: 52, temperature: 27, emoji: '🏝️', pollution: 'Sedang', markerEmoji: '⛰️' },
  }

  const selectedData = cityData[selectedRegion]

  const getPollutionColor = (pollution: string) => {
    if (pollution === 'Bagus') return '#22c55e'
    if (pollution === 'Sedang') return '#eab308'
    return '#ef4444'
  }

  const regions = [
    { name: 'Sumatra', x: 25, y: 45, cx: 20, cy: 40 },
    { name: 'Java', x: 50, y: 65, cx: 55, cy: 70 },
    { name: 'Bali', x: 65, y: 72, cx: 70, cy: 75 },
    { name: 'Kalimantan', x: 55, y: 42, cx: 60, cy: 40 },
    { name: 'Sulawesi', x: 72, y: 50, cx: 78, cy: 48 },
  ]

  return (
    <div className="w-full h-full overflow-y-auto bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold font-serif mb-2">Keadaan Kotaku</h2>
          <p className="text-lg text-foreground/70">
            Jelajahi peta Indonesia interaktif dan pantau data kualitas udara secara real-time
          </p>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive SVG Map */}
          <div className="lg:col-span-2 bg-card border-4 border-border rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold font-serif mb-4">Peta Indonesia Interaktif</h3>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-auto bg-blue-50 border-4 border-border rounded-lg"
              style={{ minHeight: '400px' }}
            >
              {/* Simple Indonesia map outline */}
              <g stroke="#000" strokeWidth="0.8" fill="none">
                {/* Sumatra */}
                <path
                  d="M 20 20 L 22 40 L 20 60 L 18 40 Z"
                  fill={hoveredRegion === 'Sumatra' || selectedRegion === 'Sumatra' ? '#ffff00' : '#e0e7ff'}
                  stroke="#000"
                  strokeWidth="1.5"
                  onMouseEnter={() => setHoveredRegion('Sumatra')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion('Sumatra')}
                  className="cursor-pointer transition-all duration-200 hover:filter hover:brightness-110"
                />
                {/* Java */}
                <ellipse
                  cx="50"
                  cy="65"
                  rx="12"
                  ry="6"
                  fill={hoveredRegion === 'Java' || selectedRegion === 'Java' ? '#ffff00' : '#e0e7ff'}
                  stroke="#000"
                  strokeWidth="1.5"
                  onMouseEnter={() => setHoveredRegion('Java')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion('Java')}
                  className="cursor-pointer transition-all duration-200 hover:filter hover:brightness-110"
                />
                {/* Bali */}
                <circle
                  cx="65"
                  cy="72"
                  r="2.5"
                  fill={hoveredRegion === 'Bali' || selectedRegion === 'Bali' ? '#ffff00' : '#e0e7ff'}
                  stroke="#000"
                  strokeWidth="1.5"
                  onMouseEnter={() => setHoveredRegion('Bali')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion('Bali')}
                  className="cursor-pointer transition-all duration-200 hover:filter hover:brightness-110"
                />
                {/* Kalimantan */}
                <path
                  d="M 55 30 L 65 40 L 60 50 L 50 45 Z"
                  fill={hoveredRegion === 'Kalimantan' || selectedRegion === 'Kalimantan' ? '#ffff00' : '#e0e7ff'}
                  stroke="#000"
                  strokeWidth="1.5"
                  onMouseEnter={() => setHoveredRegion('Kalimantan')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion('Kalimantan')}
                  className="cursor-pointer transition-all duration-200 hover:filter hover:brightness-110"
                />
                {/* Sulawesi */}
                <path
                  d="M 72 35 L 75 50 L 78 60 L 75 45 Z"
                  fill={hoveredRegion === 'Sulawesi' || selectedRegion === 'Sulawesi' ? '#ffff00' : '#e0e7ff'}
                  stroke="#000"
                  strokeWidth="1.5"
                  onMouseEnter={() => setHoveredRegion('Sulawesi')}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion('Sulawesi')}
                  className="cursor-pointer transition-all duration-200 hover:filter hover:brightness-110"
                />
              </g>

              {/* Map Markers */}
              {regions.map((region) => (
                <g key={region.name}>
                  {/* Marker pin */}
                  <g
                    transform={`translate(${region.cx}, ${region.cy})`}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegion(region.name)}
                  >
                    <circle cx="0" cy="0" r="1.5" fill="#000" strokeWidth="0.3" stroke="#fff" />
                  </g>
                  {/* Region label */}
                  <text
                    x={region.cx}
                    y={region.cy - 3}
                    textAnchor="middle"
                    fontSize="2.5"
                    fontWeight="bold"
                    fill="#000"
                    className="pointer-events-none font-serif"
                  >
                    {cityData[region.name]?.markerEmoji}
                  </text>
                </g>
              ))}
            </svg>
            <p className="text-sm font-bold text-foreground/70 mt-4">
              ✨ Klik region untuk melihat detail. Warna kuning = selected region
            </p>
          </div>

          {/* Massive Stats Dashboard */}
          <div className="bg-card border-4 border-border rounded-lg p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-8 text-center border-b-4 border-border pb-4">
                {selectedRegion}
              </h3>

              {/* IQAir - MASSIVE */}
              <div className="mb-12 text-center">
                <div className="text-7xl font-black font-serif mb-2">
                  {selectedData.iqair === 35 ? '😷' : selectedData.iqair === 45 ? '😐' : '😷'}
                </div>
                <div className="text-8xl font-black font-serif text-primary mb-4">
                  {selectedData.iqair}
                </div>
                <div className="text-xl font-bold text-foreground/70">IQAir Index</div>
                <div
                  className="inline-block px-6 py-2 mt-4 border-3 border-border rounded-lg font-bold text-lg"
                  style={{
                    backgroundColor: getPollutionColor(selectedData.pollution),
                    color: selectedData.pollution === 'Bagus' ? '#000' : '#000',
                  }}
                >
                  {selectedData.pollution}
                </div>
              </div>

              {/* Temperature - MASSIVE */}
              <div className="text-center">
                <div className="text-7xl font-black font-serif mb-2">☀️</div>
                <div className="text-8xl font-black font-serif text-secondary mb-4">
                  {selectedData.temperature}°
                </div>
                <div className="text-xl font-bold text-foreground/70">Temperatur Celsius</div>
              </div>
            </div>

            {/* Region Selection */}
            <div className="mt-12 pt-8 border-t-4 border-border">
              <p className="text-sm font-bold text-foreground/70 mb-4">Pilih Region:</p>
              <div className="flex flex-wrap gap-2">
                {Object.keys(cityData).map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-2 border-3 border-border rounded-lg font-bold transition-all ${
                      selectedRegion === region
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-muted hover:shadow-sm'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-accent/10 border-4 border-accent rounded-lg p-6">
          <h3 className="text-xl font-bold font-serif mb-4">📊 Panduan Kualitas Udara</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 border-3 border-border rounded-lg"
                style={{ backgroundColor: '#22c55e' }}
              />
              <div>
                <p className="font-bold">Bagus (0-50)</p>
                <p className="text-sm text-foreground/70">Aman untuk semua aktivitas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 border-3 border-border rounded-lg"
                style={{ backgroundColor: '#eab308' }}
              />
              <div>
                <p className="font-bold">Sedang (50-100)</p>
                <p className="text-sm text-foreground/70">Batasi aktivitas intensif</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 border-3 border-border rounded-lg"
                style={{ backgroundColor: '#ef4444' }}
              />
              <div>
                <p className="font-bold">Buruk (100+)</p>
                <p className="text-sm text-foreground/70">Hindari aktivitas outdoor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
