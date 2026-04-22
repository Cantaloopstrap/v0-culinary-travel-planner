'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const CAROUSEL_IMAGES = [
  {
    id: 1,
    src: '/carousel-1.jpg',
    title: 'Street Food in Bangkok',
    description: 'Experience authentic Thai flavors'
  },
  {
    id: 2,
    src: '/carousel-2.jpg',
    title: 'Wine Country in Tuscany',
    description: 'Discover world-class Italian cuisine'
  },
  {
    id: 3,
    src: '/carousel-3.jpg',
    title: 'Ramen in Tokyo',
    description: 'Master the art of Japanese noodles'
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
  }

  const current = CAROUSEL_IMAGES[currentIndex]

  return (
    <div className="relative">
      {/* Image Container */}
      <div className="relative w-full aspect-video bg-muted border-4 border-border rounded-lg overflow-hidden shadow-lg">
        <Image
          src={current.src}
          alt={current.title}
          fill
          priority
          className="object-cover"
        />
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4 font-serif font-bold text-white drop-shadow-lg">
              {current.title.split(' ')[0]}
            </div>
            <p className="text-xl text-white drop-shadow-md">{current.description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-primary-foreground border-4 border-border rounded-full flex items-center justify-center hover:shadow-md transition-shadow font-bold"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-primary-foreground border-4 border-border rounded-full flex items-center justify-center hover:shadow-md transition-shadow font-bold"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="flex gap-2 justify-center mt-4">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 border-2 border-border rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-muted'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
