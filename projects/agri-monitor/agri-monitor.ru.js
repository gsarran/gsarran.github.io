/* RU словарь для проекта Agri Monitor (дополняет общий) */
window.translations = window.translations || {};
window.translations.ru = Object.assign(window.translations.ru || {}, {
  vostok_title: "Agri Monitor, мультиагентный мониторинг полей",
  vostok_tagline: "Спутниковые данные, погода и датчики почвы в одном интерактивном дашборде, чтобы выявлять водный стресс по каждому полю.",

  /* --- Вкладка «Бизнес-ценность» --- */
  vostok_context_title: "NDVI, NDWI: что это такое?",
  vostok_context_html:
    "За этими аббревиатурами скрываются <strong>два индекса, рассчитываемых на основе спутниковых снимков</strong>. Первый оценивает <strong>состояние и активность растительности</strong>, а второй отражает её обеспеченность влагой. На практике они позволяют отслеживать состояние поля из космоса и выявлять <strong>первые признаки водного стресса</strong> задолго до того, как они станут заметны невооружённым глазом.",
  vostok_problem_html:
    "<ul>" +
    "<li>Засуха и водный стресс снижают урожайность, однако выявлять эти проблемы для каждого поля на больших площадях <strong>требует значительных затрат времени</strong>.</li>" +
    "<li>Важные данные распределены между спутниковыми снимками, метеорологическими данными и датчиками почвы. Объединять и анализировать всю эту информацию вручную для каждого поля <strong>сложно и занимает много времени</strong>.</li>" +
    "<li>Слишком поздняя реакция приводит к потере урожая, а неэффективное орошение приводит <strong>к лишним расходам воды и финансовых ресурсов</strong>.</li>" +
    "</ul>",
  vostok_solution_html:
    "<ul>" +
    "<li>Единая платформа, объединяющая спутниковые снимки (NDVI/NDWI, Sentinel-2 и Landsat), погодные данные и почвенные датчики для <strong>полного контроля состояния каждого поля</strong>.</li>" +
    "<li><strong>Три агента работают параллельно</strong>: погода, спутниковые данные и супервизор. Они формируют точный диагноз и рекомендацию по орошению в миллиметрах.</li>" +
    "<li><strong>Детерминированный алгоритм</strong> на основе почвенных датчиков мгновенно оценивает критичность водного стресса и окрашивает каждое поле в режиме реального времени. Подробный анализ ИИ запускается по запросу.</li>" +
    "<li><strong>Интерактивный дашборд</strong> объединяет карты стресса, спутниковые снимки, графики NDVI, NDWI и погоды, показатель достоверности и экспорт PDF на нескольких языках.</li>" +
    "</ul>",
  vostok_result_html:
    "<ul>" +
    "<li>В каждом регионе поля с признаками водного стресса выделяются цветом, что позволяет <strong>мгновенно выявлять проблемные зоны</strong>.</li>" +
    "<li>Полная диагностика поля <strong>за несколько секунд</strong> на основе спутниковых данных, погоды и почвенных датчиков с точной рекомендацией по орошению.</li>" +
    "<li>Решения, основанные на реальных данных: карты NDVI и NDWI, показатели водного дефицита, GDD и <strong>показатель достоверности</strong> с мгновенным формированием подробного отчёта.</li>" +
    "<li><strong>Воспроизводимая и проверяемая система</strong>: бизнес-правила вынесены в отдельные YAML-файлы, а сама она рассчитана на международные команды.</li>" +
    "<li>Система легко интегрируется в <strong>цепочку автоматизации</strong>: диагностический результат может запускать сценарии n8n, Make или управление роботизированным орошением, автоматически переводя обнаружение проблемы в конкретное действие.</li>" +
    "</ul>",

  /* --- Вкладка «Архитектура» --- */
  vostok_archi_intro:
    "Принцип тот же, что и в хорошей диагностике: ИИ-агенты читают и интерпретируют данные, детерминированный код считает и выполняет предварительную фильтрацию, а бизнес-правила вынесены в YAML-файлы, которые легко править.",
  vostok_overview_title: "Обзор",
  vostok_flow_title: "Диагностика участка",
  vostok_fl_n1: "Участок",
  vostok_fl_b1: "Агент погоды",
  vostok_fl_b2: "Спутниковый агент (NDVI)",
  vostok_fl_n2: "Агент-супервизор",
  vostok_fl_n3: "Диагноз + полив",
  vostok_stack_heading: "Технологии",
  vostok_tree_heading: "Структура проекта",
  vostok_stack_html:
`<div class="stack-group"><span class="stack-cat">ИИ</span><span class="stack-badges"><span class="stack-badge">Gemini</span><span class="stack-badge">Мультиагенты</span><span class="stack-badge">Threading (параллельно)</span><span class="stack-badge">SDK Google AI</span></span></div>
<div class="stack-group"><span class="stack-cat">Данные и гео</span><span class="stack-badges"><span class="stack-badge">Google Earth Engine</span><span class="stack-badge">Sentinel-2</span><span class="stack-badge">Landsat</span><span class="stack-badge">Open-Meteo</span></span></div>
<div class="stack-group"><span class="stack-cat">Обработка изображений</span><span class="stack-badges"><span class="stack-badge">rasterio</span><span class="stack-badge">NumPy</span><span class="stack-badge">SciPy</span></span></div>
<div class="stack-group"><span class="stack-cat">Бэкенд</span><span class="stack-badges"><span class="stack-badge">Python</span><span class="stack-badge">FastAPI</span><span class="stack-badge">YAML</span><span class="stack-badge">Docker</span></span></div>
<div class="stack-group"><span class="stack-cat">Дашборд</span><span class="stack-badges"><span class="stack-badge">Streamlit</span><span class="stack-badge">Folium</span><span class="stack-badge">Plotly</span><span class="stack-badge">Экспорт PDF</span></span></div>`,
  vostok_tree_html:
`AgriMonitor/
├─ agents/                      <span class="c"># Мультиагентная система</span>
│  ├─ agent_superviseur.py      <span class="c"># Оркестрирует воркеров и сводит диагноз</span>
│  ├─ agent_meteo.py            <span class="c"># Погода: дефицит влаги, GDD, тепловой стресс</span>
│  ├─ agent_ndvi.py             <span class="c"># Спутник: NDVI/NDWI, карты стресса</span>
│  ├─ base_agent.py             <span class="c"># Общая основа (вызов LLM, конфиг полей)</span>
│  └─ prompts/                  <span class="c"># Промпты агентов (YAML)</span>
├─ business_rules/              <span class="c"># Бизнес-пороги в YAML (NDVI, NDWI, погода, культуры)</span>
├─ data_source/                 <span class="c"># Коннекторы данных</span>
│  ├─ gee_ndvi_extraction.py    <span class="c"># NDVI через Google Earth Engine (Sentinel-2 + Landsat)</span>
│  └─ meteo_open_meteo.py       <span class="c"># Погода через Open-Meteo</span>
├─ api/                         <span class="c"># FastAPI API (маршруты анализа + полей)</span>
├─ dashboard/                   <span class="c"># Streamlit-дашборд</span>
│  ├─ app.py                    <span class="c"># Основное приложение</span>
│  ├─ maps.py                   <span class="c"># Интерактивная карта полей (Folium)</span>
│  └─ charts.py                 <span class="c"># Графики Plotly (NDVI, осадки, GDD, влажность)</span>
├─ tools/                       <span class="c"># Детерминированные вычислительные сервисы</span>
│  ├─ stress_mapper.py          <span class="c"># Карта стресса попиксельно из GeoTIFF</span>
│  └─ rapport_generator.py      <span class="c"># Генерация PDF-отчётов (FR/EN/RU)</span>
├─ utils/                       <span class="c"># Общая база: чтение данных, фенология, i18n, логи</span>
├─ locales/                     <span class="c"># Переводы FR / EN / RU</span>
├─ rapports/                    <span class="c"># PDF-отчёты + сгенерированные карты стресса</span>
└─ docker-compose.yml           <span class="c"># 2 сервиса: API + дашборд</span>`,
  vostok_archi_note_html:
    "<strong>Главное:</strong> два агента (погода и спутник) работают <strong>параллельно</strong>, чтобы сэкономить время, а супервизор решает только когда оба анализа готовы. Пороги решений лежат в YAML-файлах, отдельно от кода: их можно настраивать, не трогая логику.",

  vostok_code_title: "Аннотированный фрагмент: два агента запускаются параллельно",
  vostok_code_html:
`def _lancer_en_parallele(self, input_data, langue):
    resultats = {}

    <span class="c"># каждый агент работает в своём потоке</span>
    def run_meteo():
        resultats["meteo"] = self._agent_meteo.analyser(input_data, langue)

    def run_ndvi():
        resultats["ndvi"] = self._agent_ndvi.analyser(input_data, langue)

    t_meteo = threading.Thread(target=run_meteo)
    t_ndvi  = threading.Thread(target=run_ndvi)
    t_meteo.start(); t_ndvi.start()   <span class="c"># оба стартуют одновременно</span>
    t_meteo.join();  t_ndvi.join()    <span class="c"># ждём, пока оба закончат</span>

    return resultats["meteo"], resultats["ndvi"]`,

  vostok_code2_title: "Аннотированный фрагмент: ИИ интерпретирует, код считает",
  vostok_code2_html:
`<span class="c"># агент вызывает Gemini, чтобы интерпретировать погодные данные...</span>
result = self._appeler_gemini(sys_prompt, user_prompt)

<span class="c"># ...но арифметику ему не доверяем: каждое числовое значение перезаписывается точным расчётом на Python (защита от галлюцинаций)</span>
result["deficit_15j_mm"]            = stats["periode_15j"]["deficit_hydrique_mm"]
result["precipitation_15j_mm"]      = stats["periode_15j"]["precipitation_mm"]
result["gdd_cumul_0"]               = gdd["gdd_cumul_0"]
result["humidite_sol_6cm_actuelle"] = stats["derniere_mesure"]["humidite_sol_6cm"]

<span class="c"># LLM делает то, что умеет хорошо: диагноз и рекомендацию</span>
return result`,

  /* --- Вкладка «Демо» --- */
  vostok_demo_note:
    "Обзор интерактивного дашборда: карта полей, запуск анализа, спутниковые карты стресса и рекомендация по поливу.",
  vostok_demo_html:
`<video width="100%" height="auto" controls style="border-radius: 14px; margin-bottom: 24px;">
  <source src="../../media/agri-monitor-ru.mp4" type="video/mp4">
  Ваш браузер не поддерживает видео HTML5.
</video>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 16px;">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Что показывает эта демонстрация</h3>
  <ul style="color: #9fb0cc; margin: 0; padding: 0; list-style: none; text-align: left;">
    <li style="margin-bottom: 8px; padding-left: 0;">• Обзор интерактивного дашборда: детерминированный предварительный фильтр использует данные наземных датчиков, чтобы мгновенно выявлять участки с риском водного стресса ещё до запуска более глубокого мультиагентного анализа.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Выбор участка и запуск детального анализа мультиагентной системой.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Объединение спутниковых и метеорологических данных: карты стресса NDVI/NDWI, климатические показатели и оценка достоверности результатов.</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Формирование количественной рекомендации по орошению и экспорт отчёта в формате PDF.</li>
  </ul>
</div>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12);">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Архитектура и принципы надёжности</h3>
  <p style="color: #9fb0cc; margin: 0 0 14px; line-height: 1.7;">Система основана на мультиагентной архитектуре, состоящей из трёх взаимодополняющих компонентов. Метеорологический агент анализирует осадки, дефицит влаги и климатические показатели, тогда как спутниковый агент интерпретирует индексы растительности и влажности, полученные на основе снимков Sentinel-2 и Landsat. Эти два анализа выполняются параллельно, что сокращает время обработки данных.</p>
  <p style="color: #9fb0cc; margin: 0 0 14px; line-height: 1.7;">Затем агент-супервизор объединяет результаты и формирует единый диагноз с рекомендацией по орошению. Для надёжности все числовые расчёты выполняются детерминированными функциями Python: искусственный интеллект используется только для интерпретации данных и формирования заключения.</p>
  <p style="color: #9fb0cc; margin: 0; line-height: 1.7;">Наконец, бизнес-правила вынесены в отдельные YAML-файлы, что позволяет легко изменять пороговые значения и параметры без изменения исходного кода приложения.</p>
</div>`
});
