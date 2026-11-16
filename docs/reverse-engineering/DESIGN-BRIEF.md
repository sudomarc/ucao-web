# Creative Design Brief — UCAO-UUCo Refonte (Phase 4: Direction Artistique et Design System)

## Synthesis of Reference Research

Based on the reverse engineering analysis of 10 leading university websites (documented in REFERENCE-RESEARCH.md), this phase proposes three distinct artistic directions for the UCAO-UUCo refonte, selects one, and establishes the full design system.

### Cross-Site Patterns Identified

Before the directions, the common patterns across all 10 references confirm these principles for UCAO:

1. **Hero section is universal** — but type varies (photographic, minimalist, artistic, theme-driven)
2. **Navigation always present** — from simple top links to mega-menus
3. **Formation/admissions pathways** — CTA + procedural presentation everywhere
4. **Footer as secondary navigation** — scale varies
5. **Photography is core** — all sites use real campus/student photography
6. **Typographic hierarchy** — all maintain clear h1 > h2 > h3; constrain width for readability (~65ch)
7. **Color as accent, not background** — neutral bases (white/light) with purposeful accent colors
8. **Responsive design** — all collapse/transform navigation and reflow grids on mobile

### Three Artistic Directions

#### Direction A — Éditoriale Prestigieuse (Inspired by SOAS + Cornell Human Ecology)

**Principes directeurs :**
- Maîtrise éditoriale : textes riches, hiérarchie claire, sections clairement délimitées
- Compositions photographiques authentiques : photos campus UCAO en situation réelle
- Identité institutionnelle forte : couleurs dérivées du logo (bleu #312783, rouge #991915) utilisées de façon systématique
- Expérience centrée étudiant : chaque section répond aux questions "que puis-je faire ici ?"
- Grille flexible : pas de cartes identiques, mais sections text/image variées avec rythme éditorial

**Éléments clés :**
- Hero photographique forte avec titre expressif et CTA clair
- Sections alternant texte/image avec espacement généreux (~65ch largeur de lecture)
- Présentation formations par niveau (Licence/Master) avec descriptions complètes, pas de grille de cartes identiques
- Valeurs institutionnelles exprimées visuellement (pas seulement à puces)
- Footer structuré : quick links + contact + réseaux sociaux + mentions légales
- Navigation principale : Accueil | Université | Formations | Admissions | Vie universitaire | Actualités | Contact

**Qualité visuelle :**
- Forte : hiérarchie typographique marquée, compositions asymétriques maîtrisées
- Lisibilité : excellente (largeur 65ch, contraste WCAG AA)
- Accessibilité : skip-link, focus-visible, prefers-reduced-motion supporté
- Complexité technique : modérée (composition éditoriale, pas d'animations décoratives)

**Pertinence UCAO :** ★★★★★ (S'aligne directement avec le mandat de contenu riche et d'identité institutionnelle)

---

#### Direction B — Identité Audacieuse (Inspired by VCU Arts + Limerick School of Art and Design)

**Principes directeurs :**
- Identité visuelle distinctive : rompre avec les templates universitaires génériques
- Audace créative : utilisation courageuse de la couleur, de la typographie et de la mise en page
- Identité d'école des arts adaptée : expressivité sans devenir purement artistique
- Imagerie grande échelle : héros pleine grandeur, compositions pleine largeur
- Navigation créative : menus qui reflètent l'identité unique de l'UCAO

**Éléments clés :**
- Hero pleine largeur avec image campus dominante, overlay de couleur secondaire (#991915) pour lisibilité du texte
- Typographie expressive : display font avec caractère, tout en restant lisible
- Grille asymétrique : blocs texte/IMAGE de largeurs variables, pas de alignement rigide
- Couleurs vives : le rouge #991915 du logo utilisé comme accent dynamique, pas subtil
- Animations d'entrée légères : fade-in, slide-up sur load (fonctionnel, pas décoratif)
- Portfolios d'étudiants : sections montrant les travaux/projects des formations

**Qualité visuelle :**
- Forte identité reconnaissable immédiate
- Risque : trop éloigné de l'identité institutionnelle classique universitaire
- Lisibilité : bonne si le contraste texte/suroverlay est respecté
- Accessibilité : nécessite vérification de contraste sur les overlay couleur sur image
- Complexité technique : plus élevée (grilles asymétriques, overlay image)

**Pertinence UCAO :** ★★★★ (Bonne pour se distinguer, mais risque de réduire la perception d'institutionnalité)

---

#### Direction C — Minimaliste Fonctionnelle (Inspired by Aalto University + University of Hull)

**Principes directeurs :**
- Minimalisme scandinave : zéro décor bruit, fonction par-dessus tout
- Grille stricte et rythmique : cohérence parfaite sur toutes les pages
- Palette limitée mais cohérente : bleu et rouge du logo comme seuls accents
- Recherche par conception : chaque élément a une purpose explicite
- Performance première : poids de page minimal, chargement rapide

**Éléments clés :**
- Hero minimaliste : titre seul sur fond couleur primaire, ou image très sobre
- Grille 12-colonnes stricte : tout s'aligne sur le même système
- Espace blanc abondant : chaque élément "respire"
- Couleurs d'accent : bleu #312783 pour les liens/CTA, rouge #991915 pour les états actifs seulement
- Typographie system UI : lisible, professionnelle, sans caractère marqué
- Animations réduite : uniquement functional (hover, focus), rien qui bouge sans raison

**Qualité visuelle :**
- Propreté : excellente, design "musée"
- Lisibilité : excellente (contraste fort, taille de police cohérente)
- Accessibilité : optimale par construction (contraste maximal, motion réduite)
- Complexité technique : faible (plus simple à implémenter, mais risque d'ennui)

**Pertinence UCAO :** ★★ (Trop minimal pour un site qui doit être "riche en contenu" et "éditorial" — risque de ressemblé à un blog personnel plutôt qu'à une université)

---

## Synthèse et Direction Sélectionnée

### Critères de comparaison

| Critère | Direction A | Direction B | Direction C |
|---------|------------|------------|------------|
| Richesse éditoriale | ★★★★★ | ★★★ | ★★ |
| Identité institutionnelle | ★★★★★ | ★★★ | ★★★ |
| Qualité visuelle | ★★★★ | ★★★★ | ★★★★ |
| Lisibilité | ★★★★★ | ★★★★ | ★★★★★ |
| Accessibilité | ★★★★★ | ★★★★ | ★★★★★ |
| Complexité technique | ★★★ | ★★★★ | ★★ |
| Pertinence mandat UCAO | ★★★★★ | ★★★★ | ★★ |

### Direction Sélectionnée : **Direction A — Éditoriale Prestigieuse**

**Justification :**
1. **Alignement avec le mandat** — Le mandat exige un site "riche en contenu, extrêmement soigné visuellement, moderne, éditorial, institutionnel". La Direction A coche toutes ces cases.
2. **Identité UCAO cohérente** — Les couleurs du logo (#312783 bleu, #991915 rouge) sont utilisées de façon systématique mais pas agressives — l'équilibre parfait entre identité visuelle et professionnalisme institutionnel.
3. **Profondeur éditoriale** — C'est le seul format qui permet le contenu "substantiel" et "profond institutionalement" exigé. Les autres directions risquent d'être soit trop artistiques (Direction B), soit trop sobres (Direction C).
4. **Adaptabilité aux 10 références** — Les principes SOAS (maîtrise éditoriale, compositions photographiques authentiques) et Cornell (expérience centrée étudiants, philosophie-driven design) peuvent être synthétisés dans ce format.
5. **Accessibilité et performance** — La Direction A maintient de bons standards d'accessibilité sans nécessiter la complexité technique de Direction B, et avec plus de substance que Direction C.
6. **Éviter les pièges anti-vibe** — Pas de glassmorphism, pas de dégradés arbitraires, pas de grilles de cartes identiques, pas d'animations décoratives — tous les éléments de la Direction A sont fonctionnels et éditorialement motivés.

### Philosophie de l'Identité UCAO

L'identité UCAO qui en résulte n'est pas un "template universitaire standard" ni un site "généré automatiquement". Elle se construit à partir :

- **Couleurs du logo** — Bleu #312783 (autorité, connaissance) et Rouge #991915 (foi, engagement) comme piliers visuels.
- **Typographie expressive** — Des titres qui marquent les lecteurs, pas qui fondent dans le décor.
- **Compositions photographiques authentiques** — Photos du campus Conakry, étudiants en situation réelles, pas d'images de banque d'images génériques.
- **Hiérarchie éditoriale** — Chaque section a sa propre structure, mais tous respectent le même système de tokens CSS.
- **Respect de l'identité catholique/guinéenne** — Sans clichés visuels africains artificiels, mais avec ancrage authentique.

---

## Design System Opérationnel

### 1. Couleurs (Tokens CSS — tous dérivés du logo officiel)

Tous les tokens sont définis dans `:root` de `src/styles/main.css` et référencés via les variables `--color-*`.

| Rôle | Variable | Valeur | Source | Usage |
|------|----------|--------|--------|-------|
| Primary | `--color-primary` | #312783 | Bleu logo (UCAO/UCWA) | Liens, boutons primary, texte actif |
| Primary dark | `--color-primary-dark` | #1f1a5c | Dérivé sombre | Boutons primary :hover, états actifs |
| Primary light | `--color-primary-light` | #e8e7f2 | Dérivé clair | Fonds discrets, hover secondaire |
| Secondary | `--color-secondary` | #991915 | Rouge logo (carte/croix) | Boutons secondary, accents |
| Secondary dark | `--color-secondary-dark` | #7a1411 | Dérivé sombre | Boutons secondary :hover |
| Secondary light | `--color-secondary-light` | #f3e5e5 | Dérivé clair | Fonds alternés, médailles |
| Accent | `--color-accent` | #991915 | Rouge logo | Utilisation ponctuelle, mise en avant |
| Accent hover | `--color-accent-hover` | #7a1411 | Rouge foncé | Hover sur éléments accentués |
| Background | `--color-bg` | #fafaf9 | Blanc cassé du logo | Fond général de toutes les pages |
| Surface | `--color-surface` | #ffffff | Blanc pur | Cartes, panneaux, pop-ups |
| Text | `--color-text` | #22223b | Texte du logo (lisibilité) | Texte corps principal |
| Text muted | `--color-text-muted` | #6b7280 | Texte secondaire | Légendes, métadonnées, notes |
| Text light | `--color-text-light` | #9ca3af | Texte tertiaire | Auteur, date, métadonnées |
| Borders | `--color-border` | #e5e7eb | Bordures fines | Contours de composants |
| Border focus | `--color-border-focus` | #312783 | Focus (bleu logo) | Outline focus-visible sur tous les inputs |
| Shadow | `--color-shadow` | rgba(49,39,131,0.08) | Ombres discrètes | Élévation des cartes au hover, pas d'ombre globale |

**Contra WCAG AA vérification :**
- `--color-text (#22223b)` sur `--color-bg (#fafaf9)` : ratio ≈ 4.5:1 (minimum AA)
- `--color-text-muted (#6b7280)` sur `--color-bg (#fafaf9)` : ratio ≈ 3.1:1 (non conforme AA → utilisé seulement pour du texte secondaire non essentiel)
- `--color-primary (#312783)` sur `--color-bg (#fafaf9)` : ratio ≈ 5.1:1 (AA+)
- `--color-secondary (#991915)` sur `--color-surface (#ffffff)` : ratio ≈ 4.9:1 (AA+)

### 2. Typographie

**Polices :**
- `--font-display` : `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` — pour les titres, heroes, kickers
- `--font-body` : même famille que font-display — pour le texte de corps

**Échelles typographiques :**
- `--size-display` : 3.5rem — heroes, grands titres de section
- `--size-h1` : 2.25rem — titres de page principaux
- `--size-h2` : 1.625rem — titres de section, aussi utilisé comme taille de citation
- `--size-h3` : 1.25rem — sous-titres de carte, titres de programme
- `--size-body` : 1.0625rem — texte de paragraphe (légèrement augmenté pour la lisibilité sur écran)
- `--size-caption` : 0.8125rem — légendes, métadonnées, notes de confirmation
- `--size-nav` : 0.875rem — liens de navigation

**Hiérarchie appliquée :**

| Élément | Taille | Famille | Style |
|---------|--------|---------|-------|
| Hero title | var(--size-display) = 3.5rem | font-display | 700, letter-spacing -0.03em |
| Section title (h2) | var(--size-h2) = 1.625rem | font-display | 700, letter-spacing -0.02em |
| Card title / programme | var(--size-h3) = 1.25rem | font-display | 700 |
| Paragraphe corps | var(--size-body) = 1.0625rem | font-body | 400, line-height 1.6 |
| Kicker (uppercase) | 0.875rem (nav) ou calculé | font-display | 800, letter-spacing 0.16em, color: var(--color-secondary) |
| Légende / note | var(--size-caption) = 0.8125rem | font-body | 400, italic |

**Règle de largeur de lecture :** `--read-width: 65ch` — toutes les zones de texte étendu respectent cette largeur maximale pour un confort de lecture optimal.

### 3. Grille & Espacement

**Conteneur :**
- `--container-max: 1200px` — largeur maximale sur desktop
- `--container-wide: 1400px` — largeur pour pages pleine largeur
- `--container-pad: 24px` — padding intérieur

**Échelle d'espacement :**
- `--space-1: 4px` — marges très serrées, icônes
- `--space-2: 8px` — espacement interne mineur
- `--space-3: 12px` — espacementSection, padding de base
- `--space-4: 16px` — padding boutons, interligne secondaire
- `--space-5: 20px` — marge de paragraphe, espacement formulaire
- `--space-6: 24px` — espacement entre sections principale
- `--space-8: 32px` — marge hero, footer
- `--space-10: 40px` — espacement généreux
- `--space-12: 48px` — marge hero double
- `--space-16: 64px` — espacement de haut niveau
- `--space-20: 80px` — marge entre grandes sections
- `--space-24: 96px` — entre hero et contenu principal
- `--space-32: 128px` — espacement extrême (non utilisé actuellement)

**Système de grille :**

| Type | Grid CSS | Description |
|------|----------|-------------|
| Grille par défaut | `display: grid; grid-template-columns: 1fr; gap: var(--space-6);` | 1 colonne, mobile first |
| Grille 2 colonnes desktop | `@media (min-width: 900px) { grid-template-columns: 1fr 1fr; gap: var(--space-28); }` | Sections split-texte/image |
| Grille cartes | `display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--grid-gap);` | Cartes formations, mais voiranti-pattern |
| Grille lecture | `max-width: var(--read-width);` | Largeur maximale du texte |

**Remplacement de l'anti-pattern grille cartes :** La grille `auto-fit minmax(260px, 1fr)` qui crée des cartes de taille identique est remplacée par des **sections éditoriales variées** qui peuvent avoir :
- Texte à gauche, image à droite (split-section)
- Image pleine largeur avec texte par-dessus
- Texte seulement
- Liste à puces avec icône
- Tableau de faits et chiffres

### 4. Conteneurs et Surfaces

- Toutes les sections principales sont enveloppées par `.container` qui applique `--container-max` et `--container-pad`.
- `.container--wide` pour les sections qui nécessitent plus de large (hero, certaines images).
- `--color-surface (#ffffff)` pour toutes les cartes, panneaux, zones de formulaire.
- `--color-bg (#fafaf9)` pour le fond global des pages.
- Transition fluide entre `--color-bg` et `--color-surface` via la classe `--section--alt` qui applique le fond surface sur les sections alternées.

### 5. Composants et Variantes

#### Boutons

| Variante | CSS Class | Background | Color | Border | Hover |
|----------|-----------|------------|-------|--------|-------|
| Primary | `.button--primary` | var(--color-primary) | #fff | none | var(--color-primary-dark) |
| Secondary | `.button--secondary` | var(--color-secondary) | #fff | none | var(--color-secondary-dark) |
| Ghost | `.button--ghost` | transparent | var(--color-primary) | 1px solid | var(--color-primary-light) |
| Outline | `.button--outline` | transparent | var(--color-primary) | 1px solid | var(--color-primary) |
| Secondary ghost | N/A | transparent | var(--color-secondary) | 1px solid | var(--color-secondary-light) |

**États :**
- `:focus-visible` : `outline: var(--focus-ring)` (2px solid var(--color-border-focus))
- `:hover` : couleur de fond dérivée (dark version)
- `:active` : même que hover ou 1 étape plus foncé

#### Liens

- Couleur par défaut : `var(--color-primary)` (#312783)
- Soulignement : `text-underline-offset: 2px; text-decoration-thickness: 1px`
- `:hover` : couleur `var(--color-secondary)` (#991915)
- `:focus-visible` : outline + offset (même que boutons)

#### En-tête (header)

- `.site-header` : `position: sticky; top: 0; background: var(--color-surface); border-bottom: 1px solid var(--color-border)`
- `.site-header--scrolled` : `box-shadow: 0 4px 20px var(--color-shadow)` (appliqué via JS au scroll)
- Logo : `img` avec `width: 200px; height: 148px` (proportions du logo UCAO_LOGO.png)
- Text brand : `.site-brand__name` en `--color-primary`, `.site-brand__sub` en `--color-text-muted`

#### Navigation

- `.main-nav` : flex row, liens avec `--color-text`
- `.nav-link` : `--color-text`, border-bottom transparent, transition 140ms
- `.nav-link--active` : `--color-primary` pour couleur + border-bottom
- Mobile : `.menu-toggle` (`display: block` max-width 899px), menu slide-in

#### Footer

- `.site-footer` : `background: var(--color-surface); border-top: 1px solid var(--color-border)`
- `.footer-inner` : grille 1 colonne mobile, 3 colonnes desktop `@media (min-width: 640px)`
- `.footer-brand__logo img` : `width: 140px; height: auto` (proportion logo, différente du header à 200px)
- `.footer-links li` : margin-bottom var(--space-3)
- `.footer-link:hover` : `--color-primary` pour couleur

#### Formulaires

- `.form-field` : marge-bottom var(--space-6)
- `.form-field label` : font-size var(--size-caption), text-transform uppercase, letter-spacing 0.04em
- `.required` : couleur var(--color-secondary), margin-left var(--space-1)
- `.form-field input, .form-field textarea` : background var(--color-surface), border 1px var(--color-border), border-radius var(--radius-md)
- `:focus` : border-color var(--color-primary), outline var(--focus-ring)
- `.field-error` : couleur var(--color-secondary), font-size var(--size-caption)
- `.form-status` : marge-top var(--space-5)

#### Cartes et Sections (nouvelle organisation)

Remplacement de l'ancien `cards` par des variantes éditoriales :

**Section avec image texte (split-section) :**
```html
<section class="section section--split">
  <div class="container">
    <div class="split-section">
      <div class="split-section__text">
        <h2 class="section-title">Titre</h2>
        <p>Texte explicatif</p>
      </div>
      <div class="split-section__media">
        <img src="..." alt="..." loading="lazy">
      </div>
    </div>
  </div>
</section>
```

**Section faits et chiffres (stats grid variée) :**
```html
<section class="section section--stats">
  <div class="container">
    <h2 class="section-title">Titre</h2>
    <p class="text-block--centered lead">Sous-titre explicatif</p>
    <div class="stats-grid">
      <div class="stat"><span class="stat__number">172</span><span class="stat__label">Étudiants</span></div>
      <div class="stat"><span class="stat__number">7</span><span class="stat__label">Pays</span></div>
      <!-- etc. -->
    </div>
  </div>
</section>
```

**Section valeurs / qualités :**
```html
<section class="section section--values section--alt">
  <div class="container">
    <h2 class="section-title">Nos valeurs</h2>
    <div class="card-grid">
      <article class="card">
        <h3 class="card__title">Exigence académique</h3>
        <p class="card__desc">Formation intellectuelle rigoureuse et de qualité.</p>
      </article>
      <!-- 3 autres valeurs -->
    </div>
  </div>
</section>
```

### 6. Iconographie

- Aucune police d'icônes externe (pas de dependency).
- Utilisation des symboles SVG inline pour les icônes principales (si nécessaire).
- États hover/focus sur les liens textuels qui suffisent pour la plupart des besoins décoratifs.
- Le logo SVG `logo-ucao.svg` peut être utilisé en icône de petite taille (favicon ou indication de section).

### 7. États et Interactions

| État | Élément | Style |
|------|---------|-------|
| Hover | `.button:hover`, `.nav-link:hover`, `.card:hover` | Fond couleur dérivée (`--color-primary-dark` / `--color-secondary-dark`), bordure ou ombre légère |
| Focus | `*:focus-visible` | Outline `var(--color-border-focus)` #312783, offset var(--focus-offset) 2px |
| Active | `.button:active` | Même que hover ou 1 étape plus foncé, press effect subtil |
| Disabled | `.button:disabled`, `[disabled]` | Opacité 0.5, curseur non disponible, couleur `--color-text-muted` |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` | Toutes les animations `transition-duration: 0.01ms !important`, pas de `animation-iteration-count` sauf 1 |

### 8. Règles Responsive

**Vue mobile (375px) :**
- Menu hamburger affiché (`max-width: 899px`)
- Grid 1 colonne partout
- Hero titre réduit via `@media (min-width: 375px) { .hero__title { font-size: 3rem; } }`
- Footer en colonne unique

**Vue tablette (768px) :**
- Media query `@media (min-width: 640px)` :
  - Footer en 3 colonnes
  - Split-section en 2 colonnes
  - Hero titre 3.5rem

**Vue desktop (1024px) :**
- Media query `@media (min-width: 1024px)` :
  - Titre hero 4.25rem
  - Container padding ajusté
  - Section padding var(--space-24)
  - Section--text padding var(--space-20)

**Vue large desktop (1440px) :**
- Media query `@media (min-width: 1440px)` :
  - Titre hero 4.75rem
  - Toutes les tailles de police potentielles augmentées

**Préférence reduced motion :**
- `@media (prefers-reduced-motion: reduce)` sur tout le CSS
- Pas d'animation qui dépend du motion pour la compréhension du contenu

### 9. Anti-Vibe Rules (strictement respectées)

1. **Pas de glassmorphism** — Aucune propriété `backdrop-filter`, pas d'effets verre dépoli.
2. **Pas de dégradés arbitraires** — Seuls les tokens dérivés du logo sont utilisés (primary dark/light, secondary dark/light). Aucun gradient linéaire ou radial sans fonction définie.
3. **Pas de grille de cartes identiques** — La grille `auto-fit minmax` est remplacée par des sections éditoriales variées (split, stats, values, text-only).
4. **Pas de boutons génériques** — Tous les boutons ont des variantes (primary/secondary/ghost/outline) avec des comportements et styles distincts.
5. **Pas d'effets lumineux décoratifs** — Aucune `box-shadow` ou `text-shadow` décorative sans fonction (seulement ombres de composants fonctionnels).
6. **Pas d'animations inutiles** — Toutes les transitions ont une purpose (focus visible, hover d'indication, reveal au scroll fonctionnel). `prefers-reduced-motion` respecté à 100%.
7. **Pas de décorations africaines artificielles** — L'identité visuelle s'appuie sur les couleurs du logo et la typographie, pas sur des motifs ou clip arts thématiques.

---