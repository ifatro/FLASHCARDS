import { Link } from 'react-router-dom'
import './StatsPage.css'

export default function StatsPage() {
  return (
    <main className="stats-page">
      <Link to="/" className="back-link">← Home</Link>
      <h1>Statistics</h1>
      <p className="stats-placeholder">Stats will be shown here once tracking is implemented.</p>
    </main>
  )
}
