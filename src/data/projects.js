import project1 from '../assets/projects/project-1.svg'
import project2 from '../assets/projects/project-2.svg'
import project3 from '../assets/projects/project-3.svg'
import project4 from '../assets/projects/project-4.svg'
import { processSteps } from './processSteps'

// Kort platshållartext per steg — talar om vad avsnittet ska handla om.
// Byt ut per projekt när du har riktigt innehåll.
const stepPlaceholders = {
  understand: { sv: 'behov, mål och research.', en: 'needs, goals, and research.' },
  explore: {
    sv: 'skisser, idéer och riktningar som prövades.',
    en: 'sketches, ideas, and directions that were explored.',
  },
  define: {
    sv: 'det valda konceptet och motiveringen bakom det.',
    en: 'the chosen concept and the reasoning behind it.',
  },
  develop: { sv: 'utveckling, iteration och tester.', en: 'development, iteration, and testing.' },
  deliver: { sv: 'slutleverans och riktlinjer.', en: 'final delivery and guidelines.' },
}

function placeholderProcess() {
  return processSteps.map((step) => ({
    id: step.id,
    sv: { heading: `${step.number} — ${step.sv}`, body: stepPlaceholders[step.id].sv },
    en: { heading: `${step.number} — ${step.en}`, body: stepPlaceholders[step.id].en },
  }))
}

// Kort platshållartext ovanför designprocess-ikonerna — byt ut per projekt.
const processIntro = {
  sv: 'Kort beskrivning av designprocessen för det här projektet kommer här. Ersätt med din egen text.',
  en: 'A short description of the design process for this project goes here. Replace with your own text.',
}

// Avslutande avsnitt efter designprocessen — visas INTE som egna bollar i
// navigationen, bara Resultat och Reflektion i den ordningen.
function placeholderExtraSections() {
  return [
    {
      id: 'resultat',
      sv: { heading: 'Resultat', body: 'vad som levererades.' },
      en: { heading: 'Result', body: 'what was delivered.' },
    },
    {
      id: 'reflektion',
      sv: { heading: 'Reflektion', body: 'vad du lärde dig och vilket beslut som påverkade resultatet mest.' },
      en: {
        heading: 'Reflection',
        body: 'what you learned and which decision most influenced the outcome.',
      },
    },
  ]
}

// Platshållarprojekt — lägg till fler objekt i den här listan för att lägga
// till nya projekt på sidan. Byt ut `image` mot en riktig bild när du har en.
export const projects = [
  {
    slug: 'projekt-1',
    image: project1,
    year: '2026',
    tools: ['Verktyg 1', 'Verktyg 2'],
    process: placeholderProcess(),
    processIntro,
    extraSections: placeholderExtraSections(),
    sv: {
      title: 'Projekt 1',
      role: 'Din roll',
      description:
        'Kort beskrivning av projektet kommer här. Ersätt med din egen text om vad projektet handlar om, vilket problem det löser och vad du bidrog med.',
    },
    en: {
      title: 'Project 1',
      role: 'Your role',
      description:
        'A short project description goes here. Replace with your own text about what the project is, what problem it solves, and what you contributed.',
    },
  },
  {
    slug: 'projekt-2',
    image: project2,
    year: '2026',
    tools: ['Verktyg 1', 'Verktyg 2'],
    process: placeholderProcess(),
    processIntro,
    extraSections: placeholderExtraSections(),
    sv: {
      title: 'Projekt 2',
      role: 'Din roll',
      description:
        'Kort beskrivning av projektet kommer här. Ersätt med din egen text om vad projektet handlar om, vilket problem det löser och vad du bidrog med.',
    },
    en: {
      title: 'Project 2',
      role: 'Your role',
      description:
        'A short project description goes here. Replace with your own text about what the project is, what problem it solves, and what you contributed.',
    },
  },
  {
    slug: 'projekt-3',
    image: project3,
    year: '2026',
    tools: ['Verktyg 1', 'Verktyg 2'],
    process: placeholderProcess(),
    processIntro,
    extraSections: placeholderExtraSections(),
    sv: {
      title: 'Projekt 3',
      role: 'Din roll',
      description:
        'Kort beskrivning av projektet kommer här. Ersätt med din egen text om vad projektet handlar om, vilket problem det löser och vad du bidrog med.',
    },
    en: {
      title: 'Project 3',
      role: 'Your role',
      description:
        'A short project description goes here. Replace with your own text about what the project is, what problem it solves, and what you contributed.',
    },
  },
  {
    slug: 'projekt-4',
    image: project4,
    year: '2026',
    tools: ['Verktyg 1', 'Verktyg 2'],
    process: placeholderProcess(),
    processIntro,
    extraSections: placeholderExtraSections(),
    sv: {
      title: 'Projekt 4',
      role: 'Din roll',
      description:
        'Kort beskrivning av projektet kommer här. Ersätt med din egen text om vad projektet handlar om, vilket problem det löser och vad du bidrog med.',
    },
    en: {
      title: 'Project 4',
      role: 'Your role',
      description:
        'A short project description goes here. Replace with your own text about what the project is, what problem it solves, and what you contributed.',
    },
  },
]
