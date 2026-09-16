import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'portfolio-lang'
const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'sv'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'sv' || stored === 'en') return stored
  } catch {
    // localStorage unavailable, fall back to default
  }
  return 'sv'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore write failures (e.g. private browsing)
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      toggleLang: () => setLang((current) => (current === 'sv' ? 'en' : 'sv')),
    }),
    [lang],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
