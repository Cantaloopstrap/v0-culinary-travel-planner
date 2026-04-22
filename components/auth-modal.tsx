'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface AuthModalProps {
  isOpen: boolean
  mode: 'login' | 'register'
  onClose: () => void
  onModeChange: (mode: 'login' | 'register') => void
}

export default function AuthModal({ isOpen, mode, onClose, onModeChange }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    
    console.log(`[v0] ${mode} submitted:`, { email, password, ...(mode === 'register' && { name }) })
    
    // Reset and close
    setEmail('')
    setPassword('')
    setName('')
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Modal Container - Neo-Brutalism Style */}
      <div className="bg-background border-4 border-border rounded-lg w-full max-w-md shadow-2xl" style={{
        boxShadow: '8px 8px 0px 0px #000'
      }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-border bg-primary text-primary-foreground">
          <h2 className="text-2xl font-bold font-serif">
            {mode === 'login' ? 'Masuk' : 'Daftar'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-primary-foreground/20 rounded transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Name Field (Register only) */}
          {mode === 'register' && (
            <div className="mb-6">
              <label className="block text-sm font-bold mb-3">Nama Lengkap</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama lengkap"
                required={mode === 'register'}
                className="w-full px-4 py-3 border-4 border-border rounded-lg bg-background text-foreground font-bold placeholder-foreground/50 focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                style={{
                  boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          )}

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-3">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@example.com"
              required
              className="w-full px-4 py-3 border-4 border-border rounded-lg bg-background text-foreground font-bold placeholder-foreground/50 focus:outline-none focus:ring-0 focus:border-primary transition-colors"
              style={{
                boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-8">
            <label className="block text-sm font-bold mb-3">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 border-4 border-border rounded-lg bg-background text-foreground font-bold placeholder-foreground/50 focus:outline-none focus:ring-0 focus:border-primary transition-colors"
              style={{
                boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-secondary text-secondary-foreground border-4 border-border rounded-lg font-bold text-lg mb-4 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              boxShadow: isSubmitting ? 'inset 4px 4px 0px rgba(0,0,0,0.2)' : '4px 4px 0px 0px #000'
            }}
          >
            {isSubmitting ? 'Loading...' : (mode === 'login' ? 'Masuk' : 'Daftar')}
          </button>

          {/* Mode Toggle */}
          <button
            type="button"
            onClick={() => {
              setEmail('')
              setPassword('')
              setName('')
              onModeChange(mode === 'login' ? 'register' : 'login')
            }}
            className="w-full py-2 text-foreground/70 font-bold border-2 border-border rounded-lg hover:bg-muted transition-colors"
          >
            {mode === 'login' 
              ? 'Belum punya akun? Daftar' 
              : 'Sudah punya akun? Masuk'}
          </button>
        </form>
      </div>
    </div>
  )
}
