# Site vitrine UCAO-UUCo

Site institutionnel statique de l’Université Catholique de l’Afrique de l’Ouest – Unité Universitaire de Conakry.

## Stack
- Génération HTML statique par Node.js (src/build.js).
- Contenus éditoriaux centralisés dans src/content/ (JSON).
- CSS natif et JavaScript vanilla.
- Déploiement Vercel (vercel.json).

## Structure
```
src/
  build.js
  content/
    site.json
    nav.json
    formations.json
    actualites.json
    pages/
  styles/main.css
  scripts/main.js
  assets/images/
dist/                 # sortie générée par le build
AGENTS.md             # règles de contribution et fiabilité éditoriale
editorial-tracking.md # sources, conflits et données à confirmer
```

## Contenu et sources
Les contenus institutionnels ont été recoupés avec les pages officielles de l’UCAO-UUCo. Les sources, dates de consultation, incohérences et limites sont consignées dans editorial-tracking.md.

Points de vigilance :
- Le site officiel annonce 8 Licences mais en énumère 9.
- Les Masters incluent un doublon sur la page source ; le catalogue local conserve les 11 intitulés distincts.
- Les tarifs disponibles en ligne sont datés de 2025-2026 et ne sont pas réutilisés comme tarifs actuels.
- Les habilitations doivent être vérifiées auprès du MESRS/ANAQ pour chaque filière.
- Deux adresses e-mail différentes apparaissent sur le site officiel.
- Le formulaire de contact n’est pas relié à un service d’envoi.

## Commandes
```sh
npm run build
```

Aucune dépendance n’est nécessaire pour générer le site.

## Gouvernance
Lire AGENTS.md avant toute modification. Ne pas fusionner dans main ni déployer sans autorisation explicite.
