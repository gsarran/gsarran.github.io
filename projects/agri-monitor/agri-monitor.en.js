/* EN dictionary specific to the Agri Monitor project (extends the common one) */
window.translations = window.translations || {};
window.translations.en = Object.assign(window.translations.en || {}, {
  vostok_title: "Agri Monitor, multi-agent crop monitoring",
  vostok_tagline: "Bringing satellite, weather and soil-sensor data together to detect water stress field by field, all inside an interactive dashboard.",

  /* --- Business value tab --- */
  vostok_context_title: "NDVI, NDWI: what are they?",
  vostok_context_html:
    "Behind these acronyms are <strong>two indices derived from satellite imagery</strong>. The first assesses <strong>vegetation vigor</strong>, while the second measures its water content. In practice, they make it possible to monitor crop health from space and detect <strong>early signs of water stress</strong>, often long before they become visible to the naked eye.",
  vostok_problem_html:
    "<ul>" +
    "<li>Drought and water stress reduce crop yields, but detecting them field by field across large areas is <strong>a time-consuming task</strong>.</li>" +
    "<li>Essential data is scattered across satellite imagery, weather forecasts, and soil sensors. Manually combining and analyzing this information for each field is <strong>both complex and time-consuming</strong>.</li>" +
    "<li>Reacting too late leads to yield losses, while inefficient irrigation <strong>wastes both water and money</strong>.</li>" +
    "</ul>",
  vostok_solution_html:
    "<ul>" +
    "<li>A unified platform combining satellite imagery (NDVI/NDWI, Sentinel-2 and Landsat), weather data, and soil sensors to provide a <strong>complete view of every field</strong>.</li>" +
    "<li><strong>Three agents work in parallel</strong>: weather, satellite, and supervision. Together, they deliver an accurate diagnosis and an irrigation recommendation in millimeters.</li>" +
    "<li>A <strong>deterministic preprocessing layer</strong> based on soil sensors instantly evaluates water stress severity and color-codes each field in real time. Detailed AI analysis is available on demand.</li>" +
    "<li>An <strong>interactive dashboard</strong> brings together stress maps, satellite imagery, NDVI and NDWI charts, weather data, confidence scores, and multilingual PDF export.</li>" +
    "</ul>",
  vostok_result_html:
    "<ul>" +
    "<li>Across each region, water-stressed fields are highlighted in color, enabling <strong>instant identification of critical areas</strong>.</li>" +
    "<li>A complete field diagnosis <strong>in seconds</strong>, combining satellite imagery, weather data, and soil sensors, with a precise irrigation recommendation.</li>" +
    "<li>Data-driven decisions powered by NDVI and NDWI maps, water deficit indicators, GDD, and a <strong>confidence score</strong>, with instant generation of a detailed report.</li>" +
    "<li>A <strong>reproducible and auditable</strong> system, with its business rules externalized into YAML files, and designed for international teams.</li>" +
    "<li>Designed to integrate seamlessly with <strong>automation workflows</strong>: the diagnosis can trigger n8n, Make, or irrigation robots, automatically turning detection into action.</li>" +
    "</ul>",

  /* --- Architecture tab --- */
  vostok_archi_intro:
    "The same idea as a good diagnosis: AI agents to read and interpret, deterministic code for the calculations and pre-filtering, and business rules kept in YAML files that are easy to tweak.",
  vostok_overview_title: "Overview",
  vostok_flow_title: "Diagnosing a field",
  vostok_fl_n1: "Field",
  vostok_fl_b1: "Weather agent",
  vostok_fl_b2: "Satellite agent (NDVI)",
  vostok_fl_n2: "Supervisor agent",
  vostok_fl_n3: "Diagnosis + irrigation",
  vostok_stack_heading: "Tech stack",
  vostok_tree_heading: "Project structure",
  vostok_stack_html:
`<div class="stack-group"><span class="stack-cat">AI</span><span class="stack-badges"><span class="stack-badge">Gemini</span><span class="stack-badge">Multi-agent</span><span class="stack-badge">Threading (parallel)</span><span class="stack-badge">SDK Google AI</span></span></div>
<div class="stack-group"><span class="stack-cat">Data &amp; geo</span><span class="stack-badges"><span class="stack-badge">Google Earth Engine</span><span class="stack-badge">Sentinel-2</span><span class="stack-badge">Landsat</span><span class="stack-badge">Open-Meteo</span></span></div>
<div class="stack-group"><span class="stack-cat">Image processing</span><span class="stack-badges"><span class="stack-badge">rasterio</span><span class="stack-badge">NumPy</span><span class="stack-badge">SciPy</span></span></div>
<div class="stack-group"><span class="stack-cat">Backend</span><span class="stack-badges"><span class="stack-badge">Python</span><span class="stack-badge">FastAPI</span><span class="stack-badge">YAML</span><span class="stack-badge">Docker</span></span></div>
<div class="stack-group"><span class="stack-cat">Dashboard</span><span class="stack-badges"><span class="stack-badge">Streamlit</span><span class="stack-badge">Folium</span><span class="stack-badge">Plotly</span><span class="stack-badge">PDF export</span></span></div>`,
  vostok_tree_html:
`AgriMonitor/
├─ agents/                      <span class="c"># Multi-agent system</span>
│  ├─ agent_superviseur.py      <span class="c"># Orchestrates the workers and synthesises the diagnosis</span>
│  ├─ agent_meteo.py            <span class="c"># Weather: water deficit, GDD, heat stress</span>
│  ├─ agent_ndvi.py             <span class="c"># Satellite: NDVI/NDWI, stress maps</span>
│  ├─ base_agent.py             <span class="c"># Shared base (LLM call, field config)</span>
│  └─ prompts/                  <span class="c"># Agent prompts (YAML)</span>
├─ business_rules/              <span class="c"># Business thresholds in YAML (NDVI, NDWI, weather, crops)</span>
├─ data_source/                 <span class="c"># Data connectors</span>
│  ├─ gee_ndvi_extraction.py    <span class="c"># NDVI via Google Earth Engine (Sentinel-2 + Landsat)</span>
│  └─ meteo_open_meteo.py       <span class="c"># Weather via Open-Meteo</span>
├─ api/                         <span class="c"># FastAPI API (analyse + fields routes)</span>
├─ dashboard/                   <span class="c"># Streamlit dashboard</span>
│  ├─ app.py                    <span class="c"># Main application</span>
│  ├─ maps.py                   <span class="c"># Interactive field map (Folium)</span>
│  └─ charts.py                 <span class="c"># Plotly charts (NDVI, rainfall, GDD, soil moisture)</span>
├─ tools/                       <span class="c"># Deterministic computation services</span>
│  ├─ stress_mapper.py          <span class="c"># Pixel-by-pixel stress map from the GeoTIFF</span>
│  └─ rapport_generator.py      <span class="c"># PDF report generation (FR/EN/RU)</span>
├─ utils/                       <span class="c"># Shared base: data loading, phenology, i18n, logs</span>
├─ locales/                     <span class="c"># Translations FR / EN / RU</span>
├─ rapports/                    <span class="c"># PDF reports + generated stress maps</span>
└─ docker-compose.yml           <span class="c"># 2 services: API + dashboard</span>`,
  vostok_archi_note_html:
    "<strong>Key takeaway:</strong> the two agents (weather and satellite) run <strong>in parallel</strong> to save time, and the supervisor only decides once both analyses are in. The decision thresholds live in YAML files, separate from the code: you can tune them without touching the logic.",

  vostok_code_title: "Annotated snippet: the two agents launched in parallel",
  vostok_code_html:
`def _lancer_en_parallele(self, input_data, langue):
    resultats = {}

    <span class="c"># each agent runs in its own thread</span>
    def run_meteo():
        resultats["meteo"] = self._agent_meteo.analyser(input_data, langue)

    def run_ndvi():
        resultats["ndvi"] = self._agent_ndvi.analyser(input_data, langue)

    t_meteo = threading.Thread(target=run_meteo)
    t_ndvi  = threading.Thread(target=run_ndvi)
    t_meteo.start(); t_ndvi.start()   <span class="c"># both start at the same time</span>
    t_meteo.join();  t_ndvi.join()    <span class="c"># wait for both to finish</span>

    return resultats["meteo"], resultats["ndvi"]`,

  vostok_code2_title: "Annotated snippet: the AI interprets, the code does the maths",
  vostok_code2_html:
`<span class="c"># the agent calls Gemini to interpret the weather data...</span>
result = self._appeler_gemini(sys_prompt, user_prompt)

<span class="c"># ...but it is never trusted with arithmetic: every numeric value is overwritten with the exact Python calculation (anti-hallucination)</span>
result["deficit_15j_mm"]            = stats["periode_15j"]["deficit_hydrique_mm"]
result["precipitation_15j_mm"]      = stats["periode_15j"]["precipitation_mm"]
result["gdd_cumul_0"]               = gdd["gdd_cumul_0"]
result["humidite_sol_6cm_actuelle"] = stats["derniere_mesure"]["humidite_sol_6cm"]

<span class="c"># the LLM keeps what it does well: the diagnosis and the recommendation</span>
return result`,

  /* --- Demo tab --- */
  vostok_demo_note:
    "A guided tour of the interactive dashboard: field map, analysis launch, satellite stress maps and irrigation recommendation.",
  vostok_demo_html:
`<video width="100%" height="auto" controls style="border-radius: 14px; margin-bottom: 24px;">
  <source src="../../media/agri-monitor-en.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 16px;">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">What this demonstration shows</h3>
  <ul style="color: #9fb0cc; margin: 0; padding: 0; list-style: none; text-align: left;">
    <li style="margin-bottom: 8px; padding-left: 0;">• Exploration of the interactive dashboard: a deterministic pre-filter uses data from ground sensors to instantly identify at-risk fields before launching a more detailed multi-agent analysis.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Selection of a field and execution of an in-depth analysis by the multi-agent system.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Combination of satellite and weather data: NDVI/NDWI stress maps, climate indicators, and confidence score.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Generation of a quantified irrigation recommendation along with an exportable PDF report.</li>
  </ul>
</div>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12);">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Architecture and reliability principles</h3>
  <p style="color: #9fb0cc; margin: 0 0 14px; line-height: 1.7;">The system is built on a multi-agent architecture composed of three complementary roles. A weather agent analyzes rainfall, water deficit, and climate indicators, while a satellite agent interprets vegetation and moisture indices derived from Sentinel-2 and Landsat imagery. These two analyses run in parallel to reduce processing time.</p>
  <p style="color: #9fb0cc; margin: 0 0 14px; line-height: 1.7;">A supervisor agent then aggregates the results to produce a single diagnosis and an irrigation recommendation. To ensure reliability, all numerical calculations are performed by deterministic Python functions: AI is used only for data interpretation and report generation.</p>
  <p style="color: #9fb0cc; margin: 0; line-height: 1.7;">Finally, business rules are externalized into YAML files, making it easy to adjust thresholds and parameters without modifying the application code.</p>
</div>`
});
