import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCardsByCategory, CATEGORIES, type Flashcard as FlashcardData, type Category } from '../data/flashcards'
import Flashcard from '../components/Flashcard'
import './StudySessionPage.css'

export default function StudySessionPage() {
  const { category } = useParams<{ category: string }>()
  const [wrongCards, setWrongCards] = useState<FlashcardData[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const isValidCategory = category != null && (CATEGORIES as readonly string[]).includes(category)
  const cards = isValidCategory ? getCardsByCategory(category as Category) : []
  const currentCard = cards[currentIndex]
  const isComplete = cards.length > 0 && currentIndex >= cards.length

  const handleRight = () => {
    setCurrentIndex((i) => i + 1)
  }

  const handleWrong = () => {
    if (currentCard) setWrongCards((prev) => [...prev, currentCard])
    setCurrentIndex((i) => i + 1)
  }

  if (!isValidCategory || cards.length === 0) {
    return (
      <main className="study-session">
        <Link to="/study" className="study-session__back">← Back to category selection</Link>
        <p>No cards found for this category.</p>
      </main>
    )
  }

  if (isComplete) {
    return (
      <main className="study-session study-session--complete">
        <Link to="/study" className="study-session__back">← Back to category selection</Link>
        <h1>Session complete</h1>
        <p>You reviewed {cards.length} card{cards.length !== 1 ? 's' : ''}.</p>
        {wrongCards.length > 0 && (
          <p className="study-session__wrong-count">
            {wrongCards.length} marked as wrong (redo in Phase 3).
          </p>
        )}
        <Link to="/" className="study-session__home">Home</Link>
      </main>
    )
  }

  return (
    <main className="study-session">
      <Link to="/study" className="study-session__back">← Back to category selection</Link>
      <p className="study-session__progress">
        Card {currentIndex + 1} of {cards.length}
      </p>
      <Flashcard
        card={currentCard}
        onRight={handleRight}
        onWrong={handleWrong}
      />
    </main>
  )
}
