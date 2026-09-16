# Portfolio

Personlig portfoliosida byggd med React + Vite. Innehåller en projektöversikt,
projektsidor och en kontaktsida, på svenska med möjlighet att växla till
engelska. Publiceras automatiskt till GitHub Pages via GitHub Actions.

## Utveckling

```bash
npm install
npm run dev
```

## Bygg

```bash
npm run build
npm run preview
```

## Lägg till ett nytt projekt

Lägg till en bild i `src/assets/projects/` och ett nytt objekt i
`src/data/projects.js`. Sidan uppdateras automatiskt med det nya projektet i
rutnätet.

## Byt kontaktuppgifter

Uppdatera `src/data/social.js` med din riktiga e-post, LinkedIn och GitHub.

## Distribution (GitHub Pages)

1. Skapa ett GitHub-repo som heter **Portfolio** (namnet måste matcha `base`
   i `vite.config.js`, annars behöver du uppdatera den raden).
2. Pusha koden till `main`-branchen.
3. Aktivera GitHub Pages i repots inställningar → **Pages** → **Source**:
   välj **GitHub Actions**.
4. Workflowen i `.github/workflows/deploy.yml` bygger och publicerar sidan
   automatiskt vid varje push till `main`.
