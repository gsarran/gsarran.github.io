/* =============================================================
   analytics.js : Suivi de fréquentation (Google Analytics 4)
   -------------------------------------------------------------
   Un seul endroit pour l'identifiant de mesure : si tu changes
   un jour de compte, tu ne modifies QUE la ligne GA_ID.

   Inclus dans les 4 pages du site. Charge la librairie gtag
   depuis Google (URL absolue, donc aucun souci de chemin selon
   la page), puis déclenche le suivi.

   GA4 enregistre déjà automatiquement les pages vues. On ajoute
   en plus des évènements maison pour suivre les interactions clés :
   - change_language   : clic sur un drapeau (FR / EN / RU)
   - select_tab        : clic sur un onglet (Valeur métier / Architecture / Démo)
   - video_start       : la vidéo de démo est lancée
   - video_complete    : la vidéo de démo est regardée jusqu'au bout
   - enlarge_screenshot: agrandissement d'une capture Make (NEOBATI)

   Tout passe par la DÉLÉGATION d'évènements (un seul écouteur posé
   sur document) pour que ça marche même quand le contenu est injecté
   après coup par i18n.js (vidéo, onglets) ou un changement de langue.
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

  // Quel projet est consulté ? (déduit de l'URL : /projects/<slug>/...)
  function project() {
    var m = window.location.pathname.match(/\/projects\/([^/]+)\//);
    return m ? m[1] : "hub";
  }

  // 3. Clics : langue, onglets, agrandissement des captures NEOBATI
  //    (un seul écouteur, délégation par le plus proche élément ciblé)
  document.addEventListener("click", function (e) {
    if (!e.target.closest) return;

    var lang = e.target.closest(".lang-btn");
    if (lang) {
      gtag("event", "change_language", { language: lang.getAttribute("data-lang") });
      return;
    }

    var tab = e.target.closest(".tab-btn");
    if (tab) {
      gtag("event", "select_tab", {
        project: project(),
        tab: tab.getAttribute("data-tab")   // value | archi | demo
      });
      return;
    }

    var shotBtn = e.target.closest("[data-modal-shot]");
    if (shotBtn) {
      var img = shotBtn.querySelector(".demo-shot");
      gtag("event", "enlarge_screenshot", {
        project: project(),
        screenshot: img ? img.getAttribute("data-shot") : null
      });
    }
  });

  // 4. Vidéo de démo. Les évènements media (play/ended) ne « remontent »
  //    pas : on écoute donc en PHASE DE CAPTURE (3e argument = true), ce
  //    qui les attrape même si la vidéo est injectée par i18n.js.
  document.addEventListener("play", function (e) {
    if (e.target && e.target.tagName === "VIDEO") {
      gtag("event", "video_start", { project: project() });
    }
  }, true);

  document.addEventListener("ended", function (e) {
    if (e.target && e.target.tagName === "VIDEO") {
      gtag("event", "video_complete", { project: project() });
    }
  }, true);
})();
