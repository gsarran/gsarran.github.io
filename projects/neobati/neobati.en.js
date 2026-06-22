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
  neobati_stack_html:
`<div class="stack-group"><span class="stack-cat">Tools</span><span class="stack-badges"><span class="stack-badge">Airtable</span><span class="stack-badge">Make</span></span></div>
<div class="stack-group"><span class="stack-cat">AI</span><span class="stack-badges"><span class="stack-badge">Invoice drafting</span><span class="stack-badge">Automated reminders</span></span></div>`,

  neobati_flow1_title: "Prospecting: a new client and everything kicks off",
  neobati_f1_n1: "Form submitted",
  neobati_f1_n2: "Client record created",
  neobati_f1_n3: "Sales team notified",
  neobati_f1_impact: "No data re-entry: the lead is saved and the team alerted instantly.",

  neobati_flow2_title: "Invoicing: the invoice goes out as soon as the job is done",
  neobati_f2_n1: "Site at 100%",
  neobati_f2_n2: "Invoice written by AI",
  neobati_f2_n3: "Sent to the client",
  neobati_f2_impact: "Invoicing delay cut to zero: the client gets the invoice the same day.",

  neobati_flow3_title: "Cash flow: overdue reminders send themselves",
  neobati_f3_n1: "Payment overdue",
  neobati_f3_n2: "AI reminder 1",
  neobati_f3_n3: "Reminder 2 at D+7",
  neobati_f3_impact: "No reminder ever forgotten: cash flow is protected with no follow-up effort."
});
