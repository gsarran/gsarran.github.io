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
  neobati_stack_html:
`<div class="stack-group"><span class="stack-cat">Outils</span><span class="stack-badges"><span class="stack-badge">Airtable</span><span class="stack-badge">Make</span></span></div>
<div class="stack-group"><span class="stack-cat">IA</span><span class="stack-badges"><span class="stack-badge">Rédaction de factures</span><span class="stack-badge">Relances automatiques</span></span></div>`,

  neobati_flow1_title: "Prospection : un nouveau client et tout se déclenche",
  neobati_f1_n1: "Formulaire soumis",
  neobati_f1_n2: "Fiche client créée",
  neobati_f1_n3: "Commerciaux notifiés",
  neobati_f1_impact: "Zéro ressaisie : le prospect est enregistré et l'équipe alertée aussitôt.",

  neobati_flow2_title: "Facturation : la facture part dès le chantier terminé",
  neobati_f2_n1: "Chantier à 100 %",
  neobati_f2_n2: "Facture rédigée par IA",
  neobati_f2_n3: "Envoyée au client",
  neobati_f2_impact: "Délai de facturation réduit à zéro : le client reçoit sa facture le jour même.",

  neobati_flow3_title: "Trésorerie : les relances d'impayés partent seules",
  neobati_f3_n1: "Échéance dépassée",
  neobati_f3_n2: "Relance 1 par IA",
  neobati_f3_n3: "Relance 2 à J+7",
  neobati_f3_impact: "Aucune relance oubliée : la trésorerie est protégée sans effort de suivi."
});
