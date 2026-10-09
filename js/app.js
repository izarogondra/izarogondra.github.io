/* Site engine. You shouldn't need to edit this file. */
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const media = (src, alt, ratio, i = 0) => src
  ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
  : `<div class="ph tone${i % 5}" style="aspect-ratio:${esc(ratio || "4/3")}">Your art here</div>`;

const projects = PROJECTS.map(p => ({ ...p, group: GROUPS.find(g => g.id === p.group) })).filter(p => p.group);
const inGroup = g => projects.filter(p => p.group.id === g.id);
const groups = GROUPS.filter(g => inGroup(g).length);
const TABS = [["home", "Home"], ["work", "Work"], ["about", "About"]];
const ALIAS = { resume: "about", contact: "about" };

const card = (href, thumb, title, sub) =>
  `<a class="card" href="${href}"><span class="thumb">${thumb}</span><div class="t">${esc(title)}</div><p class="s">${esc(sub)}</p></a>`;

const pages = {
  home: () => `<h1>${esc(SITE.tagline)}</h1><p class="lede">${esc(SITE.intro)}</p>
    <div class="grid" style="margin-top:48px">${groups.map((g, i) => {
      const ps = inGroup(g);
      return card(`#/work/${g.id}`, media(ps[0].cover, g.title, "16/10", i), g.title, `${ps.length} project${ps.length === 1 ? "" : "s"}`);
    }).join("")}</div>`,

  work: gid => {
    const g = groups.find(x => x.id === gid) || groups[0];
    return `<h2>Work</h2>
    <div class="sub" aria-label="Work sections">${groups.map(x =>
      `<a href="#/work/${x.id}" ${x.id === g.id ? 'aria-current="page"' : ""}>${esc(x.title)}</a>`).join("")}</div>
    <p class="lede" style="margin:0 0 32px">${esc(g.blurb)}</p>
    <div class="grid">${inGroup(g).map((p, i) => card(`#/project/${p.id}`, media(p.cover, p.title, p.ratio, i), p.title, p.sub)).join("")}</div>`;
  },

  project: id => {
    const p = projects.find(x => x.id === id);
    if (!p) return pages.work();
    return `<a class="back" href="#/work/${p.group.id}">&larr; Back to ${esc(p.group.title)}</a>
    <article class="paper"><h1>${esc(p.title)}</h1><p class="muted" style="margin:10px 0 0">${esc(p.sub)}</p>
    <dl class="meta"><div><dt>Year</dt><dd>${esc(p.year)}</dd></div><div><dt>Role</dt><dd>${esc(p.role)}</dd></div><div><dt>Tools</dt><dd>${esc(p.tools)}</dd></div></dl>
    ${p.sections.map((s, si) => `<h2>${esc(s.h)}</h2>${(s.p || []).map(t => `<p>${esc(t)}</p>`).join("")}
      ${s.img ? `<figure class="fig"><button data-src="${esc(s.img.src)}" data-cap="${esc(s.img.cap)}" aria-label="Enlarge image">${media(s.img.src, s.img.cap, s.img.ratio, si)}</button>
      <figcaption>${esc(s.img.cap)}</figcaption></figure>` : ""}`).join("")}</article>`;
  },

  about: () => `
    <section class="block"><h2>About</h2><div class="two" style="margin-top:28px">
      <div class="portrait">${SITE.portrait ? `<img src="${esc(SITE.portrait)}" alt="Portrait of ${esc(SITE.name)}">` : `<div class="ph tone0" style="height:100%">Your photo here</div>`}</div>
      <div>${SITE.bio.map(t => `<p>${esc(t)}</p>`).join("")}</div></div></section>
    <section class="block"><div class="two even"><div><h2>Resume</h2><p class="muted">The short version is on the right. The PDF has the full details.</p>
      <a class="btn" href="${esc(SITE.resumePdf)}">Download PDF</a></div>
      <div>${SITE.jobs.map(j => `<div class="job"><b>${esc(j.title)}</b><span>${esc(j.when)}</span></div>`).join("")}</div></div></section>
    <section class="block"><div class="two even"><div><h2>Contact</h2><a class="email" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></div>
      <div><h3>Find me online</h3><ul class="links">${[{ label: "Email", url: "mailto:" + SITE.email }, ...SITE.socials].map(s =>
        `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}</ul></div></div></section>`
};

function render() {
  let [, page = "home", arg] = location.hash.split("/");
  page = ALIAS[page] || page;
  const key = pages[page] ? page : "home";
  const tab = key === "project" ? "work" : key;
  $("nav").innerHTML = TABS.map(([k, l]) =>
    `<a href="#/${k}${k === "work" && groups[0] ? "/" + groups[0].id : ""}" ${k === tab ? 'aria-current="page"' : ""}>${l}</a>`).join("");
  $("view").innerHTML = pages[key](arg);
  const pr = key === "project" && projects.find(x => x.id === arg);
  document.title = (pr ? pr.title + " | " : "") + SITE.name;
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", render);

$("view").addEventListener("click", e => {
  const b = e.target.closest(".fig > button");
  if (!b) return;
  $("lbBox").innerHTML = (b.dataset.src ? `<img src="${esc(b.dataset.src)}" alt="${esc(b.dataset.cap)}">` : `<div class="ph tone0">Your art here</div>`)
    + `<div>${esc(b.dataset.cap)}</div><button id="x">Close</button>`;
  $("lb").showModal();
  $("x").onclick = () => $("lb").close();
});
$("lb").addEventListener("click", e => { if (e.target === $("lb")) $("lb").close(); });

$("yr").textContent = new Date().getFullYear();
render();
