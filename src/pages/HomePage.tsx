import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <main className="home-page">
      <h1>European Portuguese Flashcards</h1>
      <p className="home-welcome">Welcome! Choose how you want to practice.</p>
      <nav className="home-nav">
        <Link to="/study" className="home-link home-link-study">
          Study Mode
        </Link>
        <Link to="/quiz" className="home-link home-link-quiz">
          Quiz Mode
        </Link>
        <Link to="/stats" className="home-link home-link-stats">
          Stats Page
        </Link>
      </nav>
    </main>
  )
}
