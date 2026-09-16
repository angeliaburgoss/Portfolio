import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { social } from '../data/social'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="contact-page">
      <h1>{t.contactHeading}</h1>
      <p className="contact-intro">{t.contactIntro}</p>

      <ul className="contact-list">
        <li>
          <a href={`mailto:${social.email}`}>
            <FiMail aria-hidden="true" />
            <span>{t.emailLabel}</span>
          </a>
        </li>
        <li>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin aria-hidden="true" />
            <span>{t.linkedinLabel}</span>
          </a>
        </li>
        <li>
          <a href={social.github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            <span>{t.githubLabel}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
