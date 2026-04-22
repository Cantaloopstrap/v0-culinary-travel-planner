'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, ArrowLeft } from 'lucide-react'
import ChatBubble from '../chat-bubble'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

interface ChatScreenProps {
  onNavigateToTimeline: () => void
  onBackToLanding?: () => void
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: "Hi! I'm SHARP, your culinary travel AI. Where would you like to explore? I can help you discover amazing food destinations and create a perfect itinerary.",
    sender: 'ai',
    timestamp: new Date(),
  },
]

export default function ChatScreen({ onNavigateToTimeline, onBackToLanding }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That sounds amazing! Based on your preferences, I'd recommend Bangkok for street food, Tokyo for fine dining, and Paris for classic French cuisine.",
        "I love that! Let me create a 7-day itinerary for you starting with Bangkok's night markets, then Tokyo's Michelin restaurants.",
        "Perfect! I'll design a culinary journey through Southeast Asia with stops at the best food capitals. Ready to see your personalized timeline?",
      ]

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)

      // Auto-navigate to timeline after a few messages
      if (messages.length > 4) {
        setTimeout(onNavigateToTimeline, 1000)
      }
    }, 1000)
  }

  return (
    <div className="w-full h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b-4 border-border bg-background px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center">
          {onBackToLanding && (
            <button
              onClick={onBackToLanding}
              className="p-2 border-4 border-border rounded-lg bg-secondary text-secondary-foreground hover:shadow-md transition-shadow font-bold flex items-center gap-2"
              aria-label="Go back to landing"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          )}
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-6xl mx-auto w-full">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            sender={message.sender}
            isLoading={isLoading && message.sender === 'ai' && message.id === messages[messages.length - 1].id}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t-4 border-border bg-background sticky bottom-0">
        <form
          onSubmit={handleSendMessage}
          className="max-w-6xl mx-auto px-4 py-6 flex gap-4"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe your culinary dreams..."
            className="flex-1 px-4 py-3 border-4 border-border rounded-lg bg-card text-foreground placeholder-muted-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="px-6 py-3 bg-primary text-primary-foreground border-4 border-border rounded-lg font-bold hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send size={20} />
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
