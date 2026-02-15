import { Link, useParams } from 'react-router-dom'

type SessionType = 'study' | 'quiz'

export default function PlaceholderSessionPage({ type }: { type: SessionType }) {
  const { category } = useParams<{ category: string }>()
  const label = type === 'study' ? 'Study' : 'Quiz'
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <Link to={type === 'study' ? '/study' : '/quiz'}>← Back to category selection</Link>
      <h1>{label} — {category}</h1>
      <p>Session UI will be implemented in the next phase.</p>
    </main>
  )
}
