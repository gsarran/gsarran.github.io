/* =============================================================
   i18n.js : Moteur multilingue partagé (FR / EN / RU)
   -------------------------------------------------------------
   Rôle :
   1. Injecte le header commun (marque + menu + sélecteur de langue)
      sur TOUTES les pages, pour ne l'écrire qu'une seule fois.
   2. Charge le bon dictionnaire de langue et remplace les textes
      des éléments marqués [data-i18n] / [data-i18n-html].
   3. Mémorise la langue choisie (localStorage) entre les visites.

   Les textes vivent dans /assets/i18n/fr.js, en.js, ru.js
   (chargés AVANT ce fichier, ils remplissent window.translations).

   Chaque page peut définir window.PAGE = { base: '../../' }
   pour indiquer le chemin de retour vers la racine du site
   (vide "" pour la page d'accueil, "../../" pour un projet).
   ============================================================= */
(function () {
  "use strict";

  var DEFAULT_LANG = "fr";
  var SUPPORTED = ["fr", "en", "ru"];
  var base = (window.PAGE && window.PAGE.base) || "";

  /* ---- 1. Construction du header commun -------------------- */
  function buildHeader() {
    var header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="container nav">' +
        '<a class="brand" href="' + base + 'index.html">Geoffrey Sarran</a>' +
        '<div class="lang-switch" aria-label="Language switcher">' +
          '<button class="lang-btn" data-lang="fr" aria-label="Français" title="Français"><img class="lang-flag" src="' + base + 'assets/flags/fr.svg" alt="" width="20" height="14" /><span>FR</span></button>' +
          '<button class="lang-btn" data-lang="en" aria-label="English" title="English"><img class="lang-flag" src="' + base + 'assets/flags/gb.svg" alt="" width="20" height="14" /><span>EN</span></button>' +
          '<button class="lang-btn" data-lang="ru" aria-label="Русский" title="Русский"><img class="lang-flag" src="' + base + 'assets/flags/ru.svg" alt="" width="20" height="14" /><span>RU</span></button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(header, document.body.firstChild);
  }

  /* ---- 2. Application d'une langue -------------------------- */
  function setLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    var dict = (window.translations && window.translations[lang]) || {};

    // Textes simples
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Textes contenant du HTML (listes, <strong>, <br>, etc.)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    // Vignettes spécifiques à la langue : data-thumb="coach" -> vignettes/coach-<lang>.jpg
    document.querySelectorAll("[data-thumb]").forEach(function (img) {
      img.src = base + "vignettes/" + img.getAttribute("data-thumb") + "-" + lang + ".jpg";
    });

    // Lien CV spécifique à la langue : data-cv -> cv/Geoffrey_Sarran_CV_<LANG>.pdf
    document.querySelectorAll("[data-cv]").forEach(function (a) {
      a.href = base + "cv/Geoffrey_Sarran_CV_" + lang.toUpperCase() + ".pdf";
    });

    // Bouton de langue actif
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.documentElement.lang = lang;
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
  }

  /* ---- 3. Câblage des boutons + langue initiale ------------- */
  function wire() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });

    var saved = null;
    try { saved = localStorage.getItem("portfolio-lang"); } catch (e) {}
    setLanguage(saved || DEFAULT_LANG);
  }

  /* ---- Démarrage ------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    wire();
  });

  // Exposé pour usage éventuel par d'autres scripts (onglets, etc.)
  window.setLanguage = setLanguage;
})();
