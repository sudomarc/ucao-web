# Creative Design Brief — UCAO-UUCo (Refonte du site vitrine)

## Contexte

- **Produit** : Site vitrine institutionnel de l'Université Catholique de l'Afrique de l'Ouest – Unité Universitaire de Conakry (UCAO-UUCo).
- **Audience** : futurs étudiants, parents, étudiants actuels, enseignants, partenaires (Guinée et diaspora, connexions mobiles variables).
- **Tâches utilisateurs principales** : découvrir les formations, comprendre la procédure d'admission, contacter l'établissement, s'informer sur l'actualité et la vie universitaire, localiser le campus.
- **Contraintes existantes** : site entièrement en français ; hébergement statique à définir ; contenu institutionnel à vérifier (adresse e-mail en conflit : `info@ucao.uuco.org` vs `info@ucao-uuco.org` ; tarifs 2025-2026 non actuels ; effectifs et reconnaissances à confirmer) ; pas de backend identifié pour le formulaire de contact.
- **Langue visuelle actuelle** : site WordPress archivé (février 2026), logo UCAO, palette non documentée, grille de cartes répétitive, typographie système, aucune hiérarchie éditoriale marquée.

## Référence direction artistique — SOAS (https://www.soas.ac.uk/)

Inspection approfondie de plusieurs pages (accueil, /study, /about, /study/student-life). Principes extraits (à adapter, **pas à copier**) :

- Navigation primaire par grandes thématiques (Study / About / Research / International / Library), chacune avec une sous-navigation éditoriale étendue.
- Héros photographique fort, titre expressif, appel à l'action clair.
- Présentation des formations par domaine avec filtres, jamais par grille de cartes identiques.
- Mise en avant éditoriale : actualités, blogs, événements, vie étudiante comme contenus de premier plan.
- Pied de page structuré : quick links, contact, réseaux sociaux, mentions légales, accessibilité.
- Typographie affirmée, espaces généreux, rythme de lecture lisible.
- Pages internes longues avec jumplinks (ancres) en début de page et navigation "In this section".
- Sections clairement délimitées : titre, sous-titre, texte, image immersive, encadrés "Faits et chiffres".
- Photos de campus et d'étudiants en situation authentique.

## Référence institutionnelle — UCAO-UUCo (https://ucao-uuco.org/)

- Menu : Accueil, Qui sommes-nous ?, Nos formations, Inscription, Contact.
- Hero : "Université catholique de l'Afrique de l'Ouest / Unité Universitaire à Conakry" avec le vrai logo.
- Sections : historique (fondée février 2000, droit pontifical), missions (réseau 7 pays), "Pourquoi choisir UCAO ?" (liste à puces : diplômes reconnus État guinéen, membre CAMES, réseau 7 pays), actualités, contact, localisation, partenaires, réseaux sociaux Facebook.
- Le vrai logo officiel est `UCAO_LOGO.png` (logo circulaire : croix chrétienne, carte d'Afrique, "FOI SCIENCE ACTION", "UNIVERSITÉ CATHOLIQUE DE L'AFRIQUE DE L'OUEST", "UCAO UCWA").

## Palette extraite du vrai logo (UCAO_LOGO.png)

Analyse réelle du fichier `src/assets/images/UCAO_LOGO.png` (172×148) :

- Blanc #ffffff (fond, 55,9 %) → Background / Surface
- Bleu #312783 (hsl 247°, 70 %, 51 %) — texte "UCAO" / "UCWA" → **Primary**
- Rouge/bordeaux #991915 (hsl 2°, 86 %, 60 %) — carte d'Afrique, croix, "FOI SCIENCE ACTION" → **Secondary / Accent**

Palette construite autour de ces deux couleurs institutionnelles (ni palette SOAS, ni palette tendance arbitraire) :

| Rôle | Variable | Valeur | Source |
|------|----------|--------|--------|
| Primary | `--color-primary` | #312783 | Bleu du logo (UCAO / UCWA) |
| Primary dark | `--color-primary-dark` | #1f1a5c | Dérivé sombre du bleu |
| Primary light | `--color-primary-light` | #e8e7f2 | Dérivé clair du bleu |
| Secondary | `--color-secondary` | #991915 | Rouge du logo (carte / croix) |
| Secondary dark | `--color-secondary-dark` | #7a1411 | Dérivé sombre du rouge |
| Secondary light | `--color-secondary-light` | #f3e5e5 | Dérivé clair du rouge |
| Accent | `--color-accent` | #991915 | Rouge du logo |
| Accent hover | `--color-accent-hover` | #7a1411 | Rouge foncé |
| Background | `--color-bg` | #fafaf9 | Blanc cassé très léger (fond général) |
| Surface | `--color-surface` | #ffffff | Blanc pur (cartes, surfaces) |
| Text | `--color-text` | #22223b | Noir très légèrement bleuté (lisibilité) |
| Text muted | `--color-text-muted` | #6b7280 | Texte secondaire |
| Text light | `--color-text-light` | #9ca3af | Légendes, métadonnées |
| Borders | `--color-border` | #e5e7eb | Bordures fines |
| Border focus | `--color-border-focus` | #312783 | Focus (bleu logo) |
| Shadow | `--color-shadow` | rgba(49,39,131,0.08) | Ombres très discrètes |

Le logo doit être correctement visible sur le header, le footer et les emplacements institutionnels pertinents, avec un contraste adapté (logo sur fond blanc ou sur primaire inversé).

## Thèse visuelle

Une identité universitaire prestigieuse, contemporaine et éditoriale, exprimant l'ancrage guinéen et chrétien de l'UCAO-UUCo par la retenue et la maîtrise typographique (pas de clichés africains, pas de décorations artificielles), au service d'une lecture rapide et d'une navigation sans friction sur mobile comme sur desktop.

## Principes de mise en page (éditorial, inspiré de SOAS, identité UCAO propre)

- Héros photographique fort en haut de chaque page, titre expressif, CTA clair.
- Grandes photographies structurant la composition (images immersives, pas de petites cartes répétitives).
- Titres, textes, images et espaces blancs équilibrés ; largeur de lecture confortable (~65ch).
- Sections alternées texte/image, compositions asymétriques, séparateurs fins.
- Présentation des formations par niveau (Licence / Master) sous forme éditoriale, pas de grille de cartes identiques.
- Menu avec sous-navigation ; pages internes conservent une identité cohérente (même header, même footer, même rythme).
- Couleurs, contrastes et typographies dérivés du vrai logo.
- Animations et transitions fonctionnelles uniquement (révélation au scroll, focus visible), jamais décoratives.

## Contenu et fiabilité

Aucune information institutionnelle fictive. Lorsqu'un chiffre, une date, une formation ou une information administrative n'est pas vérifiable, elle est marquée `[À CONFIRMER]` au lieu d'être inventée. Voir `editorial-tracking.md`.

## Architecture

Routes : / (accueil), /universite/, /formations/, /admissions/, /vie-universitaire/, /actualites/, /contact/, /faq/, /mentions-legales/, /politique-confidentialite/, /404.

Viewports : 375px, 768px, 1440px (+ 320px et 1024px).

## Contraintes techniques

- Site statique généré par `src/build.js` (zéro dépendance externe).
- CSS natif avec variables (design system centralisé), pas de framework CSS.
- JavaScript vanilla (menu mobile, formulaire, reveal au scroll).
- Pas de dégradé décoratif, pas de glassmorphism, pas de grille de cartes identiques, pas d'animation de scroll sans fonction.
- Accessibilité : skip-link, focus-visible, titres hiérarchiques, alt text, labels, contraste WCAG AA, prefers-reduced-motion.
- Performances : images WebP + JPEG, lazy loading, poids page maîtrisé.
