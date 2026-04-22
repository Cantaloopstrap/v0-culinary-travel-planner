'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

interface StarRatingProps {
  onRatingChange: (rating: number) => void
  initialRating?: number
}

export default function StarRating({ onRatingChange, initialRating = 0 }: StarRatingProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (value: number) => {
    setRating(value)
    onRatingChange(value)
  }

  const handleHover = (value: number) => {
    setHoverRating(value)
  }

  const handleLeave = () => {
    setHoverRating(0)
  }

  const displayRating = hoverRating || rating

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleHover(star)}
            onMouseLeave={handleLeave}
            className="p-2 transition-transform hover:scale-110 active:scale-95"
            aria-label={`Rate ${star} stars`}
          >
            <Star
              size={32}
              className={`transition-all ${
                star <= displayRating
                  ? 'fill-primary stroke-border stroke-2'
                  : 'stroke-border stroke-2'
              }`}
            />
          </button>
        ))}
      </div>
      {rating > 0 && (
        <span className="font-bold text-lg ml-2">
          {rating} / 5
        </span>
      )}
    </div>
  )
}
