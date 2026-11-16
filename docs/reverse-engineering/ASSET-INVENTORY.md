# Asset Inventory — UCAO-UUCo Existing Media

## Overview

This document provides a comprehensive inventory of all media assets available in the UCAO-UUCo repository (`src/assets/`), analyzing their format, dimensions, content, and proposed usage in the refonte. The goal is to ensure no local assets are wasted and that the logo and photographs are properly exploited in the new design system.

---

## 1. Logo Institutionnel

### UCAO_LOGO.png
- **Format:** PNG (8-bit colormap, transparency likely)
- **Dimensions:** 172 × 148 px
- **File size:** 6,596 bytes
- **Color palette extracted from actual logo:**
  - Index 0: RGB(255, 255, 255) = Blanc #ffffff — fond/background (55.9% of pixels per DESIGN-BRIEF.md analysis)
  - Index 1: RGB(49, 39, 131) = Bleu #312783 — couleur primaire, texte "UCAO" / "UCWA" (hsl 247°, 70 %, 51 %)
  - Index 2: RGB(153, 25, 21) = Rouge #991915 — couleur secondaire, carte d'Afrique, croix, "FOI SCIENCE ACTION" (hsl 2°, 86 %, 60 %)
  - Index 4: RGB(226, 200, 199) — teinte peau/carte d'Afrique (éléments cartographiques)
  - Index 5: RGB(149, 0, 0) — rouge profond pour détails
  - Index 6: RGB(234, 234, 242) — très clair, potentiels arrières-plans
- **Content:** Logo circulaire contenant croix chrétienne, carte d'Afrique de l'Ouest, texte "FOI SCIENCE ACTION", "UNIVERSITÉ CATHOLIQUE DE L'AFRIQUE DE L'OUEST", "UCAO UCWA"
- **Usage in new site:**
  - Header: logo plein écran ou avec texte du brand, avec contraste adapté (sur fond blanc ou primaire inversé)
  - Footer: variante plus petite (largeur 140 px hauteur 104 px telle que dans build.js)
  - Favicon: variante adaptée du SVG (voir logo-ucao.svg)
  - Ne **pas** redessiner ni remplacer par du texte

### logo-ucao.svg
- **Format:** SVG vectoriel
- **Dimensions:** 200 × 186 px (viewBox 0 0 200 186)
- **File size:** 570 bytes
- **Colors in SVG:**
  - Rect fill: #a64d35 (rouge-brun, différent du PNG — variante alternative)
  - "UCAO" text: #ffffff (blanc)
  - "UUCo · Conakry" text: #f7f5f0 (gris très clair warm)
- **Content:** Version simplifiée du logo — texte "UCAO" + "UUCo · Conakry" sans la carte/croix "FOI SCIENCE ACTION"
- **Usage in new site:**
  - Favicon ou icône de petite taille
  - Emplacements où une version simplifiée est appropriée
  - **À ne pas utiliser comme logo principal** — manque la croix/carte complète de l'identité UCAO
  - Peut servir d'icône sociale ou d'indicateur de "site"

### Couleurs dérivées du logo officiel (palette centrale)

| Rôle | Variable CSS | Valeur | Source |
|------|-------------|--------|--------|
| Primary | `--color-primary` | #312783 | Bleu du logo (UCAO / UCWA) — Index 1 du PNG |
| Primary dark | `--color-primary-dark` | #1f1a5c | Dérivé sombre du bleu |
| Primary light | `--color-primary-light` | #e8e7f2 | Dérivé clair du bleu |
| Secondary | `--color-secondary` | #991915 | Rouge du logo (carte / croix) — Index 2 du PNG |
| Secondary dark | `--color-secondary-dark` | #7a1411 | Dérivé sombre du rouge |
| Secondary light | `--color-secondary-light` | #f3e5e5 | Dérivé clair du rouge |
| Accent | `--color-accent` | #991915 | Rouge du logo (usage secondaire) |
| Accent hover | `--color-accent-hover` | #7a1411 | Rouge foncé au hover |
| Background | `--color-bg` | #fafaf9 | Blanc cassé très léger (fond général) |
| Surface | `--color-surface` | #ffffff | Blanc pur (cartes, surfaces) |
| Text | `--color-text` | #22223b | Noir très légèrement bleuté (lisibilité) |
| Text muted | `--color-text-muted` | #6b7280 | Texte secondaire |
| Text light | `--color-text-light` | #9ca3af | Légendes, métadonnées |
| Borders | `--color-border` | #e5e7eb | Bordures fines |
| Border focus | `--color-border-focus` | #312783 | Focus (bleu logo) |
| Shadow | `--color-shadow` | rgba(49,39,131,0.08) | Ombres très discrètes |

---

## 2. Photos de Campus et d'Étudiants

### Photos WhatsApp (fournies par l'UCAO-UUCo)

| Fichier | Dimensions (approx.) | Taille | Catégorie | Description | Utilisation potentielle |
|---------|---------------------|--------|-----------|-------------|----------------------|
| WhatsApp Image 2026-11-14 at 3.02.57 PM.jpeg | ~1200×900 (est.) | 182 Ko | Campus/Group | Étudiants en groupe sur le campus | Page d'accueil, université, actualités |
| WhatsApp Image 2026-11-14 at 3.02.57 PM (1).jpeg | ~1200×900 (est.) | 113 Ko | Campus/Group | Variante de la photo de groupe | Alternance sur héro ou sections |
| WhatsApp Image 2026-11-14 at 3.03.04 PM.jpeg | ~1200×900 (est.) | 79 Ko | Classe | Étudiants en cours | Formations, vie académique |
| WhatsApp Image 2026-11-14 at 3.03.26 PM.jpeg | ~1200×900 (est.) | 65 Ko | Campus/Entrée | Entrée du campus | Page université, contact, localisation |
| WhatsApp Image 2026-11-14 at 3.03.15 PM.jpeg | ~1200×900 (est.) | 76 Ko | Portrait | Portrait étudiant | Admissions, contact, équipe |
| WhatsApp Image 2026-11-14 at 3.02.58 PM.jpeg | ~1200×900 (est.) | 91 Ko | Campus/Classe | Classe avec cahiers | Formations, pédagogie |
| WhatsApp Image 2026-11-14 at 3.02.58 PM (1).jpeg | ~1200×900 (est.) | 80 Ko | Campus/Étudiants | Étudiants avec sacs | Vie étudiante, mobilité |
| WhatsApp Image 2026-11-14 at 3.03.26 PM (1).jpeg | ~1200×900 (est.) | 74 Ko | Campus/Événement | Octobre Rose / événement | Actualités, vie universitaire |
| WhatsApp Image 2026-11-14 at 3.03.08 PM.jpeg | ~1200×900 (est.) | 62 Ko | Divers | Image diverse | À vérifier |
| conakry-ville.jpg | 1200×900 | 209 Ko | Ville | Vue de Conakry (CC BY-SA possible) | Page d'accueil, contexte géographique |
| conakry-ville.webp | 1200×900 | 182 Ko | Ville | Version WebP de conakry-ville.jpg | Remplace JPEG pour performance |
| hero-conakry.jpg | 1200×678 | 190 Héro | Hero page | Illustration libre de droit (Wikimedia Commons) | **Hero de la page d'accueil** |
| hero-conakry.webp | 1200×678 | 170 Héro | Hero page | Version WebP de hero-conakry.jpg | **Remplace JPEG pour performance** |

### Images libres de droit (Wikimedia Commons)

| Fichier | Dimensions | Taille | Licence | Description |
|---------|-----------|--------|---------|-------------|
| hero-conakry.jpg / .webp | 1200×678 | ~170-190 Ko | CC BY-SA 4.0 | Illustration de Ville de Conakry — non une photo du campus UCAO |

### Recommandations d'exploitation

1. **Toutes les photos WhatsApp doivent être optimisées en WebP** et utilisées en priorité par rapport à des ressources externes.
2. **Les photos de campus et d'étudiants** (WhatsApp Images) doivent être utilisées en priorité pour :
   - Hero section de l'accueil
   - Sections formations, admissions, vie universitaire
   - Cartes et modules visuels
3. **Ne jamais laisser les images locales inutilisées au profit d'images génériques** ou de ressources externes payantes.
4. **Trier et sélectionner** les meilleures photos via une planche de contact (voir section 4).
5. **Toutes les images doivent avoir un alt text** décrivant le contenu authentique (campus UCAO, étudiants, événements).
6. **Crédits photo** doivent être conservés dans les balises `image-credit` du build.js.

---

## 3. Icônes et Supports Graphiques

### favicon.svg
- **Format:** SVG vectoriel
- **Dimensions:** Non spécifié (vectoriel, scalable)
- **Usage:** Favicon du site, doit être conservé et potentiellement remplacé par une variante du logo UCAO.

### logo-ucao.svg (voir section 1)
- Voir analyse ci-dessus pour les usages en icône/favicon.

---

## 4. Planche de Contact Recommandée

Pour sélectionner les meilleures images du corpus WhatsApp, une planche de contact devrait être créée visualisant miniatures de chaque image avec métadonnées (taille, catégorie, contenu estimé). Les images suivantes sont **recommandées** pour une utilisation de qualité :

**Série "Hero & Accueil"** (ordre de priorité) :
1. `hero-conakry.webp` — Image hero officielle (Wikimedia, CC BY-SA) — à utiliser telle quelle ou en complément
2. `WhatsApp Image 2026-11-14 at 3.02.57 PM.jpeg` — Photo groupe étudiants (authentique UCAO)
3. `conakry-ville.jpg` — Vue de ville contexte (avec attribution requise)

**Série "Formations & Académique"** :
1. `WhatsApp Image 2026-11-14 at 3.03.04 PM.jpeg` — En classe avec cahiers
2. `WhatsApp Image 2026-11-14 at 3.02.58 PM.jpeg` — Classe et étudiants
3. `WhatsApp Image 2026-11-14 at 3.02.58 PM (1).jpeg` — Étudiants avec sacs

**Série "Vie Étudiante & Admissions"** :
1. `WhatsApp Image 2026-11-14 at 3.03.15 PM.jpeg` — Portrait étudiant
2. `WhatsApp Image 2026-11-14 at 3.02.57 PM (1).jpeg` — Étudiants avec sacs (mobilité)
3. `WhatsApp Image 2026-11-14 at 3.03.26 PM (1).jpeg` — Événement Octobre Rose

Toutes les autres images WhatsApp peuvent servir d'images supplémentaires dans les sections "actualités", "galerie", ou comme fondures dans les sections secondaires, mais la priorité doit aux 9 images ci-dessus.

---