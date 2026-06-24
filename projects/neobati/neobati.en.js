/* EN dictionary specific to the NEOBATI project (extends the common one) */
window.translations = window.translations || {};
window.translations.en = Object.assign(window.translations.en || {}, {
  neobati_title: "NEOBATI, AI + No-code automations",
  neobati_tagline: "Automating a construction company end to end, from first client contact to payment collection, with AI, Airtable and Make.",

  /* --- Business value tab --- */
  neobati_context_title: "The case: Néobâti Artisanat",
  neobati_context_html:
    "Néobâti Artisanat is a construction company <strong>buried in admin work</strong>: quotes, crew scheduling, site reports, invoices, payment reminders. " +
    "The brief: <strong>automate these processes end to end</strong> so the team can focus on the craft instead of data entry. This was my <strong>certification capstone project</strong>.",
  neobati_problem_html:
    "<ul>" +
    "<li><strong>Everything is handled manually</strong>: customer information is duplicated across multiple tables, quotations are delayed, and important alerts can easily be missed.</li>" +
    "<li>Workforce scheduling is managed through phone calls and Excel spreadsheets, increasing the <strong>risk of errors and duplicate entries</strong>.</li>" +
    "<li>Invoices and payment reminders are often sent late or even forgotten, <strong>putting the company's cash flow at risk</strong>.</li>" +
    "</ul>",
  neobati_solution_html:
    "<ul>" +
    "<li>A system where <strong>every key business process runs autonomously</strong> from an online quote request to payment collection.</li>" +
    "<li><strong>More than 15 interconnected automations</strong> cover the entire business workflow: lead generation, scheduling, logistics, field operations tracking, invoicing, and cash flow management.</li>" +
    "<li>The solution is built with Airtable (database and interfaces), Make (workflow orchestration), and AI for <strong>automatically generating invoices and payment reminders</strong>.</li>" +
    "</ul>",
  neobati_result_html:
    "<ul>" +
    "<li><strong>Around 8 hours saved per week</strong> on admin tasks.</li>" +
    "<li><strong>Zero manual invoice reminders</strong>: overdue payments are chased automatically, at the right time.</li>" +
    "<li><strong>Low stock is detected automatically</strong> and a purchase order goes straight to the supplier with no manual entry, saving time and reducing the risk of job delays.</li>" +
    "<li>A system available <strong>24/7</strong>, fully traceable, where nothing slips between two tables anymore.</li>" +
    "</ul>",

  /* --- Architecture tab (animated canvases) --- */
  neobati_archi_intro:
    "As this is a no-code project, there is no file tree to show, but automation flows instead. For the demo, three of the most telling automations have been selected and highlighted with animations, so their usefulness can be grasped at a glance.",
  neo_stack_heading: "Tech stack",
  neobati_stack_html:
`<div class="stack-group"><span class="stack-cat">Database</span><span class="stack-badges"><span class="stack-badge">Airtable</span></span></div>
<div class="stack-group"><span class="stack-cat">Automation</span><span class="stack-badges"><span class="stack-badge">Make</span><span class="stack-badge">Airtable</span></span></div>
<div class="stack-group"><span class="stack-cat">Applied AI</span><span class="stack-badges"><span class="stack-badge">AI Invoice Generation</span><span class="stack-badge">Automatic Reminders</span></span></div>
<div class="stack-group"><span class="stack-cat">Interfaces</span><span class="stack-badges"><span class="stack-badge">Airtable Interfaces</span><span class="stack-badge">Forms</span></span></div>`,

  neo_demo_intro: "Three concrete automations selected from the 21 built for the project. On the left, the animated canvas gives a deliberately simplified business-process overview; on the right, the screenshot shows the more technical Make layer, which is integrated into most automations.",

  neo_modal_close: "Close",

  neobati_flow1_title: "Automatic tradesperson assignment",
  neobati_f1_n1: "Quote accepted",
  neobati_f1_n2: "Project and invoice created",
  neobati_f1_n3: "Available tradespeople assigned",
  neobati_f1_n4: "Site manager notified",
  neobati_f1_impact: "Once the quote is accepted, Airtable creates the project and invoice records, then Make automatically assigns available tradespeople based on the requested type of work. The site manager is notified on WhatsApp, including when no tradesperson is available.",
  neobati_f1_shot_alt: "Make scenario for automatic tradesperson assignment",

  neobati_flow2_title: "Invoicing",
  neobati_f2_n1: "Job completed",
  neobati_f2_n2: "Invoice written by AI",
  neobati_f2_n3: "Sent to the client",
  neobati_f2_impact: "An invoice is automatically drafted and sent to the client as soon as the project is completed.",
  neobati_f2_shot_alt: "Make invoicing scenario",

  neobati_flow3_title: "Work progress report",
  neobati_f3_n1: "Fillout form opened",
  neobati_f3_n2: "Progress entered",
  neobati_f3_n3: "PDF report generated",
  neobati_f3_n4: "Sent to the site manager",
  neobati_f3_impact: "From the Airtable mobile app, the tradesperson opens a Fillout form, enters the project progress percentage, adds a comment when needed and must attach a photo. After submission, a PDF report is generated automatically and sent to the site manager.",
  neobati_f3_shot_alt: "Make scenario for progress report generation",

  /* --- Architecture tab: data structure --- */
  neo_arch_data_title: "Airtable data architecture",
  neo_arch_data_html:
    "<p>This solution is built on an Airtable base of <strong>10 interconnected tables</strong> covering the whole business cycle:</p>" +
    "<ul class=\"db-table-list\"><li>Clients</li><li>Projects</li><li>Tradespeople</li><li>Site visits</li><li>Materials</li><li>Material line</li><li>Suppliers</li><li>Quotes</li><li>Invoices</li><li>Payments</li></ul>" +
    "<p>These tables are linked together, and <strong>some of them automatically feed the Make workflows</strong>.</p>",
  neo_arch_schema_title: "How the tables connect",
  neo_arch_schema_intro: "Hover over a table to see its relationships: the links light up in the colour of the selected table.",
  neo_central: "Central table",
  neo_chantiers_note_html:
    "<span class=\"badge-central\">🏗️ Projects · central table</span> The <strong>Projects</strong> table is the heart of the system and links all the business information together.",
  neo_t_clients: "Clients",
  neo_t_contact: "Néobâti contact",
  neo_t_devis: "Quotes",
  neo_t_chantiers: "Projects",
  neo_t_factures: "Invoices",
  neo_t_paiements: "Payments",
  neo_t_artisans: "Tradespeople",
  neo_t_interventions: "Site visits",
  neo_t_materiaux: "Materials",
  neo_t_ligne: "Material line",
  neo_t_fournisseurs: "Suppliers",
  neo_arch_examples_title: "Example Airtable tables",
  neo_arch_examples_sub: "Two representative examples of the data model.",
  neo_card_clients_html:
    "<div class=\"db-card-head\"><span class=\"db-card-name\">CUSTOMERS</span></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Role</span><p>Centralizes customer information and automatically feeds the other business processes.</p></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Main fields</span><ul class=\"db-fields\"><li>Client_ID</li><li>Last Name</li><li>First Name</li><li>Email</li><li>Phone</li><li>Type of Work</li><li>Budget</li><li>Status</li><li>Related Projects</li></ul></div>",
  neo_card_chantiers_html:
    "<div class=\"db-card-head\"><span class=\"db-card-name\">PROJECTS</span><span class=\"badge-central\">Central table</span></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Role</span><p>Central table connecting all entities of the system and managing operational project tracking.</p></div>" +
    "<div class=\"db-card-section\"><span class=\"db-card-label\">Main fields</span><ul class=\"db-fields\"><li>Project_ID</li><li>Description</li><li>Project Price</li><li>Project Progress</li><li>Assigned Workers</li><li>Assigned Clients</li><li>Assigned Quotes</li><li>Assigned Invoices</li><li>Required Materials</li><li>GPS Coordinates</li></ul></div>"
});
