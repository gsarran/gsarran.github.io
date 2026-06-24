/* =============================================================
   fork.js : schemas de flux animes ROBUSTES (module partage).
   -------------------------------------------------------------
   Pour chaque conteneur .fork2 (avec un id + un attribut
   data-links), les noeuds sont places en flexbox (CSS) et les
   connecteurs sont des paths SVG RECALCULES depuis le centre reel
   des icones (getBoundingClientRect) : ils tombent donc toujours
   pile au centre, quel que soit l'ecran ou la longueur des
   libelles. Le type de trait (droit / coude) est deduit tout seul,
   et les branches qui partent d'un meme noeud (fourche) ou se
   rejoignent sur un meme noeud (jonction) partagent un meme coude.
   Un pointille teal defile le long de chaque path (.fork2-flow).
   Recalcul a l'affichage de l'onglet, au resize, apres i18n.
   Inspire du moteur de workflow du projet fil rouge.
   ============================================================= */
(function () {
  "use strict";
  var SVGNS = "http://www.w3.org/2000/svg";
  var M = 6; /* petit retrait entre le trait et l'icone */

  function parseLinks(canvas) {
    return (canvas.getAttribute("data-links") || "")
      .split(/[;\n]/)
      .map(function (s) { return s.trim(); })
      .filter(Boolean)
      .map(function (s) {
        var p = s.split(">");
        return { from: p[0].trim(), to: p[1].trim() };
      });
  }

  function setup(canvas) {
    var svg = canvas.querySelector(".fork2-svg");
    if (!svg) return;
    var links = parseLinks(canvas);
    if (!links.length) return;
    var vertical = canvas.classList.contains("is-vertical");

    /* combien de departs / arrivees par noeud (pour reperer fourches et jonctions) */
    var outCount = {}, inCount = {};
    links.forEach(function (l) {
      outCount[l.from] = (outCount[l.from] || 0) + 1;
      inCount[l.to]   = (inCount[l.to]   || 0) + 1;
    });

    function center(node) {
      var el = canvas.querySelector('[data-fk="' + node + '"] .flow-icon');
      if (!el) return null;
      var f = canvas.getBoundingClientRect();
      var r = el.getBoundingClientRect();
      return {
        left:  r.left  - f.left,
        right: r.right - f.left,
        top:   r.top   - f.top,
        bottom:r.bottom- f.top,
        cx:    r.left  - f.left + r.width  / 2,
        cy:    r.top   - f.top  + r.height / 2
      };
    }

    function byId(id, cls) {
      var el = document.getElementById(id);
      if (!el) {
        el = document.createElementNS(SVGNS, "path");
        el.setAttribute("class", cls);
        el.setAttribute("id", id);
        svg.appendChild(el);
      }
      return el;
    }

    function build() {
      var f = canvas.getBoundingClientRect();
      if (f.width < 10 || f.height < 10) return; /* onglet inactif (cache) */

      var c = {}, ok = true;
      links.forEach(function (l) {
        if (!(l.from in c)) c[l.from] = center(l.from);
        if (!(l.to   in c)) c[l.to]   = center(l.to);
        if (!c[l.from] || !c[l.to]) ok = false;
      });
      if (!ok) return;
      svg.setAttribute("viewBox", "0 0 " + f.width + " " + f.height);

      if (vertical) {
        var vsegs = [];
        links.forEach(function (l) {
          var a = c[l.from], b = c[l.to];
          vsegs.push("M " + a.cx + " " + (a.bottom + M) + " L " + b.cx + " " + (b.top - M));
        });
        vsegs.forEach(function (d, i) { byId(canvas.id + "_b" + i, "fork2-line").setAttribute("d", d); });
        vsegs.forEach(function (d, i) { byId(canvas.id + "_f" + i, "fork2-flow").setAttribute("d", d); });
        for (var vj = vsegs.length; document.getElementById(canvas.id + "_b" + vj); vj++) {
          document.getElementById(canvas.id + "_b" + vj).setAttribute("d", "");
          var vef = document.getElementById(canvas.id + "_f" + vj);
          if (vef) vef.setAttribute("d", "");
        }
        return;
      }

      /* coude partage : une fourche (meme depart) tourne au meme X juste apres
         le noeud ; une jonction (meme arrivee) tourne au meme X juste avant. */
      var splitX = {}, mergeX = {};
      links.forEach(function (l) {
        var a = c[l.from], b = c[l.to];
        if (Math.abs(a.cy - b.cy) < 5) return; /* droit */
        var v = (a.right + b.left) / 2;
        if (outCount[l.from] > 1) splitX[l.from] = (l.from in splitX) ? Math.min(splitX[l.from], v) : v;
        if (inCount[l.to]   > 1) mergeX[l.to]   = (l.to   in mergeX) ? Math.max(mergeX[l.to],   v) : v;
      });

      /* Genere les segments. Le TRONC COMMUN d'une fourche (du noeud au coude) ou
         d'une jonction (du coude au noeud) n'est dessine QU'UNE FOIS : evite la
         superposition de deux pointilles dephases sur le meme trait. */
      var segs = [], doneSplit = {}, doneMerge = {};
      links.forEach(function (l) {
        var a = c[l.from], b = c[l.to];
        if (Math.abs(a.cy - b.cy) < 5) {
          segs.push("M " + (a.right + M) + " " + a.cy + " L " + (b.left - M) + " " + b.cy);
          return;
        }
        var isSplit = outCount[l.from] > 1 && (l.from in splitX);
        var isMerge = inCount[l.to]   > 1 && (l.to   in mergeX);
        var bx = isSplit ? splitX[l.from] : (isMerge ? mergeX[l.to] : (a.right + b.left) / 2);
        var startX = isSplit ? bx : (a.right + M);
        var endX   = isMerge ? bx : (b.left - M);
        if (isSplit && !doneSplit[l.from]) { segs.push("M " + (a.right + M) + " " + a.cy + " L " + bx + " " + a.cy); doneSplit[l.from] = 1; }
        if (isMerge && !doneMerge[l.to])   { segs.push("M " + bx + " " + b.cy + " L " + (b.left - M) + " " + b.cy); doneMerge[l.to] = 1; }
        var d = "M " + startX + " " + a.cy;
        if (startX !== bx) d += " L " + bx + " " + a.cy;
        d += " L " + bx + " " + b.cy;
        if (endX !== bx) d += " L " + endX + " " + b.cy;
        segs.push(d);
      });

      /* tous les traits de base d'abord, puis tous les pointilles (pointilles au-dessus) */
      segs.forEach(function (d, i) { byId(canvas.id + "_b" + i, "fork2-line").setAttribute("d", d); });
      segs.forEach(function (d, i) { byId(canvas.id + "_f" + i, "fork2-flow").setAttribute("d", d); });
      for (var j = segs.length; document.getElementById(canvas.id + "_b" + j); j++) {
        document.getElementById(canvas.id + "_b" + j).setAttribute("d", "");
        var ef = document.getElementById(canvas.id + "_f" + j);
        if (ef) ef.setAttribute("d", "");
      }
    }

    if (window.ResizeObserver) new ResizeObserver(build).observe(canvas);
    window.addEventListener("resize", build);
    window.addEventListener("portfolio:languagechange", function () { requestAnimationFrame(build); });
    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.addEventListener("click", function () { requestAnimationFrame(build); });
    });
    build();
    setTimeout(build, 250);
  }

  document.querySelectorAll(".fork2").forEach(setup);
})();
