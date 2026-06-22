/* =============================================================
   tabs.js : Gestion des onglets des pages-projets
   -------------------------------------------------------------
   Convention HTML :
     <button class="tab-btn" data-tab="value">…</button>
     <div class="tab-panel" data-panel="value">…</div>
   Le bouton et le panneau sont liés par la même valeur data-tab/data-panel.
   ============================================================= */
(function () {
  "use strict";

  function activate(name) {
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === name);
    });
    document.querySelectorAll(".tab-panel").forEach(function (panel) {
      panel.classList.toggle("active", panel.getAttribute("data-panel") === name);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".tab-btn");
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activate(btn.getAttribute("data-tab"));
      });
    });

    // Onglet actif au chargement : le premier bouton.
    activate(buttons[0].getAttribute("data-tab"));
  });
})();
