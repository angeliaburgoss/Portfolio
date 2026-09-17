import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Work from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'

export default function App() {
  const { pathname } = useLocation()
  const isProjectPage = pathname.startsWith('/projekt/')

  return (
    <div className={`layout${isProjectPage ? ' project-theme' : ''}`}>
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/projekt/:slug" element={<ProjectDetail />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
