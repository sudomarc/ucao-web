# Roadmap — Refonte du site vitrine UCAO-UUCo

## Statut
**Implémentation terminée — site vitrine UCAO-UUCo généré (11 pages statiques dans `dist/`), build fonctionnel sans dépendance externe. Aucun commit n'existe encore dans le dépôt (dépôt vierge, remote `sudomarc/ucao-web`).**

### Progression détaillée (état final)

| Phase | Tâches | Statut | Preuve |
|-------|--------|--------|--------|
| 0 | Préparation, reverse engineering SOAS + UCAO-UUCo, DESIGN-BRIEF, ROADMAP, editorial-tracking | TERMINÉ | DESIGN-BRIEF.md, ROADMAP.md, editorial-tracking.md créés |
| 1 | Architecture de l'information, structure du dépôt, shell partagé, routes | TERMINÉ | package.json, src/build.js, 11 routes générées |
| 2 | Design system (tokens, composants, motif abstrait, anti-vibe) | TERMINÉ | src/styles/main.css (pas de dégradé/glassmorphism/grille identique/halo/animation sans fonction) |
| 3 | Pages essentielles (accueil, université, formations, admissions, vie, actualités, contact) | TERMINÉ | Contenus JSON + rendu HTML vérifié, images libres de droit intégrées |
| 4 | Pages complémentaires (FAQ, mentions légales, confidentialité, 404) + formulaire honnête | TERMINÉ | dist/faq, dist/mentions-legales, dist/politique-confidentialite, dist/404, formulaire sans succès simulé |
| 5 | Contenus centralisés (JSON), audit fiabilité, editorial-tracking | TERMINÉ | src/content/ + editorial-tracking.md |
| 6 | Qualité (compression, reduced-motion, accessibilité, responsive, états) | TERMINÉ | CSS media queries + prefers-reduced-motion + focus-visible + skip-link, poids total 956 Ko |
| 7 | Vérification navigateur (captures mobile/tablette/desktop), build final | TERMINÉ (code + build) | `npm run build` vert, liens internes vérifiés (0 cassés), 1 h1 par page. Captures réelles non effectuées (pas de navigateur headless — limite documentée) |


## Objectif final
Un site universitaire de qualité internationale, entièrement en français, responsive, rapide, accessible, visuellement distinctif, couvrant : accueil, université, formations, admissions, vie universitaire, actualités, contact, FAQ, mentions légales, politique de confidentialité, 404.

## Phases et tâches

### Phase 0 — Préparation (en cours)
| # | Tâche | Priorité | Dépendances | Validation |
|---|-------|----------|-------------|------------|
| 0.1 | Inspection du dépôt et de la gouvernance (AGENTS.md, MASTER-PROMPT.md, .ai/core/, compétences) | Critique | Néant | Compte rendu d'inspection réalisé |
| 0.2 | Reverse engineering SOAS (navigation, sections, éditorial) — fait via webfetch | Critique | Néant | Données consignées dans DESIGN-BRIEF.md |
| 0.3 | Reverse engineering UCAO-UUCo (page d'accueil via archive Web) — fait | Critique | Néant | Données consignées dans DESIGN-BRIEF.md |
| 0.4 | REA non installé / aucun MCP OpenCode — limitation documentée | Info | Néant | Limite consignée |
| 0.5 | DESIGN-BRIEF.md (3 directions, sélection, design system, motion, a11y, perf) | Critique | 0.1-0.4 | Fichier créé et relu |
| 0.6 | ROADMAP.md (ce document) | Critique | 0.5 | Fichier créé |
| 0.7 | editorial-tracking.md (données à confirmer, conflits) | Critique | 0.3 | Fichier créé |

### Phase 1 — Architecture de l'information et structure du dépôt
| # | Tâche | Priorité | Dépendances | Validation |
|---|-------|----------|-------------|------------|
| 1.1 | Choisir et initialiser la stack (statique, générateur de site léger ou build custom sans dépendance) | Critique | 0.5 | package.json / build fonctionnel |
| 1.2 | Créer l'arborescence : pages, contenus (JSON), templates, styles, scripts, assets, public | Critique | 1.1 | Arborescence cohérente |
| 1.3 | Définir l'inventaire des routes et leurs objectifs, sources de contenu, métadonnées SEO | Critique | 1.2 | ROADMAP.md / DESIGN-BRIEF.md à jour |
| 1.4 | Mise en place du shell partagé (header, nav, footer, skip-link, focus-visible) | Critique | 1.2 | Rendu cohérent sur toutes les pages |
| 1.5 | Configuration d'hébergement et déploiement (statique) | Moyenne | 1.4 | Config de déploiement présente |

### Phase 2 — Design system
| # | Tâche | Priorité | Dépendances | Validation |
|---|-------|----------|-------------|------------|
| 2.1 | Tokens : couleur, typographie, espacement, grille, bordures, radii, états | Critique | DESIGN-BRIEF.md | Fichier de tokens CSS |
| 2.2 | Composants de base : bouton, lien, carte éditoriale, section, formulaire, menu, footer | Critique | 2.1 | Composants réutilisables |
| 2.3 | Typographie expressive (display + corps) avec fichiers locaux | Critique | 2.1 | Rendu vérifié |
| 2.4 | Motif géométrique abstrait SVG (ancrage guinéen, subtile, optionnel) | Moyenne | 2.1 | SVG léger, respects reduced-motion |
| 2.5 | Anti-vibe préflight (pas de dégradé, glassmorphism, grille de cartes, halo, animation sans fonction) | Critique | 2.2 | Revue documentée |

### Phase 3 — Pages essentielles
| # | Tâche | Priorité | Dépendances | Validation |
|---|-------|----------|-------------|------------|
| 3.1 | Accueil : héro fort, présentation université, 3 formations mises en avant, admissions, actualités, vie universitaire | Critique | 2.3 | Rendu éditorial ambitieux, hiérarchie claire |
| 3.2 | Université : histoire, missions, valeurs, réseau UCAO, unité de Conakry | Critique | 2.3 | Contenu factuel, distinction réseau/Conakry |
| 3.3 | Formations : catalogue par niveau et spécialité, recherche rapide | Critique | 2.3 | Catalogue lisible, filtre par niveau |
| 3.4 | Admissions : procédures, conditions, documents, étapes, informations financières uniquement si confirmées | Critique | 2.3 | Aucune info inventée, placeholders marqués |
| 3.5 | Contact : coordonnées, localisation, itinéraire, formulaire, accès rapide | Critique | 2.2 | Formulaire fonctionnel, localisation claire |
| 3.6 | Actualités : présentation éditoriale, dates, catégories | Moyenne | 2.3 | Liste d'actualités existantes |
| 3.7 | Vie universitaire : étudiants, campus, activités, événements | Moyenne | 2.3 | Selon contenus disponibles |

### Phase 4 — Pages complémentaires et fonctionnalités
| # | Tâche | Priorité | Dépendances | Validation |
|---|-------|----------|-------------|------------|
| 4.1 | FAQ | Moyenne | 3.4 | Questions/réponses factuelles |
| 4.2 | Mentions légales | Moyenne | 1.4 | Identité responsable, prestataires |
| 4.3 | Politique de confidentialité | Moyenne | 1.4 | Aucune collecte non nécessaire documentée |
| 4.4 | 404 / Not found | Moyenne | 1.4 | Lien retour accueil, recherche |
| 4.5 | Formulaire de contact (validation, états, pas de simulation de succès sans backend) | Critique | 2.2 | Cycle IDLE→SUCCESS/ERROR réel, backend documenté ou limite exposée |
| 4.6 | SEO : title unique, meta description, canonical, robots, sitemap, Open Graph, locale fr | Moyenne | 3.1-3.6 | Balises présentes sur toutes les routes |

### Phase 5 — Contenus et fiabilité
| # | Tâche | Priorité | Dépendances | Validation |
|---|-------|----------|-------------|------------|
| 5.1 | Centraliser les contenus institutionnels dans une source de vérité (JSON) | Critique | 3.1-3.6 | Pas de duplication métier |
| 5.2 | Auditer et vérifier : e-mail (conflit à documenter), effectifs, formations, tarifs 2025-2026 (non présentés comme actuels), reconnaissances | Critique | 0.3 | editorial-tracking.md à jour |
| 5.3 | Distinguer histoire réseau UCAO vs unité de Conakry | Critique | 3.2 | Contenu clair et non confus |
| 5.4 | Marquer toutes les données inconnues "à confirmer" | Critique | 5.2 | Aucun chiffre inventé |

### Phase 6 — Qualité et finitions
| # | Tâche | Priorité | Dépendances | Validation |
|---|-------|----------|-------------|------------|
| 6.1 | Compression médias, formats modernes (WebP), lazy loading | Critique | 3.1-3.6 | Poids page d'accueil < 500 Ko cible |
| 6.2 | Animation maîtrisée, prefers-reduced-motion respecté | Critique | 2.3 | Rien ne dépend du motion |
| 6.3 | Accessibilité : clavier, contraste, focus, formulaires, ARIA | Critique | 2.2 | Audit navigateur passé |
| 6.4 | Responsive : mobile, tablette, desktop, wide | Critique | 3.1-3.6 | Aucun overflow, clipping, overlay cassé |
| 6.5 | Navigation clavier, Escape menu mobile, restitution du focus | Critique | 2.2 | Test clavier passé |
| 6.6 | États loading / empty / error / success sur toutes les fonctionnalités dynamiques | Moyenne | 4.5 | États présents et testés |
| 6.7 | Build, tests, contrôle du diff final, git status | Critique | 6.1-6.6 | Build passe, diff revu |

### Phase 7 — Vérification finale et documentation
| # | Tâche | Priorité | Dépendances | Validation |
|---|-------|----------|-------------|------------|
| 7.1 | Inspection navigateur : mobile, tablette, desktop (captures) | Critique | 6.6 | Captures examinées, défauts corrigés |
| 7.2 | Vérification des routes principales, liens, menus, formulaires | Critique | 3.1-4.6 | Tous les liens fonctionnent |
| 7.3 | Mise à jour README.md et ROADMAP.md | Moyenne | 7.1 | Documentation à jour |
| 7.4 | Rapport final : modifications réalisées, vérifiées, non vérifiées, à confirmer, limites, régressions | Critique | 7.3 | Rapport remis |

## Dépendances transverses
- Aucun backend identifié pour le formulaire de contact → solution adaptée documentée sans inventer d'intégration.
- Contenu institutionnel non confirmé → placeholders marqués "à confirmer" dans editorial-tracking.md.
- Pas de dépendance client-side framework (performance Guinéenne).

## Risques
| Risque | Probabilité | Impact | Atténuation |
|--------|-------------|--------|-------------|
| Contenu institutionnel obsolète ou inconnu | Élevée | Élevée | Placeholders "à confirmer", aucun chiffre inventé, editorial-tracking.md |
| Pas de backend pour le formulaire de contact | Élevée | Moyenne | Documenter la limite, proposer une solution adaptée (ex. Formspree, email tiers, ou endpoint à fournir par l'admin) |
| Connexions variables en Guinée | Élevée | Élevée | Site statique, images compressées, pas de ressource tierce, budget poids cible |
| Conflit d'adresse e-mail (2 variantes) | Élevée | Moyenne | Documenter le conflit sans choisir arbitrairement, attendre décision admin |
| REA non disponible pour l'inspection DOM | Moyenne | Faible | webfetch + archive Web suffisent pour la conception |

## Critères de validation (complétion gate)
Chaque catégorie doit être : VERIFIED, NOT APPLICABLE avec preuve, DEFERRED avec propriétaire/action, ou UNKNOWN avec raison explicite. Le rapport final sépare implemented / verified / unverified / unknown / conflict / actions humaines ou d'hébergement.

## Autorisation
Ne pas committer, pusher ou déployer sans autorisation explicite.
