# Nataraja — site web

Site de la compagnie de danse Nataraja, construit avec [Astro](https://astro.build).

## Lancer le site en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site statique dans dist/
```

## Où modifier quoi

- `src/data/site.ts` : téléphone, e-mail, Instagram, partenaires
- `src/data/events.ts` : agenda Nataraja Event (stages, jeudis bien-être…)
- `src/pages/` : une page par fichier (accueil, shows, event, communauté, devis)
- `src/assets/` : photos
- `src/styles/global.css` : couleurs et typographies

## Formulaire de devis

Le formulaire utilise Netlify Forms : une fois le site hébergé sur Netlify,
les demandes arrivent dans le tableau de bord et peuvent être envoyées par e-mail.
