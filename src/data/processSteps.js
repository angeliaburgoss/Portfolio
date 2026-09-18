import { FaBullseye, FaCompass, FaHammer, FaRocket, FaSearch } from 'react-icons/fa'

// Gemensam definition av designprocessens 5 steg (Double Diamond-modellen).
// Delas av alla projekt som har ett `process`-fält i
// src/data/projects.js — där matchas varje steg via `id`. Numret (01-05)
// räknas ut från positionen i den här listan, se `number` nedan.
export const processSteps = [
  { id: 'understand', number: '01', icon: FaSearch, color: '#4a8fe7', sv: 'Förstå', en: 'Understand' },
  { id: 'explore', number: '02', icon: FaCompass, color: '#f2704b', sv: 'Utforska', en: 'Explore' },
  { id: 'define', number: '03', icon: FaBullseye, color: '#1f4e8c', sv: 'Definiera', en: 'Define' },
  { id: 'develop', number: '04', icon: FaHammer, color: '#e0b400', sv: 'Utveckla', en: 'Develop' },
  { id: 'deliver', number: '05', icon: FaRocket, color: '#9c1f6b', sv: 'Leverera', en: 'Deliver' },
]
