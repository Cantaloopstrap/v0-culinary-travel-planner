'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, MapPin, Clock, Users, DollarSign, Camera, MessageSquare } from 'lucide-react'
import ReviewModal from '../review-modal'

interface DestinationDetailProps {
  destination: string
  onBack: () => void
}

const DESTINATION_DETAILS: Record<string, any> = {
  bali: {
    name: 'Bali',
    image: '/bali.jpg',
    rating: 4.8,
    description:
      'Bali adalah destinasi wisata internasional yang terkenal dengan pantai yang indah, candi bersejarah, dan budaya yang kaya.',
    highlights: [
      'Pantai berpasir putih di Seminyak dan Kuta',
      'Candi Tanah Lot yang ikonik',
      'Ubud Art Market dan kerajinan tradisional',
      'Sawah terasering yang menakjubkan',
      'Kehidupan malam yang dinamis',
    ],
    climate: 'Tropis dengan musim kering April-Oktober',
    bestTime: 'April-Oktober (musim kering)',
    duration: '5-7 hari optimal',
    budget: 'IDR 500K - 2M per hari',
    population: '4.2 juta',
    attractions: 12,
    reviews: 2845,
  },
  yogyakarta: {
    name: 'Yogyakarta',
    image: '/yogyakarta.jpg',
    rating: 4.7,
    description:
      'Yogyakarta adalah pusat budaya Jawa dengan candi Borobudur dan Prambanan yang merupakan warisan dunia UNESCO.',
    highlights: [
      'Candi Borobudur - monumen Buddha terbesar',
      'Candi Prambanan - candi Hindu terindah',
      'Kraton Yogyakarta (istana sultan)',
      'Pasar Malioboro yang ramai',
      'Pemandangan Gunung Merapi',
    ],
    climate: 'Tropis dengan musim kering Mei-September',
    bestTime: 'Mei-September (musim kering)',
    duration: '3-5 hari optimal',
    budget: 'IDR 300K - 1.5M per hari',
    population: '3.7 juta',
    attractions: 18,
    reviews: 1956,
  },
  jakarta: {
    name: 'Jakarta',
    image: '/jakarta.jpg',
    rating: 4.5,
    description:
      'Jakarta adalah ibu kota Indonesia yang dinamis dengan bangunan modern, museum bersejarah, dan kehidupan kota yang ramai.',
    highlights: [
      'Museum Nasional Indonesia',
      'Kota Tua Jakarta dengan arsitektur Belanda',
      'Monumen Nasional (Monas)',
      'Pusat perbelanjaan kelas dunia',
      'Kuliner dan nightlife yang beragam',
    ],
    climate: 'Tropis lembab sepanjang tahun',
    bestTime: 'Juni-September (lebih kering)',
    duration: '2-4 hari optimal',
    budget: 'IDR 400K - 2M per hari',
    population: '10.9 juta',
    attractions: 25,
    reviews: 3124,
  },
  'labuan-bajo': {
    name: 'Labuan Bajo',
    image: '/labuan-bajo.jpg',
    rating: 4.9,
    description:
      'Labuan Bajo adalah gerbang menuju Komodo dengan pulau-pulau eksotis, kehidupan laut yang menakjubkan, dan pemandangan alam yang spektakuler.',
    highlights: [
      'Pulau Komodo - habitat komodo dragon',
      'Pantai Pink Sand yang unik',
      'Kepulauan Rinca dengan satwa liar',
      'Gili Motang untuk snorkeling',
      'Sunset yang memukau di tepi pantai',
    ],
    climate: 'Tropis kering, musim angin kencang Mei-September',
    bestTime: 'April-Juni dan September-Oktober',
    duration: '3-5 hari optimal',
    budget: 'IDR 800K - 2.5M per hari',
    population: '0.2 juta',
    attractions: 15,
    reviews: 1234,
  },
  bontang: {
    name: 'Bontang',
    image: '/bontang.jpg',
    rating: 4.3,
    description:
      'Bontang adalah kota industri di Kalimantan Timur dengan potensi ekowisata dan keindahan alam yang masih terjaga.',
    highlights: [
      'Taman Laut Bontang dengan biodiversity tinggi',
      'Hutan mangrove yang luas',
      'Penangkaran penyu',
      'Desa nelayan tradisional',
      'Flora fauna Kalimantan yang unik',
    ],
    climate: 'Tropis lembab, hujan sepanjang tahun',
    bestTime: 'Juni-September (curah hujan lebih rendah)',
    duration: '3-4 hari optimal',
    budget: 'IDR 400K - 1.2M per hari',
    population: '0.16 juta',
    attractions: 8,
    reviews: 456,
  },
}

export default function DestinationDetail({ destination, onBack }: DestinationDetailProps) {
  const [reviewModalOpen, setReviewModalOpen] = useState(false)
  const [reviews, setReviews] = useState<Array<{ rating: number; comment: string }>>([])
  
  const detail = DESTINATION_DETAILS[destination]

  const handleReviewSubmit = (review: { rating: number; comment: string }) => {
    setReviews([review, ...reviews])
  }

  if (!detail) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Destinasi tidak ditemukan</p>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-primary text-primary-foreground border-4 border-primary rounded-lg font-bold"
          >
            Kembali
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full overflow-y-auto bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-background border-b-4 border-border px-4 py-3">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground border-4 border-border rounded-lg font-bold hover:shadow-sm transition-shadow"
          >
            <ArrowLeft size={20} />
            Kembali
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Image */}
        <div className="relative w-full h-80 border-4 border-border rounded-lg overflow-hidden mb-8">
          <Image
            src={detail.image}
            alt={detail.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-5xl font-bold font-serif mb-2">{detail.name}</h1>
              <p className="text-lg text-foreground/70">{detail.description}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-primary">⭐ {detail.rating}</div>
              <p className="text-sm text-foreground/60">{detail.reviews} ulasan</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border-4 border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={20} className="text-primary" />
              <span className="text-sm font-bold">Durasi</span>
            </div>
            <p className="font-serif font-bold text-lg">{detail.duration}</p>
          </div>

          <div className="bg-card border-4 border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={20} className="text-secondary" />
              <span className="text-sm font-bold">Budget</span>
            </div>
            <p className="font-serif font-bold text-lg">{detail.budget}</p>
          </div>

          <div className="bg-card border-4 border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users size={20} className="text-accent" />
              <span className="text-sm font-bold">Populasi</span>
            </div>
            <p className="font-serif font-bold text-lg">{detail.population}</p>
          </div>

          <div className="bg-card border-4 border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Camera size={20} className="text-primary" />
              <span className="text-sm font-bold">Atraksi</span>
            </div>
            <p className="font-serif font-bold text-lg">{detail.attractions} tempat</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Highlights */}
            <div className="bg-card border-4 border-border rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold font-serif mb-4">Highlight Utama</h3>
              <ul className="space-y-3">
                {detail.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Climate & Best Time */}
            <div className="space-y-6">
              <div className="bg-accent/10 border-4 border-accent rounded-lg p-6">
                <h3 className="text-xl font-bold font-serif mb-3">Iklim & Cuaca</h3>
                <p className="text-foreground/80 mb-4">{detail.climate}</p>
                <div className="bg-accent text-accent-foreground px-3 py-2 rounded border-2 border-accent-foreground font-bold text-sm">
                  Waktu Terbaik: {detail.bestTime}
                </div>
              </div>

              {/* Review Button */}
              <button 
                onClick={() => setReviewModalOpen(true)}
                className="w-full px-6 py-4 bg-primary text-primary-foreground border-4 border-border rounded-lg font-bold text-lg hover:shadow-md transition-shadow flex items-center justify-center gap-2 mb-4"
                style={{
                  boxShadow: '4px 4px 0px 0px #000'
                }}
              >
                <MessageSquare size={20} />
                Tulis Review
              </button>

              {/* Plan Button */}
              <button className="w-full px-6 py-4 bg-secondary text-secondary-foreground border-4 border-border rounded-lg font-bold text-lg hover:shadow-md transition-shadow">
                Rencanakan Perjalanan
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <div className="mt-12 bg-card border-4 border-border rounded-lg p-6">
            <h3 className="text-2xl font-bold font-serif mb-6">Review Terbaru</h3>
            <div className="space-y-4">
              {reviews.map((review, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    {'⭐'.repeat(review.rating)}
                    <span className="text-sm font-bold text-foreground/70">({review.rating}/5)</span>
                  </div>
                  <p className="text-foreground/80">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Review Modal */}
      <ReviewModal
        isOpen={reviewModalOpen}
        destinationName={detail.name}
        onClose={() => setReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    </div>
  )
}
