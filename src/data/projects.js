import project1 from '../assets/projects/project-1.svg'
import project2 from '../assets/projects/project-2.svg'
import project3 from '../assets/projects/project-3.svg'
import project4 from '../assets/projects/project-4.svg'
import { processSteps } from './processSteps'

// Platshållartext för designprocessen — byt ut per projekt när du har
// riktigt innehåll om vad du gjorde i varje steg.
function placeholderProcess() {
  return processSteps.map((step) => ({
    id: step.id,
    sv: {
      heading: step.sv,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ersätt med en beskrivning av vad du gjorde i det här steget av processen.',
    },
    en: {
      heading: step.en,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace with a description of what you did during this step of the process.',
    },
  }))
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
