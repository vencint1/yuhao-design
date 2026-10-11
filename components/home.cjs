const data = require('../data/home.cjs');
const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const arrow = '<span class="link-arrow" aria-hidden="true">↗</span>';
const resume = label => `<a class="text-link" href="${esc(data.contact.resume)}">${label} ${arrow}</a>`;
const actionButton = (label, href) => `<a class="home-action-button" href="${esc(href)}">${esc(label)}</a>`;

// Replace a placeholder's contents with an img/video; preserve its media-slot and ratio.
function Media(label, slot, ratio) {
  return `<div class="image-placeholder home-media" data-media-slot="${slot}" style="aspect-ratio:${ratio}" role="img" aria-label="${esc(label)}，图片占位"><span>IMAGE PLACEHOLDER</span><span>${esc(label)}</span></div>`;
}
function CollectionMedia() {
  return `<div class="collection-media" role="img" aria-label="三个其他项目素材占位"><span class="collection-tile collection-tile-large">IMAGE PLACEHOLDER</span><span class="collection-tile">IMAGE PLACEHOLDER</span><span class="collection-tile">IMAGE PLACEHOLDER</span></div>`;
}
function Navbar() {
  return `<a class="skip" href="#main">跳到主要内容</a><header class="home-header">
    <nav id="home-nav" class="home-nav" aria-label="主导航">
      <a class="nav-home is-active" href="#home" aria-current="page">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#work">WORK</a>
      <a href="#contact">CONTACT</a>
    </nav>
  </header>`;
}
function HeroKineticLayer() {
  const focus = ['BRAND', 'VISUAL', 'DIGITAL', 'AI'];
  return `<div class="hero-kinetic" aria-hidden="true"><div class="hero-tech hero-tech-top-left"><span>[ SYSTEM_01 ]</span><strong>YU HAO / PORTFOLIO 2026</strong></div><div class="hero-tech hero-tech-top-right"><span>SYSTEM STATUS</span><strong>STATUS: AVAILABLE</strong></div><div class="hero-tech hero-tech-focus"><span>01 / FOCUS</span><div class="kinetic-switch">${focus.map((item, index) => `<strong style="--switch-index:${index}">${item}</strong>`).join('')}</div><small>VISUAL SYSTEM</small></div><div class="hero-tech hero-tech-index"><span>INDEX LOOP</span><div class="kinetic-index">${focus.map((_, index) => `<strong style="--switch-index:${index}">00${index + 1} / 004</strong>`).join('')}</div><small>AI WORKFLOW / ONLINE</small></div><div class="hero-tech-stream"><span>IDEA → SYSTEM → EXPERIENCE → IDEA → SYSTEM → EXPERIENCE →</span><span>IDEA → SYSTEM → EXPERIENCE → IDEA → SYSTEM → EXPERIENCE →</span></div></div>`;
}
function HeroEarth() {
  return `<div class="hero-earth" aria-hidden="true"><svg class="hero-earth-svg" viewBox="0 0 1600 800" preserveAspectRatio="none"><defs><radialGradient id="earth-surface-fade" cx="50%" cy="5%" r="78%"><stop offset="0" stop-color="white"/><stop offset="55%" stop-color="white"/><stop offset="82%" stop-color="#777"/><stop offset="100%" stop-color="black"/></radialGradient><linearGradient id="earth-depth-fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="white"/><stop offset="46%" stop-color="#ddd"/><stop offset="100%" stop-color="black"/></linearGradient><mask id="earth-fade-mask"><rect width="1600" height="800" fill="url(#earth-surface-fade)"/><rect width="1600" height="800" fill="url(#earth-depth-fade)" style="mix-blend-mode:multiply"/></mask><pattern id="earth-dot-pattern" width="22" height="18" patternUnits="userSpaceOnUse"><rect x="2" y="2" width="2.5" height="2.5" fill="#1F5EFF"/><circle cx="15" cy="11" r="1.2" fill="#4C8DFF"/></pattern><pattern id="earth-ascii-pattern" width="74" height="46" patternUnits="userSpaceOnUse"><text x="3" y="9" fill="#4C8DFF" font-size="6" font-family="monospace">01+</text><text x="34" y="20" fill="#1F5EFF" font-size="5" font-family="monospace">#:/</text><text x="9" y="38" fill="#4C8DFF" font-size="7" font-family="monospace">x=</text><rect x="58" y="31" width="4" height="4" fill="#1F5EFF"/></pattern><pattern id="earth-dense-pattern" width="46" height="32" patternUnits="userSpaceOnUse"><text x="2" y="8" fill="#4C8DFF" font-size="6" font-family="monospace">0+</text><rect x="25" y="3" width="5" height="5" fill="#1F5EFF"/><text x="8" y="25" fill="#1F5EFF" font-size="5" font-family="monospace">#1/.</text><rect x="36" y="21" width="3" height="3" fill="#A8CAFF"/></pattern><pattern id="earth-block-pattern" width="64" height="40" patternUnits="userSpaceOnUse"><rect x="4" y="7" width="8" height="8" fill="#1F5EFF"/><rect x="28" y="4" width="4" height="4" fill="#4C8DFF"/><text x="43" y="15" fill="#A8CAFF" font-size="6" font-family="monospace">+</text><rect x="18" y="29" width="3" height="3" fill="#4C8DFF"/></pattern></defs><g mask="url(#earth-fade-mask)"><rect width="1600" height="800" fill="#071426" opacity=".7"/><rect class="earth-dot-layer" width="1600" height="800" fill="url(#earth-dot-pattern)"/><g class="earth-continent-layer" fill="url(#earth-dense-pattern)"><path d="M155 182L224 118 323 102 401 137 474 126 517 178 482 230 422 244 386 292 321 282 289 233 218 226Z"/><path d="M405 306L473 320 514 373 501 434 540 471 503 559 465 621 433 588 427 511 396 458 374 386Z"/><path d="M662 166L728 142 795 156 842 194 902 190 926 238 883 260 846 294 800 281 770 244 718 254 681 224Z"/><path d="M736 291L818 274 874 321 862 379 909 422 866 495 810 548 770 507 755 437 714 384Z"/><path d="M892 147L1002 104 1136 118 1202 153 1305 158 1398 221 1362 278 1268 266 1211 305 1119 282 1067 244 986 251 931 216Z"/><path d="M1194 437L1278 414 1351 451 1332 515 1254 532 1199 493Z"/></g><g class="earth-character-layer" fill="url(#earth-ascii-pattern)"><path d="M112 246C255 190 354 205 526 277L493 354C346 297 255 304 142 341Z"/><path d="M572 210C749 162 949 176 1085 248L1038 326C886 264 741 267 606 309Z"/><path d="M1006 302C1170 240 1381 281 1502 359L1450 429C1321 359 1180 354 1034 399Z"/><path d="M296 486C463 431 609 457 721 521L683 596C545 540 427 543 322 580Z"/><path d="M793 494C966 421 1162 443 1298 524L1253 606C1102 535 955 537 822 588Z"/></g><g class="earth-cloud-layer" fill="none" stroke="#A8CAFF" stroke-linecap="round"><path d="M214 198C345 159 493 165 614 224" stroke-width="8" stroke-dasharray="2 20"/><path d="M647 343C789 291 948 302 1063 360" stroke-width="6" stroke-dasharray="2 17"/><path d="M1031 184C1166 149 1321 171 1414 225" stroke-width="7" stroke-dasharray="2 22"/><path d="M447 421C561 388 660 399 749 446" stroke-width="5" stroke-dasharray="2 15"/></g><g class="earth-resolve-layer" fill="url(#earth-block-pattern)"><path d="M284 38C486 8 646 15 806 52L782 131C603 98 455 94 302 118Z"/><path d="M842 44C1041 13 1224 31 1372 91L1339 157C1176 111 1016 106 861 126Z"/></g></g></svg></div>`;
}
function Hero() {
  return `<section id="home" class="home-hero" aria-labelledby="hero-title">${HeroEarth()}${HeroKineticLayer()}<div class="hero-center">
    <p class="hero-kicker">YU HAO / PORTFOLIO 2026</p>
    <h1 id="hero-title"><span>AI-DRIVEN</span><span class="hero-title-wide"><span>VISUAL</span> <span>DESIGNER</span></span></h1>
    <p class="hero-summary">Turning complex ideas into clear visual systems<br class="desktop-break"> and digital experiences.</p>
    <a class="hero-cta" href="#work"><span aria-hidden="true">[</span> VIEW WORK <span aria-hidden="true">]</span></a>
  </div></section>`;
}
function About() {
  const stats = [['3+', 'Years Experience'], ['0→1', 'Product & Brand Experience'], ['AI', 'Enhanced Workflow']];
  return `<section id="about" class="container home-section snapshot" aria-labelledby="about-title"><div>${Media('YU HAO / PORTRAIT', 'portrait', '4 / 5')}</div><div class="snapshot-copy"><p class="eyebrow">ABOUT</p><h2 id="about-title">Visual Designer focused on Brand, Product &amp; AI-powered Workflow.</h2><p class="about-description" lang="zh-CN">拥有品牌视觉、营销 Campaign 与数字产品设计经验，曾参与惠氏、南亚新材、科大讯飞等品牌项目，并持续探索 AI 在设计流程中的实际应用。</p><dl class="snapshot-stats">${stats.map(([number, label]) => `<div><dt>${label}</dt><dd>${number}</dd></div>`).join('')}</dl>${actionButton('View Resume', data.contact.resume)}</div></section>`;
}
function SectionHeader(title, id, meta) {
  return `<div class="editorial-heading"><h2 id="${id}">${title}</h2><span class="heading-rule" aria-hidden="true"></span><span class="eyebrow">${meta}</span></div>`;
}
function ProjectCard(project, index) {
  const number = String(index + 1).padStart(2, '0');
  const media = project.layout === 'collection' ? CollectionMedia() : Media('PROJECT VISUAL / ' + number, project.slug, project.ratio);
  return `<article class="editorial-case case-${project.layout}" aria-labelledby="project-${number}"><a class="case-media-link" href="${project.slug}.html" aria-label="查看 ${esc(project.name)} 案例">${media}</a><div class="editorial-case-copy"><div class="project-primary"><p class="eyebrow project-category">${number} / ${esc(project.category)}</p><h3 id="project-${number}"><a href="${project.slug}.html">${esc(project.name)}</a></h3><p class="project-description">${esc(project.description)}</p><div class="tags">${project.tags.map(tag => `<span class="tag">${esc(tag)}</span>`).join('')}</div></div><div class="project-actions"><dl class="project-facts"><div><dt>YEAR</dt><dd>${project.year}</dd></div><div><dt>ROLE</dt><dd>${esc(project.role)}</dd></div></dl>${actionButton(project.cta || 'View Case', `${project.slug}.html`)}</div></div></article>`;
}
function SelectedWorks() {
  return `<section id="work" class="container home-section selected-works" aria-labelledby="work-title">${SectionHeader('SELECTED WORKS', 'work-title', '2023 — 2026')}<div class="editorial-projects">${data.projects.map(ProjectCard).join('')}</div></section>`;
}
function CapabilitiesGrid() {
  return `<div class="capability-grid">${data.capabilities.map((item, i) => `<article class="capability"><span class="eyebrow">0${i + 1}</span><h3>${item.name}</h3>${item.note ? `<p class="capability-note">${item.note}</p>` : ''}<ul>${item.items.map(text => `<li>${text}</li>`).join('')}</ul></article>`).join('')}</div>`;
}
function AigcGallery() {
  const cells = Array.from({ length: 8 }, (_, i) => `<div class="aigc-cell" role="img" aria-label="AIGC 作品占位 ${String(i + 1).padStart(2, '0')}"><span>AIGC / ${String(i + 1).padStart(2, '0')}</span></div>`).join('');
  return `<section id="gallery" class="home-section aigc-gallery" aria-labelledby="aigc-title"><div class="container aigc-heading"><p class="eyebrow">EXPERIMENTS / VISUAL EXPLORATION</p><h2 id="aigc-title">AIGC WORKS</h2><p>Selected AI-assisted visual studies and ongoing experiments.</p></div><div class="aigc-marquee" aria-label="滚动播放的 AIGC 作品画廊"><div class="aigc-track">${cells}${cells}</div></div></section>`;
}
function ContactFooter() {
  const social = (key, label) => data.contact[key] ? `<a class="text-link" href="${esc(data.contact[key])}" target="_blank" rel="noreferrer">${label} ${arrow}</a>` : `<span class="text-link social-pending" aria-disabled="true">${label} ${arrow}</span>`;
  return `<footer id="contact" class="home-contact"><div class="container"><section class="footer-capabilities" aria-labelledby="capabilities-title">${SectionHeader('CAPABILITIES', 'capabilities-title', 'IDEA → SYSTEM → EXPERIENCE')}${CapabilitiesGrid()}</section><section class="footer-contact" aria-labelledby="contact-title"><div class="footer-contact-copy"><p class="eyebrow">CONTACT / OPEN TO WHAT’S NEXT</p><h2 id="contact-title">LET’S CREATE<br>SOMETHING<br>MEANINGFUL.</h2><p class="contact-description">Available for Visual / Brand / Product<br class="desktop-break"> Design opportunities.</p></div><div class="contact-links"><a class="text-link" href="mailto:${data.contact.email}">Email ${arrow}</a>${resume('Resume')}${social('linkedin', 'LinkedIn')}${social('xiaohongshu', 'Xiaohongshu')}</div></section><div class="home-colophon"><span>© 2026 Yu Hao</span><span class="footer-identity"><span>AI-driven Visual Designer</span><span>Shanghai / Available for opportunities</span></span></div></div></footer>`;
}
module.exports = function Home() {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Yu Hao — AI-driven Visual Designer. Brand, visual, digital product and AI-powered workflow."><title>YU HAO — AI-driven Visual Designer</title><link rel="stylesheet" href="site.css"><link rel="stylesheet" href="home.css"></head><body id="top" class="home-page">${Navbar()}<main id="main">${Hero()}${About()}${SelectedWorks()}${AigcGallery()}</main>${ContactFooter()}<script src="site.js"></script><script src="home.js"></script></body></html>`;
};
