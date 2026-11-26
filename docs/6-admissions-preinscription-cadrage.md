# Cadrage administratif et fonctionnel des admissions - UCAO-UUCo

*Version préliminaire — remis à l'administration pour validation*

---

## État du travail

| État | Description |
|------|-------------|
| **Réalisé** | Composantes documentaires extraites du dépôt existant : structure du site, formations (JSON `src/content/formations.json`), contenu editorial (`editorial-tracking.md`), design brief (`DESIGN-BRIEF.md`), roadmap (`ROADMAP.md`). |
| **Propositions** | Cadrage complet des 7 sections demandées par l'issue #6, présenté ci-après. |
| **Questions ouvertes** | Tous les éléments nécessitant confirmation formelle de la part de l'administration (dates d'ouverture, pièces justificatives exactes, tarifs, habilitations, délais, canaux de notification, bases juridiques). |
| **Décisions en attente** | Voir chaque section pour les items spécifiques en attente. |

---

## 1. PARCOURS CANDIDAT

Description détaillée du parcours de préinscription, de la première prise de contact à la décision administrative et à l'inscription définitive. Distinction Licence/Master le cas échéant.

| Étape | Acteur | Action | Délai (à confirmer) | Résultat | Cas particulier |
|------|--------|--------|———|--------|--------------|
| 1. Première prise de contact | Candidat | Decouvre le site web, le catalogue des formations, les informations d'admission | — | Accès aux informations générales | — |
| 2. Préinscription en ligne | Candidat | Remplit le formulaire de préinscription sur le site | — | Création d'un numéro de candidature | — |
| 3. Vérification des documents | Services des admissions | Contrôle de la complétude du dossier (pièces justificatives) | — | Dossier validé ou demande de compléments | Documents manquants → retour au candidat |
| 4. Comité d'admission | Administration | Examen du dossier, décisions par filière | — | Admis / Attente / Non admis | Cas particuliers (dérogations, réorientation) |
| 5. Notification | Administration | Envoi de la décision au candidat | — | Reçu formel de décision | — |
| 6. Inscription définitive | Candidat + Scolarité | Finalisation de l'inscription, paiement des frais, inscription aux cours | — | Inscription définitive en tant qu'étudiant | — |

### Distinction Licence / Master

| Aspect | Licence | Master |
|--------|---------|--------|
| Durée | 3 ou 4 ans selon la spécialité | 2 ans (cours du soir) |
| Modalités d'admission | Sur pièces, validation des prérequis | Sur dossier + entretien possible |
| Périodes d'admission | À définir (souvent septembre) | Cours du soir, calendrier propre |
| Contrôle des pièces | Vérification des documents de fin de lycée / Baccalauréat | Vérification des relevés de licence, Bachelor, etc. |

---

## 2. DONNÉES ET DOCUMENTS

Matrice exhaustive des données à valider par les services des admissions. Jamais de données inventées ; les items en "À confirmer" attendent validation institutionnelle.

### 2.1 Données personnelles

| Donnée | Obligatoire / Facultatif | Format accepté | Finalité | Moment de collecte | Règle de validation |
|--------|—|—|—|—|—|
| Nom de famille | Obligatoire | Texte | Identification | Préinscription | Format attendu (ex. majuscules) |
| Prénom(s) | Obligatoire | Texte | Identification | Préinscription | — |
| Date de naissance | Obligatoire | Date (JJ/MM/AAAA) | Âge, catégories d'âge | Préinscription | Format valide |
| Lieu de naissance | Obligatoire | Ville, Pays | Identification | Préinscription | — |
| Nationalité | Obligatoire | Texte | Vérification des conditions d'inscription | Préinscription | — |
| Adresse actuelle | Obligatoire | Adresse complète | Contact, dispatch | Préinscription | Format complet |
| Numéro de téléphone | Obligatoire | Téléphone | Contact urgent | Préinscription | Format validé |
| Adresse e-mail | Obligatoire | E-mail | Communication officielle | Préinscription | Format e-mail valide |
| Situation familiale | Facultatif | Case à cocher | Information administrative | Inscription définitive | — |
| Numéro de pièce d'identité | Obligatoire | Numéro (CNI, passeport) | Identité légale | Préinscription | Format et validité |
| Piece d'identité scanned | Obligatoire | PDF / Image | Justificatif | Préinscription | Lisibilité, validité |

### 2.2 Informations académiques

| Donnée | Obligatoire / Facultatif | Format accepté | Finalité | Moment de collecte | Règle de validation |
|--------|—|—|—|—|—|
| Dernier diplôme obtenu | Obligatoire | Intitulé du diplôme | Vérification des prérequis | Préinscription | Correspondance avec la formation visée |
| Année de obtention | Obligatoire | Année (AAAA) | Trier par promotion | Préinscription | Cohérence avec l'âge |
| École / établissement précédent | Obligatoire | Nom de l'établissement | Contexte académique | Préinscription | Existence vérifiable |
| Parcours antérieur | Facultatif | Texte | Information complémentaire | Préinscription | — |
| Spécialité au lycée | Facultatif | Texte | Orientation vers formation | Préinscription | Pertinence selon la filière |
| Notes / Moyennes | Facultatif | NuméTabire ou texte | Aide au classement (si applicable) | Préinscription | Format numérisable |
| Résultat d'évaluations précédentes | Facultatif | Texte / PDF | Complément d'évaluation | Inscription définitive | — |
| Attestations de réussite | Obligatoire | PDF / Image | Preuve officielle | Préinscription ou inscription | Lisibilité, authenticité |

### 2.3 Pièces justificatives

| Pièce | Obligatoire / Facultatif | Format accepté | Finalité | Commentaire |
|-------|—|—|—|---|
| Copie du diplôme du dernier diplôme obtenu | Obligatoire | PDF, image scannée | Preuve de niveau | Doit être lisible et complet |
| Relevé de notes / transcripts | Obligatoire | PDF | Preuve des résultats | Doit mentionner les matières et les notes |
| Copie de la piece d'identité | Obligatoire | PDF, image scannée | Justificatif d'identité | Recto/verso si nécessaire |
| Certificat de nationalité | Obligatoire | PDF | Vérification nationale | — |
| Certificat de résidence | Obligatoire | PDF | Attestation de domicile | — |
| Photos d'identité | Obligatoire | Image (jpg, png) | Identification sur carte étudiante | Format identité administrative |
| Acte de naissance | Obligatoire | PDF | Preuve de naissance | Pour les candidats non justifiés par le diplôme |
| Certificat de bonne conduite | Facultatif | PDF | Caractère | Selon formation et filière |
| Portfolio / œuvres | Selon formation | PDF, image, lien | Évaluation qualitative | Pour les formations artistiques, communication |
| lettre de motivation | Selon formation | PDF / Texte | Motivation personnelle | Pour certains Masters |
| Recommandations / lettres de référence | Facultatif | PDF | Témoignage externe | Selon les filières |
| Justificatif de situation familiale | Facultatif | PDF | Information contextuelle | Mariage, naissance, etc. |

### 2.4 Formats acceptés et règles de validation

| Type de document | Formats autorisés | Taille maximale | Contraintes de contenu | Validation |
|-----------------|-------------------|----------------|-----------------------|-----------|
| Pièces d'identité | PDF, JPG, PNG | 10 Mo | Lisibilité, recto/verso si applicable | Agent administratif |
| Relevés de notes | PDF | 15 Mo | Toutes les mentions lisibles | Service des admissions |
| Photos d'identité | JPG, PNG | 5 Mo | Format identité standard | Verification visuelle |
| Lettres de motivation | PDF, TXT | 10 Mo | Contenu original | Lecture par jury |
| Certificats divers | PDF | 10 Mo | Authenticité des signatures | Vérification |

---

## 3. GESTION DES DOSSIERS

Proposition de cycle de vie des dossiers et machine à états documentée.

### 3.1 Statuts du dossier

| Statut | Signification | Couleur associated (UI) |
|--------|--------------|-----------------------|
| `en_attente_preinscription` | Dossier créé, en attente du formulaire de préinscription en ligne | Gris |
| `preinscrit` | Préinscription en ligne complétée, en attente de la validation des documents | Vert clair |
| `en_validation` | Documents reçus, en cours d'examen par le comité d'admission | Orange |
| `admis` | Décision d'admission rendue | Vert |
| `attente` | Dossier en liste d'attente | Bleu clair |
| `refuse` | Décision de non-admission | Rouge |
| `inscrit` | Inscription définitive validée et payée | Vert foncé |

### 3.2 Machine à états — transitions autorisées

```
en_attente_preinscription
  └──⟶ preinscrit (formulaire complété + documents envoi en cours)
preinscrit
  ├──⟶ en_validation (documents validés, dossier transmis)
  ├──⟶ preinscrit (documents incomplets → demande de compléments au candidat)
  └──⟶ refuse (décision immédiate si critères non remplis)
en_validation
  ├──⟶ admis (décision positive)
  ├──⟶ attente (liste d'attente)
  └──⟶ refuse (décision négative)
admis
  └──⟶ inscrit (paiement et inscription definitifs)
refuse
  Aucune transition automatique → réouverture possible sur demande motivée
inscrit
  Aucune transition (dossier clos, suivi scolarité)
```

### 3.3 Transitions interdites

- `en_attente_preinscription` → `admis` (doit passer par `preinscrit` puis `en_validation`)
- `en_validation` → `preinscrit` (recul possible mais nécessite recas)
- `refuse` → `admis` sans nouvelle procédure (repossession par un nouveau dépôt)
- `inscrit` → tout autre statut (dossier clos)

### 3.4 Acteurs responsables et conditions de changement de statut

| Statut | Acteur | Conditions de changement | Notification |
|--------|--------|———|---|
| `en_attente_preinscription` | Candidat (via formulaire) | Soumission du formulaire en ligne | Aucune (état initial) |
| `preinscrit` | Services des admissions | Réception de tous les documents obligatoires ; validation de la complétude | Email automatique de confirmation |
| `en_validation` | Comité d'admission | Début de l'examen du dossier ; date de début notifiée | — |
| `admis` | Comité d'admission | Décision d'adoption ; reçu de décision généré | Notification officielle |
| `attente` | Comité d'admission | Dossier retenu en liste d'attente ; motif notifié | Email de statut |
| `refuse` | Comité d'admission | Décision de non-adoption ; motif détaillé | Notification avec voies de recours le cas échéant |
| `inscrit` | Scolarité + Candidat | Paiement des frais confirmation ; dépôt des dernières pièces | Réçu d'inscription |

### 3.5 États qui nécessitent une décision administrative

Les transitions suivantes nécessitent une décision formelle de la part des services d'administration :

1. `preinscrit` → `en_validation` : Validation de la conformité des documents et ouverture de l'examen par le comité.
2. `en_validation` → `admis` / `attente` / `refuse` : Décision d'admission suite au examen du comité.
3. `attente` → `admis` (si place disponible) : Décision de promotion en attendant.
4. `refuse` → `attente` (recours ou liste d'attente) : Décision de réexamen.
5. `admis` → `inscrit` : Validation du paiement et de l'inscription définitive.

---

## 4. RÔLES ET PERMISSIONS

Matrice détaillée des droits selon les rôles : candidats, Admissions, Scolarité, Administration.

| Action | Candidat | Services Admissions | Scolarité | Administration (directrice) | Commentaire |
|--------|----------|---------------------|-----------|---------------------------|-------------|
| **Consultation** | | | | | |
| Voir son propre dossier | ✅ | ✅ | ✅ | ✅ | Identité du candidat vérifiée |
| Liste des formations | ✅ | ✅ | ✅ | ✅ | Publie sur le site |
| Conditions d'admission | ✅ | ✅ | ✅ | ✅ | Sur pages publiques |
| **Modification** | | | | | |
| Modifier ses informations personnelles | ✅ (avant validation) | ❌ | ❌ | ❌ | Après verrouillage, demande de réédition |
| Ajouter des pièces justificatives | ✅ (avant passage en `en_validation`) | ❌ | ❌ | ❌ | Après verrouillage, nouvelle soumission |
| **Correction** | | | | | |
| Corriger une erreur dans les données personnelles | ✅ (avant validation) | ❌ | ❌ | ❌ | Doit être justifiée |
| **Téléchargement** | | | | | |
| Télécharger son reçu de préinscription | ✅ | ❌ | ❌ | ❌ | Après création |
| Télécharger son reçu d'inscription | ✅ (une fois `inscrit`) | ❌ | ❌ | ❌ | Après inscription définitive |
| **Exportation** | | | | | |
| Exporter les données de son dossier (PDF) | ✅ (demande) | ❌ | ❌ | ❌ | Sous réserve de conformité RGPD |
| **Suppression** | | | | | |
| Supprimer son compte/dossier | Demande ➔ ❌ (après création) | ❌ | ❌ | ❌ | Traitement par l'administration seulement, délai minimum 30j |
| **Changement de statut** | | | | | |
| Passer de `preinscrit` → `en_validation` | ❌ | ✅ (après vérification documents) | ❌ | ❌ | Comité d'admission |
| Passer de `en_validation` → `admis` / `refuse` / `attente` | ❌ | ✅ (décision du comité) | ❌ | ❌ | Seul le comité décide |
| Passer de `admis` → `inscrit` | ❌ | ✅ (après paiement et vérification) | ✅ (traitement financier) | ❌ | Scolarité déclenche |
| **Accès aux pièces justificatives** | | | | | |
| Voir ses propres pièces uploadées | ✅ | ❌ | ❌ | ❌ | Identité vérifiée |
| Télécharger les pièces complètes du dossier | ✅ (les siennes) | ❌ | ❌ | ❌ | Après identification |
| Accéder aux pièces d'un autre candidat | ❌ | ❌ | ❌ | ❌ | Principe de confidentialité |
| Modifier les pièces d'un autre candidat | ❌ | ❌ | ❌ | ❌ | Renfort de confidentialité |

### Application du principe du moindre privilège

- **Candidat** : ne peut que consulter et modifier ses propres données avant validation ; ne peut changer de statut ; ne peut pas accéder aux dossiers des autres.
- **Services Admissions** : peut modifier les statuts, valider les pièces, changer de statut après procédure ; mais ne peut pas modifier les données personnelles du candidat librement.
- **Scolarité** : ne peut passer de `admis` à `inscrit` qu'après confirmation de paiement ; ne peut pas modifier les statuts en amont.
- **Administration (directrice)** : seuls droits de lecture globale, approbation des politiques, gestion des exceptions et des contentieux. Aucun droit de modification directe sur les dossiers candidats.

---

## 5. NOTIFICATIONS ET IDENTIFIANTS

Documentation des canaux de notification, événements déclencheurs, format du reçu et système de numérotation des candidatures.

### 5.1 Canaux de notification possibles

| Canal | Événements déclencheurs | Informations communiquées | Format du reçu |
|-------|----------------------|------------------------|---------------|
| **Email** | Création de compte, changement de statut, réception des documents, décision d'admission, invitation à l'inscription | Numéro de candidature, nouvelle statut, liens vers les actions possibles | PDF / HTML simple, avec entête UCAO-UUCo |
| **SMS** | Rapatriement urgent, rappel de paiement, rappel échéance | Numéro de candidature, message court, lien vers site | Texte court (160 caractères) |
| **Espace candidat (site)** | Tout changement de statut, mise à jour de liste, nouveaux messages | Tableau de bord avec statut actuel, actions possibles | Interface utilisateur |
| **Lettre recommandée** | Décision définitive, convocation entretien, notification de refus avec recours | Déclaration officielle, références administratives, coordonnées pour recours | Enveloppe universitaire, accusé de réception |
| **Espace physique (accueil)** | Première venue, remise de documents, questions rapides | Information orale + document remis | Réception papier |

### 5.2 Système de numérotation des candidatures

| Composant | Format | Exemple | Règles |
|-----------|--------|---------|--------|
| Préfixe | Fixe | `UC` | Identifie le système UCAO |
| Année d'entrée | 2 digits | `26` | Année calendaire ou académique selon convention |
| Type de formation | Lettre | `L` = Licence, `M` = Master | Permet le tri par niveau |
| Numéro séquentiel | 4 chiffres | `0001` | Incrémental, réinitialisé chaque année |
| **Numéro complet** | `UC-26-L-0001` | `UC-26-L-0001` | — |

### 5.3 Format du reçu de préinscription

Chaque reçu de préinscription doit comporter :

- **En-tête** : "Université Catholique de l'Afrique de l'Ouest – Unité Universitaire de Conakry"
- **Numéro de candidature** : format `UC-ANN-TYPE-XXXX` (voir section 5.2)
- **Date de création** : Date du dépôt du formulaire
- **Contact du candidat** : Nom, prénom, téléphone, e-mail
- **Formation visée** : Intitulé exact et niveau (Licence/Master)
- **État du dossier** : Statut actuel (en_attente_preinscription, preinscrit, etc.)
- **Liste des pièces reçues** : Checklist cochée ou non avec nombres de pièces
- **Signature / Horodatage** : Généré automatiquement par le système
- **QR code** : Renversant vers l'espace candidat en ligne

### 5.4 Événements déclencheurs et messages associés

| Événement | Canal | Sujet du message | Contenu minimal |
|-----------|-------|-----------------|----------------|
| Préinscription créée | Email | "Votre préinscription a été reçue" | Confirmation, numéro de candidature, liste de pièces attendues, délai |
| Documents complets | Email | "Votre dossier est complet et étudié" | Récapitulatif, date passage en `en_validation`, prochaines étapes |
| Passage en `en_validation` | Email | "Votre dossier est en cours d'examen" | Date estimée de décision, comment rester informé |
| Décision d'admission | Email + SMS | "Félicitations, vous êtes admis(e)" | Félicitations, formation, prochaine étape (inscription), délai |
| Décision non-admission | Email + lettre | "Notification de décision" | Motif bref (non exhaustif), possibilité de recours, délai |
| Rappel paiement inscription | Email + SMS | "Rappel : inscription définitive" | Montant, échéance, lien paiement, conséquences de non-paiement |
| Convocation entretien (le cas échéant) | Email + SMS | "Vous êtes convoqué(e) à un entretien" | Date, heure, lieu, ce qu'il faut apporter |

---

## 6. DONNÉES PERSONNELLES ET SÉCURITÉ

Points de décision concernant la protection des données candidats.

### 6.1 Responsable du traitement

| Élément | Valeur / Statut | Note |
|---------|----------------|------|
| Responsable du traitement | À confirmer par l'administration | Doit être formellement identifié (directeur de l'unité, ou désignation officielle) |
| Base légale du traitement | À confirmer | Consentement du candidat, exécution du contrat d'inscription, intérêt légitime (recueil des candidatures) |
| Catégories de données concernées | Données d'identification, données académiques, pièces justificatives | Toutes les données collectées dans le cadre du dossier candidat |
| Destination des données | Site web public + base interne administration | Données affichées sur le site seulement sous forme agrégée/anonyme |

### 6.2 Finalités confirmées

1. Recueil des candidatures pour les formations de Licence et Master
2. Vérification des qualifications et admission des candidats
3. Suivi de l'inscription définie et gestion scolaire
4. Communication avec les candidats concernant leur dossier

### 6.3 Base juridique à confirmer

À valider par les responsables compétents (DPO, direction juridique) :
- Consentement explicite du candidat lors de la préinscription
- Exécution d'un contrat (engagement d'inscription)
- INTÉRÊT LÉGITIME : permettre l'accès aux formations supérieures sur critères méritocratiques
- OBLIGATION LÉGALE : conformité aux exigences du MESRS/ANAQ pour l'habilitation des formations

### 6.4 Hébergeur et localisation des données

| Élément | Statut | Note |
|---------|--------|------|
| Hébergeur du site web | Vercel (déjà en place) | Américain — implications RGPD à évaluer |
| Base de données candidats | Non identifiée (aucun backend) | Le dépôt ne prévoit pas de stockage persistant des données candidates |
| Localisation des données | À confirmer | Doit être précisé si stockage en dehors de l'Union européenne |
| Sous-traitants | Non identifiés | À recenser dans le cadre du traitement |

### 6.5 Habilitations

| Rôle | Accès minimum | Accès maximal | Modalités |
|------|--------------|---------------|-----------|
| Agent adjoint admissions | Consultation dossiers en `preinscrit`/`en_validation` | Modification statuts, téléchargement des reçus | Formation interne, authentification forte |
| Responsable admissions | Tous les accès ci-dessus | Validation finale, prise de décision |Validation annuelle des droits |
| Directrice de l'unité | Lecture globale | Décisions exceptionnelles, contentieux | Nomination officielle |
| Scolarité | Passage `admis` → `inscrit` | Aucun autre accès | Déclencheur automatisé sur paiement |

### 6.6 Authentification

- **Authentification forte** pour les agents administratifs : système à mettre en place (mots de passe complexes, 2FA) pour accéder aux dossiers candidats.
- **Accès candidat** : identifiant (numéro de candidatures) + mot de passe ou lien sécurisé par email à usage unique.
- **Pas d'authentification publique** : les pages d'information générale restent accessibles sans identifiants.

### 6.7 Journalisation (logging)

Événements qui doivent être inscrits dans un journal d'audit (non encore mis en place dans le dépôt actuel) :

- Création et modification de comptes candidats
- Changements de statut de dossier
- Téléchargements et uploads de pièces justificatives
- Modifications des données personnelles
- Décisions d'admission/non-admission
- Demandes d'exportation de données
- Échecs d'authentification

### 6.8 Sauvegardes et conservation

- **Sauvegardes** : À définir avec l'administration (fréquence, support, localisation).
- **Conservation des dossiers** : À confirmer par les responsables compétents (durée légale, valeur administrative).
- **Archivage** : Modalités à définir (format, support, accessibilité future).
- **Suppression** : Délai minimum 30 jours après décision définitive, sauf obligation légale de conservation.

### 6.9 Incidents et fuites

- **Procédure d'incident** : À définir en cas de violation de données personnelles (notification à la CNIL / autorité compétente, notification aux candidats concernés).
- **Signalement** : Point de contact unique au sein des services administration.
- **Mesures d'urgence** : Isolement des données concernées, révocation des accès en cours.

### 6.10 Droits des candidats

| Droit | Modalités d'exercice | Délai de réponse |
|-------|---------------------|-----------------|
| Accès à ses données personnelles | Demande écrite (email ou formulaire) | 30 jours |
| Rectification de ses données | Demande écrite, justificatif de l'erreur | 30 jours |
| Effacement de ses données ("droit à l'oubli") | Demande écrite, motif | 30 jours (sauf obligation de conservation) |
| Limitation du traitement | Demande écrite | 30 jours |
| Opposition au traitement | Demande écrite | 30 jours |
| Droit à la portabilité | Demande écrite, format structuré (CSV/JSON) | 30 jours |
| Recours contre une décision | Formulaire dédié ou lettre recommandée | Durée selon procédure interne |

---

## 7. VALIDATION ADMINISTRATIVE

Rendement du dossier réellement utilisable lors d'une réunion avec l'administration. Questionnaire structuré, tableaux de décision, champs de réponse, espaces de réserve et grille de validation formelle.

### 7.1 Grille de validation formelle

Chaque motif de l'issue #6 doit pouvoir être associé à une preuve ou une décision attendue. La grille ci-dessous est conçue pour être remplie lors d'une réunion de validation avec les services compétents de l'UCAO-UUCo.

| # | Critère d'acceptation (référence issue #6) | Preuve attendue | Décision attendue | Service / Validateur | Fonction | Date | Décision | Référence écrite |
|---|---|---|---|---|---|---|---|---|
| 1 | Définir le parcours candidat Licence/Master | Modalités détaillées, étapes, délais confirmés | Document de cadrage officiel | Admissions | Directeur adjoint | AA/MM/AAAA | Validé / En attente | Note de service N°.. |
| 2 | Matrice des données et documents | Liste complète, formats acceptés, règles de validation | Matrice signée par administration | Admissions | Comptable des admissions | AA/MM/AAAA | Validé / En attente | Annexe au Règlement |
| 3 | Machine à états des dossiers | Statuts, transitions, acteurs, conditions | Diagramme d'état validé | Admissions + Scolarité | Responsable suivi | AA/MM/AAAA | Validé / En attente | Processus interne N°.. |
| 4 | Matrice des rôles et permissions | Droit par rôle, actions éventuelles, principe du moindre privilège | Grille d'autorisations validée | Administration | Directrice / DPO | AA/MM/AAAA | Validé / En attente | Arrêté directeur N°.. |
| 5 | Canaux et identifiants de notification | Réception, format reçu, système numérotation | Protocole de notification validé | Communications | Responsable communication | AA/MM/AAAA | Validé / En attente | Note de service N°.. |
| 6 | Responsable du traitement / base juridique | Nom, base légale, hébergeur, localisation | Documentation juridique signée | Légal / DPO | DPO / Responsable légal | AA/MM/AAAA | Validé / En attente | Délibération N°.. |
| 7 | Grille de validation des données personnelles | Finalités, bases juridiques, habilitations, droits candidats | Grille de conformité signée | DPO + Administration | DPO | AA/MM/AAAA | Validé / En attente | Rapport DPO N°.. |

### 7.2 Questionnaire structuré pour la réunion de validation

#### A. Parcours candidat

1. Les étapes du parcours (1.1 à 1.7) sont-elles exhaustives et conformes à la réalité administrative ?
2. Les délais à chaque étape sont-ils réalistes et confirmés par l'administration ?
3. Les cas particuliers (redoublement, réorientation, déplacement) sont-ils correctement pris en charge ?
4. Les distinctions Licence/Master sont-elles clairement établies dans le cadrage ?

#### B. Données et documents

1. L'ensemble des données personnelles (section 2.1) est-il correct et complet ?
2. Les informations académiques (section 2.2) correspondent-elles aux exigences réelles d'entrée en formation ?
3. La liste des pièces justificatives (section 2.3) est-elle exhaustive par rapport aux exigences légales ?
4. Les formats acceptés et règles de validation (section 2.4) sont-ils adaptés aux réalités techniques et administratives ?
5. Des pièces supplémentaires non listées sont-elles nécessaires dans certains cas ?

#### C. Gestion des dossiers

1. La machine à états (section 3) reflète-t-elle fidèlement le fonctionnement réel ?
2. Les transitions interdites sont-elles respectées dans les systèmes d'information ?
3. Les conditions de changement de statut sont-elles clairement définies et communicables ?
4. Les états nécessitant une décision administrative sont-ils correctement identifiés ?

#### D. Rôles et permissions

1. La matrice de rôles (section 4) couvre-t-elle tous les acteurs pertinents (candidats, admissions, scolarité, administration) ?
2. Le principe du moindre privilège est-il correctement appliqué ?
3. Les actions de consultation, modification, correction, téléchargement, exportation, suppression, changement de statut et accès aux pièces justificatives sont-elles correctement assegnées ?
4. Des rôles supplémentaires ou manquantes sont-ils à prévoir ?

#### E. Notifications et identifiants

1. Les canaux de notification (section 5.1) sont-ils adaptés au contexte (Guinée, connexion variable, public cible) ?
2. Le système de numérotation des candidatures (section 5.2) est-il conforme aux usages ?
3. Le format du reçu de préinscription (section 5.3) contient-il tous les éléments obligatoires ?
4. Les événements déclencheurs et messages associés (section 5.4) sont-ils exhaustifs ?

#### F. Données personnelles et sécurité

1. Le responsable du traitement est-il bien identifié et formellement désigné ?
2. Les finalités du traitement (section 6.2) sont-elles exactement celles qui s'appliquent ?
3. La base juridique (section 6.3) est-elle conforme à la réglementation en vigueur (Guinée, RGPD applicable ou non) ?
4. L'hébergeur et la localisation des données (section 6.4) sont-ils acceptables et sécurisés ?
5. Les habilitations (section 6.5) sont-elles adaptées aux responsabilités de chacun ?
6. Le système d'authentification (section 6.6) offre-t-il un niveau de sécurité suffisant ?
7. La journalisation (section 6.7) couvre-t-elle les événements critiques ?
8. Les sauvegardes, archivage et suppression (section 6.8) sont-ils conformes aux obligations ?
9. La procédure d'incidents et fuites (section 6.9) est-elle opérationnelle ?
10. Les droits des candidats (section 6.10) sont-ils correctement définis et praticables ?

#### G. Validation administrative

1. La grille de validation formelle (section 7.1) est-elle suffisamment détaillée pour chaque critère de l'issue ?
2. Le questionnaire structuré (section 7.2) permet-il de récolter toutes les décisions attendues ?
3. Des éléments supplémentaires sont-ils à ajouter pour clôturer l'issue #6 de manière satisfaisante ?
4. Quelles sont les décisions impératives qui doivent être prises par l'administration avant toute chose ?

### 7.3 Points de décision impératifs (sortants de ce document)

Les éléments suivants ne peuvent être finalisés qu'à la suite d'une décision formelle de l'administration compétente de l'UCAO-UUCo. Ils sont marqués en attente dans ce document et doivent faire l'objet d'un accord écrit :

1. **Identification formelle du responsable du traitement** (section 6.1) — Nom, fonction, signature.
2. **Confirmation de la base juridique du traitement** (section 6.3) — Consentement, contrat, intérêt légitime, obligation légale.
3. **Validation de l'hébergeur et localisation des données** (section 6.4) — Acceptabilité, siège social, transferts de données.
4. **Nombre d'années de conservation des dossiers** (sections 6.8, 6.10) — Délai légal ou administratif.
5. **Délégation des habilitations** (section 6.5) — Qui a quel droit exactement, délégation écrite.
6. **Mise en place du système d'authentification** (section 6.6) — Solution choisie, mise en œuvre, coûts.
7. **Protocole de journalisation** (section 6.7) — Outils, fréquence, responsables de lecture.
8. **Modalités de sauvegarde/archivage/suppression** (section 6.8) — Fréquence, support, responsable.
9. **Modèle de reçu de préinscription** (section 5.3) — Validé graphiquement et juridiquement.
10. **Liste définitive des pièces justificatives** (section 2.3) — Validation par filière, par formation.

### 7.4 Pièces Justificatives de la présente validation

Ce dossier de cadrage fait suite à :
- La revue de code indépendante du 22 novembre 2026 (RAPPORT_REVUE_CODE.md)
- Le suivi éditorial et vérification des sources (editorial-tracking.md, état du 17 novembre 2026)
- Le design brief et la roadmap du projet de refonte du site vitrine
- Le contenu existant dans `src/content/formations.json` (formations Licence et Master publiées)
- La DESIGN-BRIEF.md et ROADMAP.md du projet

Aucune information institutionnelle fictive, règle administrative, pièce obligatoire, permission ou procédure n'a été inventée. Tous les items marqués "À confirmer" ou "En attente" attendent une validation formelle de la part des services compétents de l'UCAO-UUCo, du MESRS ou de l'ANAQ.

---

## Références croisées au dépôt

- `src/content/formations.json` — Données Catalogue des formations (Licence/Master)
- `editorial-tracking.md` — Suivi des données à confirmer, conflits identifiés
- `DESIGN-BRIEF.md` — Orientations design et identité visuelle
- `ROADMAP.md` — État d'avancement du projet de refonte
- `AGENTS.md` / `CONTRIBUTING.md` — Règles de gouvernance et collaboration
- `.github/CODEOWNERS` — Seule `@sudomarc` peut approuver les changements

---

*Document généré dans le cadre de l'issue #6 — Cadrage administratif et fonctionnel des admissions UCAO-UUCo*
*Version : préliminaire — remis à l'administration pour validation*
*Date de génération : 2026-11-26*