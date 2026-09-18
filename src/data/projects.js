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
import project1LogomarkFinal from '../assets/projects/project-1/logomark-final.png'
import project1ColorPalette from '../assets/projects/project-1/color-palette.png'
import project1TypographyHeadings from '../assets/projects/project-1/typography-headings.png'
import project1TypographyBody from '../assets/projects/project-1/typography-body.png'
import project1MarkColorVariants from '../assets/projects/project-1/mark-color-variants.png'
import project1LogotypePrimaryVariants from '../assets/projects/project-1/logotype-primary-variants.png'
import project1LogotypeSecondaryVariants from '../assets/projects/project-1/logotype-secondary-variants.png'
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
      'Jag inledde processen med en intervju med VD för Melia Ekonomi & Juridik för att förstå visionen för det nya bolaget och vad det skulle förmedla till sina kunder.',
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
      'I began the process with an interview with the CEO of Melia Ekonomi & Juridik to understand the vision for the new company and what it should convey to its clients.',
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
  {
    src: project1SketchExploration,
    caption: {
      sv: 'Skissutforskning av hur punkten skulle kunna växa och utvecklas.',
      en: 'Sketch exploration of how the dot could grow and evolve.',
    },
  },
  {
    src: project1DotToMarkSteps,
    caption: {
      sv: 'Den valda riktningen, steg för steg, från punkt till färdigt märke.',
      en: 'The chosen direction, step by step, from dot to finished mark.',
    },
  },
  {
    src: project1LogoConcept1,
    span: 'third',
    caption: {
      sv: 'Tidiga koncept med cirkelformen och en alternativ "&" variant.',
      en: 'Early concepts using the circle mark and an alternative "&" variant.',
    },
  },
  {
    src: project1LogoConcept2,
    span: 'third',
    caption: {
      sv: 'Konceptvariant med stapeldiagram som visualiserar tillväxt.',
      en: 'Concept variant using a bar-chart mark to visualize growth.',
    },
  },
  {
    src: project1LogoConcept3,
    span: 'third',
    caption: {
      sv: 'Ytterligare en variant av stapeldiagram-konceptet.',
      en: 'Another variation of the bar-chart concept.',
    },
  },
]

const project1DefineStep = {
  sv: {
    subheading: 'Visuellt koncept',
    body: [
      'Det slutliga konceptet utvecklades till ett logomärke bestående av två former: en cirkel och en avlång, rundad form som lutar uppåt. Cirkeln bygger vidare på punkten i Melia., medan den avlånga formen representerar samma punkt i en växande och framåtriktad form. Tillsammans skapar formerna en känsla av tillväxt, utveckling och strategisk riktning.',
      'Jag valde att arbeta med rundade former för att skapa ett mer tillgängligt och mänskligt uttryck. Den uppåtgående formen tillför samtidigt rörelse och en känsla av framåtanda, vilket passade bra med den rådgivande och utvecklingsinriktade roll som Melia Advisory Partner skulle ha.',
      'I färgpaletten valde jag att kombinera en mörkgrön primärfärg med Melias befintliga orange/gula färg. Den mörkgröna färgen gav det nya bolaget en egen identitet och bidrog med en känsla av stabilitet och förtroende, medan den orange färgen skapade kopplingen till moderbolaget och tillförde energi och kontrast.',
      'Även typografin valdes för att skapa en balans mellan det moderna och det mer klassiska. Poppins används i rubriker och ordbilden, där de geometriska och rundade formerna samspelar med logomärket. Merriweather används i brödtext och för ordet PARTNER i logotypen. Serif-typsnittet ger ett mer klassiskt och seriöst uttryck, vilket passar den rådgivande verksamheten.',
      'Tillsammans skapade dessa delar en visuell identitet som känns modern och tydlig, men samtidigt professionell och förtroendeingivande.',
    ],
  },
  en: {
    subheading: 'Visual Concept',
    body: [
      'The final concept developed into a logomark consisting of two shapes: a circle and an elongated, rounded form leaning upward. The circle builds on the dot in Melia., while the elongated shape represents the same dot in a growing, forward-leaning form. Together, the shapes create a sense of growth, development, and strategic direction.',
      'I chose to work with rounded shapes to create a more approachable and human expression. The upward-leaning shape also adds movement and a sense of forward momentum, which fit well with the advisory, development-focused role Melia Advisory Partner would have.',
      'For the color palette, I chose to combine a dark green primary color with Melia’s existing orange/yellow color. The dark green gave the new company its own identity and contributed a sense of stability and trust, while the orange color created the connection to the parent company and added energy and contrast.',
      'The typography was also chosen to create a balance between the modern and the more classic. Poppins is used in headings and the wordmark, where the geometric, rounded shapes interact with the logomark. Merriweather is used in body text and for the word PARTNER in the logotype. The serif typeface gives a more classic and serious expression, which suits the advisory business.',
      'Together, these elements created a visual identity that feels modern and clear, yet at the same time professional and trustworthy.',
    ],
  },
}

const project1StepOverrides = {
  understand: {
    ...project1UnderstandStep,
    image: {
      src: project1UnderstandImage,
      caption: {
        sv: 'Kartläggning av Melias varumärkesarkitektur och återkommande nyckelord från intervjun.',
        en: 'Mapping of Melia’s brand architecture and recurring keywords from the interview.',
      },
    },
  },
  explore: { ...project1ExploreStep, gallery: project1ExploreGallery },
  define: {
    ...project1DefineStep,
    gallery: [
      {
        src: project1LogomarkFinal,
        caption: {
          sv: 'Det slutgiltiga logomärket: cirkeln och den lutande, växande formen.',
          en: 'The final logomark: the circle and the leaning, growing shape.',
        },
      },
      {
        src: project1ColorPalette,
        caption: {
          sv: 'Den slutgiltiga färgpaletten med primära och sekundära färger.',
          en: 'The final color palette with primary and secondary colors.',
        },
      },
    ],
  },
  develop: {
    sv: {
      subheading: 'Grafisk profil',
      body: [
        'När det visuella konceptet var på plats började jag utveckla hur identiteten skulle fungera i olika sammanhang. Jag tog därför fram ett flexibelt logotypsystem bestående av en primär logotyp, en sekundär logotyp och ett fristående logomärke, där varje variant fyllde en egen funktion.',
        'Den primära logotypen är den centrala versionen av identiteten och består av logomärket placerat ovanför ordbilden. MELIA ADVISORY är satt i Poppins, där avståndet mellan bokstäverna har ökats för att skapa ett luftigare uttryck. PARTNER använder Merriweather för att skapa en kontrast mellan det moderna och det mer klassiska uttrycket. Den primära logotypen används framför allt i sammanhang där varumärket behöver synas tydligt och vara lätt att känna igen, exempelvis i presentationer, tryckt material och digitala kanaler.',
        'Den sekundära logotypen är en liggande version av den primära logotypen, där logomärket och ordbilden placeras bredvid varandra och separeras med en tunn vertikal linje. Den togs fram för sammanhang där en mer horisontell layout fungerar bättre, exempelvis i sidhuvuden, digitala gränssnitt och andra ytor där den primära logotypen inte passar lika bra. På så sätt skapas flexibilitet utan att tappa kopplingen till den visuella identiteten.',
        'Jag tog även fram ett fristående logomärke som bygger på symbolen i logotypen. Logomärket fungerar som en förenklad representation av varumärket och kan användas när den fullständiga logotypen inte får plats, exempelvis som ikon, i sociala medier eller i digitala gränssnitt. Trots sin enklare form är det en viktig del av identiteten och bidrar till igenkänning även när hela logotypen inte används.',
        'För att göra identiteten användbar i olika sammanhang tog jag fram färgvarianter för både ljusa och mörka bakgrunder. Jag kompletterade även den primära färgpaletten med neutrala färger som ljusgrått, mellangrått, nästan svart och vitt. De neutrala färgerna används för att skapa variation, kontrast och hierarki i exempelvis bakgrunder, text och andra grafiska element.',
        'Som en del av arbetet testade jag sedan identiteten i olika realistiska sammanhang, bland annat på visitkort, brevpapper, kontorsmaterial och en digital skärm. På den digitala skärmen kompletterades logotypen med ett grafiskt linjemönster mot en mörk bakgrund. Genom att testa identiteten i olika format kunde jag se hur de olika delarna fungerade tillsammans och säkerställa att uttrycket höll ihop både i tryck och digitalt.',
      ],
    },
    en: {
      subheading: 'Brand Guidelines',
      body: [
        'With the visual concept in place, I began developing how the identity would work across different contexts. I therefore created a flexible logotype system consisting of a primary logotype, a secondary logotype, and a standalone logomark, each variant serving its own function.',
        'The primary logotype is the central version of the identity and consists of the logomark placed above the wordmark. MELIA ADVISORY is set in Poppins, with increased letter spacing to create a more airy expression. PARTNER uses Merriweather to create a contrast between the modern and the more classic expression. The primary logotype is mainly used in contexts where the brand needs to stand out clearly and be easily recognizable, for example in presentations, printed material, and digital channels.',
        'The secondary logotype is a horizontal version of the primary logotype, where the logomark and wordmark are placed side by side and separated by a thin vertical line. It was developed for contexts where a more horizontal layout works better, for example in headers, digital interfaces, and other surfaces where the primary logotype doesn’t fit as well. This creates flexibility without losing the connection to the visual identity.',
        'I also developed a standalone logomark based on the symbol in the logotype. The logomark works as a simplified representation of the brand and can be used when the full logotype doesn’t fit, for example as an icon, on social media, or in digital interfaces. Despite its simpler form, it’s an important part of the identity and contributes to recognition even when the full logotype isn’t used.',
        'To make the identity usable across different contexts, I created color variants for both light and dark backgrounds. I also complemented the primary color palette with neutral colors such as light gray, mid gray, near-black, and white. The neutral colors are used to create variation, contrast, and hierarchy in, for example, backgrounds, text, and other graphic elements.',
        'As part of the work, I then tested the identity in various realistic contexts, including business cards, letterhead, office materials, and a digital screen. On the digital screen, the logotype was complemented with a graphic line pattern against a dark background. By testing the identity across different formats, I could see how the different parts worked together and ensure the expression held together both in print and digitally.',
      ],
    },
    gallery: [
      {
        src: project1TypographyHeadings,
        caption: {
          sv: 'Rubriker sätts i Poppins, från Light till Bold.',
          en: 'Headings are set in Poppins, from Light to Bold.',
        },
      },
      {
        src: project1TypographyBody,
        caption: {
          sv: 'Brödtext sätts i Merriweather, för ett mer klassiskt uttryck.',
          en: 'Body text is set in Merriweather, for a more classic expression.',
        },
      },
      {
        src: project1MarkColorVariants,
        span: 'full',
        caption: {
          sv: 'Logomärket i sina färgvarianter, mot ljus och mörk bakgrund.',
          en: 'The logomark in its color variants, against light and dark backgrounds.',
        },
      },
      {
        src: project1LogotypePrimaryVariants,
        span: 'full',
        caption: {
          sv: 'Den primära logotypen i sina färgvarianter.',
          en: 'The primary logotype in its color variants.',
        },
      },
      {
        src: project1LogotypeSecondaryVariants,
        span: 'full',
        caption: {
          sv: 'Den sekundära, liggande logotypen i sina färgvarianter.',
          en: 'The secondary, horizontal logotype in its color variants.',
        },
      },
    ],
  },
  deliver: {
    sv: { subheading: 'Färdig visuell identitet' },
    en: { subheading: 'Final Visual Identity' },
  },
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
      if (!override) return step
      return {
        ...step,
        ...override,
        sv: { ...step.sv, ...override.sv },
        en: { ...step.en, ...override.en },
      }
    }),
    processIntro: project1ProcessIntro,
    extraSections: placeholderExtraSections(),
    sv: {
      title: 'Från punkt till riktning',
      role: 'UX-designer',
      description: '',
    },
    en: {
      title: 'From Dot to Direction',
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
