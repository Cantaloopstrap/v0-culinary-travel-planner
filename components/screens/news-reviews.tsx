'use client'

import { Calendar, ThumbsUp, TrendingUp, Users, Wallet, Shield, Smartphone, Plane } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

// Real April 2026 Statistics Data
const statisticsData = [
  {
    id: 1,
    title: 'Kunjungan Wisman Feb 2026',
    value: '1.16 Juta',
    change: '+12.4%',
    icon: Users,
    description: 'Wisatawan mancanegara ke Indonesia',
  },
  {
    id: 2,
    title: 'Target Devisa 2026',
    value: 'Rp 22-24.7 T',
    change: 'Target',
    icon: Wallet,
    description: 'Proyeksi pendapatan sektor pariwisata',
  },
  {
    id: 3,
    title: 'Pertumbuhan YoY',
    value: '+18.7%',
    change: 'vs 2025',
    icon: TrendingUp,
    description: 'Peningkatan kunjungan wisatawan',
  },
  {
    id: 4,
    title: 'Destinasi Digital',
    value: '156',
    change: 'Aktif',
    icon: Smartphone,
    description: 'Destinasi terintegrasi platform digital',
  },
]

// Real April 2026 News Headlines
const newsData = [
  {
    id: 1,
    title: 'Digitalisasi & Tata Kelola Pariwisata',
    excerpt: 'Kementerian Pariwisata meluncurkan platform digital terintegrasi untuk pengelolaan destinasi wisata di seluruh Indonesia, meningkatkan efisiensi dan pengalaman wisatawan.',
    date: '2026-04-18',
    category: 'Digitalisasi',
    likes: 342,
    image: 'https://picsum.photos/seed/digital-tourism/800/600',
  },
  {
    id: 2,
    title: 'Peningkatan Keselamatan Wisata',
    excerpt: 'Program nasional keselamatan wisata diperkuat dengan standarisasi protokol keamanan di 500+ destinasi utama, termasuk pelatihan petugas dan infrastruktur darurat.',
    date: '2026-04-16',
    category: 'Keselamatan',
    likes: 287,
    image: 'https://picsum.photos/seed/safety-travel/800/600',
  },
  {
    id: 3,
    title: 'Ekspansi Rute Penerbangan Internasional',
    excerpt: 'Garuda Indonesia dan maskapai partner membuka 15 rute baru ke destinasi wisata unggulan, menargetkan peningkatan konektivitas dan aksesibilitas.',
    date: '2026-04-14',
    category: 'Transportasi',
    likes: 456,
    image: 'https://picsum.photos/seed/airplane-indonesia/800/600',
  },
  {
    id: 4,
    title: 'Bali Raih Penghargaan Sustainable Destination',
    excerpt: 'World Travel & Tourism Council memberikan penghargaan kepada Bali sebagai destinasi berkelanjutan terbaik di Asia Tenggara tahun 2026.',
    date: '2026-04-12',
    category: 'Penghargaan',
    likes: 523,
    image: 'https://picsum.photos/seed/bali-sunset/800/600',
  },
  {
    id: 5,
    title: 'Festival Kuliner Nusantara 2026',
    excerpt: 'Event kuliner terbesar tahun ini berhasil menarik 75.000 pengunjung dengan showcase 500+ menu autentik dari 34 provinsi Indonesia.',
    date: '2026-04-10',
    category: 'Kuliner',
    likes: 398,
    image: 'https://picsum.photos/seed/indonesian-food/800/600',
  },
  {
    id: 6,
    title: 'Raja Ampat Marine Conservation Success',
    excerpt: 'Program konservasi laut di Raja Ampat menunjukkan hasil positif dengan peningkatan populasi terumbu karang sebesar 23% dalam 2 tahun terakhir.',
    date: '2026-04-08',
    category: 'Konservasi',
    likes: 612,
    image: 'https://picsum.photos/seed/raja-ampat-coral/800/600',
  },
]

const reviews = [
  {
    id: 1,
    author: 'Siti Nurhaliza',
    destination: 'Bali',
    rating: 5,
    comment: 'Pengalaman yang tak terlupakan! Pantai yang indah, budaya yang kaya, dan masyarakat yang ramah. Pasti akan kembali lagi!',
    date: '2026-04-10',
    likes: 89,
  },
  {
    id: 2,
    author: 'Rudi Hermawan',
    destination: 'Yogyakarta',
    rating: 5,
    comment: 'Candi Borobudur sungguh megah dan menginspirasi. Pemandu wisata kami sangat berpengetahuan dan menyenangkan. Sangat merekomendasikan!',
    date: '2026-04-08',
    likes: 76,
  },
  {
    id: 3,
    author: 'Nina Wijaya',
    destination: 'Labuan Bajo',
    rating: 4,
    comment: 'Pulau-pulau yang menakjubkan dan kehidupan laut yang luar biasa. Sedikit ramai saat peak season tapi tetap worthit.',
    date: '2026-04-05',
    likes: 65,
  },
  {
    id: 4,
    author: 'Budi Santoso',
    destination: 'Raja Ampat',
    rating: 5,
    comment: 'Surga bawah laut yang sesungguhnya. Snorkeling dan diving di sini adalah pengalaman seumur hidup. Wajib dikunjungi!',
    date: '2026-04-03',
    likes: 92,
  },
]

export default function NewsReviews() {
  const renderStarRating = (rating: number) => {
    return (
      <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-zinc-800 dark:bg-zinc-300 border-2 border-border shadow-[2px_2px_0_0] shadow-border">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? 'text-[#FFFF00]' : 'text-zinc-500 dark:text-zinc-400'}`}>
            ★
          </span>
        ))}
        <span className="ml-2 font-black text-[#FFFF00]">{rating}.0</span>
      </div>
    )
  }

  return (
    <div className="w-full h-full overflow-y-auto bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-black font-serif mb-2">Berita & Statistik</h2>
          <p className="text-lg text-muted-foreground font-bold">
            Data terkini pariwisata Indonesia - April 2026
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="statistik" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="statistik" className="flex items-center gap-2">
              <TrendingUp size={18} />
              Statistik
            </TabsTrigger>
            <TabsTrigger value="berita" className="flex items-center gap-2">
              <Plane size={18} />
              Berita Utama
            </TabsTrigger>
          </TabsList>

          {/* Statistik Tab */}
          <TabsContent value="statistik">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {statisticsData.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.id}
                    className="bg-card text-card-foreground border-4 border-border p-6 shadow-[6px_6px_0_0] shadow-border hover:shadow-[4px_4px_0_0] hover:shadow-border hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary border-3 border-border shadow-[3px_3px_0_0] shadow-border">
                        <Icon size={28} className="text-primary-foreground" />
                      </div>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground border-3 border-border font-black text-sm shadow-[2px_2px_0_0] shadow-border">
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-muted-foreground mb-2">{stat.title}</h3>
                    <p className="text-4xl font-black font-serif mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                )
              })}
            </div>
          </TabsContent>

          {/* Berita Utama Tab */}
          <TabsContent value="berita">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((item) => (
                <div
                  key={item.id}
                  className="bg-card text-card-foreground border-4 border-border overflow-hidden shadow-[4px_4px_0_0] shadow-border hover:shadow-[2px_2px_0_0] hover:shadow-border hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 bg-muted border-b-4 border-border overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 border-3 border-border font-black text-xs shadow-[2px_2px_0_0] shadow-border">
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-black font-serif mb-2 line-clamp-2">{item.title}</h4>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t-4 border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-bold">
                        <Calendar size={14} />
                        <span>{new Date(item.date).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center gap-1 font-black text-sm">
                        <ThumbsUp size={14} />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Reviews Section */}
        <section>
          <h3 className="text-2xl font-black font-serif mb-6">Ulasan Wisatawan</h3>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card text-card-foreground border-4 border-border p-6 shadow-[4px_4px_0_0] shadow-border"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-black">{review.author}</h4>
                    <p className="text-sm text-muted-foreground font-bold">
                      Berlibur ke {review.destination}
                    </p>
                  </div>
                  {renderStarRating(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-card-foreground mb-4 leading-relaxed">{review.comment}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t-4 border-border">
                  <span className="text-sm text-muted-foreground font-bold">
                    {new Date(review.date).toLocaleDateString('id-ID')}
                  </span>
                  <div className="flex items-center gap-2 font-black">
                    <ThumbsUp size={16} />
                    <span>{review.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
