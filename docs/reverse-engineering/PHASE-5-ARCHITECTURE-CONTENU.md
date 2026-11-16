# Phase 5 — Architecture de Contenu et Richesse Éditoriale

## Vue d'ensemble de l'architecture cible

Cette phase définit l'architecture de contenu complète du nouveau site UCAO-UUCo, en remplaçant le site actuel "trop bref" par une version substantielle au véritable profondeur institutionnelle. L'architecture est construite à partir des observations des 10 références (documentées dans REFERENCE-RESEARCH.md), de l'audit du site actuel (CURRENT-SITE-AUDIT.md) et des assets disponibles (ASSET-INVENTORY.md).

### Architecture des pages — Structure cible

| Page | Slug | Statut | Description détaillée |
|------|------|--------|----------------------|
| Accueil | home | ⭆ | Expérience éditoriale complète en haut de page |
| Université | universite | ⭆ | Histoire, mission, gouvernance, identité catholique |
| Formations | formations | ⭆ | Catalogue complet par niveau et spécialité |
| Admissions | admissions | ⭆ | Procédure guidée, conditions, documents |
| Vie universitaire | vie-universitaire | ⭆ | Campus, étudiants, activités, environnement |
| Actualités | actualites | ⭆ | Liste enrichie avec catégories |
| Contact | contact | ⭆ | Coordonnées validées, formulaire, localisation |
| FAQ | faq | ⭆ | Questions-réponses vérifiées |
| Mentions légales | mentions-legales | ⭆ | Blocs juridiques validés |
| Politique confidentialité | politique-confidentialite | ⭆ | Conformité RGPD/data protection |
| 404 | 404 | ⭆ | Page d'erreur avec navigation retour |

---

## 1. Page d'Accueil — Expérience Éditoriale Complète

### Structure section par section (ordre visuel)

#### Section 1 : Héro Photographique Fort
**Identifiant :** `homepage-hero`
**Éléments :**
- Image hero : photographie authentique du campus UCAO (sélectionnée parmi les WhatsApp Images ou nouvelles prises)
- Légende/ crédit photo : systématique en bas de l'image
- Titre expressif : "Unité Universitaire de Conakry" (ou slogan selon positionnement)
- CTA double : 
  - Bouton primary : "Découvrir les formations" → `/formations/`
  - Bouton secondary : "S'informer sur les admissions" → `/admissions/`
- Kicker optionnel : "Université Catholique de l'Afrique de l'Ouest"

**Contexte design :** L'image hero doit montrer le campus, des étudiants en situation réelle, pas d'illustration externe (l'ancien hero-conakry.webp était une Wikimedia illustration, pas du campus).

---

#### Section 2 : Présentation de l'Université
**Identifiant :** `homepage-university-intro`
**Éléments :**
- Kicker : "À propos de l'UCAO"
- Titre : "Université Catholique de l'Afrique de l'Ouest – Unité Universitaire de Conakry"
- Lead : 2-3 phrases sur la mission et l'ancrage
- Illustration : petite image ou icône du logo en marge gauche

**Contenu (tiré du site actuel, vérifié) :**
- Fondation février 2000 (à confirmer avec admin)
- Réseau 7 pays (à confirmer)
- Mission : formation académique + humaine
- Ancrage guinéen et chrétien (retenu, pas de clichés)

---

#### Section 3 : Vision et Mission
**Identifiant :** `homepage-vision`
**Éléments :**
- Titre : "Notre vision"
- Sous-titre : "Excellence académique au service de l'humain"
- Section double colonne ou texte/image :
  - gauche : texte sur la vision académique
  - droite : image d'étudiants en cours ou sur le campus
- CTA optionnel : "En savoir plus sur notre mission" → `/universite/`

**Contenu clé :**
- Formation académique exigeante
- Développement de la personne dans sa globalité
- Service à la communauté et à l'Afrique de l'Ouest
- Partenariats internationaux

---

#### Section 4 : Les Formations (Catalogue Mis en Avant)
**Identifiant :** `homepage-formations-featured`
**Éléments :**
- Titre : "Nos formations"
- Kicker : "Licence et Master"
- Grille ou liste sélective de 4-6 formations phares (pas tout le catalogue, mais les plus populaires ou représentatives)
- Format par carte "éditoriale" (pas grille identique) :
  - Image à gauche / texte à droite, ou inverse
  - Titre de la formation (Licence/Master)
  - Domaine (Droit, Gestion, Sciences, etc.)
  - Petite icône ou indicateur de niveau
- CTA : "Voir toutes les formations" → `/formations/`

**Format de carte (variant de l'ancien grille cards) :**
- Chaque carte a un agencement unique (pas de template en ident)
- Certaines ont image à gauche, texte à droite
- Autres ont texte seulement ou image pleine largeur avec overlay
- Hover : changement de fond subtil (pas d'animation décorative)

---

#### Section 5 : Vie Universitaire — Aperçu
**Identifiant :** `homepage-vie-universitaire`
**Éléments :**
- Titre : "Vie universitaire"
- Kicker : "Campus et activités"
- Texte d'introduction : 2-3 phrases sur la vie sur le campus
- 3-4 cartes ou blocs présentants :
  - Infrastructures campus (bibliothèque, salles de cours)
  - Activités extrascolaires (événements, journées étudiantes)
  - Environnement d'apprentissage
  - Accompagnement étudiant
- Image illustrative : photo d'événement ou de campus

---

#### Section 6 : Actualités Récentes
**Identifiant :** `homepage-actualites`
**Éléments :**
- Titre : "Actualités récentes"
- Kicker : "Dernières publications"
- Grid de 3-4 cartes d'actualités (sur desktop), 1 colonne (mobile)
- Chaque carte :
  - Date (format court : "16 nov. 2025")
  - Titre court de l'actualité
  - Résumé de 2-3 lignes
  - Catégorie (événement, colloque, vie étudiante)
- CTA : "Voir toutes les actualités" → `/actualites/`

**Quantité :** Minimum 6 actualités sur la page (contre 3 dans l'actuel), avec possibilité de filtrer par catégorie.

---

#### Section 7 : Témoignages (Validés)
**Identifiant :** `homepage-temoignages`
**Éléments :**
- Titre : "Témoignages"
- Kicker : "Ce que nos étudiants disent"
- Grid de 2-3 témoignages
- Format par carte :
  - Photo de l'étudiant (authentique, parmi les assets)
  - citation texte (en quotes)
  - Nom de l'étudiant, niveau d'étude, domaine
- Note : les témoignages sont "vérifiés" — marqués [À CONFIRMER] si non validés par l'administration
- CTA : "Rencontrer un étudiant actuel" → (lien mailto ou formulaire)

**Politique :** Aucun témoignage inventé. Si le contenu [À CONFIRMER] n'est pas disponible, la section indique "Témoignages en attente de validation".

---

#### Section 8 : Appels à l'Action Finaux
**Identifiant :** `homepage-ctas-final`
**Éléments :**
- Texte d'introduction : "Prêt à rejoindre l'UCAO ?"
- Deux boutons principaux :
  - Primary : "Démarrer votre inscription" → `/admissions/`
  - Secondary : "Contacter le service adjoint" → `/contact/`
- Optionnel : icône ou image petite de l'engagement

---

### Mise en page globale de l'accueil

**Structure HTML :**

```html
<header class="site-header">...</header>

<main id="main">
  <!-- Skip-link déjà présent en haut de page -->
  
  <!-- Section 1: Héro -->
  <section class="homepage-hero">
    <!-- hero component from build.js -->
  </section>
  
  <!-- Section 2: Intro -->
  <section class="homepage-university-intro">
    <!-- intro component -->
  </section>
  
  <!-- Section 3: Vision -->
  <section class="homepage-vision">
    <!-- split-section ou text + image -->
  </section>
  
  <!-- Section 4: Formations -->
  <section class="homepage-formations-featured">
    <!-- grid de cartes éditoriales -->
  </section>
  
  <!-- Section 5: Vie universitaire -->
  <section class="homepage-vie-universitaire">
    <!-- sectionsList ou splitSections -->
  </section>
  
  <!-- Section 6: Actualités -->
  <section class="homepage-actualites">
    <!-- newsBlock avec 3-4 items minimum -->
  </section>
  
  <!-- Section 7: Témoignages -->
  <section class="homepage-temoignages">
    <!-- nouvelle composition: pullquote + cards photos -->
  </section>
  
  <!-- Section 8: CTA final -->
  <section class="homepage-ctas-final">
    <!-- textCta ou deux-column -->
  </section>
</main>

<footer class="site-footer">...</footer>

<script src="/js/main.js"></script>
```

**Relief visuelle (spacing) :**
- `--space-24` entre chaque section principale
- `--section-divider` (ligne mince) entre sections 1-2, 3-4, 5-6
- Largeur de lecture `--read-width: 65ch` pour tout le texte étendu
- Conteneur `--container-max: 1200px` centré

---

## 2. Page Université — Histoire, Mission, Gouvernance

### Structure multi-sous-sections

#### Sous-page : `universite/` avec les sections suivantes :

**Section A : Histoire**
- Titre : "Histoire de l'UCAO"
- Kicker : "Fondation et évolution"
- Contenu textuel détaillé (plus long que le court paragraphe actuel)
- Repères temporels :
  - Fondation (année, confirmation admin requise)
  - Droit pontifical (année, confirmation)
  - Expansion réseau (années, pays)
- Image : chronologie visuelle ou photo ancienne du campus
- Note [À CONFIRMER] visible si dates non confirmées

**Section B : Identité Catholique et Engagement Institutionnel**
- Titre : "Identité catholique et mission"
- Kicker : "Foyers et formation humaine"
- Contenu :
  - Charisme catholique de l'UCAO
  - Engagement envers les valeurs chrétiennes humanistes
  - Respect de la liberté de conscience
  - Partenariats avec Église et organisations catholiques
- Image : église locale, célébrations interconfessionnelles sur le campus (photos authentiques)

**Section C : Gouvernance et Organisation**
- Titre : "Gouvernance"
- Kicker : "Structure et organes"
- Sous-sections :
  - Conseil d'administration
  - Conseil scientifique
  - Présidence et direction
  - Relations avec le réseau UCAO
- Tableau ou liste d'organes avec noms (si disponibles) ou fonctions
- Note de transparence : "Les organes de gouvernance sont en cours de publication"

**Section D : Le Réseau UCAO**
- Titre : "Le réseau UCAO en Afrique de l'Ouest"
- Kicker : "7 pays, une vision"
- Carte d'Afrique de l'Ouest marquante les 7 pays du réseau
- Liste des unités universitaires avec :
  - Nom de l'unité
  - Ville pays
  - Président/directeur (si disponible)
  - Formations phares
- Note : distinctions entre réseau (structure) et unité de Conakry (implantation locale)

**Section E : Unité Universitaire de Conakry**
- Titre : "Unité Universitaire de Conakry"
- Contenu localisé :
  - Adresse physique : Coléah, route de Niger, à côté de l'église catholique Saint Michel
  - Coordonnées propres (email confirmé, téléphones confirmés)
  - Localisation Google Maps intégrée (ou itinéraire piéton)
  - Photo du bâtiment principal ou portail d'entrée
- Note d'ancrage : "Cette unité porte les mêmes exigences que le réseau, adaptées au contexte guinéen"

---

## 3. Pages Formations — Catalogue par Niveau et Spécialité

### Structure principale : `/formations/`

**En-tête (hero) :**
- Titre : "Trouver une formation"
- Lead : "Consultez le catalogue des formations de Licence et de Master proposées par l'Unité Universitaire de Conakry."
- Image : photographie de classe ou d'étudiants ( amongst les assets WhatsApp)

**Section 1 : Recherche et Filtres**
- Zone de recherche :
  - Étiquette "Rechercher une formation"
  - Champ de entrée type search avec placeholder "Rechercher par domaine ou niveau"
  - Étiquette "Niveau" avec options : Licence, Master, Tous
- Étiquette "Par domaine" avec filtres :
  - Droit et Sciences juridiques
  - Gestion et Économie
  - Sciences de la santé
  - Lettres et Humanités
  - Ingénierie et Technologies
- Bouton "Effacer les filtres"

**Section 2 : Catalogue par Niveau**

#### Sous-section 2a : Licence (Premier cycle)
- Titre : "Licence — Premier cycle"
- Kicker : "Après le baccalauréat"
- Texte d'introduction : "Les formations de Licence de l'UCAO durent généralement 3 ans et préprennent aux entrées dans la vie professionnelle ou aux études de Master."
- Grille de programmes (format varié, pas ident) :
  - Chaque programme a :
    - Nom du programme (Licence en Droit, Licence en Gestion, etc.)
    - Description concise (1-2 phrases)
    - Durée (3 ans)
    - Prérequis (baccalauréat ou équivalent)
    - Parcours possible après Licence
    - Petite icône ou indicateur visuel
- Texte : "Le catalogue complet doit être confirmé par l'administration. Nombre d'effets et listes précises sont à valider."

#### Sous-section 2b : Master (Second cycle)
- Titre : "Master — Second cycle"
- Kicker : "Après une licence ou équivalent"
- Texte d'introduction : "Les formations de Master de l'UCAO durent 2 ans et spécialisent les étudiants dans un domaine précis, avec une orientation recherche ou professionnelle."
- Grille de programmes (même format varié que Licence) :
  - Master en Droit, Master en Gestion, Master en Sciences de l'Éducation, etc.
  - Spécialisations au sein de chaque master
  - Mémoire/projet de fin d'études requis
- Note : "Les listes précises de spécialisations et les effectifs sont à confirmer par l'administration."

**Section 3 : Fiche de formation (page dédiée)**
Lorsqu'un utilisateur clique sur un programme :
- Titre de la formation
- Objectifs de la formation
- Programme détaillé (unités d'enseignement)
- Équipe pédagogique (noms et titres, si disponibles)
- Conditions d'admission spécifiques
- Débouchés professionnels
- Témoignage d'ancien élève (si disponible et confirmé)
- Bouton "Postuler" ou "Demander un dossier"

---

## 4. Pages Admissions — Procédure Guidée

### Structure principale : `/admissions/`

**En-tête (hero) :**
- Titre : "Rejoindre l'UCAO-UUCo"
- Lead : "Découvrez la procédure d'admission, les conditions et les documents nécessaires pour intégrer l'une de nos formations."
- Image : portrait étudiant ou documentation (parmi assets)

**Section 1 : Procédure Étape par Étape**
- Titre : "Procédure d'admission"
- Sous-titre : "Du choix de la formation à l'inscription finale"
- Listes numérotées des 5-7 étapes :

1. **Choisir une formation** — Consulter le catalogue, identifier le programme souhaité
2. **Vérifier les conditions d'admission** — Niveau requis, diplôme, âge, examen d'entrée le cas échéant
3. **Constituer le dossier** — Liste documentée (voir section 2)
4. **Déposer la candidature** — Modalités (en ligne ou au secrétariat)
5. **Examen du dossier** — Délais de traitement, communication de la décision
6. **Réponse et inscription** — Paiement des frais, inscription définitive, remise des documents

**Chaque étape a :**
- Icône ou indicateur visuel
- Titre court (2-3 mots)
- Texte explicatif (2-3 phrases maximum)
- Temps estimé ou difficulté

**Section 2 : Documents Requis**
- Titre : "Documents à fournir"
- Liste exhaustive (plus détaillée que les 5 items actuels) :
  - Pièce d'identité ou passeport (original + copie)
  - Diplôme(s) obtenu(s) et relevés de notes (baccalauréat, licence)
  - Acte de naissance (copie légale)
  - Photos d'identité (récentes, format spécifique)
  - Certificat de nationalité ou de résidence
  - Certificat médical d'aptitude (si requis)
  - Lettre de motivation (pour certains masters)
  - Deux lettres de recommandation (pour certains programmes)
- Tableau avec statut : "Requis / Optionnel / [À CONFIRMER]"
- Téléchargement de modèle de formulaire (si disponible)

**Section 3 : Informations Financières**
- Titre : "Frais d'inscription et coûts"
- Approche transparente :
  - "Les frais d'inscription varient selon le niveau (Licence/Master) et la spécialité."
  - Plage de frais (ex: "Frais de licence : entre X et Y FCFA par an") — jamais de chiffres spécifiques non confirmés
  - Échéances de paiement (à l'inscription, milieu d'année, fin d'année)
  - Aides financières ou bourses le cas échéant (source confirmée)
- Note obligatoire : "Les tarifs présentés sont ceux de l'année en cours tels confirmés par l'administration. Pour les informations non confirmées, consulter le service des admissions."

**Section 4 : Conditions Spéciales**
- Titre : "Conditions d'admission particulières"
- Cases à cocher ou listes :
  - Étudiants internationaux (procédure spécifique)
  - Reconnus handicape (dispositifs d'accompagnement)
  - Boursiers (conditions d'attribution)
  - Redoublants ou transférés d'autres universités

**Section 5 : Contact Admissions**
- Titre : "Contactez le service des admissions"
- Informations complètes (validées) :
  - Email unique confirmé (résolution du conflit info@ucao.uuco.org / info@ucao-uuco.org)
  - Numéros de téléphone validés (3 numéros, tous confirmés)
  - Horaires d'accueil au secrétariat (journées et heures précises)
  - Adresse physique du service (bâtiment, étage, pièce)
- CTA : "Prendre rendez-vous" → formulaire de prise de rendez-vous ou email

---

## 5. Page Vie Universitaire — Campus et Étudiants

### Structure principale : `/vie-universitaire/`

**En-tête (hero) :**
- Titre : "Vivre l'université à Conakry"
- Lead : "La vie universitaire à l'UCAO-UUCo s'organise autour des études, du campus et des activités qui rythment l'année académique."
- Image : photo drone du campus ou vie étudiante (parmi assets)

**Section 1 : Vie Étudiante**
- Titre : "Vie étudiante et accompagnement"
- Contenu :
  - Nombre d'étudiants actuels (nombre confirmé si disponible, sinon "Une communauté étudiante grandissante")
  - Services d'accompagnement : orientation, tutorat, aide administrative
  - Associations étudiantes (types existants : culturelle, sportive, académique)
  - Vie résidentielle (si applicable : logement sur/inf-campus)
- Image : étudiants participating à une activité (parmi assets)

**Section 2 : Campus et Infrastructure**
- Titre : "Le campus de Coléah"
- Contenu :
  - Description physique du campus (étendue, bâtiments, espaces)
  - Infrastructures : bibliothèque, laboratoires, salles de cours, espaces de détente
  - Environnement : localisation Coléah, route de Niger, proximité église Saint Michel
  - Plan du campus (schéma simplifié : bâtiments principaux, entrée, bibliothèque)
- Image : photo panoramique du campus ou bâtiment principal (parmi assets)

**Section 3 : Activités et Événements**
- Titre : "Activités et événements"
- Contenu :
  - Calendrier annuel des événements (rentrée, conférences, journées étudiantes, cérémonies)
  - Types d'activités passées (colloques, ateliers, sports, culturelles)
  - Événements à venir (ce mois-ci, ce trimestre)
  - Galerie photo d'événements passés (miniatures d'images assets)
- Note : "Le calendrier complet est disponible auprès du service vie universitaire"

**Section 3 : Environnement Académique**
- Titre : "Ressources académiques"
- Contenu :
  - Bibliothèque : horaires, nombre de titres, ressources numériques
  - Espaces de travail : salles de étude individuelles et groupes
  - Laboratoires et équipements (domaines scientifiques)
  - Accès aux ressources numériques (base de données, revues en ligne)
  - Soutien pédagogique : encadrement, accompagnement aux mémoires/mémoires de fin d'études
- Image : bibliothèque ou salle de classe (parmi assets)

---

## 6. Page Actualités — Liste Enrichie

### Structure principale : `/actualites/`

**En-tête (hero) :**
- Titre : "Actualités de l'UCAO-UUCo"
- Lead : "Retrouvez les publications récentes de l'Unité Universitaire de Conakry : événements, colloques et vie du campus."
- Image : une image d'actualité ou le logo avec mention "Actualités"

**Section 1 : Liste d'Actualités**
- Grid d'actualités (3 colonnes desktop, 1 colonne mobile)
- Chaque carte d'actualité :
  - Étiquette date : "16 nov. 2025" ou "Novembre 2025"
  - Étiquette catégorie : "Colloque", "Événement", "Vie étudiante", "Publication" (couleur selon la catégorie)
  - Titre de l'actualité (lien vers la page détaillée si existante)
  - Résumé court (2-3 phrases maximum)
  - Auteur ou service responsable (optionnel)
- Note : "Les actualités ci-dessous proviennent de l'ancien site et doivent être confirmées par l'administration."

**Quantité visée :**
- Minimum 8 actualités affichées (contre 3 dans l'actuel)
- Cible : 12-15 actualités dans le système, dont 8-10 affichées sur la page d'accueil et le reste accessible via le/archive page

**Section 2 : Filtres et Catégories**
- Boutons filtres : "Toutes", "Colloques", "Événements", "Vie étudiante", "Publications"
- Utilisation du champ `category` dans les données JSON

**Section 3 : Actualités Plus Anciens**
- Lien "Toutes les actualités" → archive ou page listant tout
- Chargement "Voir plus" incrémental (pas tout charger d'un coup)

---

## 7. Page Contact — Coordonnées et Localisation

### Structure principale : `/contact/`

**En-tête (hero) :**
- Titre : "Contactez-nous"
- Lead : "Vous souhaitez plus d'informations sur nos formations, nos services et nos partenariats ?"
- Image : photo de l'équipe administrative ou du bâtiment (parmi assets)

**Section 1 : Coordonnées**
- Titre : "Coordonnées"
- Contenu structuré :
  - **Adresse physique :**
    - "Coléah, route de Niger, à côté de l'église catholique Saint Michel"
    - "Conakry, Guinée"
    - Avec petite carte ou icône de lieu
  - **Adresse e-mail :**
    - Une seule adresse confirmée (résolution du conflit)
    - Icône mailto à côté
  - **Téléphones :**
    - 3 numéros avec indicatif (+224)
    - Chaque numéro précédé de "Tel :"
    - Horaires d'appel recommandés (si connus)
  - **Formulaire de contact** (voir section 3)

**Section 2 : Localisation**
- Titre : "Notre localisation"
- Contenu :
  - Description textuelle de l'emplacement (rue, repères)
  - Intégration Google Maps ou équivalent (carte centrée sur Coléah, route de Niger)
  - Liens vers :
    - "Itinéraire depuis le centre de Conakry"
    - "Télécharger le plan d'accès PDF"
  - Horaires d'accès au bâtiment (heures d'ouverture)
- Image : photo du portail d'entrée ou de la route d'accès (parmi assets)

**Section 3 : Formulaire de Contact**
- Titre : "Envoyez-nous un message"
- Règle : "Aucun backend n'est identifié pour ce formulaire. La limite est documentée et aucune soumission simulée n'est affichée comme réussie."
- Champs du formulaire :
  - Nom (texte, requis)
  - E-mail (email, requis)
  - Sujet (texte, optionnel)
  - Message (textarea, requis)
- Pied de formulaire :
  - Note sur l'absence de backend
  - Délai de réponse attendu (ex: "Nous répondons sous 5 jours ouvrés")
  - Alternative : "Pour une réponse immédiate, appelez-nous au [numéro]"

**Section 4 : Accès Rapide**
- Titre : "Accès rapide"
- Liens vers :
  - Formations → `/formations/`
  - Admissions → `/admissions/`
  - Actualités → `/actualites/`
  - Université → `/universite/`

---

## 8. Architecture de Données JSON — Refonte

### Objectif : Centraliser tout le contenu dans des fichiers JSON

Tous les contenus ci-dessus seront stockés dans `src/content/pages/[slug].json` et lus par `build.js`. L'architecture JSON doit permettre :

1. **Contenu éditorial par section** — Chaque section de chaque page a son propre bloc JSON.
2. **Variabilité des formats** — Toutes les fonctions de build.js existantes (hero, intro, statsGrid, cards, splitSection, etc.) sont réutilisables.
3. **Flags de confirmation** — Chaque champ sensible porte un drapeau `[À CONFIRMER]` ou `[VALIDÉ]`.
4. **Médias locaux** — Tous les champs image utilisent les chemins `/assets/images/...` avec résolveur `resolveImage()`.
5. **Métadonnées SEO par page** — title, metaDescription, ogTitle, ogDescription, ogImage par page.

### Structure JSON simplifiée pour l'accueil (home.json)

```json
{
  "slug": "home",
  "title": "Accueil",
  "metaDescription": "Université Catholique de l'Afrique de l'Ouest – Unité Universitaire de Conakry : formations, admissions, vie universitaire et actualités à Conakry, Guinée.",
  
  /* HERO */
  "hero": { ... modèle hero existant mais avec image locale validée },
  
  /* INTRO */
  "intro": { "title": "...", "lead": "...", "text": "..." },
  
  /* SECTION VISION */
  "vision": {
    "title": "Notre vision",
    "textGauche": "...",
    "imageDroite": "WhatsApp Image 2026-... .jpeg",
    "imageDroiteAlt": "...",
    "creditDroite": "Photo UCAO-UUCo"
  },
  
  /* SECTION FORMATIONS EN JEUX */
  "formationsEnJeu": {
    "title": "Nos formations",
    "items": [
      { "label": "Licence en Droit", "desc": "...", "image": "...", "ctaHref": "/formations/?niveau=licence" },
      { "label": "Master en Gestion", "desc": "...", "image": "...", "ctaHref": "/formations/?niveau=master" }
    ]
  },
  
  /* SECTION VIE UNIVERSITAIRE */
  "vieUniversitaire": {
    "title": "Vie universitaire",
    "intro": "...",
    "sections": [
      { "title": "Étudiants", "text": "...", "image": "..." },
      { "title": "Campus", "text": "...", "image": "..." }
    ]
  },
  
  /* SECTION ACTUALITÉS */
  "actualites": {
    "title": "Actualités récentes",
    "items": [
      { "title": "Actualité 1", "date": "16 nov. 2025", "summary": "...", "category": "Événement" },
      { "title": "Actualité 2", "date": "nov. 2025", "summary": "...", "category": "Colloque" }
    ]
  },
  
  /* TEMOIGNAGES */
  "temoignages": {
    "title": "Témoignages",
    "items": [
      { "text": "« ... »", "cite": "Étudiant Licence 2", "note": "[À CONFIRMER]" }
    ]
  },
  
  /* CTA FINAL */
  "ctaFinal": {
    "title": "Prêt à rejoindre l'UCAO ?",
    "ctaPrimary": { "label": "Démarrer inscription", "href": "/admissions/" },
    "ctaSecondary": { "label": "Contacter", "href": "/contact/" }
  }
}
```

### Mise à jour du build.js si nécessaire

Le fichier `src/build.js` existant possède déjà toutes les fonctions de composition nécessaires (hero, intro, splitSection, cards, textCta, pullquote, statsGrid, newsBlock, contactForm, etc.). Les nouvelles sections décrites ci-dessus peuvent être implémentées en :

1. Ajoutant de nouvelles fonctions de rendu dans build.js (ex: `homepageHero()`, `formationsCatalog()`, `admissionsSteps()`, etc.)
2. Ou en utilisant les fonctions existantes avec les bonnes données JSON

**Recommandation :** Dans un premier temps, utiliser les fonctions existantes de build.js avec les nouvelles structures JSON. Si la quantité de personnalisation par page devient trop élevée, alors ajouter de nouvelles fonctions. Mais pour un site statique sans framework, il est préférable de réutiliser le pattern existant.

---

## 9. Stratégie de Migration du Contenu

### Contenu à conserver (tiré de l'actuel + vérifié) :

1. **Logo et palette** — Conservés tels quels, dérivés du logo UCAO_LOGO.png.
2. **Photos campus/étudiants** — Toutes les WhatsApp Images sont réutilisées, optimisées en WebP.
3. **Structure JSON existante** — `site.json`, `nav.json`, `pages/*.json` conservés comme source de vérité.
4. **Contenu factuel confirmé** — Dates, noms, adresses qui ont été vérifiés avec l'administration.
5. **Formules honnêtes** — Format du formulaire de contact, mentions "[À CONFIRMER]".

### Contenu à corriger/mettre à jour :

1. **Toutes les occurrences [À CONFIRMER]** — Doivent être either :
   - Vérifiées avec l'administration et le marquage retiré, ou
   - Marqués comme "non disponible" dans l'interface publique avec note d'orientation vers le contact.

2. **Hero image** — Remplacer hero-conakry.webp (Wikimedia) par photo campus UCAO.
3. **Statistiques** — Tous les chiffres ("7 pays", "fondée 2000") doivent être confirmés ou marqués [À CONFIRMER] de façon visible.
4. **Tarifs et frais** — Mettre à jour ou retirer les informations financières non actuelles.
5. **Coordonnées email/phones** — Résoudre le conflit, valider les chiffres.

### Nouveau contenu à ajouter :

1. **Sections supplémentaires** — Histoire détaillée, Gouvernance, Partenariats/recherche (si documentés).
2. **Plus d'actualités** — Étendre de 3 à 8-10 items minimum.
3. **Témoignages** — Section dédiée avec politique de validation.
4. **Catalogue formations** — Étendre de 2 programmes à gamme complète Licence/Master.
5. **Pages manquantes** — Gouvernance, Partenariats (si documents disponibles).

### Centralisation et évitement des duplications :

1. **Une seule source de vérité** — Chaque donnée (email, téléphone, adresse, tarif) apparaît dans UN SEUL fichier JSON et est réutilisée sur toutes les pages qui en ont besoin.
2. **Héritage de contenu** — Les champs globaux (siteName, fullName, email, phones) définis dans `site.json` sont hérités par toutes les pages via la fonction `head()` et `nav()` de build.js.
3. **Pas de duplication de navigation** — Le menu principal provient de `nav.json`, inclus sur toutes les pages via la fonction `nav()`.
4. **Footer unique** — Défiint dans `renderGeneric()` ou via des fonctions partielles, inclus sur toutes les pages.

---