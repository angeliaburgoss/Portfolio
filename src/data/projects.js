import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.svg'
import project3 from '../assets/projects/project-3.svg'
import project4 from '../assets/projects/project-4.svg'
import project1UnderstandImage from '../assets/projects/project-1/understand.png'
import project1SketchExploration from '../assets/projects/project-1/sketch-exploration.png'
import project1DotToMarkSteps from '../assets/projects/project-1/dot-to-mark-steps.png'
import project1LogoConcept1 from '../assets/projects/project-1/logo-concept-1.png'
import project1LogoConcept2 from '../assets/projects/project-1/logo-concept-2.png'
import project1LogoConcept3 from '../assets/projects/project-1/logo-concept-3.png'
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

const project1ProcessIntro = {
  sv: 'Melia Advisory Partner AB är ett nytt rådgivande bolag inom Melias varumärkesfamilj, där Melia Ekonomi & Juridik AB och Meliano Accounting AB redan ingår. Jag fick i uppdrag att ta fram bolagets visuella identitet och samla det i en grafisk profil. Utmaningen var att ge bolaget ett eget uttryck, samtidigt som det direkt skulle uppfattas som en del av Melia.',
  en: 'Melia Advisory Partner AB is a new advisory company within the Melia brand family, which already includes Melia Ekonomi & Juridik AB and Meliano Accounting AB. I was commissioned to develop the company’s visual identity and compile it into a brand guide. The challenge was to give the company its own expression while still being immediately recognizable as part of Melia.',
}

const project1UnderstandStep = {
  sv: {
    heading: '01 — Förstå',
    subheading: 'Förståelse & målbild',
    body: [
      'Jag började arbetet med en intervju med VD för Melia Ekonomi & Juridik för att få en tydligare bild av vad det nya bolaget skulle stå för och vilken roll det skulle ha gentemot kunderna.',
      [
        'Under samtalet identifierade jag några återkommande ord och idéer, bland annat ',
        { i: 'tillväxt' },
        ', ',
        { i: 'strategi' },
        ', ',
        { i: 'strategic growth' },
        ' och ',
        { i: 'rådgivande partner' },
        '. Det kom även upp mer visuella tankar, som en cirkel eller en punkt som växer och utvecklas.',
      ],
      [
        'Parallellt tittade jag på Melias befintliga visuella identitet och hur de olika bolagen hänger ihop. I moderbolagets logotyp är ',
        { i: 'Melia' },
        ' skrivet i orange och avslutas med en tydlig punkt. Även ',
        { i: 'Meliano Accounting' },
        ' har en egen identitet, men med tillägget "',
        { i: 'A part of melia.' },
        '"',
      ],
      'Det blev tydligt att den orange färgen och punkten var två starka visuella element som skapade igenkänning mellan bolagen. Jag valde därför att ta med dessa som utgångspunkt i den nya identiteten, men samtidigt utveckla ett uttryck som gav Melia Advisory & Legal Partner en egen karaktär.',
      'Målet var att skapa en identitet som kändes professionell och förtroendeingivande, men som samtidigt förmedlade utveckling, tillväxt och en framåtriktad känsla.',
    ],
  },
  en: {
    heading: '01 — Understand',
    subheading: 'Insight & Vision',
    body: [
      'I began the work with an interview with the CEO of Melia Ekonomi & Juridik, to get a clearer picture of what the new company should stand for and what role it should play towards its clients.',
      [
        'During the conversation I identified some recurring words and ideas, among them ',
        { i: 'growth' },
        ', ',
        { i: 'strategy' },
        ', ',
        { i: 'strategic growth' },
        ', and ',
        { i: 'advisory partner' },
        '. More visual ideas also came up, such as a circle or a dot that grows and develops.',
      ],
      [
        'In parallel, I looked at Melia’s existing visual identity and how the different companies connect. In the parent company’s logotype, ',
        { i: 'Melia' },
        ' is written in orange and ends with a distinct dot. ',
        { i: 'Meliano Accounting' },
        ' also has its own identity, but with the addition “',
        { i: 'A part of Melia.' },
        '”',
      ],
      'It became clear that the orange color and the dot were two strong visual elements that created recognition between the companies. I therefore chose to use these as a starting point for the new identity, while also developing an expression that gave Melia Advisory & Legal Partner its own character.',
      'The goal was to create an identity that felt professional and trustworthy, while also conveying development, growth, and a forward-looking feeling.',
    ],
  },
}

const project1ExploreStep = {
  sv: {
    heading: '02 — Utforska',
    subheading: 'Idé & koncept',
    body: [
      'Utifrån nyckelorden började jag fundera på hur jag visuellt kunde förmedla känslan av något som växer och samtidigt behålla kopplingen till Melia.',
      'Jag utforskade flera olika riktningar och skissade bland annat på logotyper där ett stapeldiagram användes för att visualisera tillväxt och utveckling inom företaget. Jag tog fram olika koncept och variationer för att se hur idén kunde fungera i logotypen och tillsammans med Melias befintliga visuella uttryck.',
      'Efter att ha utvärderat koncepten tillsammans med verksamheten valdes dessa riktningar bort. De upplevdes som för seriösa och gav ett mer bank eller finansinriktat intryck, vilket inte riktigt stämde överens med Melias identitet och den känsla det nya bolaget skulle förmedla.',
      'Jag återgick därför till idén om punkten som växer. Punkten finns redan i Melia. och blev ett naturligt sätt att skapa en koppling till moderbolaget, samtidigt som den kunde utvecklas till något eget. Jag började skissa på olika sätt att låta punkten växa, förändras och ta form.',
      'Genom hela utforskningen utgick jag från Melias befintliga färger för att behålla en tydlig röd tråd, samtidigt som jag undersökte hur uttrycket kunde utvecklas och få en egen karaktär för Melia Advisory & Legal Partner.',
    ],
  },
  en: {
    heading: '02 — Explore',
    subheading: 'Idea & Concept',
    body: [
      'Based on the keywords, I started thinking about how to visually convey the feeling of something growing, while still keeping the connection to Melia.',
      'I explored several different directions and sketched, among other things, logotypes where a bar chart was used to visualize growth and development within the company. I developed various concepts and variations to see how the idea could work in the logotype and together with Melia’s existing visual expression.',
      'After evaluating the concepts together with the business, these directions were discarded. They felt too serious and gave a more bank- or finance-oriented impression, which didn’t quite align with Melia’s identity and the feeling the new company should convey.',
      'I therefore returned to the idea of the dot that grows. The dot already exists in Melia. and became a natural way to create a connection to the parent company, while still being able to develop into something of its own. I started sketching different ways to let the dot grow, change, and take shape.',
      'Throughout the exploration, I based my work on Melia’s existing colors to maintain a clear thread, while also examining how the expression could evolve and gain its own character for Melia Advisory & Legal Partner.',
    ],
  },
}

const project1ExploreGallery = [
  { src: project1SketchExploration, span: 'full' },
  { src: project1DotToMarkSteps, span: 'full' },
  { src: project1LogoConcept1 },
  { src: project1LogoConcept2 },
  { src: project1LogoConcept3 },
]

const project1StepOverrides = {
  understand: { ...project1UnderstandStep, image: project1UnderstandImage },
  explore: { ...project1ExploreStep, gallery: project1ExploreGallery },
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
    tools: ['Canva', 'Miro', 'Figma', 'Adobe Illustrator'],
    process: placeholderProcess().map((step) => {
      const override = project1StepOverrides[step.id]
      return override ? { ...step, ...override } : step
    }),
    processIntro: project1ProcessIntro,
    extraSections: placeholderExtraSections(),
    sv: {
      title: 'Projekt 1',
      role: 'UX-designer',
      description: '',
    },
    en: {
      title: 'Project 1',
      role: 'UX Designer',
      description: '',
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
