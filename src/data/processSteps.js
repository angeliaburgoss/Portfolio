import { FaBullseye, FaCompass, FaHammer, FaRocket, FaSearch } from 'react-icons/fa'

// Gemensam definition av designprocessens 5 steg (Double Diamond-modellen).
// Delas av alla projekt som har ett `process`-fält i
// src/data/projects.js — där matchas varje steg via `id`. Numret (01-05)
// räknas ut från positionen i den här listan, se `number` nedan.
export const processSteps = [
  { id: 'understand', number: '01', icon: FaSearch, sv: 'Förstå', en: 'Understand' },
  { id: 'explore', number: '02', icon: FaCompass, sv: 'Utforska', en: 'Explore' },
  { id: 'define', number: '03', icon: FaBullseye, sv: 'Definiera', en: 'Define' },
  { id: 'develop', number: '04', icon: FaHammer, sv: 'Utveckla', en: 'Develop' },
  { id: 'deliver', number: '05', icon: FaRocket, sv: 'Leverera', en: 'Deliver' },
]
