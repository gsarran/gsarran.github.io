/* RU словарь для проекта Coach (дополняет общий) */
window.translations = window.translations || {};
window.translations.ru = Object.assign(window.translations.ru || {}, {
  coach_title: "AI-тренер по стритлифтингу",
  coach_tagline: "Персональный мультиагентный тренер по силовым тренировкам в Telegram, уже развёрнутый в продакшене.",

  /* --- Вкладка «Бизнес-ценность» --- */
  coach_context_title: "Что такое стритлифтинг?",
  coach_context_html:
    "Стритлифтинг представляет собой <strong>силовой вид спорта, основанный на упражнениях с собственным весом</strong> и дополнительным отягощением. К поясу подвешиваются дополнительные блины, чтобы увеличить нагрузку в <strong>подтягиваниях и отжиманиях на брусьях</strong>, а цель заключается в том, чтобы поднять как можно больший вес. По своей философии этот вид спорта близок к <strong>пауэрлифтингу</strong>, но основан на упражнениях с собственным весом. Я занимаюсь им уже несколько лет и <strong>сначала создал этого ИИ-тренера для себя</strong>, чтобы решить реальную проблему, с которой сталкивался на каждой тренировке.",
  coach_problem_html:
    "<ul>" +
    "<li>Найти хорошего тренера по стритлифтингу по-прежнему непросто. Этот вид спорта ещё относительно молод в Европе, а опытных тренеров <strong>немного, и их услуги стоят дорого</strong>.</li>" +
    "<li>Многие спортсмены тренируются самостоятельно, используя типовые программы, которые не учитывают их уровень подготовки, восстановление и возможные проблемы со здоровьем. Из-за этого <strong>прогресс замедляется, а риск травм возрастает</strong>.</li>" +
    "<li>Тренер не может быть доступен круглосуточно и детально анализировать каждую тренировку. Изменения в программе часто вносятся <strong>слишком поздно</strong> или оказываются недостаточно точными.</li>" +
    "</ul>",
  coach_solution_html:
    "<ul>" +
    "<li>ИИ-тренер, доступный через <strong>Telegram</strong> в текстовом и голосовом формате, готов сопровождать спортсмена в любое время.</li>" +
    "<li>Автоматизированная <strong>мультиагентная система</strong> на базе n8n: агент-экстрактор собирает профиль спортсмена, агент-классификатор определяет намерение пользователя, а агент-тренер анализирует тренировки и формирует персонализированные рекомендации.</li>" +
    "<li>ИИ понимает и интерпретирует данные, а <strong>все критически важные решения принимает код</strong>: выбор методики, расчёт рабочих весов, делод, прогрессия и корректировка программы. Ошибки в расчёте нагрузок исключены.</li>" +
    "<li><strong>Постоянная память на SQLite</strong>, автоматические напоминания о тренировках через n8n и дашборд для отслеживания прогресса в долгосрочной перспективе.</li>" +
    "</ul>",
  coach_result_html:
    "<ul>" +
    "<li>ИИ-тренер доступен 24/7 и имеет <strong>практически нулевую предельную стоимость</strong>, обеспечивая постоянное сопровождение там, где услуги человеческого тренера остаются дорогими и ограниченными по времени.</li>" +
    "<li>Структурированная программа тренировок на 3 месяца <strong>создаётся за несколько секунд</strong> на основе обычного диалога и полностью адаптируется под профиль спортсмена.</li>" +
    "<li>Рабочие веса <strong>автоматически корректируются</strong> после каждой тренировки: обеспечивается прогрессия, делод после неудачной попытки и постепенное возвращение после перерыва. Все расчёты детерминированы и защищены механизмами безопасности, включая предупреждения о возможных травмах.</li>" +
    "<li><strong>Развёрнут в продакшене</strong> и протестирован от начала до конца, вплоть до голосового разбора реальной тренировки, что делает его надёжным в повседневном использовании.</li>" +
    "</ul>",

  /* --- Вкладка «Архитектура» --- */
  coach_archi_intro:
    "ИИ понимает, код принимает решения, а все расчёты остаются полностью под контролем. Такая архитектура гарантирует точные и последовательные тренировочные нагрузки без риска ошибок или «галлюцинаций» ИИ.",
  coach_overview_title: "Обзор",
  coach_n_conv: "Диалог в Telegram",
  coach_n_if: "Программа есть?",
  coach_n_ext: "Агент-экстрактор (ИИ)",
  coach_n_rules: "Спортивные правила (код)",
  coach_n_creation: "Создание программы",
  coach_n_class: "Агент-классификатор (ИИ)",
  coach_n_orch: "Оркестратор (код)",
  coach_n_route: "Разбор / Вопрос / Обновление",
  coach_n_prog: "Программа на 3 месяца",
  coach_stack_heading: "Технологии",
  coach_tree_heading: "Структура проекта",
  coach_note_heading: "Главное",
  coach_stack_html:
`<div class="stack-group"><span class="stack-cat">ИИ</span><span class="stack-badges"><span class="stack-badge">Gemini</span><span class="stack-badge">Мультиагенты</span><span class="stack-badge">SDK Google AI</span></span></div>
<div class="stack-group"><span class="stack-cat">Бэкенд</span><span class="stack-badges"><span class="stack-badge">Python</span><span class="stack-badge">FastAPI</span><span class="stack-badge">pydantic</span><span class="stack-badge">SQLite</span></span></div>
<div class="stack-group"><span class="stack-cat">Развёртывание</span><span class="stack-badges"><span class="stack-badge">Docker</span><span class="stack-badge">Caddy</span><span class="stack-badge">VPS</span></span></div>
<div class="stack-group"><span class="stack-cat">Интерфейсы и инструменты</span><span class="stack-badges"><span class="stack-badge">Telegram</span><span class="stack-badge">n8n</span><span class="stack-badge">Streamlit</span><span class="stack-badge">pytest</span></span></div>`,
  coach_tree_html:
`Coach_Streetlifting/
├─ agents/                    <span class="c"># 3 ИИ-агента (1 роль = 1 промпт)</span>
│  ├─ agent_extracteur.py     <span class="c"># Собирает профиль из диалога</span>
│  ├─ agent_classificateur.py <span class="c"># Определяет намерение (разбор/вопрос/пересборка)</span>
│  ├─ agent_coach.py          <span class="c"># Анализирует разборы, пишет ответы</span>
│  └─ base_agent.py           <span class="c"># Общая основа (вызов Gemini, retry JSON, логи)</span>
├─ orchestration/             <span class="c"># Дирижёр (ЧИСТЫЙ КОД, 0 ИИ)</span>
│  ├─ orchestrateur.py        <span class="c"># Маршрутизирует агентов, детерминированные решения</span>
│  ├─ contexte_utilisateur.py <span class="c"># Собирает контекст пользователя из БД</span>
│  └─ transcription.py        <span class="c"># Исправляет термины, искажённые голосовым вводом</span>
├─ regles_sport/              <span class="c"># Движок правил: логика в коде, данные в YAML</span>
│  ├─ methodologies.py        <span class="c"># Детерминированный выбор методики</span>
│  ├─ charges.py              <span class="c"># Веса, deload, перепривязка</span>
│  └─ programme.py            <span class="c"># Собирает программу на 3 месяца</span>
├─ prompts/                   <span class="c"># Версионируемые YAML-промпты, отдельно от кода</span>
├─ database/                  <span class="c"># SQLite: схема, доступ, ретенция/обслуживание</span>
├─ api/main.py                <span class="c"># FastAPI API (вызывается из n8n, X-API-Key)</span>
├─ dashboard/                 <span class="c"># Streamlit-дашборд мониторинга (приватный)</span>
├─ demo/demo_chat.py          <span class="c"># Мультиязычная демо FR/EN/RU (изолирована)</span>
├─ tests/                     <span class="c"># ~100 pytest-тестов, без сетевых вызовов</span>
├─ docker/Caddyfile           <span class="c"># Reverse-proxy + аутентификация дашборда</span>
├─ docker-compose.yml         <span class="c"># 2 сервиса (api + dashboard) + постоянный том</span>
└─ Dockerfile`,
  coach_archi_note_html:
    "<strong>Главное:</strong> оркестратор не содержит ИИ. Он маршрутизирует агентов и принимает критические решения (методика, веса, deload, безопасность) <strong>детерминированно</strong>. Именно это делает систему надёжной и тестируемой. В проекте был и 4-й агент «Валидатор» (полнота + предупреждения): его LLM-суждения оказались слишком нестабильными, поэтому он был <strong>заменён детерминированным кодом</strong>. Меньше задержка, ноль случайности.",

  coach_code_title: "Аннотированный фрагмент: маршрутизация оркестратора",
  coach_code_html:
`def traiter_message(self, user_id, message):
    <span class="c"># Исправляем термины, искажённые голосовым вводом ("top sept" -> "topset")</span>
    message = normaliser_termes(message)
    programme = self._programme_actif(user_id)   <span class="c"># читаем состояние из БД (без ИИ)</span>

    <span class="c"># Программы нет: собираем профиль (онбординг)</span>
    if programme is None:
        return self._flux_onboarding(user_id, message)

    <span class="c"># Программа активна: ИИ-агент классифицирует намерение сообщения</span>
    intention = self.classificateur.classer(message)

    if intention.intention == "debrief":
        return self._traiter_debrief(...)   <span class="c"># ИИ читает разбор, КОД корректирует веса</span>
    if intention.intention == "refonte":
        return self._traiter_refonte(...)   <span class="c"># пересобираем программу</span>
    return self._traiter_question(...)      <span class="c"># ИИ отвечает на вопрос</span>`,

  /* --- Вкладка «Демо» --- */
  coach_demo_note:
    "Полный сценарий: создание программы, голосовой разбор тренировки и автоматическая корректировка весов.",
  coach_demo_html:
`<video width="100%" height="auto" controls style="border-radius: 14px; margin-bottom: 10px;">
  <source src="../../media/coach-ru.mp4" type="video/mp4">
  Ваш браузер не поддерживает видео HTML5.
</video>

<p style="color: #9fb0cc; font-size: 0.9rem; font-style: italic; text-align: center; margin: 0 0 24px 0;">Для демонстрации я воссоздал диалог в виде веб-страницы, чтобы показать процесс, который обычно проходит в Telegram.</p>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 16px;">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Что показывает эта демонстрация</h3>
  <ul style="color: #9fb0cc; margin: 0; padding: 0; list-style: none; text-align: left;">
    <li style="margin-bottom: 8px; padding-left: 0;">• Сбор информации о пользователе (уровень, цели, текущие показатели, физические ограничения)</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Анализ профиля системой ИИ</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Генерация персонализированной программы тренировок</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Автоматическая адаптация нагрузок и упражнений под спортивный профиль</li>
  </ul>
</div>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12);">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">Как работает ИИ-коуч</h3>
  <p style="color: #9fb0cc; margin: 0; line-height: 1.7;">Система не ограничивается генерацией начальной программы. После каждой тренировки спортсмен делает разбор через Telegram. ИИ-коуч анализирует выполненные подходы, уровень усталости, а также боль или травмы, о которых сообщил атлет. На основе этой информации система автоматически адаптирует будущие тренировки, чтобы поддерживать стабильный прогресс. Когда цели достигнуты, нагрузки постепенно увеличиваются. При повторяющихся неудачах система снижает нагрузку перед началом нового цикла прогрессии.</p>
</div>`
});
