/* Dictionnaire FR spécifique au projet NEOBATI (complète le commun) */
window.translations = window.translations || {};
window.translations.fr = Object.assign(window.translations.fr || {}, {
  neobati_title: "NEOBATI, automatisations IA + No-code",
  neobati_tagline: "Automatiser une entreprise du bâtiment de bout en bout, du premier contact client jusqu'à l'encaissement, avec de l'IA, Airtable et Make.",

  /* --- Onglet Valeur métier --- */
  neobati_context_title: "Le cas : Néobâti Artisanat",
  neobati_context_html:
    "Néobâti Artisanat est une entreprise du bâtiment qui <strong>croule sous l'administratif</strong> : devis, planning des artisans, rapports de chantier, factures, relances. " +
    "La mission : <strong>automatiser ces processus de bout en bout</strong> pour que l'équipe se concentre sur le métier plutôt que sur la saisie. C'était mon <strong>projet fil rouge de certification</strong>.",
  neobati_problem_html:
    "<ul>" +
    "<li><strong>Tout est géré manuellement</strong> : les informations clients sont dupliquées dans plusieurs tableaux, les devis prennent du retard et des alertes importantes peuvent être oubliées.</li>" +
    "<li>La planification des artisans repose encore sur des appels téléphoniques et des fichiers Excel, ce qui multiplie les <strong>risques d'erreurs et de doublons</strong>.</li>" +
    "<li>Les factures et les relances d'impayés sont souvent envoyées trop tard, voire oubliées, ce qui <strong>fragilise la trésorerie de l'entreprise</strong>.</li>" +
    "</ul>",
  neobati_solution_html:
    "<ul>" +
    "<li>Un système où <strong>chaque processus clé fonctionne de manière autonome</strong> depuis la demande de devis effectuée en ligne jusqu'à l'encaissement.</li>" +
    "<li><strong>Plus de 15 automatisations interconnectées</strong> couvrent l'ensemble des activités : prospection, planification, logistique, suivi des chantiers, facturation et gestion de la trésorerie.</li>" +
    "<li>La solution s'appuie sur Airtable (base de données et interfaces), Make (orchestration des workflows) et l'IA pour la <strong>rédaction automatique des factures et des relances</strong>.</li>" +
    "</ul>",
  neobati_result_html:
    "<ul>" +
    "<li><strong>Environ 8 heures économisées par semaine</strong> sur les tâches administratives.</li>" +
    "<li><strong>Zéro relance de facture manuelle</strong> : les impayés sont relancés automatiquement, au bon moment.</li>" +
    "<li>Les <strong>stocks faibles sont détectés automatiquement</strong> et un bon de commande part directement au fournisseur sans saisie manuelle, ce qui économise du temps et limite le risque de retard sur chantier.</li>" +
    "<li>Un système disponible <strong>24h/24</strong>, traçable, où plus rien ne se perd entre deux tableaux.</li>" +
    "</ul>",

  /* --- Onglet Architecture (canvas animés) --- */
  neobati_archi_intro:
    "Comme il s'agit d'un projet no-code, il n'y a pas d'arborescence de fichiers à présenter, mais des flux d'automatisation. Pour la démonstration, trois automatisations parmi les plus parlantes ont été sélectionnées et mises en avant par des animations, afin d'en comprendre rapidement l'utilité.",
  neo_stack_heading: "Stack technique",
  neobati_stack_html:
`<div class="stack-group"><span class="stack-cat">Base de données</span><span class="stack-badges"><span class="stack-badge">Airtable</span></span></div>
<div class="stack-group"><span class="stack-cat">Automatisation</span><span class="stack-badges"><span class="stack-badge">Make</span><span class="stack-badge">Airtable</span></span></div>
<div class="stack-group"><span class="stack-cat">IA appliquée</span><span class="stack-badges"><span class="stack-badge">Facturation IA</span><span class="stack-badge">Relances automatiques</span></span></div>
<div class="stack-group"><span class="stack-cat">Interfaces</span><span class="stack-badges"><span class="stack-badge">Airtable Interfaces</span><span class="stack-badge">Formulaires</span></span></div>`,

  neo_demo_intro: "Trois automatisations concrètes parmi les 21 du projet. À gauche, le canevas animé résume le processus métier de façon volontairement simplifiée ; à droite, la capture montre la partie Make, plus technique, intégrée dans la plupart des automatisations.",

  neo_modal_close: "Fermer",

  neobati_flow1_title: "Assignation automatique des artisans",
  neobati_f1_n1: "Devis accepté",
  neobati_f1_n2: "Chantier et facture créés",
  neobati_f1_n3: "Artisans disponibles assignés",
  neobati_f1_n4: "Chef de chantier notifié",
  neobati_f1_impact: "Une fois le devis accepté, Airtable crée les lignes chantier et facture, puis Make assigne automatiquement les artisans disponibles selon le type de travaux. Le chef de chantier est notifié par WhatsApp, y compris si aucun artisan n'est disponible.",
  neobati_f1_shot_alt: "Scénario Make d'assignation automatique des artisans",

  neobati_flow2_title: "Facturation",
  neobati_f2_n1: "Chantier terminé",
  neobati_f2_n2: "Facture générée par IA",
  neobati_f2_n3: "Envoyée au client",
  neobati_f2_impact: "Une facture est automatiquement rédigée puis envoyée au client dès la fin du chantier.",
  neobati_f2_shot_alt: "Scénario Make de facturation",

  neobati_flow3_title: "Rapport d'avancement des travaux",
  neobati_f3_n1: "Formulaire Fillout ouvert",
  neobati_f3_n2: "Avancement renseigné",
  neobati_f3_n3: "Rapport PDF généré",
  neobati_f3_n4: "Envoyé au chef de chantier",
  neobati_f3_impact: "Depuis l'application mobile Airtable, l'artisan ouvre un formulaire Fillout, indique le pourcentage d'avancement, ajoute un commentaire si nécessaire et joint obligatoirement une photo. Après validation, un rapport PDF est généré automatiquement puis envoyé au chef de chantier.",
  neobati_f3_shot_alt: "Scénario Make de génération du rapport d'avancement",

  /* --- Onglet Architecture : structure des données --- */
  neo_arch_data_title: "Architecture des données Airtable",
  neo_arch_data_html:
    "<p>Cette solution repose sur une base Airtable composée de <strong>10 tables interconnectées</strong> couvrant l'ensemble du cycle métier :</p>" +
    "<ul class=\"db-table-list\"><li>Clients</li><li>Chantiers</li><li>Artisans</li><li>Interventions</li><li>Matériaux</li><li>Ligne Matériau</li><li>Fournisseurs</li><li>Devis</li><li>Factures</li><li>Paiements</li></ul>" +
    "<p>Ces tables sont reliées entre elles, et <strong>certaines alimentent automatiquement les workflows Make</strong>.</p>",
  neo_arch_schema_title: "Les connexions entre les tables",
  neo_arch_schema_intro: "Survolez une table pour visualiser ses relations : les liaisons s'illuminent avec la couleur de la table sélectionnée.",
  neo_central: "Table centrale",
  neo_chantiers_note_html:
    "<span class=\"badge-central\">🏗️ Chantiers · table centrale</span> La table <strong>Chantiers</strong> constitue le cœur du système et relie l'ensemble des informations métier.",
  neo_t_clients: "Clients",
  neo_t_contact: "Contact Néobâti",
  neo_t_devis: "Devis",
  neo_t_chantiers: "Chantiers",
  neo_t_factures: "Factures",
  neo_t_paiements: "Paiements",
  neo_t_artisans: "Artisans",
  neo_t_interventions: "Interventions",
  neo_t_materiaux: "Matériaux",
  neo_t_ligne: "Ligne Matériau",
  neo_t_fournisseurs: "Fournisseurs",
  neo_arch_examples_title: "Exemples de tables Airtable",
  neo_arch_examples_sub: "Deux exemples représentatifs du modèle de données.",
  neo_card_clients_html:
    "<div class=\"db-card-head\"><span class=\"db-card-name\">CLIENTS</span></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Rôle</span><p>Centralise les informations commerciales et alimente automatiquement les autres processus métier.</p></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Champs principaux</span><ul class=\"db-fields\"><li>ID client</li><li>Nom</li><li>Prénom</li><li>Email</li><li>Téléphone</li><li>Type de travaux</li><li>Budget</li><li>Statut</li><li>Chantiers associés</li></ul></div>",
  neo_card_chantiers_html:
    "<div class=\"db-card-head\"><span class=\"db-card-name\">CHANTIERS</span><span class=\"badge-central\">Table centrale</span></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Rôle</span><p>Table centrale reliant l'ensemble des entités du système et pilotant le suivi opérationnel du chantier.</p></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Champs principaux</span><ul class=\"db-fields\"><li>ID chantier</li><li>Description</li><li>Prix chantier</li><li>Avancement chantier</li><li>Artisans assignés</li><li>Clients assignés</li><li>Devis assignés</li><li>Factures assignées</li><li>Matériel nécessaire</li><li>Coordonnées GPS</li></ul></div>"
});
