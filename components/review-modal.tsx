'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import StarRating from './star-rating'

interface ReviewModalProps {
  isOpen: boolean
  destinationName: string
  onClose: () => void
  onSubmit: (review: { rating: number; comment: string }) => void
}

export default function ReviewModal({ isOpen, destinationName, onClose, onSubmit }: ReviewModalProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (rating === 0) {
      alert('Silakan pilih rating bintang')
      return
    }
    
    if (comment.trim().length === 0) {
      alert('Silakan tulis komentar')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    
    console.log(`[v0] Review submitted for ${destinationName}:`, { rating, comment })
    
    onSubmit({ rating, comment })
    
    // Reset form
    setRating(0)
    setComment('')
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      {/* Modal Container - Neo-Brutalism Style */}
      <div className="bg-background border-4 border-border rounded-lg w-full max-w-2xl shadow-2xl my-8" style={{
        boxShadow: '8px 8px 0px 0px #000'
      }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-border bg-accent text-accent-foreground">
          <h2 className="text-2xl font-bold font-serif">
            Tulis Review untuk {destinationName}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-accent-foreground/20 rounded transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Rating Section */}
          <div>
            <label className="block text-sm font-bold mb-4">Berapa bintang untuk {destinationName}?</label>
            <div className="bg-muted border-4 border-border rounded-lg p-6">
              <StarRating 
                onRatingChange={setRating}
                initialRating={rating}
              />
            </div>
          </div>

          {/* Comment Section */}
          <div>
            <label className="block text-sm font-bold mb-3">Ceritakan pengalaman Anda</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tulis review Anda di sini... Bagikan pengalaman, tips, dan kesan Anda tentang destinasi ini."
              maxLength={500}
              rows={6}
              className="w-full px-4 py-3 border-4 border-border rounded-lg bg-background text-foreground font-bold placeholder-foreground/50 focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none"
              style={{
                boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)'
              }}
            />
            <p className="text-xs text-foreground/60 mt-2">
              {comment.length} / 500 karakter
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-4 px-6 bg-primary text-primary-foreground border-4 border-border rounded-lg font-bold text-lg hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                boxShadow: isSubmitting ? 'inset 4px 4px 0px rgba(0,0,0,0.2)' : '4px 4px 0px 0px #000'
              }}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Review'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-4 px-6 bg-secondary text-secondary-foreground border-4 border-border rounded-lg font-bold text-lg hover:shadow-md transition-all"
              style={{
                boxShadow: '4px 4px 0px 0px #000'
              }}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
