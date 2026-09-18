import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackToTop from '../components/BackToTop'
import ProcessNav from '../components/ProcessNav'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, lang } = useLanguage()
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

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

      {project.process?.length > 0 && (
        <>
          <h2 className="process-title">{t.processHeading}</h2>

          <p className="process-intro">{project.processIntro[lang]}</p>

          <ProcessNav steps={project.process} />

          <h2 className="process-title">{t.designProcessHeading}</h2>

          <div className="process-sections">
            {project.process.map((step) => {
              const stepContent = step[lang]
              return (
                <section key={step.id} id={step.id} className="process-section">
                  <h3>{stepContent.heading}</h3>
                  <p>{stepContent.body}</p>
                </section>
              )
            })}

            {project.extraSections?.map((extraSection) => {
              const extraContent = extraSection[lang]
              return (
                <section key={extraSection.id} id={extraSection.id} className="process-section">
                  <h2>{extraContent.heading}</h2>
                  <p>{extraContent.body}</p>
                </section>
              )
            })}
          </div>

          <BackToTop />
        </>
      )}
    </article>
  )
}
