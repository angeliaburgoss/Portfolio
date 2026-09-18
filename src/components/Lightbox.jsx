import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Lightbox({ src, onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    if (!src) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [src, onClose])

  if (!src) return null

  return (
    <div className="lightbox" onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label={t.closeLightbox}>
        <FiX aria-hidden="true" />
      </button>
      <img src={src} alt="" className="lightbox-image" onClick={(event) => event.stopPropagation()} />
    </div>
  )
}
