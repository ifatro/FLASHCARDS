import { useState } from 'react'
import type { Flashcard as FlashcardType } from '../data/flashcards'
import './Flashcard.css'

interface FlashcardProps {
  card: FlashcardType
  onRight: () => void
  onWrong: () => void
}

export default function Flashcard({ card, onRight, onWrong }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped((f) => !f)
  }

  const handleRight = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRight()
  }

  const handleWrong = (e: React.MouseEvent) => {
    e.stopPropagation()
    onWrong()
  }

  return (
    <div className="flashcard-container">
      <button
        type="button"
        className={`flashcard ${flipped ? 'flashcard--flipped' : ''}`}
        onClick={handleFlip}
        aria-label={flipped ? 'Show Portuguese' : 'Show English'}
        data-testid="flashcard-flip"
      >
        <div className="flashcard__face flashcard__face--front">
          <span className="flashcard__text">{card.portuguese}</span>
        </div>
        <div className="flashcard__face flashcard__face--back">
          <span className="flashcard__text">{card.english}</span>
        </div>
      </button>

      {flipped && (
        <div className="flashcard-actions">
          <button
            type="button"
            className="flashcard-actions__btn flashcard-actions__btn--right"
            onClick={handleRight}
            data-testid="flashcard-right"
          >
            ✅ I got it right
          </button>
          <button
            type="button"
            className="flashcard-actions__btn flashcard-actions__btn--wrong"
            onClick={handleWrong}
            data-testid="flashcard-wrong"
          >
            ❌ I got it wrong
          </button>
        </div>
      )}
    </div>
  )
}
