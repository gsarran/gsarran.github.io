/* Dictionnaire FR spécifique au projet Coach (complète le commun) */
window.translations = window.translations || {};
window.translations.fr = Object.assign(window.translations.fr || {}, {
  coach_title: "Coach IA de Streetlifting",
  coach_tagline: "Un coach de force personnalisé, multi-agents, accessible par Telegram, déployé en production.",

  /* --- Onglet Valeur métier --- */
  coach_context_title: "Le streetlifting, c'est quoi ?",
  coach_context_html:
    "Le streetlifting est une discipline de <strong>force au poids du corps</strong> avec charge additionnelle. Des disques sont accrochés à une ceinture afin d'alourdir les <strong>tractions et les dips</strong>, avec un objectif simple : soulever le plus lourd possible. Cette discipline est proche du <strong>powerlifting</strong>, mais appliquée aux mouvements au poids du corps. Je la pratique depuis plusieurs années et <strong>j'ai d'abord créé ce coach pour moi-même</strong>, afin de répondre à un besoin concret rencontré à chaque entraînement.",
  coach_problem_html:
    "<ul>" +
    "<li>Trouver un bon coach de streetlifting reste difficile. Cette discipline est encore jeune en Europe et les entraîneurs expérimentés sont <strong>rares, voire coûteux</strong>.</li>" +
    "<li>Beaucoup de pratiquants s'entraînent seuls, avec des programmes génériques qui ne tiennent pas compte de leur niveau, de leur récupération ou de leurs éventuelles douleurs. <strong>La progression ralentit et le risque de blessure augmente</strong>.</li>" +
    "<li>Un coach humain ne peut pas être disponible en permanence ni analyser en détail chaque séance. Les ajustements arrivent <strong>souvent trop tard</strong> ou ne sont pas assez précis.</li>" +
    "</ul>",
  coach_solution_html:
    "<ul>" +
    "<li>Un coach IA accessible via <strong>Telegram</strong>, en texte ou en vocal, disponible à tout moment pour accompagner chaque séance.</li>" +
    "<li>Un <strong>système multi-agents</strong> automatisé avec n8n : un Extracteur collecte le profil, un Classificateur identifie l'intention et un Coach analyse les séances pour générer des retours personnalisés.</li>" +
    "<li>L'IA comprend et interprète les données, mais <strong>le code prend les décisions critiques</strong> : méthodologie d'entraînement, calcul des charges, deload, progression et ré-ancrage. Les calculs restent fiables et totalement maîtrisés.</li>" +
    "<li>Une <strong>mémoire persistante avec SQLite</strong>, des rappels automatiques de séance via n8n et un dashboard de suivi pour accompagner la progression sur le long terme.</li>" +
    "</ul>",
  coach_result_html:
    "<ul>" +
    "<li>Un coach IA disponible 24 h/24 et 7 j/7, avec un <strong>coût marginal quasi nul</strong>, offrant un accompagnement continu là où un coach humain reste plus coûteux et limité dans sa disponibilité.</li>" +
    "<li>Un programme structuré sur 3 mois, <strong>généré en quelques secondes</strong> à partir d'une simple conversation et entièrement adapté au profil du sportif.</li>" +
    "<li>Les charges <strong>s'ajustent automatiquement</strong> après chaque séance : progression, deload en cas d'échec et reprise progressive après une interruption. Les calculs sont déterministes et protégés par des garde-fous de sécurité, notamment en cas de douleur ou de blessure.</li>" +
    "<li><strong>Déployé en production</strong> et testé de bout en bout, jusqu'au débrief vocal d'une séance réelle, pour un outil fiable au quotidien.</li>" +
    "</ul>",

  /* --- Onglet Architecture --- */
  coach_archi_intro:
    "L'IA comprend, le code décide et les calculs restent entièrement maîtrisés. Cette architecture garantit des charges précises, cohérentes et sans risque d'hallucination.",
  coach_overview_title: "Vue d'ensemble",
  coach_n_conv: "Conversation Telegram",
  coach_n_if: "Programme existant ?",
  coach_branch_no: "Programme inexistant",
  coach_branch_yes: "Programme existant",
  coach_n_ext: "Agent extracteur (IA)",
  coach_n_rules: "Règles sportives (code)",
  coach_n_creation: "Création du programme",
  coach_n_class: "Agent classificateur (IA)",
  coach_n_orch: "Orchestrateur (code)",
  coach_n_route: "Débrief / Question / Mise à jour",
  coach_n_prog: "Programme 3 mois",
  coach_stack_heading: "Stack technique",
  coach_tree_heading: "Arborescence du projet",
  coach_note_heading: "À retenir",
  coach_stack_html:
`<div class="stack-group"><span class="stack-cat">IA</span><span class="stack-badges"><span class="stack-badge">Gemini</span><span class="stack-badge">Multi-agents</span><span class="stack-badge">SDK Google AI</span></span></div>
<div class="stack-group"><span class="stack-cat">Backend</span><span class="stack-badges"><span class="stack-badge">Python</span><span class="stack-badge">FastAPI</span><span class="stack-badge">pydantic</span><span class="stack-badge">SQLite</span></span></div>
<div class="stack-group"><span class="stack-cat">Déploiement</span><span class="stack-badges"><span class="stack-badge">Docker</span><span class="stack-badge">Caddy</span><span class="stack-badge">VPS</span></span></div>
<div class="stack-group"><span class="stack-cat">Interfaces &amp; outils</span><span class="stack-badges"><span class="stack-badge">Telegram</span><span class="stack-badge">n8n</span><span class="stack-badge">Streamlit</span><span class="stack-badge">pytest</span></span></div>`,
  coach_tree_html:
`Coach_Streetlifting/
├─ agents/                    <span class="c"># Les 3 agents IA (1 rôle = 1 prompt)</span>
│  ├─ agent_extracteur.py     <span class="c"># Collecte le profil depuis la conversation</span>
│  ├─ agent_classificateur.py <span class="c"># Détecte l'intention (débrief/question/refonte)</span>
│  ├─ agent_coach.py          <span class="c"># Analyse les débriefs, rédige les retours</span>
│  └─ base_agent.py           <span class="c"># Socle commun (appel Gemini, retry JSON, logs)</span>
├─ orchestration/             <span class="c"># Le chef d'orchestre (CODE PUR, 0 IA)</span>
│  ├─ orchestrateur.py        <span class="c"># Aiguille les agents, décisions déterministes</span>
│  ├─ contexte_utilisateur.py <span class="c"># Construit le contexte utilisateur depuis la base</span>
│  └─ transcription.py        <span class="c"># Corrige les termes mal retranscrits à l'oral</span>
├─ regles_sport/              <span class="c"># Moteur de règles : logique en code, données en YAML</span>
│  ├─ methodologies.py        <span class="c"># Choix déterministe de la méthodologie</span>
│  ├─ charges.py              <span class="c"># Charges, deload, ré-ancrage</span>
│  └─ programme.py            <span class="c"># Assemble le programme de 3 mois</span>
├─ prompts/                   <span class="c"># Prompts versionnés en YAML, séparés du code</span>
├─ database/                  <span class="c"># SQLite : schéma, accès, rétention/maintenance</span>
├─ api/main.py                <span class="c"># API FastAPI (appelée par n8n, clé X-API-Key)</span>
├─ dashboard/                 <span class="c"># Dashboard Streamlit de suivi (privé)</span>
├─ demo/demo_chat.py          <span class="c"># Démo portfolio multilingue FR/EN/RU (isolée)</span>
├─ tests/                     <span class="c"># ~100 tests pytest, sans appel réseau</span>
├─ docker/Caddyfile           <span class="c"># Reverse-proxy + authentification du dashboard</span>
├─ docker-compose.yml         <span class="c"># 2 services (api + dashboard) + volume persistant</span>
└─ Dockerfile`,
  coach_archi_note_html:
    "<strong>À retenir :</strong> l'orchestrateur ne contient aucune IA. Il aiguille les agents et prend les décisions critiques (méthodologie, charges, deload, sécurité) de façon <strong>déterministe</strong>. C'est ce qui rend le système fiable et testable. Le projet a d'ailleurs compté un 4<sup>e</sup> agent « Validateur » (complétude + alertes) : son jugement LLM s'est révélé trop instable, il a été <strong>remplacé par du code déterministe</strong>. Moins de latence, zéro aléa.",

  coach_code_title: "Extrait commenté : l'aiguillage de l'orchestrateur",
  coach_code_html:
`def traiter_message(self, user_id, message):
    <span class="c"># Corrige les termes mal retranscrits à l'oral ("top sept" -> "topset")</span>
    message = normaliser_termes(message)
    programme = self._programme_actif(user_id)   <span class="c"># on lit l'état en base (pas d'IA)</span>

    <span class="c"># Pas de programme : on collecte le profil (onboarding)</span>
    if programme is None:
        return self._flux_onboarding(user_id, message)

    <span class="c"># Programme actif : un agent IA classe l'intention du message</span>
    intention = self.classificateur.classer(message)

    if intention.intention == "debrief":
        return self._traiter_debrief(...)   <span class="c"># l'IA lit la séance, le CODE ajuste les charges</span>
    if intention.intention == "refonte":
        return self._traiter_refonte(...)   <span class="c"># on reconstruit le programme</span>
    return self._traiter_question(...)      <span class="c"># l'IA répond à la question</span>`,

  coach_code2_title: "Extrait commenté : l'ajustement déterministe des charges",
  coach_code2_html:
`def double_progression_backoff(lest_actuel, valide_au_max, pas=2.5):
    <span class="c"># Double progression : on ne monte la charge QUE si l'athlète a validé le HAUT de la fourchette de reps sur toutes les séries.</span>
    if not valide_au_max:
        return lest_actuel                      <span class="c"># sinon on TIENT la charge (les reps montent d'abord)</span>
    nouveau = arrondir(lest_actuel + pas)       <span class="c"># +2.5 kg, arrondi au palier réel</span>
    return nouveau if nouveau > 0 else None     <span class="c"># None = retour au poids du corps</span>


def deload(lest_1rm):
    <span class="c"># Échecs répétés : le CODE applique un délestage déterministe (-10 %)</span>
    return arrondir(lest_1rm * 0.90)`,

  /* --- Onglet Démo --- */
  coach_demo_note:
    "Parcours complet : création du programme, débrief vocal d'une séance et ajustement automatique des charges.",
  coach_demo_html:
`<video width="100%" height="auto" controls style="border-radius: 14px; margin-bottom: 10px;">
  <source src="../../media/coach-fr.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la vidéo HTML5.
</video>

<p style="color: #9fb0cc; font-size: 0.9rem; font-style: italic; text-align: center; margin: 0 0 24px 0;">Pour la démo, j'ai recréé la conversation en version web pour simuler le parcours qui se déroule normalement sur Telegram.</p>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 16px;">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Ce que montre cette démonstration</h3>
  <ul style="color: #9fb0cc; margin: 0; padding: 0; list-style: none; text-align: left;">
    <li style="margin-bottom: 8px; padding-left: 0;">• Collecte des informations de l'utilisateur (niveau, objectifs, performances actuelles, contraintes physiques)</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Analyse du profil par le système IA</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Génération d'un programme d'entraînement personnalisé</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Adaptation automatique des charges et des exercices en fonction du profil sportif</li>
  </ul>
</div>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12);">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Fonctionnement du coach IA</h3>
  <p style="color: #9fb0cc; margin: 0; line-height: 1.7;">Le système ne se limite pas à générer un programme initial. Après chaque séance, l'athlète effectue un débriefing via Telegram. Le coach IA analyse alors les performances réalisées, le niveau de fatigue ainsi que les éventuelles douleurs ou blessures signalées. À partir de ces informations, il adapte automatiquement les séances futures afin de maintenir une progression durable. Lorsque les objectifs sont atteints, les charges sont augmentées progressivement. À l'inverse, en cas d'échec répété, le système applique une phase de délestage avant de reprendre un nouveau cycle de progression.</p>
</div>`
});
