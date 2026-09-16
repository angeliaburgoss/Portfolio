import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'

export default function Work() {
  const { lang } = useLanguage()

  return (
    <ul className="project-grid">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link to={`/projekt/${project.slug}`} className="project-tile">
            <img src={project.image} alt="" />
            <span className="project-tile-title">{project[lang].title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
