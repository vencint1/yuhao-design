const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const content = fs.readFileSync(path.join(root, '..', 'portfolio-content.js'), 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(`${content};this.projects=projects`, sandbox);
const projects = sandbox.projects.map(project => ({
  ...project,
  slug: project.id,
  title: project.name,
  year: `P.${project.pages}`,
  company: project.type,
  short: project.intro,
  tags: project.scope.split('/').map(item => item.trim()),
  role: project.role,
  ratio: project.sections[0]?.[5] === '4:3' ? '4:3' : '16:9',
  sections: project.sections.map(section => ({ title: section[0], text: section[2], ratio: section[5], detail: section[7] }))
}));
const contact = {
  email: 'yh17756970797@gmail.com',
  footer: 'Brand clarity. Visual character.'
};

const esc = value => String(value || '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const caseAspect = ratio => ratio === '4:3' ? 'long' : 'case-visual';
const placeholder = (label, aspect = 'case-visual') => `<div class="image-placeholder ${aspect}" role="img" aria-label="${esc(label)} 图片占位"><span>IMAGE PLACEHOLDER</span><strong>${esc(label)}</strong></div>`;

function nav() {
  return `<a class="skip" href="#main">跳到主要内容</a>
  <header class="home-header">
    <nav class="home-nav" aria-label="主导航"><a href="index.html#home">HOME</a><a href="index.html#about">ABOUT</a><a class="is-active" href="index.html#work" aria-current="page">WORK</a><a href="index.html#contact">CONTACT</a></nav>
  </header>`;
}

function footer() {
  return `<section class="contact" id="contact">
    <div class="container contact-grid">
      <div><p class="eyebrow">CONTACT</p><h2>让下一次表达，<br>更清晰一点。</h2><p>如果你的品牌、内容或产品正在寻找更有秩序的视觉表达，欢迎联系我。</p><a class="button" href="mailto:${esc(contact.email)}">发起联系 ↗</a></div>
      <div class="contact-meta"><span>EMAIL</span><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a><span>RESUME</span><a href="assets/resume.pdf" target="_blank" rel="noreferrer">下载 PDF 简历 ↗</a></div>
    </div>
  </section>
  <footer class="site-footer"><div class="container footer-inner"><span>© 2026 YU HAO</span><span>${esc(contact.footer)}</span><a href="#top">回到顶部 ↑</a></div></footer>`;
}

function shell(title, body) {
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="于昊，品牌与视觉设计师作品集"><title>${esc(title)} · 于昊作品集</title><link rel="stylesheet" href="site.css"></head><body id="top">${nav()}${body}<script src="site.js"></script></body></html>`;
}

const renderHome = require('./components/home.cjs');
fs.writeFileSync(path.join(root, 'index.html'), renderHome());

projects.forEach((project, index) => {
  const next = projects[(index + 1) % projects.length];
  const page = `<main id="main" class="container case-main">
    <a class="back" href="index.html#work">← 返回项目列表</a>
    <section class="case-hero"><div><p class="eyebrow">${esc(project.company)} / CASE STUDY</p><h1>${esc(project.title)}</h1><p class="case-lead">${esc(project.short)}</p></div></section>
    <div class="case-banner">${placeholder(`${project.title} / COVER`, project.ratio === '4:3' ? 'long' : 'case-visual')}</div>
    ${project.sections.map((section, sectionIndex) => `<section class="case-section"><div><p class="eyebrow">0${sectionIndex + 1} / ${esc(section.title).toUpperCase()}</p><h2>${esc(section.title)}</h2></div><div class="case-section-content"><p>${esc(section.text)}</p>${placeholder(`${project.title} / ${section.title}`, caseAspect(section.ratio))}${section.detail ? `<details class="pending"><summary>展开项目补充说明</summary><p>${esc(section.detail)}</p></details>` : ''}</div></section>`).join('')}
    <nav class="case-next" aria-label="案例翻页"><a href="index.html#work">全部项目</a><a href="${esc(next.slug)}.html">下一案例：${esc(next.title)} →</a></nav>
  </main>${footer()}`;
  fs.writeFileSync(path.join(root, `${project.slug}.html`), shell(project.title, page));
});

console.log(`Generated ${projects.length + 1} portfolio pages.`);
