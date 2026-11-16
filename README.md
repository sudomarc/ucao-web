# Site vitrine UCAO-UUCo — Refonte

## Stack
Site statique généré par un script Node.js sans dépendance externe (`src/build.js`).
- HTML statique (pas de rendu côté client, pas de framework JavaScript).
- CSS natif avec variables (design system), pas de framework CSS.
- JavaScript vanilla (menu mobile, formulaire, reveal au scroll).
- Contenus centralisés dans `src/content/` (JSON).

## Structure
```
src/
  build.js            # Générateur de site statique
  content/
    site.json         # Configuration éditoriale et coordonnées
    nav.json          # Navigation principale
    formations.json   # Catalogue de formations (à confirmer)
    actualites.json   # Actualités (à confirmer)
    pages/            # Contenu de chaque page (JSON)
  styles/
    main.css          # Design system
  scripts/
    main.js           # JavaScript vanilla
  assets/
    images/           # Images intégrées (libres de droit) + placeholders
      hero-conakry.webp / .jpg   # Hero d'accueil (Conakry, CC BY-SA 4.0, Wikimedia Commons)
      conakry-ville.webp / .jpg  # Illustration intérieure (Conakry, CC BY-SA 4.0)
      logo-ucao.svg              # Marque créée pour la refonte (à remplacer par le logo officiel)
      favicon.svg
      hero-placeholder.svg       # Placeholder conservé (non référencé)
      image-licenses.md          # Provenance et licences de chaque photographie
    robots.txt
dist/                 # Build généré (gitignoré)
```

## Contenus et fiabilité
Les données inconnues sont marquées `[À CONFIRMER]` dans `editorial-tracking.md`. Aucun chiffre, diplôme, accréditation, tarif ou photo n’est inventé. L’adresse e-mail présente un conflit (`info@ucao.uuco.org` vs `info@ucao-uuco.org`) à trancher par l’administration.

## Commandes
```
npm install   # aucune dépendance externe (optionnel)
npm run build # génère le site statique dans dist/
```

## Déploiement
À configurer (hébergement statique). Ne pas déployer sans autorisation explicite.

## Licence
UNLICENSED.
