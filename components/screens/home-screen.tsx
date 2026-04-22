'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import QuizModal from '../quiz-modal'

interface HomeScreenProps {
  onSelectDestination: (destination: string) => void
}

const DESTINATIONS = [
  {
    id: 'bali',
    name: 'Bali',
    image: '/bali.jpg',
    description: 'Pulau surgawi dengan pantai indah dan budaya kaya',
    rating: 4.8,
  },
  {
    id: 'yogyakarta',
    name: 'Yogyakarta',
    image: '/yogyakarta.jpg',
    description: 'Jantung budaya Jawa dengan candi Borobudur',
    rating: 4.7,
  },
  {
    id: 'jakarta',
    name: 'Jakarta',
    image: '/jakarta.jpg',
    description: 'Ibu kota yang dinamis dan penuh energi',
    rating: 4.5,
  },
  {
    id: 'labuan-bajo',
    name: 'Labuan Bajo',
    image: '/labuan-bajo.jpg',
    description: 'Gerbang Komodo dengan kepulauan eksotis',
    rating: 4.9,
  },
  {
    id: 'bontang',
    name: 'Bontang',
    image: '/bontang.jpg',
    description: 'Kota industri di hati Kalimantan Timur',
    rating: 4.3,
  },
]

export default function HomeScreen({ onSelectDestination }: HomeScreenProps) {
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <div className="w-full h-full overflow-y-auto bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-background border-b-4 border-border">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold font-serif mb-4 text-balance text-primary">
              Jelajahi Keindahan Indonesia
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto text-balance">
              Temukan destinasi impian Anda dengan rekomendasi AI yang dipersonalisasi
            </p>
          </div>

          {/* Quiz CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowQuiz(true)}
              className="px-8 py-4 bg-accent text-accent-foreground border-4 border-accent-foreground rounded-lg font-bold text-lg flex items-center gap-3 hover:shadow-md transition-shadow"
            >
              <Sparkles size={24} />
              Cari Destinasi dengan AI
            </button>
          </div>
        </div>
      </section>

      {/* Destination Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold font-serif mb-8">Destinasi Unggulan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((destination) => (
            <button
              key={destination.id}
              onClick={() => onSelectDestination(destination.id)}
              className="group text-left border-4 border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-all hover:border-primary"
            >
              {/* Image */}
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="text-2xl font-bold font-serif mb-2">{destination.name}</h4>
                <p className="text-foreground/70 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold bg-secondary text-secondary-foreground px-3 py-1 rounded border-2 border-border">
                    ⭐ {destination.rating}
                  </span>
                  <span className="text-sm font-bold text-primary">Pelajari →</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Quiz Modal */}
      {showQuiz && <QuizModal onClose={() => setShowQuiz(false)} />}
    </div>
  )
}
