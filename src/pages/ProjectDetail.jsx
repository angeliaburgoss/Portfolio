import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, lang } = useLanguage()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="project-detail">
        <p>{t.projectNotFound}</p>
        <Link to="/" className="back-link">
          {t.backToWork}
        </Link>
      </div>
    )
  }

  const content = project[lang]

  return (
    <article className="project-detail">
      <Link to="/" className="back-link">
        {t.backToWork}
      </Link>

      <img src={project.image} alt="" className="project-detail-image" />

      <h1>{content.title}</h1>

      <dl className="project-meta">
        <div>
          <dt>{t.projectYear}</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt>{t.projectRole}</dt>
          <dd>{content.role}</dd>
        </div>
        <div>
          <dt>{t.projectTools}</dt>
          <dd>{project.tools.join(', ')}</dd>
        </div>
      </dl>

      <p className="project-description">{content.description}</p>
    </article>
  )
}
