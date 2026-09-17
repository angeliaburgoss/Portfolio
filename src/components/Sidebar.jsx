import { NavLink, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { MdTranslate } from 'react-icons/md'
import { useLanguage } from '../context/LanguageContext'
import { social } from '../data/social'

function navLinkClass({ isActive }) {
  return isActive ? 'nav-link active' : 'nav-link'
}

export default function Sidebar() {
  const { t, lang, toggleLang } = useLanguage()
  const { pathname } = useLocation()
  const isProjectPage = pathname.startsWith('/projekt/')
  const brandMark = `${import.meta.env.BASE_URL}${isProjectPage ? 'brand-mark-light.png' : 'brand-mark-dark.png'}`

  return (
    <header className="sidebar">
      <div className="sidebar-top">
        <NavLink to="/" className="site-name-link">
          <img src={brandMark} alt="" className="brand-mark" />
          <span>
            <span className="site-name">{social.name}</span>
            <span className="site-title">{social.title}</span>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label={t.work}>
          <NavLink to="/" end className={navLinkClass}>
            {t.work}
          </NavLink>
          <NavLink to="/kontakt" className={navLinkClass}>
            {t.contact}
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button
          type="button"
          className="lang-toggle"
          onClick={toggleLang}
          title={t.languageToggleLabel}
          aria-label={t.languageToggleLabel}
        >
          <MdTranslate aria-hidden="true" />
          <span>{lang === 'sv' ? 'EN' : 'SV'}</span>
        </button>

        <ul className="social-icons">
          <li>
            <a href={`mailto:${social.email}`} aria-label={t.emailLabel} title={t.emailLabel}>
              <FiMail aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={t.linkedinLabel}
              title={t.linkedinLabel}
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label={t.githubLabel}
              title={t.githubLabel}
            >
              <FaGithub aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
