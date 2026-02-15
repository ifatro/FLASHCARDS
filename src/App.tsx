import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategorySelectionPage from './pages/CategorySelectionPage'
import StatsPage from './pages/StatsPage'
import StudySessionPage from './pages/StudySessionPage'
import PlaceholderSessionPage from './pages/PlaceholderSessionPage'
import './App.css'

function StudyCategorySelection() {
  return <CategorySelectionPage mode="study" />
}

function QuizCategorySelection() {
  return <CategorySelectionPage mode="quiz" />
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study" element={<StudyCategorySelection />} />
        <Route path="/study/:category" element={<StudySessionPage />} />
        <Route path="/quiz" element={<QuizCategorySelection />} />
        <Route path="/quiz/:category" element={<PlaceholderSessionPage type="quiz" />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </div>
  )
}

export default App
