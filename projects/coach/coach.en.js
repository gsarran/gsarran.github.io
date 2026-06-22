/* EN dictionary specific to the Coach project (extends the common one) */
window.translations = window.translations || {};
window.translations.en = Object.assign(window.translations.en || {}, {
  coach_title: "Streetlifting AI Coach",
  coach_tagline: "A personalised, multi-agent strength coach available on Telegram, deployed in production.",

  /* --- Business value tab --- */
  coach_context_title: "What is streetlifting?",
  coach_context_html:
    "Streetlifting is <strong>a strength sport based on bodyweight exercises</strong> performed with additional weight. Plates are attached to a dipping belt to increase the load on <strong>pull-ups and dips</strong>, with one goal in mind: lift as much weight as possible. The sport shares the same philosophy as <strong>powerlifting</strong>, but applies it to bodyweight movements. I have been practicing it for several years, and <strong>I initially built this AI coach for myself</strong> to solve a real problem I faced during every training session.",
  coach_problem_html:
    "<ul>" +
    "<li>Finding a good streetlifting coach is still a challenge. The sport is relatively young in Europe, and experienced coaches are <strong>both rare and expensive</strong>.</li>" +
    "<li>Many athletes train on their own using generic programs that do not account for their level, recovery, or physical limitations. <strong>Progress stalls and the risk of injury increases</strong>.</li>" +
    "<li>A human coach cannot be available around the clock or analyze every training session in detail. Adjustments are <strong>often delayed</strong> or lack precision.</li>" +
    "</ul>",
  coach_solution_html:
    "<ul>" +
    "<li>An AI coach available through <strong>Telegram</strong>, by text or voice, ready to assist athletes anytime.</li>" +
    "<li>An automated <strong>multi-agent system</strong> powered by n8n: an Extractor collects the athlete's profile, a Classifier identifies the user's intent, and a Coach analyzes workouts to generate personalized feedback.</li>" +
    "<li>AI understands and interprets the data, while <strong>the code makes all critical decisions</strong>, including training methodology, load calculations, deloads, progression, and recalibration. Training weights remain accurate and fully controlled.</li>" +
    "<li><strong>Persistent memory powered by SQLite</strong>, automatic workout reminders through n8n, and a monitoring dashboard designed to support long-term progress.</li>" +
    "</ul>",
  coach_result_html:
    "<ul>" +
    "<li>An AI coach available 24/7 at a <strong>near-zero marginal cost</strong>, providing continuous support where a human coach remains expensive and limited by availability.</li>" +
    "<li>A structured 3-month training program <strong>generated in seconds</strong> from a simple conversation and fully tailored to the athlete's profile.</li>" +
    "<li>Training loads <strong>adjust automatically</strong> after every session, including progression, deload after failure, and gradual return after a break. Calculations are deterministic and protected by safety mechanisms, especially in case of pain or injury.</li>" +
    "<li><strong>Deployed in production</strong> and tested end to end, down to the voice debrief of a real session, for a tool that stays reliable day to day.</li>" +
    "</ul>",

  /* --- Architecture tab --- */
  coach_archi_intro:
    "AI understands, code decides, and calculations remain fully under control. This architecture guarantees accurate, consistent training loads with no risk of hallucination.",
  coach_overview_title: "Overview",
  coach_n_conv: "Telegram conversation",
  coach_n_if: "Existing program?",
  coach_branch_no: "No program yet",
  coach_branch_yes: "Existing program",
  coach_n_ext: "Extractor agent (AI)",
  coach_n_rules: "Sports rules (code)",
  coach_n_creation: "Program creation",
  coach_n_class: "Classifier agent (AI)",
  coach_n_orch: "Orchestrator (code)",
  coach_n_route: "Debrief / Question / Update",
  coach_n_prog: "3-month program",
  coach_stack_heading: "Tech stack",
  coach_tree_heading: "Project structure",
  coach_note_heading: "Key takeaway",
  coach_stack_html:
`<div class="stack-group"><span class="stack-cat">AI</span><span class="stack-badges"><span class="stack-badge">Gemini</span><span class="stack-badge">Multi-agent</span><span class="stack-badge">SDK Google AI</span></span></div>
<div class="stack-group"><span class="stack-cat">Backend</span><span class="stack-badges"><span class="stack-badge">Python</span><span class="stack-badge">FastAPI</span><span class="stack-badge">pydantic</span><span class="stack-badge">SQLite</span></span></div>
<div class="stack-group"><span class="stack-cat">Deployment</span><span class="stack-badges"><span class="stack-badge">Docker</span><span class="stack-badge">Caddy</span><span class="stack-badge">VPS</span></span></div>
<div class="stack-group"><span class="stack-cat">Interfaces &amp; tools</span><span class="stack-badges"><span class="stack-badge">Telegram</span><span class="stack-badge">n8n</span><span class="stack-badge">Streamlit</span><span class="stack-badge">pytest</span></span></div>`,
  coach_tree_html:
`Coach_Streetlifting/
├─ agents/                    <span class="c"># The 3 AI agents (1 role = 1 prompt)</span>
│  ├─ agent_extracteur.py     <span class="c"># Gathers the profile from the conversation</span>
│  ├─ agent_classificateur.py <span class="c"># Detects intent (debrief/question/rebuild)</span>
│  ├─ agent_coach.py          <span class="c"># Analyses debriefs, writes the feedback</span>
│  └─ base_agent.py           <span class="c"># Shared base (Gemini call, JSON retry, logs)</span>
├─ orchestration/             <span class="c"># The conductor (PURE CODE, 0 AI)</span>
│  ├─ orchestrateur.py        <span class="c"># Routes the agents, deterministic decisions</span>
│  ├─ contexte_utilisateur.py <span class="c"># Builds the user context from the DB</span>
│  └─ transcription.py        <span class="c"># Fixes terms garbled by voice transcription</span>
├─ regles_sport/              <span class="c"># Rules engine: logic in code, data in YAML</span>
│  ├─ methodologies.py        <span class="c"># Deterministic methodology choice</span>
│  ├─ charges.py              <span class="c"># Loads, deload, re-anchoring</span>
│  └─ programme.py            <span class="c"># Assembles the 3-month program</span>
├─ prompts/                   <span class="c"># Versioned YAML prompts, kept out of the code</span>
├─ database/                  <span class="c"># SQLite: schema, access, retention/maintenance</span>
├─ api/main.py                <span class="c"># FastAPI API (called by n8n, X-API-Key)</span>
├─ dashboard/                 <span class="c"># Streamlit tracking dashboard (private)</span>
├─ demo/demo_chat.py          <span class="c"># Multilingual FR/EN/RU portfolio demo (isolated)</span>
├─ tests/                     <span class="c"># ~100 pytest tests, no network calls</span>
├─ docker/Caddyfile           <span class="c"># Reverse-proxy + dashboard authentication</span>
├─ docker-compose.yml         <span class="c"># 2 services (api + dashboard) + persistent volume</span>
└─ Dockerfile`,
  coach_archi_note_html:
    "<strong>Key takeaway:</strong> the orchestrator contains no AI. It routes the agents and makes the critical decisions (methodology, loads, deload, safety) <strong>deterministically</strong>. That is what makes the system reliable and testable. The project actually had a 4th agent, a \"Validator\" (completeness + alerts): its LLM judgement proved too unstable, so it was <strong>replaced with deterministic code</strong>. Lower latency, zero randomness.",

  coach_code_title: "Annotated snippet: the orchestrator's routing",
  coach_code_html:
`def traiter_message(self, user_id, message):
    <span class="c"># Fix terms garbled by voice transcription ("top sept" -> "topset")</span>
    message = normaliser_termes(message)
    programme = self._programme_actif(user_id)   <span class="c"># read state from the DB (no AI)</span>

    <span class="c"># No program yet: collect the profile (onboarding)</span>
    if programme is None:
        return self._flux_onboarding(user_id, message)

    <span class="c"># Program active: an AI agent classifies the message intent</span>
    intention = self.classificateur.classer(message)

    if intention.intention == "debrief":
        return self._traiter_debrief(...)   <span class="c"># the AI reads the session, the CODE adjusts the loads</span>
    if intention.intention == "refonte":
        return self._traiter_refonte(...)   <span class="c"># rebuild the program</span>
    return self._traiter_question(...)      <span class="c"># the AI answers the question</span>`,

  coach_code2_title: "Annotated snippet: deterministic load adjustment",
  coach_code2_html:
`def double_progression_backoff(lest_actuel, valide_au_max, pas=2.5):
    <span class="c"># Double progression: raise the load ONLY if the athlete hit the TOP of the rep range on every set.</span>
    if not valide_au_max:
        return lest_actuel                      <span class="c"># otherwise HOLD the load (reps go up first)</span>
    nouveau = arrondir(lest_actuel + pas)       <span class="c"># +2.5 kg, rounded to a real plate step</span>
    return nouveau if nouveau > 0 else None     <span class="c"># None = back to bodyweight</span>


def deload(lest_1rm):
    <span class="c"># Repeated failures: the CODE applies a deterministic deload (-10%)</span>
    return arrondir(lest_1rm * 0.90)`,

  /* --- Demo tab --- */
  coach_demo_note:
    "Full walkthrough: program creation, voice debrief of a session and automatic load adjustment.",
  coach_demo_html:
`<video width="100%" height="auto" controls style="border-radius: 14px; margin-bottom: 10px;">
  <source src="../../media/coach-en.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

<p style="color: #9fb0cc; font-size: 0.9rem; font-style: italic; text-align: center; margin: 0 0 24px 0;">For this demo, I rebuilt the conversation as a web page to simulate the flow that normally happens on Telegram.</p>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); margin-bottom: 16px;">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">What this demo shows</h3>
  <ul style="color: #9fb0cc; margin: 0; padding: 0; list-style: none; text-align: left;">
    <li style="margin-bottom: 8px; padding-left: 0;">• Collection of user information (level, goals, current performance, physical constraints)</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Profile analysis by the AI system</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Generation of a personalized training program</li>
    <li style="margin-bottom: 8px; padding-left: 0;">• Automatic adaptation of loads and exercises based on athletic profile</li>
  </ul>
</div>

<div style="padding: 22px 24px; border-radius: 20px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12);">
  <h3 style="color: #5eead4; margin: 0 0 12px 0; font-size: 1.15rem;">How the AI coach works</h3>
  <p style="color: #9fb0cc; margin: 0; line-height: 1.7;">The system goes beyond generating an initial program. After each session, the athlete completes a debrief via Telegram. The AI coach then analyses the performance achieved, fatigue levels, and any pain or injuries reported. Based on this information, it automatically adapts future sessions to maintain sustainable progress. When goals are reached, loads are increased progressively. Conversely, in the event of repeated failure, the system applies a deload phase before starting a new progression cycle.</p>
</div>`
});
