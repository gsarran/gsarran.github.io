/* Dictionnaire FR spécifique au projet Agri Monitor (complète le commun) */
window.translations = window.translations || {};
window.translations.fr = Object.assign(window.translations.fr || {}, {
  vostok_title: "Agri Monitor, surveillance agricole multi-agents",
  vostok_tagline: "Croiser satellite, météo et capteurs de sol pour repérer le stress hydrique des parcelles dans un dashboard interactif.",

  /* --- Onglet Valeur métier --- */
  vostok_context_title: "NDVI, NDWI : de quoi parle-t-on ?",
  vostok_context_html:
    "Derrière ces acronymes se cachent <strong>deux indices calculés à partir d'images satellites</strong>. Le premier évalue la <strong>vigueur de la végétation</strong>, tandis que le second mesure son niveau d'hydratation. En pratique, ils permettent de détecter depuis l'espace l'état de santé d'une parcelle et d'identifier les <strong>premiers signes de stress hydrique</strong>, souvent bien avant qu'ils ne soient visibles à l'œil nu.",
  vostok_problem_html:
    "<ul>" +
    "<li>La sécheresse et le stress hydrique réduisent les rendements, mais les détecter parcelle par parcelle sur de grandes exploitations <strong>demande un temps considérable</strong>.</li>" +
    "<li>Les données essentielles sont dispersées entre les images satellites, les prévisions météorologiques et les capteurs de terrain. Les analyser manuellement pour chaque parcelle est une <strong>tâche complexe et chronophage</strong>.</li>" +
    "<li>Réagir trop tard entraîne des pertes de rendement, tandis qu'une irrigation mal ciblée <strong>gaspille à la fois l'eau et les ressources financières</strong>.</li>" +
    "</ul>",
  vostok_solution_html:
    "<ul>" +
    "<li>Une plateforme qui centralise images satellites (NDVI/NDWI, Sentinel-2 et Landsat), météo et capteurs de sol pour offrir une <strong>vue complète de chaque parcelle</strong>.</li>" +
    "<li><strong>Trois agents collaborent en parallèle</strong> : météo, satellite et supervision. Ils produisent un diagnostic précis et une recommandation d'irrigation en millimètres.</li>" +
    "<li>Un <strong>prétraitement déterministe</strong> basé sur les capteurs de sol évalue instantanément la criticité du stress hydrique et colore chaque parcelle en temps réel. L'analyse IA détaillée se lance ensuite à la demande.</li>" +
    "<li>Un <strong>dashboard interactif</strong> regroupe cartes de stress, imagerie satellite, graphiques NDVI, NDWI et météo, score de confiance et export PDF multilingue.</li>" +
    "</ul>",
  vostok_result_html:
    "<ul>" +
    "<li>Dans chaque région, les parcelles en stress hydrique sont affichées en couleur, permettant un <strong>repérage immédiat des zones à risque</strong>.</li>" +
    "<li>Un diagnostic complet d'une parcelle <strong>en quelques secondes</strong>, fondé sur les données satellites, météorologiques et les capteurs de sol, avec une recommandation d'irrigation chiffrée.</li>" +
    "<li>Des décisions fondées sur des données concrètes : cartes NDVI, NDWI, déficit hydrique, GDD et <strong>score de confiance</strong>, avec génération instantanée d'un rapport détaillé.</li>" +
    "<li>Un système <strong>reproductible et auditable</strong>, dont les règles métier sont externalisées dans des fichiers YAML, et conçu pour des équipes internationales.</li>" +
    "<li>Conçu pour s'intégrer à une <strong>chaîne d'automatisation</strong> : le diagnostic peut déclencher un workflow n8n, Make ou un robot d'irrigation, afin de passer automatiquement de la détection à l'action.</li>" +
    "</ul>",

  /* --- Onglet Architecture --- */
  vostok_archi_intro:
    "Le même principe qu'un bon diagnostic : des agents IA pour lire et interpréter, du code déterministe pour les calculs et le pré-filtrage, et des règles métier isolées dans des fichiers YAML faciles à ajuster.",
  vostok_overview_title: "Vue d'ensemble",
  vostok_flow_title: "Diagnostic d'une parcelle",
  vostok_fl_n1: "Parcelle",
  vostok_fl_b1: "Agent météo",
  vostok_fl_b2: "Agent satellite (NDVI)",
  vostok_fl_n2: "Agent superviseur",
  vostok_fl_n3: "Diagnostic + irrigation",
  vostok_stack_heading: "Stack technique",
  vostok_tree_heading: "Arborescence du projet",
  vostok_stack_html:
`<div class="stack-group"><span class="stack-cat">IA</span><span class="stack-badges"><span class="stack-badge">Gemini</span><span class="stack-badge">Multi-agents</span><span class="stack-badge">Threading (parallèle)</span><span class="stack-badge">SDK Google AI</span></span></div>
<div class="stack-group"><span class="stack-cat">Données &amp; géo</span><span class="stack-badges"><span class="stack-badge">Google Earth Engine</span><span class="stack-badge">Sentinel-2</span><span class="stack-badge">Landsat</span><span class="stack-badge">Open-Meteo</span></span></div>
<div class="stack-group"><span class="stack-cat">Traitement image</span><span class="stack-badges"><span class="stack-badge">rasterio</span><span class="stack-badge">NumPy</span><span class="stack-badge">SciPy</span></span></div>
<div class="stack-group"><span class="stack-cat">Backend</span><span class="stack-badges"><span class="stack-badge">Python</span><span class="stack-badge">FastAPI</span><span class="stack-badge">YAML</span><span class="stack-badge">Docker</span></span></div>
<div class="stack-group"><span class="stack-cat">Dashboard</span><span class="stack-badges"><span class="stack-badge">Streamlit</span><span class="stack-badge">Folium</span><span class="stack-badge">Plotly</span><span class="stack-badge">Export PDF</span></span></div>`,
  vostok_tree_html:
`AgriMonitor/
├─ agents/                      <span class="c"># Système multi-agents</span>
│  ├─ agent_superviseur.py      <span class="c"># Orchestre les workers et synthétise le diagnostic</span>
│  ├─ agent_meteo.py            <span class="c"># Météo : déficit hydrique, GDD, stress thermique</span>
│  ├─ agent_ndvi.py             <span class="c"># Satellite : NDVI/NDWI, cartes de stress</span>
│  ├─ base_agent.py             <span class="c"># Socle commun (appel LLM, config parcelles)</span>
│  └─ prompts/                  <span class="c"># Prompts des agents (YAML)</span>
├─ business_rules/              <span class="c"># Seuils métier en YAML (NDVI, NDWI, météo, cultures)</span>
├─ data_source/                 <span class="c"># Connecteurs de données</span>
│  ├─ gee_ndvi_extraction.py    <span class="c"># NDVI via Google Earth Engine (Sentinel-2 + Landsat)</span>
│  └─ meteo_open_meteo.py       <span class="c"># Météo via Open-Meteo</span>
├─ api/                         <span class="c"># API FastAPI (routes analyse + parcelles)</span>
├─ dashboard/                   <span class="c"># Dashboard Streamlit</span>
│  ├─ app.py                    <span class="c"># Application principale</span>
│  ├─ maps.py                   <span class="c"># Carte interactive des parcelles (Folium)</span>
│  └─ charts.py                 <span class="c"># Graphiques Plotly (NDVI, précip, GDD, humidité)</span>
├─ tools/                       <span class="c"># Services de calcul déterministes</span>
│  ├─ stress_mapper.py          <span class="c"># Carte de stress pixel par pixel depuis le GeoTIFF</span>
│  └─ rapport_generator.py      <span class="c"># Génération des rapports PDF (FR/EN/RU)</span>
├─ utils/                       <span class="c"># Socle partagé : lecture données, phénologie, i18n, logs</span>
├─ locales/                     <span class="c"># Traductions FR / EN / RU</span>
├─ rapports/                    <span class="c"># Rapports PDF + cartes de stress générées</span>
└─ docker-compose.yml           <span class="c"># 2 services : API + dashboard</span>`,
  vostok_archi_note_html:
    "<strong>À retenir :</strong> les deux agents (météo et satellite) tournent <strong>en parallèle</strong> pour gagner du temps, et le superviseur ne tranche qu'une fois leurs deux analyses réunies. Les seuils de décision vivent dans des fichiers YAML, séparés du code : on peut les ajuster sans toucher à la logique.",

  vostok_code_title: "Extrait commenté : les deux agents lancés en parallèle",
  vostok_code_html:
`def _lancer_en_parallele(self, input_data, langue):
    resultats = {}

    <span class="c"># chaque agent tourne dans son propre thread</span>
    def run_meteo():
        resultats["meteo"] = self._agent_meteo.analyser(input_data, langue)

    def run_ndvi():
        resultats["ndvi"] = self._agent_ndvi.analyser(input_data, langue)

    t_meteo = threading.Thread(target=run_meteo)
    t_ndvi  = threading.Thread(target=run_ndvi)
    t_meteo.start(); t_ndvi.start()   <span class="c"># les deux partent en même temps</span>
    t_meteo.join();  t_ndvi.join()    <span class="c"># on attend que les deux aient fini</span>

    return resultats["meteo"], resultats["ndvi"]`,

  vostok_code2_title: "Extrait commenté : l'IA interprète, le code calcule",
  vostok_code2_html:
`<span class="c"># L'agent appelle Gemini pour interpréter les données météo...</span>
result = self._appeler_gemini(sys_prompt, user_prompt)

<span class="c"># ...mais on ne lui confie jamais l'arithmétique : chaque valeur numérique est écrasée par le calcul Python exact (anti-hallucination)</span>
result["deficit_15j_mm"]            = stats["periode_15j"]["deficit_hydrique_mm"]
result["precipitation_15j_mm"]      = stats["periode_15j"]["precipitation_mm"]
result["gdd_cumul_0"]               = gdd["gdd_cumul_0"]
result["humidite_sol_6cm_actuelle"] = stats["derniere_mesure"]["humidite_sol_6cm"]

<span class="c"># le LLM garde ce qu'il fait bien : le diagnostic et la recommandation</span>
return result`,

  /* --- Onglet Démo --- */
  vostok_demo_note:
    "Visite guidée du dashboard interactif : carte des parcelles, lancement d'une analyse, cartes de stress satellite et recommandation d'irrigation.",
  vostok_demo_html:
`<video width="100%" height="auto" controls style="border-radius: 14px; margin-bottom: 24px;">
  <source src="../../media/agri-monitor-fr.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la vidéo HTML5.
</video>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 16px;">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Ce que montre cette démonstration</h3>
  <ul style="color: #9fb0cc; margin: 0; padding: 0; list-style: none; text-align: left;">
    <li style="margin-bottom: 8px; padding-left: 0;">• Exploration du dashboard interactif : un pré-filtre déterministe exploite les données des capteurs au sol pour détecter instantanément les parcelles à risque avant le lancement d'une analyse multi-agents plus approfondie.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Sélection d'une parcelle et lancement d'une analyse approfondie par le système multi-agents.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Croisement des données satellites et météorologiques : cartes de stress NDVI/NDWI, indicateurs climatiques et score de confiance.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Génération d'une recommandation d'irrigation chiffrée ainsi que d'un rapport PDF exportable.</li>
  </ul>
</div>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12);">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Architecture et principes de fiabilité</h3>
  <p style="color: #9fb0cc; margin: 0 0 14px; line-height: 1.7;">Le système s'appuie sur une architecture multi-agents composée de trois rôles complémentaires. Un agent météo analyse les précipitations, le déficit hydrique et les indicateurs climatiques, tandis qu'un agent satellite interprète les indices de végétation et d'humidité issus des images Sentinel-2 et Landsat. Ces deux analyses sont exécutées en parallèle afin de réduire le temps de traitement.</p>
  <p style="color: #9fb0cc; margin: 0 0 14px; line-height: 1.7;">Un agent superviseur agrège ensuite les résultats pour produire un diagnostic unique accompagné d'une recommandation d'irrigation. Afin d'assurer la fiabilité des résultats, tous les calculs numériques sont réalisés par des fonctions Python déterministes : l'IA intervient uniquement pour l'interprétation des données et la rédaction du diagnostic.</p>
  <p style="color: #9fb0cc; margin: 0; line-height: 1.7;">Enfin, les règles métier sont externalisées dans des fichiers YAML, ce qui permet d'adapter facilement les seuils et les paramètres sans modifier le code de l'application.</p>
</div>`
});
