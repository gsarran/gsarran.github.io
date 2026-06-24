/* =============================================================
   schema.js : schéma relationnel interactif de la base Airtable (NEOBATI).
   -------------------------------------------------------------
   - Les nœuds (tables) sont positionnés en px dans un canvas LOGIQUE 1080x700.
   - Ce canvas est mis à l'échelle (transform: scale) pour tenir dans la largeur
     disponible : responsive sans casser les positions.
   - Les connecteurs SVG (équerres) sont recalculés depuis la position RÉELLE des
     nœuds, normalisée dans le repère 1080x700 du viewBox.
   - Au survol d'une table : ses relations s'illuminent à la couleur de la table.
   Inspiré du schéma de la documentation de soutenance (projet fil rouge).
   ============================================================= */
(function () {
  "use strict";
  var schema = document.getElementById("neoSchema");
  if (!schema) return;
  var wrap = schema.parentElement; /* .db-schema-wrap */
  var allNodes = schema.querySelectorAll(".node");
  var allLinks = schema.querySelectorAll(".lnk");

  /* Mise à l'échelle du canvas logique (1080x700) pour tenir dans le conteneur. */
  function fit() {
    var avail = wrap.clientWidth;
    var scale = Math.min(1, avail / 1080);
    schema.style.transform = "scale(" + scale + ")";
    wrap.style.height = Math.round(700 * scale) + "px";
  }

  /* Position d'un nœud normalisée dans le repère 1080x700 (gère le scale). */
  function bounds(node) {
    var nr = node.getBoundingClientRect();
    var sr = schema.getBoundingClientRect();
    var sx = 1080 / sr.width;
    var sy = 700 / sr.height;
    var l = (nr.left - sr.left) * sx;
    var t = (nr.top - sr.top) * sy;
    var w = nr.width * sx;
    var h = nr.height * sy;
    return {
      l: { x: l, y: t + h / 2 },
      r: { x: l + w, y: t + h / 2 },
      t: { x: l + w / 2, y: t },
      b: { x: l + w / 2, y: t + h }
    };
  }

  function makePath(from, to, strategy, offset) {
    offset = (offset == null) ? 0.5 : offset;
    var mx = from.x + (to.x - from.x) * offset;
    var my = from.y + (to.y - from.y) * offset;
    switch (strategy) {
      case "H":     return "M " + from.x + " " + from.y + " H " + to.x;
      case "V":     return "M " + from.x + " " + from.y + " V " + to.y;
      case "H-V":   return "M " + from.x + " " + from.y + " H " + to.x + " V " + to.y;
      case "V-H":   return "M " + from.x + " " + from.y + " V " + to.y + " H " + to.x;
      case "H-V-H": return "M " + from.x + " " + from.y + " H " + mx + " V " + to.y + " H " + to.x;
      case "V-H-V": return "M " + from.x + " " + from.y + " V " + my + " H " + to.x + " V " + to.y;
      default:      return "M " + from.x + " " + from.y + " H " + mx + " V " + to.y + " H " + to.x;
    }
  }

  var CONN = [
    { id:"l-clients-devis",           from:"node-clients",   fb:"r", to:"node-devis",         tb:"l", s:"H" },
    { id:"l-clients-chantiers",       from:"node-clients",   fb:"r", to:"node-chantiers",     tb:"l", s:"H-V-H", off:0.3 },
    { id:"l-clients-factures",        from:"node-clients",   fb:"r", to:"node-factures",      tb:"l", s:"H-V-H", off:0.25 },
    { id:"l-contact-devis",           from:"node-contact",   fb:"r", to:"node-devis",         tb:"l", s:"H-V-H", off:0.3 },
    { id:"l-contact-factures",        from:"node-contact",   fb:"r", to:"node-factures",      tb:"l", s:"H" },
    { id:"l-chantiers-devis",         from:"node-chantiers", fb:"t", to:"node-devis",         tb:"b", s:"V" },
    { id:"l-chantiers-factures",      from:"node-chantiers", fb:"b", to:"node-factures",      tb:"t", s:"V" },
    { id:"l-factures-paiements",      from:"node-factures",  fb:"b", to:"node-paiements",     tb:"t", s:"V" },
    { id:"l-chantiers-artisans",      from:"node-chantiers", fb:"r", to:"node-artisans",      tb:"l", s:"H-V-H", off:0.4 },
    { id:"l-chantiers-interventions", from:"node-chantiers", fb:"r", to:"node-interventions", tb:"l", s:"H-V-H", off:0.4 },
    { id:"l-artisans-interventions",  from:"node-artisans",  fb:"b", to:"node-interventions", tb:"t", s:"V" },
    { id:"l-chantiers-materiaux",     from:"node-chantiers", fb:"r", to:"node-materiaux",     tb:"l", s:"H-V-H", off:0.5 },
    { id:"l-chantiers-ligne",         from:"node-chantiers", fb:"r", to:"node-ligne",         tb:"l", s:"H-V-H", off:0.5 },
    { id:"l-materiaux-ligne",         from:"node-materiaux", fb:"b", to:"node-ligne",         tb:"t", s:"V" },
    { id:"l-materiaux-fournisseurs",  from:"node-materiaux", fb:"r", to:"node-fournisseurs",  tb:"t", s:"H-V" }
  ];

  function updatePaths() {
    CONN.forEach(function (c) {
      var fn = document.getElementById(c.from);
      var tn = document.getElementById(c.to);
      var pe = document.getElementById(c.id);
      if (!fn || !tn || !pe) return;
      pe.setAttribute("d", makePath(bounds(fn)[c.fb], bounds(tn)[c.tb], c.s, c.off));
    });
  }

  function redraw() {
    var r = schema.getBoundingClientRect();
    if (r.width < 10) return; /* onglet caché */
    fit();
    updatePaths();
  }

  var REL = {
    clients:       { color:"#5BA3F5", links:["l-clients-devis","l-clients-chantiers","l-clients-factures"] },
    contact:       { color:"#B07FE8", links:["l-contact-devis","l-contact-factures"] },
    chantiers:     { color:"#F0A030", links:["l-clients-chantiers","l-chantiers-devis","l-chantiers-factures","l-chantiers-artisans","l-chantiers-interventions","l-chantiers-materiaux","l-chantiers-ligne"] },
    artisans:      { color:"#F064A0", links:["l-chantiers-artisans","l-artisans-interventions"] },
    interventions: { color:"#38C9C0", links:["l-chantiers-interventions","l-artisans-interventions"] },
    devis:         { color:"#D8D8D8", links:["l-clients-devis","l-contact-devis","l-chantiers-devis"] },
    factures:      { color:"#F07840", links:["l-clients-factures","l-contact-factures","l-chantiers-factures","l-factures-paiements"] },
    paiements:     { color:"#60D490", links:["l-factures-paiements"] },
    materiaux:     { color:"#E86070", links:["l-chantiers-materiaux","l-materiaux-ligne","l-materiaux-fournisseurs"] },
    ligne:         { color:"#D4B84A", links:["l-chantiers-ligne","l-materiaux-ligne"] },
    fournisseurs:  { color:"#9B8BE4", links:["l-materiaux-fournisseurs"] }
  };

  var LINK_NODES = {};
  Object.keys(REL).forEach(function (nid) {
    REL[nid].links.forEach(function (lid) {
      if (!LINK_NODES[lid]) LINK_NODES[lid] = [];
      LINK_NODES[lid].push(nid);
    });
  });

  function on(nodeId) {
    var rel = REL[nodeId];
    if (!rel) return;
    var activeSet = {};
    rel.links.forEach(function (l) { activeSet[l] = 1; });
    var connected = {}; connected[nodeId] = 1;
    rel.links.forEach(function (lid) {
      (LINK_NODES[lid] || []).forEach(function (n) { connected[n] = 1; });
    });
    allNodes.forEach(function (n) {
      var isC = connected[n.dataset.id];
      n.classList.toggle("dimmed", !isC);
      n.classList.toggle("lit", !!isC);
    });
    allLinks.forEach(function (l) {
      var active = activeSet[l.id];
      l.classList.toggle("dimmed", !active);
      l.classList.toggle("active", !!active);
      l.style.stroke = active ? rel.color : "";
    });
  }

  function off() {
    allNodes.forEach(function (n) { n.classList.remove("dimmed", "lit"); });
    allLinks.forEach(function (l) {
      l.classList.remove("dimmed", "active");
      l.style.stroke = "";
    });
  }

  allNodes.forEach(function (n) {
    n.addEventListener("mouseenter", function () { on(n.dataset.id); });
    n.addEventListener("mouseleave", off);
  });

  window.addEventListener("load", redraw);
  window.addEventListener("resize", redraw);
  window.addEventListener("portfolio:languagechange", function () { requestAnimationFrame(redraw); });
  /* L'onglet Architecture est caché au départ → on recalcule à son affichage. */
  document.querySelectorAll(".tab-btn").forEach(function (b) {
    b.addEventListener("click", function () { requestAnimationFrame(redraw); });
  });
  redraw();
  setTimeout(redraw, 300);
})();

/* Agrandissement des captures Make de l'onglet Demo. */
(function () {
  "use strict";
  var modal = document.getElementById("shotModal");
  if (!modal) return;
  var img = modal.querySelector(".shot-modal-img");
  var close = modal.querySelector(".shot-modal-close");
  var lastTrigger = null;

  function open(trigger) {
    var shot = trigger.querySelector("img");
    if (!shot || !img) return;
    lastTrigger = trigger;
    img.src = shot.currentSrc || shot.src;
    img.alt = shot.alt || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (close) close.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    img.removeAttribute("src");
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll("[data-modal-shot]").forEach(function (trigger) {
    trigger.addEventListener("click", function () { open(trigger); });
  });

  if (close) close.addEventListener("click", closeModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();
