import { MessageCircle } from 'lucide-react'

interface FloatingActionButtonProps {
  onClick: () => void
}

export default function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-primary-foreground rounded-full border-4 border-border flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow font-bold text-xl"
      aria-label="Open chat"
    >
      <MessageCircle size={28} />
    </button>
  )
}
