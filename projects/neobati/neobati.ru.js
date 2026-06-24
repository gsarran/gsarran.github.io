/* RU словарь для проекта NEOBATI (дополняет общий) */
window.translations = window.translations || {};
window.translations.ru = Object.assign(window.translations.ru || {}, {
  neobati_title: "NEOBATI, ИИ + no-code автоматизация",
  neobati_tagline: "Автоматизация строительной компании от первого контакта с клиентом до оплаты с помощью ИИ, Airtable и Make.",

  /* --- Вкладка «Бизнес-ценность» --- */
  neobati_context_title: "Кейс: Néobâti Artisanat",
  neobati_context_html:
    "Néobâti Artisanat, строительная компания, <strong>тонет в административной работе</strong>: сметы, расписание мастеров, отчёты с объектов, счета, напоминания об оплате. " +
    "Задача: <strong>автоматизировать эти процессы целиком</strong>, чтобы команда занималась своим делом, а не вводом данных. Это был мой <strong>итоговый проект сертификации</strong>.",
  neobati_problem_html:
    "<ul>" +
    "<li><strong>Всё выполняется вручную</strong>: информация о клиентах дублируется в нескольких таблицах, подготовка коммерческих предложений затягивается, а важные уведомления могут быть упущены.</li>" +
    "<li>Планирование работы сотрудников ведётся по телефону и в Excel, что повышает <strong>риск ошибок и дублирования данных</strong>.</li>" +
    "<li>Счета и напоминания о просроченных платежах отправляются с задержкой или вовсе не отправляются, что <strong>негативно сказывается на денежном потоке компании</strong>.</li>" +
    "</ul>",
  neobati_solution_html:
    "<ul>" +
    "<li>Система, в которой <strong>каждый ключевой бизнес-процесс работает автономно</strong> от онлайн-запроса на коммерческое предложение до получения оплаты.</li>" +
    "<li><strong>Более 15 взаимосвязанных автоматизаций</strong> охватывают все бизнес-процессы: привлечение клиентов, планирование, логистику, контроль выполнения работ, выставление счетов и управление денежными потоками.</li>" +
    "<li>Решение построено на Airtable (база данных и интерфейсы), Make (оркестрация рабочих процессов) и ИИ для <strong>автоматического создания счетов и напоминаний об оплате</strong>.</li>" +
    "</ul>",
  neobati_result_html:
    "<ul>" +
    "<li><strong>Около 8 часов экономии в неделю</strong> на административных задачах.</li>" +
    "<li><strong>Ноль ручных напоминаний по счетам</strong>: просрочки обрабатываются автоматически, в нужный момент.</li>" +
    "<li><strong>Низкие остатки на складе выявляются автоматически</strong>, и заказ на закупку уходит поставщику без ручного ввода, что экономит время и снижает риск задержек на объектах.</li>" +
    "<li>Система доступна <strong>24/7</strong>, полностью прослеживаема, и больше ничего не теряется между таблицами.</li>" +
    "</ul>",

  /* --- Вкладка «Архитектура» (анимированные канвасы) --- */
  neobati_archi_intro:
    "Поскольку это no-code проект, показывать структуру файлов нечего, зато есть потоки автоматизации. Для демонстрации выбраны три наиболее наглядные автоматизации, представленные с анимацией, чтобы быстро понять их пользу.",
  neo_stack_heading: "Технологии",
  neobati_stack_html:
`<div class="stack-group"><span class="stack-cat">База данных</span><span class="stack-badges"><span class="stack-badge">Airtable</span></span></div>
<div class="stack-group"><span class="stack-cat">Автоматизация</span><span class="stack-badges"><span class="stack-badge">Make</span><span class="stack-badge">Airtable</span></span></div>
<div class="stack-group"><span class="stack-cat">Прикладной ИИ</span><span class="stack-badges"><span class="stack-badge">Создание счетов ИИ</span><span class="stack-badge">Автоматические напоминания</span></span></div>
<div class="stack-group"><span class="stack-cat">Интерфейсы</span><span class="stack-badges"><span class="stack-badge">Airtable Interfaces</span><span class="stack-badge">Формы</span></span></div>`,

  neo_demo_intro: "Три конкретные автоматизации из 21, реализованной в проекте. Слева анимированный канвас показывает упрощённый обзор бизнес-процесса; справа показана более техническая часть Make, которая встроена в большинство автоматизаций.",

  neo_modal_close: "Закрыть",

  neobati_flow1_title: "Автоматическое назначение мастеров",
  neobati_f1_n1: "Смета принята",
  neobati_f1_n2: "Объект и счёт созданы",
  neobati_f1_n3: "Свободные мастера назначены",
  neobati_f1_n4: "Прораб уведомлён",
  neobati_f1_impact: "После принятия сметы Airtable создаёт записи объекта и счёта, затем Make автоматически назначает свободных мастеров по нужному типу работ. Прораб получает уведомление в WhatsApp, в том числе если свободных мастеров нет.",
  neobati_f1_shot_alt: "Сценарий Make для автоматического назначения мастеров",

  neobati_flow2_title: "Выставление счетов",
  neobati_f2_n1: "Объект сдан",
  neobati_f2_n2: "Счёт сформирован ИИ",
  neobati_f2_n3: "Отправлен клиенту",
  neobati_f2_impact: "Счёт автоматически формируется и отправляется клиенту сразу после завершения объекта.",
  neobati_f2_shot_alt: "Сценарий Make для выставления счетов",

  neobati_flow3_title: "Отчёт о ходе работ",
  neobati_f3_n1: "Форма Fillout открыта",
  neobati_f3_n2: "Прогресс указан",
  neobati_f3_n3: "PDF-отчёт создан",
  neobati_f3_n4: "Отправлен прорабу",
  neobati_f3_impact: "В мобильном приложении Airtable мастер открывает форму Fillout, указывает процент выполнения работ, при необходимости добавляет комментарий и обязательно прикрепляет фотографию. После отправки формы PDF-отчёт создаётся автоматически и отправляется прорабу.",
  neobati_f3_shot_alt: "Сценарий Make для создания отчёта о ходе работ",

  /* --- Вкладка «Архитектура»: структура данных --- */
  neo_arch_data_title: "Архитектура данных Airtable",
  neo_arch_data_html:
    "<p>Решение построено на базе Airtable из <strong>10 связанных таблиц</strong>, охватывающих весь бизнес-цикл:</p>" +
    "<ul class=\"db-table-list\"><li>Клиенты</li><li>Объекты</li><li>Мастера</li><li>Выезды</li><li>Материалы</li><li>Позиция материала</li><li>Поставщики</li><li>Сметы</li><li>Счета</li><li>Платежи</li></ul>" +
    "<p>Эти таблицы связаны между собой, и <strong>часть из них автоматически передаёт данные в сценарии Make</strong>.</p>",
  neo_arch_schema_title: "Связи между таблицами",
  neo_arch_schema_intro: "Наведите курсор на таблицу, чтобы увидеть её связи: линии подсвечиваются цветом выбранной таблицы.",
  neo_central: "Центральная таблица",
  neo_chantiers_note_html:
    "<span class=\"badge-central\">🏗️ Объекты · центральная таблица</span> Таблица <strong>«Объекты»</strong> образует ядро системы и связывает воедино всю бизнес-информацию.",
  neo_t_clients: "Клиенты",
  neo_t_contact: "Контакт Néobâti",
  neo_t_devis: "Сметы",
  neo_t_chantiers: "Объекты",
  neo_t_factures: "Счета",
  neo_t_paiements: "Платежи",
  neo_t_artisans: "Мастера",
  neo_t_interventions: "Выезды",
  neo_t_materiaux: "Материалы",
  neo_t_ligne: "Позиция материала",
  neo_t_fournisseurs: "Поставщики",
  neo_arch_examples_title: "Примеры таблиц Airtable",
  neo_arch_examples_sub: "Два показательных примера модели данных.",
  neo_card_clients_html:
    "<div class=\"db-card-head\"><span class=\"db-card-name\">КЛИЕНТЫ</span></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Роль</span><p>Централизует коммерческую информацию и автоматически обеспечивает остальные бизнес-процессы данными.</p></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Основные поля</span><ul class=\"db-fields\"><li>ИД клиента</li><li>Фамилия</li><li>Имя</li><li>Email</li><li>Телефон</li><li>Тип работ</li><li>Бюджет</li><li>Статус</li><li>Связанные объекты</li></ul></div>",
  neo_card_chantiers_html:
    "<div class=\"db-card-head\"><span class=\"db-card-name\">ОБЪЕКТЫ</span><span class=\"badge-central\">Центральная таблица</span></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Роль</span><p>Центральная таблица, объединяющая все сущности системы и управляющая оперативным контролем объекта.</p></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Основные поля</span><ul class=\"db-fields\"><li>ID объекта</li><li>Описание</li><li>Стоимость объекта</li><li>Ход выполнения</li><li>Назначенные мастера</li><li>Назначенные клиенты</li><li>Назначенные сметы</li><li>Назначенные счета</li><li>Необходимые материалы</li><li>GPS координаты</li></ul></div>"
});
