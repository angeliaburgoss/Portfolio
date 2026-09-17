import { FiArrowUp } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function BackToTop() {
  const { t } = useLanguage()

  return (
    <button type="button" className="back-to-top" onClick={scrollToTop}>
      <FiArrowUp aria-hidden="true" />
      <span>{t.backToTop}</span>
    </button>
  )
}
