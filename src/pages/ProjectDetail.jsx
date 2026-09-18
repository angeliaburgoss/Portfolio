import { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackToTop from '../components/BackToTop'
import Lightbox from '../components/Lightbox'
import ProcessNav from '../components/ProcessNav'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'

// Ett stycke är antingen en vanlig sträng eller en lista med segment, där
// { i: 'text' } markerar kursiv text — se t.ex. project1UnderstandStep i
// src/data/projects.js.
function renderParagraph(paragraph) {
  if (typeof paragraph === 'string') return paragraph
  return paragraph.map((segment, index) =>
    typeof segment === 'string' ? (
      <Fragment key={index}>{segment}</Fragment>
    ) : (
      <em key={index}>{segment.i}</em>
    )
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, lang } = useLanguage()
  const project = projects.find((item) => item.slug === slug)
  const [lightboxSrc, setLightboxSrc] = useState(null)

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

  function zoomableImageProps(src) {
    return {
      onClick: () => setLightboxSrc(src),
      onKeyDown: (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setLightboxSrc(src)
        }
      },
      role: 'button',
      tabIndex: 0,
      'aria-label': t.enlargeImage,
    }
  }

  return (
    <article className="project-detail">
      <Link to="/" className="back-link">
        {t.backToWork}
      </Link>

      <img
        src={project.image}
        alt=""
        className="project-detail-image zoomable-image"
        {...zoomableImageProps(project.image)}
      />

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

      {content.description && <p className="project-description">{content.description}</p>}

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
                  {stepContent.subheading && (
                    <p className="process-subheading">{stepContent.subheading}</p>
                  )}
                  {(Array.isArray(stepContent.body) ? stepContent.body : [stepContent.body]).map(
                    (paragraph, index) => (
                      <p key={index}>{renderParagraph(paragraph)}</p>
                    )
                  )}
                  {step.image && (
                    <figure className="process-section-figure">
                      <img
                        src={step.image.src}
                        alt=""
                        className="process-section-image zoomable-image"
                        {...zoomableImageProps(step.image.src)}
                      />
                      {step.image.caption && (
                        <figcaption className="image-caption">
                          {step.image.caption[lang]}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  {step.gallery && (
                    <div className="process-gallery">
                      {step.gallery.map((item, index) => (
                        <figure
                          key={index}
                          className={`process-gallery-item${item.span ? ` process-gallery-item--${item.span}` : ''}`}
                        >
                          <img
                            src={item.src}
                            alt=""
                            className="process-gallery-image zoomable-image"
                            {...zoomableImageProps(item.src)}
                          />
                          {item.caption && (
                            <figcaption className="image-caption">{item.caption[lang]}</figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                </section>
              )
            })}
          </div>

          {project.extraSections?.map((extraSection) => {
            const extraContent = extraSection[lang]
            return (
              <section key={extraSection.id} id={extraSection.id} className="extra-section">
                <h2 className="process-title">{extraContent.heading}</h2>
                {(Array.isArray(extraContent.body) ? extraContent.body : [extraContent.body]).map(
                  (paragraph, index) => (
                    <p key={index} className="process-intro">
                      {paragraph}
                    </p>
                  )
                )}
              </section>
            )
          })}

          <BackToTop />
        </>
      )}

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </article>
  )
}
