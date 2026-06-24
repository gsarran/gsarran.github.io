# Portfolio - Geoffrey Sarran

Portfolio trilingue (FR / EN / RU) en HTML / CSS / JS pur, heberge sur GitHub Pages.

En ligne : https://gsarran.github.io/

## Contenu

Un hub d'accueil et trois etudes de cas detaillees :

- **Coach IA de Streetlifting** : coach de force multi-agents, deploye en production, accessible par Telegram.
- **Agri Monitor** : suivi agronomique par teledetection (NDVI, stress hydrique, agents IA).
- **NEOBATI** : automatisation IA + no-code d'une entreprise du batiment, avec architecture Airtable, stack technique, schema relationnel interactif et demos Make.

Chaque etude de cas s'organise en trois onglets : Valeur metier, Architecture, Demo.

## Structure

```text
portfolio/
├─ index.html              <- Le hub : heros, projets, competences, contact
├─ assets/
│  ├─ css/styles.css       <- Charte graphique partagee
│  ├─ js/i18n.js           <- Moteur multilingue + header commun injecte
│  ├─ js/tabs.js           <- Gestion des onglets des pages-projets
│  ├─ js/fork.js           <- Schemas animes (connecteurs SVG recalcules)
│  ├─ i18n/                <- Dictionnaires communs : fr.js, en.js, ru.js
│  ├─ favicon.svg, og-image.png
│  └─ geoffrey-avatar.jpg, geoffrey.jpg
├─ projects/
│  ├─ coach/               <- index.html + coach.{fr,en,ru}.js
│  ├─ agri-monitor/        <- index.html + agri-monitor.{fr,en,ru}.js
│  └─ neobati/             <- index.html + schema.js + neobati.{fr,en,ru}.js + images/
├─ media/                  <- Videos de demo (FR/EN/RU)
├─ vignettes/              <- Vignettes des projets (une par langue)
└─ cv/                     <- CV PDF (FR/EN/RU)
```

## Multilingue

- Les textes vivent dans des dictionnaires `.js`, communs (`assets/i18n/`) ou propres a un projet (`projects/*/*.{fr,en,ru}.js`).
- Dans le HTML, un element a traduire porte `data-i18n="cle"` pour du texte simple ou `data-i18n-html="cle"` pour du contenu riche.
- `assets/js/i18n.js` injecte le header commun, applique la langue, echange les vignettes, les captures projet et le lien du CV selon la langue, puis memorise le choix dans `localStorage`.
- Pour ajouter un texte, creer une cle dans les fichiers de langue concernes, puis la referencer via `data-i18n` ou `data-i18n-html`.

## Notes NEOBATI

- Le schema Airtable interactif de l'onglet Architecture est pilote par `projects/neobati/schema.js`.
- Les captures Make de l'onglet Demo sont dans `projects/neobati/images/` et suivent le format `nom_langue.png`.
- La vignette NEOBATI de la page d'accueil utilise `vignettes/neobati_new_fr.png`, `vignettes/neobati_new_en.png` et `vignettes/neobati_new_ru.png`.

## Apercu en local

Ouvrir `index.html` dans un navigateur. Aucun serveur n'est requis : les dictionnaires sont des fichiers `.js`, donc tout fonctionne en `file://`.
