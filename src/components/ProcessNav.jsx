import { useLanguage } from '../context/LanguageContext'
import { processSteps } from '../data/processSteps'

// Bollarna länkar aldrig med href="#id" — appen använder HashRouter
// (URL:er som /#/projekt/slug), så en vanlig ankarlänk skulle skriva över
// hela route-hashen och navigera bort från sidan. Vi scrollar istället
// manuellt till sektionens element.
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function ProcessNav({ steps }) {
  const { lang } = useLanguage()
  const activeSteps = processSteps.filter((step) => steps.some((s) => s.id === step.id))

  return (
    <nav className="process-nav" aria-label="Process">
      {activeSteps.map((step) => {
        const Icon = step.icon
        return (
          <button
            key={step.id}
            type="button"
            className="process-ball"
            onClick={() => scrollToSection(step.id)}
          >
            <span className="process-ball-circle">
              <Icon aria-hidden="true" />
            </span>
            <span className="process-ball-label">{step[lang]}</span>
          </button>
        )
      })}
    </nav>
  )
}
