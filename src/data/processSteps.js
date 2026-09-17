import { FaClipboardCheck, FaHammer, FaHeart, FaLightbulb, FaRocket, FaSearch } from 'react-icons/fa'

// Gemensam definition av designprocessens steg. Delas av alla projekt som
// har ett `process`-fält i src/data/projects.js — där matchas varje steg
// via `id`.
export const processSteps = [
  { id: 'empathize', icon: FaHeart, color: '#4a8fe7', sv: 'Empatisera', en: 'Empathize' },
  { id: 'define', icon: FaSearch, color: '#1f4e8c', sv: 'Definiera', en: 'Define' },
  { id: 'ideate', icon: FaLightbulb, color: '#f2704b', sv: 'Idégenerera', en: 'Ideate' },
  { id: 'prototype', icon: FaHammer, color: '#e0b400', sv: 'Prototypa', en: 'Prototype' },
  { id: 'test', icon: FaClipboardCheck, color: '#a9891a', sv: 'Testa', en: 'Test' },
  { id: 'implement', icon: FaRocket, color: '#9c1f6b', sv: 'Implementera', en: 'Implement' },
]
