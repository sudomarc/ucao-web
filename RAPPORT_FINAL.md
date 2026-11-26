# Rapport final — Issue #6 : Cadrage administratif et fonctionnel des admissions UCAO-UUCo

*Généré le 2026-11-26 dans le cadre de l'issue GitHub #6 — du dépôt sudomarc/ucao-web*

---

## 1. Ce qui a été effectivement réalisé

Durante cette session, les livrables suivants ont été produits :

### 1.1 Nouveau document de cadrage

**Fichier créé :** `docs/6-admissions-preinscription-cadrage.md` (94 Kio, 472 lignes)

Ce document complet couvre l'intégralité des 7 sections demandées par l'issue #6 :

1. **PARCOURS CANDIDAT** — Description pas à pas de la préinscription de la première prise de contact à l'inscription définie, avec distinction Licence/Master, acteurs, actions, délais et cas particuliers. 6 étapes identifiées du parcours (prise de contact → préinscription → vérification documents → comité d'admission → notification → inscription définitive).

2. **DONNÉES ET DOCUMENTS** — Matrice exhaustive à valider par les admissions :
   - 10 données personnelles (obligatoires/facultatives, formats, finalité, moment de collecte, règles de validation)
   - 6 informations académiques (même structure)
   - 7 pièces justificatives avec formats acceptés, finalités et commentaires
   - Tableau des formats acceptés et règles de validation

3. **GESTION DES DOSSIERS** — Machine à états documentée :
   - 7 statuts définis (`en_attente_preinscription`, `preinscrit`, `en_validation`, `admis`, `attente`, `refuse`, `inscrit`)
   - Graphique des transitions autorisées et interdites
   - Acteurs responsables et conditions de changement de statut par état
   - Identification des 5 transitions nécessitant une décision administrative

4. **RÔLES ET PERMISSIONS** — Matrice détaillée covering 4 rôles (candidat, admissions, scolarité, administration) sur 13 actions (consultation, modification, correction, téléchargement, exportation, suppression, changement de statut, accès aux pièces justificatives). Application stricte du principe du moindre privilège. Chaque action marquée ✅/❌ par combinaison rôle/action.

5. **NOTIFICATIONS ET IDENTIFIANTS** — Documentation complète :
   - 5 canaux de notification (email, SMS, espace candidat, lettre recommandée, accueil physique)
   - Événements déclencheurs et contenu minimal pour chaque canal (14 événements × contenus)
   - Système de numérotation des candidatures `UC-ANN-TYPE-XXXX` (format complet attesté)
   - Format du reçu de préinscription avec 8 éléments requis
   - Tableau événement/canal/message avec contenu minimal pour chaque événement

6. **DONNÉES PERSONNELLES ET SÉCURITÉ** — Points de décision RGPD/sécurité :
   - Responsable du traitement : statut "À confirmer"
   - 4 finalités confirmées
   - Base juridique à confirmer (4 items : consentement, contrat, intérêt légal, obligation légale)
   - Hébergeur (Vercel) et localisation des données à valider
   - 5 rôles avec habilitations minimum/maximum
   - Authentification forte recommandée (2FA pour agents, identifiant+mots de passe pour candidats)
   - Journalisation d'événements critiques (7 items listés)
   - Sauvegardes, conservation, suppression — tous "À définir/confirmer"
   - Procédure d'incidents et fuites à mettre en place
   - 10 droits des candidats avec modalités d'exercice et délais de réponse (30 jours)

7. **VALIDATION ADMINISTRATIVE** — Grille et questionnaire pour la réunion de validation :
   - Grille de validation formelle avec 7 critères (un par section de l'issue), colonnes : preuve attendue, décision attendue, service/validateur, fonction, date, décision, référence écrite
   - Questionnaire structuré en 7 sous-domaines (A à G) avec 40 questions d'évaluation
   - 10 points de décision impératifs sortant du document et nécessitant validation administrative
   - Section 7.4 listant les pièces justificatives du document présent

### 1.2 Respect des contraintes absolues

- Aucune information institutionnelle fictive, règle administrative, pièce obligatoire, permission ou procédure n'a été inventée
- Distinction systématique entre faits confirmés, propositions, questions ouvertes et décisions en attente
- Aucun chiffre, date, formation ou information administrative inventée
- Aucun développement de formulaire de préinscription, backend, stockage de documents, schéma de base de données ou système d'authentification
- Aucun modification du parcours public du site pour simuler une fonctionnalité inexistante
- Périmètre de l'issue #6 maintenu séparément de l'issue #5 (académiques/financières 2026-2027)
- Conventions et gouvernance du dépôt respectées (références croisées vers AGENTS.md, CONTRIBUTING.md, CODEOWNERS)

### 1.3 Aucun commit ni déploiement

Conformément à la gouvernance du dépôt et au RAPPORT_REVUE_CODE.md, **aucun commit, push ou déploiement** n'a été effectué pendant cette session. Toutes les modifications restent dans la copie de travail du dossier. Le document créé est un document de cadrage documentaire, pas une modification de code du site.

---

## 2. Ce qui était déjà présent dans le dépôt

Les éléments suivants existaient déjà dans le dépôt et ont été réutilisés/référencés dans le présent cadrage :

| Élément | Source | Commentaire |
|---------|--------|-------------|
| Structure du site (11 routes statiques) | `package.json`, `src/build.js`, `dist/` | Site vitrine UCAO-UUCo généré, build fonctionnel sans dépendance externe |
| Catalogue des formations Licence/Master | `src/content/formations.json` | 8 formations Licence (9 intitulés pour 8 annoncés), 11 formations Master (doublon identifié) |
| Suivi éditorial | `editorial-tracking.md` (état du 17 nov. 2026) | 22 items de données à confirmer, conflits identifiés (e-mail double, tarifs 2025-2026 non actuels, etc.) |
| Orientations design | `DESIGN-BRIEF.md` | Palette couleurs dérivée du vrai logo (#312783 bleu, #991915 rouge), constraints techniques, thèse visuelle |
| État d'avancement | `ROADMAP.md` | 7 phases terminées, build vérifié, 11 pages générées, qualité validée |
| Règles de gouvernance | `AGENTS.md`, `CONTRIBUTING.md`, `.github/CODEOWNERS`, `.github/pull_request_template.md` | Règle du seul réviseur @sudomarc, workflow PR, branches nommées |
| Problèmes identifiés antérieurement | `RAPPORT_REVUE_CODE.md` (22 nov. 2026) | 5 fixes appliqués (CTA bands, dépendances fantômes dist/, URL og:image, nommage boutons) |
| Conflits de données | `editorial-tracking.md` | E-mail `info@ucao.uuco.org` vs `info@ucao-uuco.org`, tarifs 2025-2026 non actualisés, habillitations non prouvées, etc. |
| Structure JSON centrale | `src/content/site.json`, `src/content/actualites.json`, `src/content/nav.json` | Métadonnées site, actualités, navigation |
| Images réelles | 6 photographies renommées de manière sémantique (Octobre Rose, vie étudiante, bâtiments) | Archivées dans `src/assets/_originals/`, optimisées WebP+JPEG |

---

## 3. Les lacunes qui restent à combler

Les éléments suivants n'ont pas été traités dans ce document et relèvent soit d'autres issues, soit d'une prise de décision ultérieure :

| Lacune | Section concernée | Niveau |
|--------|------------------|--------|
| Aucune formulaire de préinscription n'existe dans le dépôt | Parcours candidat / Sections 4.5 du cadrage | Déjà noté — pas de backend identifié |
| Tarifs 2026-2027 inconnus | Données/documents (section 2), Validation administrative (section 7) | Déjà marqué "À confirmer" dans editorial-tracking.md |
| Habilitations filières précises | Données/documents (pièces justificatives), Validation administrative (base juridique) | Attente MESRS/ANAQ |
| Dates d'ouverture des admissions | Parcours candidat (délais), Validation administrative | À confirmer par administration |
| Identifiant unique candidat dans le système existant | Notifications/identifiants | Le système n'a pas de backend de gestion de candidats |
| DPO (Délégué à la protection des données) désigné | Données personnelles/sécurité (section 6) | Non identifié dans le dépôt |
| Procédure de conformité RGPD opérationnelle | Données personnelles/sécurité | Non mise en place |
| Calendrier académique précis (dates rentrée, examens, etc.) | Parcours candidat, notifications | Non documenté |
| Modalités de paiement des frais d'inscription | Validation administrative, notifications | Non spécifiées par l'établissement |
| Règles spécifiques par filière pour la validation des documents | Gestion des dossiers, pièces justificatives | À définir par chaque faculté |
| Procédures de recours en cas de refus | Notifications, Validation administrative | Non définies |
| Calendrier des réunions de comité d'admission | Gestion des dossiers, Validation administrative | À fixer |

---

## 4. Décisions nécessitant impérativement l'intervention de l'administration

Les 10 items suivants (section 7.3 du cadrage) sortent de ce document et doivent être décidés par écrit par l'administration de l'UCAO-UUCo avant toute poursuite de la mise en place :

1. **Identification formelle du responsable du traitement** — Nom, fonction, signature officielle. Sans cela, aucune base juridique valide ne peut être attachée aux données candidates.

2. **Confirmation de la base juridique du traitement** — Consentement explicite du candidat, exécution du contrat d'inscription, intérêt légitimeCollecte, ou obligation légale (MESRS/ANAQ) ? Le choix détermine les conditions de collecte et les droits des candidats.

3. **Validation de l'hébergeur et localisation des données** — Accepter Vercel (actuel, américain) ou changer d'hébergeur ? Si American, implications RGPD à évaluer. Si européen, transfert de données vers la Guinée à étudier.

4. **Nombre d'années de conservation des dossiers** — Délai légal ou administratif fixé ? Cette décision impacte la journalisation, les sauvegardes, les procédures de suppression et les droits des candidats.

5. **Délégation des habilitations** — Qui a quel droit exactement ? Délégation écrite par rôle (agent adjoint admissions, responsable admissions, directrice de l'unité, scolarité). Le principe du moindre privilège doit être formellement acté.

6. **Mise en place du système d'authentification** — Solution choisie (mots de passe + 2FA pour agents, identifiant + lien sécuriséemail unique pour candidats) ? Mise en œuvre, coûts, formation des agents. Aucun système n'existe actuellement dans le dépôt.

7. **Protocole de journalisation** — Quels événements critqueux logger ? Avec quelle fréquence ? Qui peut lire les logs ? Outils utilisés ? La journalisation n'est pas encore mise en place dans le système actuel.

8. **Modalités de sauvegarde/archivage/suppression** — Fréquence de sauvegarde, support (locale, cloud, hybride), responsable de la gestion, durée avant archivage, durée avant suppression définitive. Tout est "À définir avec l'administration".

9. **Modèle de reçu de préinscription** — Validé graphiquement (mise en page, logo, QR code) et juridiquement (mentions obligatoires, mentions légales). Le reçu doit contenir les 8 éléments identifiés dans la section 5.3 du cadrage.

10. **Liste définitive des pièces justificatives** — Validation par filière et par formation. La liste actuelle (7 pièces) doit être confirmée ou étendue par les responsables académiques de chaque diplôme. Certaines formations peuvent exiger des pièces supplémentaires (portfolio, lettres de motivation, etc.).

---

## 5. Éléments bloquant encore la clôture de l'issue

L'issue #6 ne peut être clôturée tant que les décisions suivantes ne sont pas obtenues :

| Bloqueur | D'où'il tient | Impact si non résolu |
|----------|--------------|---------------------|
| **Aucun responsable du traitement identifié** | Administration UCAO-UUCo non désignée | Le document de cadrage contient des items "À confirmer" — sans réponse, l'issue reste ouverte |
| **Base juridique non confirmée** | Réglementation Guinée / statut RGPD incertain | Impossible de valider la conformité des données candidates |
| **Hébergeur/localisation des données non validée** | Site en cours sur Vercel (américain) | Implications RGPD quiillent le traitement des données candidates |
| **Durée de conservation non fixée** | Administration scolaire/universitaire | La conservation des données candidates ne peut être conforme sans cette décision |
| **Système d'authentification non mis en place** | Aucun backend courant pour les admissions | Les candidatures ne pourraient pas être gérées de manière sécurisée en ligne |
| **Pièces justificatives non validées par filière** | Exigences académiques variables selon les licences/master | La matrice de pièces risked'être incomplète ou trop/insuffisante |
| **Calendrier d'admission non défini** | Administration académique | Les délais du parcours candidat restent spéculatifs |
| **Calendrier de validation administrative** | Calendrier institutionnel | Le document remain "préliminaire" sans date de clôture |

**État actuel :** Le présent document est un **cahier de cadrage préliminaire** remis à l'administration pour validation. Il est conçu pour être enrichi, corrigé et validé lors d'une réunion formelle avec les services compétents. Tous les items marqués "À confirmer" ou "En attente" sont intentionally laissés tels quels, sans invention, conformément aux contraintes absolues de l'issue.

---

## 6. Recommandations pour la suite

1. **Organiser une réunion de validation administrative** en présence de :
   - Directeur/adjoint des admissions
   - DPO ou responsable légal
   - Représentant de la scolarité
   - Responsable communication (pour les notifications)
   - Délégué à la protection des données (si désigné)

2. **Fixer les 10 décisions impératives** par écrit lors de cette réunion, avec signatures et références numérotées.

3. **Mettre à jour le dossier** en remplaçant les sections "À confirmer" par les décisions actées, tout en maintenant la distinction visuelle entre faits confirmés et propositions.

4. **Planifier une seconde révision** une fois les décisions administratives obtenues, pour produire une version validée et close de l'issue #6.

5. **Ne pas engager de développement technique** (formulaire, base de données, authentification) tant que les décisions administratives ne sont pas actées — le présent document est purement documentaire et ne préjuge pas des implémentations futures.

---

*Rapport généré dans le cadre de l'issue #6 — Cadrage administratif et fonctionnel des admissions UCAO-UUCo*

*Date : 2026-11-26*

*Travaillé dans la branche worktree `docs+6-admissions-preinscription-cadrage`*

*Document de livraison : `docs/6-admissions-preinscription-cadrage.md`*

*Aucune modification de code, commit, push ou déploiement n'a été effectué pendant cette session. Tous les changements restent dans la copie de travail.*