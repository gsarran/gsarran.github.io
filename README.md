# Portfolio - Geoffrey Sarran

Portfolio trilingue (FR / EN / RU) en HTML / CSS / JS pur, hébergé sur GitHub Pages.

En ligne : https://gsarran.github.io/

## Contenu

Un hub d'accueil et trois études de cas détaillées :

- **Coach IA de Streetlifting** : coach de force multi-agents, déployé en production, accessible par Telegram.
- **Agri Monitor** : suivi agronomique par télédétection (NDVI, stress hydrique, agents IA).
- **NEOBATI** : automatisation IA + no-code d'une entreprise du bâtiment, du premier contact à l'encaissement.

Chaque étude de cas s'organise en trois onglets : Valeur métier, Architecture, Démo.

## Structure

```
portfolio/
├─ index.html              ← Le hub : héros, projets, compétences, contact
├─ assets/
│  ├─ css/styles.css       ← Charte graphique partagée
│  ├─ js/i18n.js           ← Moteur multilingue + header commun injecté
│  ├─ js/tabs.js           ← Gestion des onglets des pages-projets
│  ├─ js/fork.js           ← Schémas animés (connecteurs SVG recalculés)
│  ├─ i18n/                ← Dictionnaires communs : fr.js · en.js · ru.js
│  ├─ favicon.svg · og-image.png
│  └─ geoffrey-avatar.jpg · geoffrey.jpg
├─ projects/
│  ├─ coach/               ← index.html + coach.{fr,en,ru}.js
│  ├─ agri-monitor/        ← index.html + agri.{fr,en,ru}.js
│  └─ neobati/             ← index.html + neobati.{fr,en,ru}.js
├─ media/                  ← Vidéos de démo (FR/EN/RU)
├─ vignettes/              ← Vignettes des projets (une par langue)
└─ cv/                     ← CV PDF (FR/EN/RU)
```

## Multilingue, comment ça marche

- Les **textes** vivent dans des dictionnaires `.js` (un par langue), communs (`assets/i18n/`) ou propres à un projet (`projects/*/*.{fr,en,ru}.js`).
- Dans le HTML, un élément à traduire porte `data-i18n="cle"` (texte simple) ou `data-i18n-html="cle"` (contenu riche).
- `assets/js/i18n.js` injecte le header commun, applique la langue, échange les vignettes et le lien du CV selon la langue, et mémorise le choix (`localStorage`).
- Pour **ajouter un texte** : crée une clé dans les fichiers de langue concernés, puis référence-la via `data-i18n`.

## Aperçu en local

Ouvrir `index.html` dans un navigateur (double-clic). Aucun serveur requis : les dictionnaires sont des fichiers `.js` (pas des `.json`), donc tout fonctionne en `file://`.
