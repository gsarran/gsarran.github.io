/* =============================================================
   analytics.js : Suivi de fréquentation (Google Analytics 4)
   -------------------------------------------------------------
   Un seul endroit pour l'identifiant de mesure : si tu changes
   un jour de compte, tu ne modifies QUE la ligne GA_ID.

   Inclus dans les 4 pages du site. Charge la librairie gtag
   depuis Google (URL absolue, donc aucun souci de chemin selon
   la page), puis déclenche le suivi.

   GA4 enregistre déjà automatiquement les pages vues. On ajoute
   en plus un évènement maison quand le visiteur change de langue
   (FR / EN / RU se fait sans recharger la page), pour voir quelles
   langues sont consultées.
   ============================================================= */
(function () {
  "use strict";

  var GA_ID = "G-4TCW86ML5F";

  // 1. Chargement de la librairie officielle gtag.js
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);

  // 2. Initialisation standard GA4
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);

  // 3. Suivi du changement de langue (délégation : marche même si
  //    le header est injecté après, par i18n.js)
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".lang-btn") : null;
    if (btn) {
      gtag("event", "change_language", {
        language: btn.getAttribute("data-lang")
      });
    }
  });
})();
