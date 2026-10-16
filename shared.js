/* NovaChain — elementos compartidos por las 3 propuestas:
   barra para cambiar de versión, ilustraciones técnicas, formulario y animaciones. */
(function () {
  const VERSIONS = [
    { file: "index.html", n: "01", name: "Industrial" },
    { file: "v2.html", n: "02", name: "Corporativa" },
    { file: "v3.html", n: "03", name: "Ingeniería" }
  ];
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  /* ---------- Barra de versiones ---------- */
  const css = `
  .nc-switch{position:fixed;inset:0 0 auto;height:40px;z-index:9999;display:flex;align-items:center;justify-content:center;gap:16px;
    background:#0d0f12;color:#9aa1a8;font:500 11px/1 "Inter",system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.08)}
  .nc-switch .t{opacity:.7}
  .nc-switch nav{display:flex;gap:4px;background:rgba(255,255,255,.06);padding:3px;border-radius:99px}
  .nc-switch a{display:flex;align-items:center;gap:8px;padding:7px 14px;border-radius:99px;color:#c9ced3;text-decoration:none;transition:background .25s,color .25s}
  .nc-switch a b{font-weight:600;color:#FA6312}
  .nc-switch a:hover{color:#fff}
  .nc-switch a.on{background:#fff;color:#0d0f12}
  .nc-switch .k{opacity:.45;font-size:10px;letter-spacing:.1em}
  @media(max-width:640px){.nc-switch .t,.nc-switch .k{display:none}.nc-switch a{padding:7px 11px}.nc-switch a span{display:none}}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  const bar = document.createElement("div");
  bar.className = "nc-switch";
  bar.innerHTML = `<span class="t">Propuesta de rediseño</span><nav>${VERSIONS.map(v =>
    `<a href="${v.file}" class="${v.file === here || (here === "" && v.n === "01") ? "on" : ""}"><b>${v.n}</b><span>${v.name}</span></a>`).join("")}</nav><span class="k">Teclas 1 · 2 · 3</span>`;
  document.body.prepend(bar);
  addEventListener("keydown", e => {
    if (e.target.closest("input,textarea,select")) return;
    const v = VERSIONS[+e.key - 1]; if (v && v.file !== here) location.href = v.file;
  });

  /* ---------- Ilustraciones técnicas (trazo = currentColor, acento = var(--ill-accent)) ---------- */
  let uid = 0;
  const ILL = {
    chancado: () => { const h = "h" + (uid++); return `
<svg viewBox="0 0 400 320" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" role="img" aria-label="Corte de chancador cónico">
  <defs><pattern id="${h}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1" opacity=".55"/></pattern></defs>
  <path d="M128 22 168 74h64l40-52"/>
  <g class="ill-rocks" fill="currentColor" stroke="none" opacity=".75">
    <path d="M176 34l9-5 7 6-4 9-10-1z"/><path d="M205 44l8-3 5 7-6 6-8-3z"/><path d="M190 58l6-4 6 5-3 6-8-1z"/><path d="M222 26l7 1 2 7-6 3-5-5z"/>
  </g>
  <path d="M96 84h208v14l-36 112H132L96 98z"/>
  <path d="M138 98l38 104M262 98l-38 104" stroke="var(--ill-accent,currentColor)" stroke-width="7" stroke-linecap="round"/>
  <path d="M200 96l34 100h-68z" fill="url(#${h})"/>
  <path d="M200 96l34 100h-68z" stroke="var(--ill-accent,currentColor)" stroke-width="2"/>
  <path d="M200 80v170" stroke-dasharray="6 4"/>
  <rect x="120" y="210" width="160" height="46"/>
  <circle cx="200" cy="236" r="15"/><circle cx="206" cy="236" r="5" fill="currentColor"/>
  <path d="M108 256h184M150 256v26M250 256v26M130 282h140"/>
  <path d="M176 214l-14 30M224 214l14 30" stroke-dasharray="3 4" opacity=".7"/>
  <g font-size="11" font-family="inherit" fill="currentColor" stroke="none" letter-spacing=".06em">
    <text x="300" y="40">ALIMENTACIÓN</text><text x="306" y="146">CÓNCAVO</text><text x="20" y="152">MANTO</text>
    <text x="300" y="238">EXCÉNTRICA</text><text x="20" y="232">DESCARGA</text>
  </g>
  <path d="M296 36h-30M302 142h-50M70 148h112M296 234h-80M74 228h76" stroke-width=".8" opacity=".6"/>
</svg>`; },
    gets: () => { const h = "h" + (uid++); return `
<svg viewBox="0 0 400 320" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" role="img" aria-label="Diente y adaptador de balde">
  <defs><pattern id="${h}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1" opacity=".55"/></pattern></defs>
  <path d="M30 96h96l20 26v76l-20 26H30z" fill="url(#${h})"/>
  <path d="M30 96h96l20 26v76l-20 26H30z"/>
  <path d="M146 130h52c10 0 16 6 16 14v32c0 8-6 14-16 14h-52"/>
  <path d="M188 118c40-4 96 14 168 40-72 26-128 44-168 40-12-1-18-8-18-18v-44c0-10 6-17 18-18z" stroke="var(--ill-accent,currentColor)" stroke-width="2.4"/>
  <path d="M206 136c40 2 84 12 126 24M206 184c40-2 84-12 126-24" opacity=".5"/>
  <circle cx="190" cy="160" r="8"/><circle cx="190" cy="160" r="3" fill="currentColor"/>
  <path d="M30 236h126M30 84h126" stroke-dasharray="6 4" opacity=".6"/>
  <g font-size="11" fill="currentColor" stroke="none" letter-spacing=".06em">
    <text x="276" y="96">DIENTE</text><text x="120" y="290">ADAPTADOR</text><text x="196" y="262">PASADOR</text><text x="30" y="70">LABIO DEL BALDE</text>
  </g>
  <path d="M286 100l-18 40M150 278l10-42M216 250l-24-82" stroke-width=".8" opacity=".6"/>
</svg>`; },
    ceramico: () => { const h = "h" + (uid++); return `
<svg viewBox="0 0 400 320" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" role="img" aria-label="Revestimiento cerámico en chute">
  <defs><pattern id="${h}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1" opacity=".55"/></pattern></defs>
  <g transform="rotate(-18 200 170)">
    <rect x="40" y="186" width="320" height="18" fill="url(#${h})"/><rect x="40" y="186" width="320" height="18"/>
    <rect x="40" y="168" width="320" height="18"/>
    <g stroke="var(--ill-accent,currentColor)" stroke-width="1.8">
      ${Array.from({ length: 10 }, (_, i) => `<rect x="${44 + i * 31.6}" y="146" width="27" height="20" rx="1.5"/>`).join("")}
    </g>
  </g>
  <g class="ill-rocks" fill="currentColor" stroke="none" opacity=".75">
    <path d="M86 92l10-6 8 7-4 10-11-1z"/><path d="M130 76l9-4 6 8-7 7-9-3z"/><path d="M176 70l8-3 6 6-5 7-9-2z"/><path d="M110 112l7-4 6 6-4 7-8-2z"/>
  </g>
  <path d="M60 60c60 0 130 10 230 50" stroke-dasharray="4 5" opacity=".7"/><path d="M282 98l10 13-16 2"/>
  <g font-size="11" fill="currentColor" stroke="none" letter-spacing=".06em">
    <text x="232" y="262">PLACA DE ACERO</text><text x="236" y="54">FLUJO DE MATERIAL</text><text x="20" y="250">CAUCHO</text><text x="20" y="190">CERÁMICA DE ALÚMINA</text>
  </g>
  <path d="M250 250l-14-38M72 238l26-28M110 194l40-18" stroke-width=".8" opacity=".6"/>
</svg>`; }
  };
  document.querySelectorAll("[data-ill]").forEach(el => { const f = ILL[el.dataset.ill]; if (f) el.innerHTML = f(); });

  /* ---------- Formulario de contacto → abre el correo ---------- */
  document.querySelectorAll("form[data-contact]").forEach(f => f.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(f), g = k => (d.get(k) || "").toString().trim();
    const body = `Nombre: ${g("nombre")}\nEmpresa: ${g("empresa")}\nCorreo: ${g("correo")}\nLínea de interés: ${g("linea")}\n\n${g("mensaje")}`;
    location.href = `mailto:contacto@novachain.com?subject=${encodeURIComponent("Consulta desde la web — " + (g("linea") || "NovaChain"))}&body=${encodeURIComponent(body)}`;
  }));

  /* ---------- Aparición al hacer scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".rv").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });

  /* ---------- Menú móvil (botón .nc-burger alterna body.nc-open) ---------- */
  document.querySelectorAll(".nc-burger").forEach(b => b.addEventListener("click", () => document.body.classList.toggle("nc-open")));
  document.querySelectorAll(".nc-menu a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nc-open")));
})();
