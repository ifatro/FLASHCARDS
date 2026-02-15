import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/flashcards'
import './CategorySelectionPage.css'

type Mode = 'study' | 'quiz'

interface CategorySelectionPageProps {
  mode: Mode
}

export default function CategorySelectionPage({ mode }: CategorySelectionPageProps) {
  const basePath = mode === 'study' ? '/study' : '/quiz'
  const title = mode === 'study' ? 'Study Mode — Choose Category' : 'Quiz Mode — Choose Category'

  return (
    <main className="category-page">
      <Link to="/" className="back-link">← Home</Link>
      <h1>{title}</h1>
      <ul className="category-list">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <Link
              to={`${basePath}/${category}`}
              className="category-link"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
