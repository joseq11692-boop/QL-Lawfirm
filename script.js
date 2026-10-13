(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-set-lang]");

  // ---------- Idioma / Language ----------
  function setLang(lang) {
    root.setAttribute("lang", lang);
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.setLang === lang));
    });
    try { localStorage.setItem("ql-lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("ql-lang"); } catch (e) {}
  var browser = (navigator.language || "es").slice(0, 2) === "en" ? "en" : "es";
  setLang(saved || browser);

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.setLang); });
  });

  // ---------- Header al hacer scroll ----------
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Animación de entrada ----------
  var targets = document.querySelectorAll(".section h2, .card, .steps li, .prose, .quote blockquote, .portrait");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  // ---------- Formulario (temporal: abre el correo del visitante) ----------
  // TODO: conectar a un servicio de formularios (Formspree, Basin, etc.) antes de publicar.
  var form = document.getElementById("inquiry");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var d = new FormData(form);
    var body = "Nombre / Name: " + d.get("name") + "\n" +
               "Email: " + d.get("email") + "\n" +
               "Área / Area: " + d.get("area") + "\n\n" + d.get("message");
    window.location.href = "mailto:office@qlcounsel.com?subject=" +
      encodeURIComponent("Consulta / Inquiry — " + d.get("name")) +
      "&body=" + encodeURIComponent(body);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
