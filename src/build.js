/**
 * UCAO-UUCo — Générateur de site statique (zéro dépendance externe).
 *
 * Lit les contenus centralisés dans src/content/, applique les templates HTML,
 * et écrit les pages statiques dans dist/.
 *
 * Direction artistique : identité dérivée du logo officiel UCAO-UUCo
 * (bleu #312783, rouge #991915, blanc), composition éditoriale inspirée de SOAS
 * avec une identité propre. Utilisation du vrai logo et des vraies photos du
 * campus fournies dans les assets.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const ASSETS_DIR = path.join(ROOT, 'src', 'assets');
const STYLES_DIR = path.join(ROOT, 'src', 'styles');
const SCRIPTS_DIR = path.join(ROOT, 'src', 'scripts');
const DIST_DIR = path.join(ROOT, 'dist');

/** Lecture JSON avec gestion d’erreur explicite. */
function readJson(rel) {
  const full = path.join(CONTENT_DIR, rel);
  if (!fs.existsSync(full)) {
    throw new Error(`Contenu manquant : ${full}`);
  }
  return JSON.parse(fs.readFileSync(full, 'utf8'));
}

/** Lecture d’un fichier texte brut. */
function readFile(rel, dir = ROOT) {
  const full = path.join(dir, rel);
  if (!fs.existsSync(full)) {
    throw new Error(`Fichier manquant : ${full}`);
  }
  return fs.readFileSync(full, 'utf8');
}

/** Échappement HTML pour le contenu utilisateur / éditorial. */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Titre de page complet. */
function pageTitle(data, site) {
  const base = escapeHtml(data.title || site.siteName);
  return `${base} — ${escapeHtml(site.fullName)}`;
}

/** Méta description. */
function metaDesc(data, site) {
  return escapeHtml(data.metaDescription || site.metaDescription);
}

/** Canonical (à confirmer quand l’URL de production est vérifiée — ici on ne l’invente pas). */
function canonical(slug) {
  return '';
}

/** Open Graph image. */
function ogImage(site) {
  return site.ogImage ? escapeHtml(site.ogImage) : '';
}

/** ---------- Alias d’images vers noms simples ---------- */
const IMAGE_ALIASES = {
  'WhatsApp Image 2026-11-14 at 3.02.57 PM (1).jpeg': 'campus-groupe-rose.jpg',
  'WhatsApp Image 2026-11-14 at 3.02.57 PM.jpeg': 'campus-etudiants-sacs.jpg',
  'WhatsApp Image 2026-11-14 at 3.03.04 PM.jpeg': 'campus-classe-cahiers.jpg',
  'WhatsApp Image 2026-11-14 at 3.03.26 PM.jpeg': 'campus-banc-etudiants.jpg',
  'WhatsApp Image 2026-11-14 at 3.02.58 PM.jpeg': 'campus-entree.jpg',
  'WhatsApp Image 2026-11-14 at 3.03.15 PM.jpeg': 'campus-portrait.jpg',
};

/** Résout un chemin image : alias → nom simple avec préfixe /assets/images/, sinon tel quel. */
function resolveImage(src) {
  if (!src) return src;
  if (src.startsWith('/') || src.startsWith('http')) return src;
  if (IMAGE_ALIASES[src]) return '/assets/images/' + IMAGE_ALIASES[src];
  return '/assets/images/' + src;
}

/** ---------- Composants de shell ---------- */

function skipLink() {
  return `
    <a class="skip-link" href="#main">Aller au contenu principal</a>
  `;
}

function emergencyAlert(site) {
  const alert = site.emergencyAlert;
  if (!alert || !alert.text) return '';
  return `
    <div class="emergency-alert" role="alert" aria-live="assertive">
      ${escapeHtml(alert.text)}
      ${alert.link ? `<a href="${escapeHtml(alert.link.href)}">${escapeHtml(alert.link.label)}</a>` : ''}
    </div>
  `;
}

function langSwitcher(site) {
  const langs = site.languages;
  if (!langs || !langs.length) return '';
  const current = site.lang || 'fr';
  const items = langs.map(l => `
    <a href="${escapeHtml(l.href)}" hreflang="${escapeHtml(l.code)}" ${l.code === current ? 'aria-current="true"' : ''}>${escapeHtml(l.label)}</a>
  `).join('');
  return `<nav class="lang-switcher" aria-label="Langue">${items}</nav>`;
}

function consentBanner(site) {
  const consent = site.consent;
  if (!consent || !consent.text) return '';
  return `
    <div class="consent-banner" id="consent-banner" role="dialog" aria-label="Consentement aux cookies" hidden>
      <p class="consent-banner__text">${escapeHtml(consent.text)} <a href="${escapeHtml(consent.policyHref || '/politique-confidentialite/')}">En savoir plus</a></p>
      <div class="consent-banner__actions">
        <button class="button button--primary" id="consent-accept">${escapeHtml(consent.acceptLabel || 'Accepter')}</button>
        <button class="button button--ghost" id="consent-reject">${escapeHtml(consent.rejectLabel || 'Refuser')}</button>
      </div>
    </div>
  `;
}

function nav(site, navItems, currentSlug) {
  const itemsHtml = navItems
    .map(
      (item) => {
        const active = item.href === currentSlug || (currentSlug === '' && item.label === 'Accueil') ? ' aria-current="page"' : '';
        const submenu = item.children && item.children.length ? renderSubmenu(item.children) : '';
        return `<li class="nav-item${submenu ? ' nav-item--has-submenu' : ''}"><a class="nav-link${active ? ' nav-link--active' : ''}" href="${escapeHtml(item.href)}"${active}>${escapeHtml(item.label)}</a>${submenu}</li>`;
      }
    )
    .join('');

  const ctaHtml = `
    <div class="header-ctas">
      <a class="button button--primary" href="/formations/">Découvrir les formations</a>
      <a class="button button--secondary" href="/admissions/">Admissions</a>
    </div>
  `;

  const logoMarkup = `
    <img src="${escapeHtml(site.logoSrc || '/assets/images/UCAO_LOGO.png')}"
         alt="${escapeHtml(site.logoAlt || 'Logo UCAO-UUCo')}"
         width="200" height="148" loading="eager">
  `;

  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="site-brand" href="/">
          <span class="site-brand__logo">${logoMarkup}</span>
          <span class="site-brand__text">
            <span class="site-brand__name">${escapeHtml(site.siteName)}</span>
            <span class="site-brand__sub">${escapeHtml(site.fullName)}</span>
          </span>
        </a>

        ${langSwitcher(site)}

        <button class="menu-toggle" aria-expanded="false" aria-controls="main-menu" aria-label="Ouvrir le menu">
          <span class="menu-toggle__bar"></span>
          <span class="menu-toggle__bar"></span>
          <span class="menu-toggle__bar"></span>
        </button>

        <nav class="main-nav" id="main-menu">
          <ul class="nav-list">
            ${itemsHtml}
          </ul>
          ${ctaHtml}
        </nav>
      </div>
    </header>
  `;
}

function renderSubmenu(children) {
  const items = children.map(c => `<li><a class="nav-sublink" href="${escapeHtml(c.href)}">${escapeHtml(c.label)}</a></li>`).join('');
  return `<ul class="nav-submenu">${items}</ul>`;
}

function footer(site, navItems) {
  const quickLinks = navItems
    .slice(0, 5)
    .map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`)
    .join('');

  const phonesHtml = site.phones
    .map((p) => `<li><a class="footer-link" href="tel:${escapeHtml(p.replace(/\s/g, ''))}">${escapeHtml(p)}</a></li>`)
    .join('');

  const logoMarkup = `
    <img src="${escapeHtml(site.logoSrc || '/assets/images/UCAO_LOGO.png')}"
         alt="${escapeHtml(site.logoAlt || 'Logo UCAO-UUCo')}"
         width="140" height="104" loading="lazy">
  `;

  const email = site.email?.replace(/\[À CONFIRMER\] /, '') || '';

  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-block footer-brand">
          <div class="footer-brand__logo">${logoMarkup}</div>
          <p class="footer-text">${escapeHtml(site.fullName)}</p>
          <p class="footer-text">${escapeHtml(site.address)}</p>
          <ul class="footer-contact">
            ${phonesHtml}
            <li><a class="footer-link" href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></li>
          </ul>
          ${site.facebook ? `<p class="footer-social"><a class="footer-link" href="${escapeHtml(site.facebook)}" target="_blank" rel="noopener">Facebook</a></p>` : ''}
        </div>
        <div class="footer-block">
          <h2 class="footer-heading">Liens rapides</h2>
          <ul class="footer-links">
            ${quickLinks}
          </ul>
        </div>
        <div class="footer-block">
          <h2 class="footer-heading">Informations</h2>
          <ul class="footer-links">
            <li><a class="footer-link" href="/universite/">Université</a></li>
            <li><a class="footer-link" href="/formations/">Formations</a></li>
            <li><a class="footer-link" href="/admissions/">Admissions</a></li>
            <li><a class="footer-link" href="/actualites/">Actualités</a></li>
            <li><a class="footer-link" href="/contact/">Contact</a></li>
            <li><a class="footer-link" href="/mentions-legales/">Mentions légales</a></li>
            <li><a class="footer-link" href="/politique-confidentialite/">Confidentialité</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copyright">${escapeHtml(site.copyright)}</p>
        <p class="footer-note">${escapeHtml(site.emailNote || '')}</p>
      </div>
    </footer>
  `;
}

function head(site, data) {
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle(data, site)}</title>
    <meta name="description" content="${metaDesc(data, site)}">
    <meta name="language" content="fr">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="${escapeHtml(site.faviconSrc || '/assets/images/favicon.svg')}" type="image/svg+xml">
    <meta property="og:title" content="${pageTitle(data, site)}">
    <meta property="og:description" content="${metaDesc(data, site)}">
    <meta property="og:type" content="website">
    ${site.ogImage ? `<meta property="og:image" content="${escapeHtml(site.ogImage)}">` : ''}
    <meta property="og:locale" content="fr_FR">
    ${canonical(data.slug) ? `<link rel="canonical" href="${canonical(data.slug)}">` : ''}
  `;
}

/** Head complet pour le <head> HTML. */
function head(site, data) {
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle(data, site)}</title>
    <meta name="description" content="${metaDesc(data, site)}">
    <meta name="language" content="fr">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="${escapeHtml(site.faviconSrc || '/assets/images/favicon.svg')}" type="image/svg+xml">
    <meta property="og:title" content="${pageTitle(data, site)}">
    <meta property="og:description" content="${metaDesc(data, site)}">
    <meta property="og:type" content="website">
    ${site.ogImage ? `<meta property="og:image" content="${escapeHtml(site.ogImage)}">` : ''}
    <meta property="og:locale" content="fr_FR">
    ${canonical(data.slug) ? `<link rel="canonical" href="${canonical(data.slug)}">` : ''}
  `;
}

/** ---------- Composants éditoriaux ---------- */

function hero(data) {
  const h = data.hero;
  if (!h) return '';
  const hasImage = Boolean(h.image);
  const resolvedImage = hasImage ? resolveImage(h.image) : '';
  const heroClass = hasImage ? 'hero hero--image' : 'hero';
  return `
    <section class="${heroClass}" aria-labelledby="hero-title">
      <div class="hero__inner">
        <div class="hero__content">
          ${h.kicker ? `<span class="hero__kicker">${escapeHtml(h.kicker)}</span>` : ''}
          <h1 class="hero__title" id="hero-title">${escapeHtml(h.title)}</h1>
          ${h.lead ? `<p class="hero__lead">${escapeHtml(h.lead)}</p>` : ''}
          <div class="hero__ctas">
            ${h.ctaPrimary ? `<a class="button button--primary" href="${escapeHtml(h.ctaPrimary.href)}">${escapeHtml(h.ctaPrimary.label)}</a>` : ''}
            ${h.ctaSecondary ? `<a class="button button--secondary" href="${escapeHtml(h.ctaSecondary.href)}">${escapeHtml(h.ctaSecondary.label)}</a>` : ''}
          </div>
        </div>
        ${hasImage ? `
          <div class="hero__media">
            <img src="${escapeHtml(resolvedImage)}" alt="${escapeHtml(h.imageAlt || 'Illustration')}" loading="eager" width="1200" height="630">
            ${h.imageCredit ? `<p class="image-credit">${escapeHtml(h.imageCredit)}</p>` : ''}
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function intro(data) {
  if (!data.intro) return '';
  return `
    <section class="section section--text">
      <div class="container">
        <div class="text-block">
          ${data.intro.title ? `<h2 class="section-title">${escapeHtml(data.intro.title)}</h2>` : ''}
          ${data.intro.lead ? `<p class="lead">${escapeHtml(data.intro.lead)}</p>` : ''}
          ${data.intro.text ? `<p>${escapeHtml(data.intro.text)}</p>` : ''}
        </div>
      </div>
    </section>
  `;
}

function cards(data, key, alt) {
  const block = data[key];
  if (!block || !block.items) return '';
  const itemsHtml = block.items
    .map(
      (item) => `
        <article class="card">
          ${item.image ? `<div class="card__media"><img src="${escapeHtml(resolveImage(item.image))}" alt="${escapeHtml(item.imageAlt || item.label)}" loading="lazy"></div>` : ''}
          <h3 class="card__title">${escapeHtml(item.label)}</h3>
          <p class="card__desc">${escapeHtml(item.desc || item.text || '')}</p>
          ${item.href ? `<a class="button button--ghost card__cta" href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>` : ''}
          ${item.note ? `<span class="note">${escapeHtml(item.note)}</span>` : ''}
        </article>
      `
    )
    .join('');

  const sectionClass = alt ? 'section section--cards section--alt' : 'section section--cards';
  return `
    <section class="${sectionClass}">
      <div class="container">
        ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
        <div class="card-grid">
          ${itemsHtml}
        </div>
        ${block.cta ? `<div class="cta-wrap"><a class="button button--primary" href="${escapeHtml(block.cta.href)}">${escapeHtml(block.cta.label)}</a></div>` : ''}
        ${block.note ? `<p class="note note--block">${escapeHtml(block.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function textList(data, key, alt) {
  const block = data[key];
  if (!block) return '';
  let inner = '';
  if (block.items) {
    inner = `<ul class="text-list">${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  } else if (block.text) {
    inner = `<p>${escapeHtml(block.text)}</p>`;
  } else {
    return '';
  }
  const sectionClass = alt ? 'section section--text section--alt' : 'section section--text';
  return `
    <section class="${sectionClass}">
      <div class="container">
        ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
        ${inner}
        ${block.note ? `<p class="note note--block">${escapeHtml(block.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function textCta(data, key, alt) {
  const block = data[key];
  if (!block) return '';
  const sectionClass = alt ? 'section section--text section--alt' : 'section section--text';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <div class="text-block">
          ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
          ${block.text ? `<p>${escapeHtml(block.text)}</p>` : ''}
          ${block.cta ? `<div class="cta-wrap"><a class="button button--primary" href="${escapeHtml(block.cta.href)}">${escapeHtml(block.cta.label)}</a></div>` : ''}
          ${block.note ? `<p class="note note--block">${escapeHtml(block.note)}</p>` : ''}
        </div>
      </div>
    </section>
  `;
}

/** ---------- NOUVEAU : Vidéo embarquée (lecteur HTML5 natif) ---------- */
function videoBlock(data, key, alt) {
  const block = data[key];
  if (!block || !block.video) return '';
  const poster = block.poster ? resolveImage(block.poster) : '';
  const sectionClass = alt ? 'section section--video section--alt' : 'section section--video';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <div class="video-block">
          ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
          ${block.lead ? `<p class="lead">${escapeHtml(block.lead)}</p>` : ''}
          <div class="video-block__player">
            <video controls preload="metadata" width="100%" ${poster ? `poster="${escapeHtml(poster)}"` : ''}>
              <source src="${escapeHtml(block.video)}" type="video/mp4">
              Votre navigateur ne prend pas en charge la vidéo HTML5.
            </video>
          </div>
          ${block.credit ? `<p class="image-credit">${escapeHtml(block.credit)}</p>` : ''}
        </div>
      </div>
    </section>
  `;
}

/** ---------- NOUVEAU : Image avec légende et crédit ---------- */
function imageBlock(data, key, alt) {
  const block = data[key];
  if (!block || !block.image) return '';
  const resolvedImage = resolveImage(block.image);
  const sectionClass = alt ? 'section section--image section--alt' : 'section section--image';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <div class="split-section${block.reverse ? ' split-section--reverse' : ''}">
          ${block.title ? `<div class="split-section__text"><h2 class="section-title">${escapeHtml(block.title)}</h2>${block.text ? `<p>${escapeHtml(block.text)}</p>` : ''}</div>` : ''}
          <div class="split-section__media">
            <img src="${escapeHtml(resolvedImage)}" alt="${escapeHtml(block.imageAlt || block.title || 'Image')}" loading="lazy" width="800" height="600">
            ${block.credit ? `<p class="image-credit">${escapeHtml(block.credit)}</p>` : ''}
          </div>
        </div>
      </div>
    </section>
  `;
}

/** ---------- NOUVEAU : Liste de sections (texte + image, pour vie-universitaire) ---------- */
function sectionsList(data) {
  const sections = data.sections;
  if (!sections || !sections.length) return '';
  const itemsHtml = sections
    .map(
      (s, i) => `
        <section class="section section--text${i % 2 === 1 ? ' section--alt' : ''}">
          <div class="container">
            <div class="split-section${s.reverse ? ' split-section--reverse' : ''}">
              <div class="split-section__text">
                <h2 class="section-title">${escapeHtml(s.title)}</h2>
                <p>${escapeHtml(s.text)}</p>
                ${s.note ? `<p class="note">${escapeHtml(s.note)}</p>` : ''}
              </div>
              ${s.image ? `<div class="split-section__media">${renderImageBlock(s)}</div>` : ''}
            </div>
          </div>
        </section>
      `
    )
    .join('');
  return itemsHtml;
}

/** ---------- NOUVEAU : Section split texte/image (asymétrique) ---------- */
function splitSection(data, leftKey, rightKey, alt) {
  const left = data[leftKey];
  const right = data[rightKey];
  if (!left && !right) return '';
  const sectionClass = alt ? 'section section--split section--alt' : 'section section--split';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <div class="split-section${right.reverse ? ' split-section--reverse' : ''}">
          ${left ? `<div class="split-section__text">${renderMarkdownish(left)}</div>` : ''}
          ${right ? `<div class="split-section__media">${renderImageBlock(right)}</div>` : ''}
        </div>
      </div>
    </section>
  `;
}

function renderImageBlock(block) {
  if (!block) return '';
  let html = '';
  if (block.image) {
    const resolvedImage = resolveImage(block.image);
    html += `<img src="${escapeHtml(resolvedImage)}" alt="${escapeHtml(block.imageAlt || 'Image')}" loading="lazy" width="800" height="600">`;
  }
  if (block.credit) html += `<p class="image-credit">${escapeHtml(block.credit)}</p>`;
  return html;
}

/** ---------- NOUVEAU : Stats grid (faits et chiffres) ---------- */
function statsGrid(data, key) {
  const block = data[key];
  if (!block || !block.items) return '';
  const itemsHtml = block.items
    .map(
      (item) => `
        <div class="stat">
          <span class="stat__number">${escapeHtml(item.number)}</span>
          <span class="stat__label">${escapeHtml(item.label)}</span>
        </div>
      `
    )
    .join('');
  return `
    <section class="section section--stats">
      <div class="container">
        ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
        ${block.text ? `<p class="lead text-block--centered">${escapeHtml(block.text)}</p>` : ''}
        <div class="stats-grid">${itemsHtml}</div>
        ${block.note ? `<p class="note note--block">${escapeHtml(block.note)}</p>` : ''}
      </div>
    </section>
  `;
}

/** ---------- NOUVEAU : Pullquote (citation mise en avant) ---------- */
function pullquote(data, key) {
  const block = data[key];
  if (!block) return '';
  return `
    <section class="section section--quote section--alt">
      <div class="container">
        <div class="pullquote">
          <p>${escapeHtml(block.text)}</p>
          ${block.cite ? `<span class="pullquote__cite">${escapeHtml(block.cite)}</span>` : ''}
        </div>
      </div>
    </section>
  `;
}

/** ---------- NOUVEAU : Valeurs avec titre + texte ---------- */
function valeurGrid(data, key) {
  const block = data[key];
  if (!block || !block.items) return '';
  const itemsHtml = block.items
    .map(
      (item) => `
        <article class="card">
          <h3 class="card__title">${escapeHtml(item.label)}</h3>
          <p class="card__desc">${escapeHtml(item.desc || item.text || '')}</p>
        </article>
      `
    )
    .join('');
  return `
    <section class="section section--values section--alt">
      <div class="container">
        ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
        <div class="card-grid">${itemsHtml}</div>
        ${block.note ? `<p class="note note--block">${escapeHtml(block.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function steps(data, alt) {
  if (!data.steps) return '';
  const itemsHtml = data.steps
    .map(
      (step, i) => `
        <article class="step-card">
          <div class="step-card__num">${i + 1}</div>
          <div class="step-card__content">
            <h3 class="step-card__title">${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.text)}</p>
          </div>
        </article>
      `
    )
    .join('');
  const sectionClass = alt ? 'section section--steps section--alt' : 'section section--steps';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <h2 class="section-title">Procédure d’admission</h2>
        <div class="step-list">${itemsHtml}</div>
      </div>
    </section>
  `;
}

function newsBlock(data, alt) {
  const block = data.actualites || data;
  if (!block.items) return '';
  const itemsHtml = block.items
    .map(
      (item) => `
        <article class="news-card">
          ${item.image ? `<div class="news-card__media"><img src="${escapeHtml(resolveImage(item.image))}" alt="${escapeHtml(item.imageAlt || item.title)}" loading="lazy"></div>` : ''}
          <time class="news-card__date">${escapeHtml(item.date)}</time>
          <h3 class="news-card__title">${escapeHtml(item.title)}</h3>
          <p class="news-card__desc">${escapeHtml(item.summary || '')}</p>
          <span class="news-card__category">${escapeHtml(item.category || '')}</span>
          ${item.note ? `<span class="note">${escapeHtml(item.note)}</span>` : ''}
        </article>
      `
    )
    .join('');

  const sectionClass = alt ? 'section section--news section--alt' : 'section section--news';
  return `
    <section class="${sectionClass}">
      <div class="container">
        ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
        <div class="news-grid">${itemsHtml}</div>
        ${block.cta ? `<div class="cta-wrap"><a class="button button--primary" href="${escapeHtml(block.cta.href)}">${escapeHtml(block.cta.label)}</a></div>` : ''}
        ${block.note ? `<p class="note note--block">${escapeHtml(block.note)}</p>` : ''}
      </div>
    </section>
  `;
}

/** Catalogue de formations (niveaux + programmes). */
function formationsCatalog(data, alt) {
  if (!data || !data.levels) return '';
  const levelsHtml = data.levels
    .map(
      (level) => {
        const programsHtml = level.programs
          .map(
            (p) => `
              <li class="program-item">
                <span class="program-name">${escapeHtml(p.label)}</span>
                ${p.note ? `<span class="program-note">${escapeHtml(p.note)}</span>` : ''}
              </li>
            `
          )
          .join('');
        return `
          <section class="section section--text${alt ? ' section--alt' : ''}">
            <div class="container">
              <h2 class="section-title">${escapeHtml(level.label)}</h2>
              <p>${escapeHtml(level.description)}</p>
              <ul class="program-list">${programsHtml}</ul>
            </div>
          </section>
        `;
      }
    )
    .join('');
  return `
    <section class="section section--formations${alt ? ' section--alt' : ''}">
      <div class="container">
        <div class="formation-search">
          <label class="sr-only" for="formation-search">${escapeHtml(data.searchPlaceholder || 'Rechercher')}</label>
          <input type="search" id="formation-search" placeholder="${escapeHtml(data.searchPlaceholder || '')}" aria-label="${escapeHtml(data.searchPlaceholder || '')}">
        </div>
        ${levelsHtml}
        <div class="cta-wrap"><a class="button button--primary" href="${escapeHtml(data.ctaHref || '/formations/')}">${escapeHtml(data.ctaLabel || 'Voir toutes les formations')}</a></div>
        ${data.note ? `<p class="note note--block">${escapeHtml(data.note)}</p>` : ''}
      </div>
    </section>
  `;
}

/** Liste complète des actualités. */
function newsFullList(data, alt) {
  if (!data || !data.items) return '';
  const itemsHtml = data.items
    .map(
      (item) => `
        <article class="news-card">
          ${item.image ? `<div class="news-card__media"><img src="${escapeHtml(resolveImage(item.image))}" alt="${escapeHtml(item.imageAlt || item.title)}" loading="lazy"></div>` : ''}
          <time class="news-card__date">${escapeHtml(item.date)}</time>
          <h3 class="news-card__title">${escapeHtml(item.title)}</h3>
          <p class="news-card__desc">${escapeHtml(item.summary || '')}</p>
          <span class="news-card__category">${escapeHtml(item.category || '')}</span>
          ${item.note ? `<span class="note">${escapeHtml(item.note)}</span>` : ''}
        </article>
      `
    )
    .join('');
  const sectionClass = alt ? 'section section--news section--alt' : 'section section--news';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <h2 class="section-title">${escapeHtml(data.title || 'Actualités')}</h2>
        <div class="news-grid">${itemsHtml}</div>
        ${data.emptyState ? `<p class="note">${escapeHtml(data.emptyState)}</p>` : ''}
        ${data.cta ? `<div class="cta-wrap"><a class="button button--primary" href="${escapeHtml(data.cta.href)}">${escapeHtml(data.cta.label)}</a></div>` : ''}
        ${data.note ? `<p class="note note--block">${escapeHtml(data.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function contactForm(data, alt) {
  const form = data.form;
  if (!form) return '';
  const fieldsHtml = form.fields
    .map(
      (f) => `
        <div class="form-field">
          <label for="form-${escapeHtml(f.name)}">${escapeHtml(f.label)}${f.required ? ' <span class="required" aria-hidden="true">*</span>' : ''}</label>
          ${f.type === 'textarea'
            ? `<textarea id="form-${escapeHtml(f.name)}" name="${escapeHtml(f.name)}" placeholder="${escapeHtml(f.placeholder || '')}" ${f.required ? 'required' : ''}></textarea>`
            : `<input type="${escapeHtml(f.type)}" id="form-${escapeHtml(f.name)}" name="${escapeHtml(f.name)}" placeholder="${escapeHtml(f.placeholder || '')}" ${f.required ? 'required' : ''}>`}
          <p class="field-error" id="form-${escapeHtml(f.name)}-error" aria-live="polite"></p>
        </div>
      `
    )
    .join('');

  const sectionClass = alt ? 'section section--form section--alt' : 'section section--form';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <div class="form-wrap">
          <form id="contact-form" action="#" method="post" novalidate>
            ${fieldsHtml}
            <button class="button button--primary" type="submit" id="form-submit">${escapeHtml(form.submit || 'Envoyer')}</button>
          </form>
          <div id="form-status" role="status" aria-live="polite" class="form-status"></div>
        </div>
        ${form.note ? `<p class="note note--block">${escapeHtml(form.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function faqList(data, alt) {
  if (!data.items) return '';
  const itemsHtml = data.items
    .map(
      (item) => `
        <details class="faq-item">
          <summary class="faq-summary">${escapeHtml(item.q)}</summary>
          <p class="faq-answer">${escapeHtml(item.a)}</p>
        </details>
      `
    )
    .join('');
  const sectionClass = alt ? 'section section--faq section--alt' : 'section section--faq';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <div class="faq-list">${itemsHtml}</div>
        ${data.note ? `<p class="note note--block">${escapeHtml(data.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function legalBlocks(data, alt) {
  if (!data.blocks) return '';
  const blocksHtml = data.blocks
    .map(
      (b) => `
        <div class="legal-block">
          <h3 class="legal-block__title">${escapeHtml(b.title)}</h3>
          <p>${escapeHtml(b.content)}</p>
        </div>
      `
    )
    .join('');
  const sectionClass = alt ? 'section section--legal section--alt' : 'section section--legal';
  return `
    <section class="${sectionClass}">
      <div class="container">
        ${blocksHtml}
        ${data.note ? `<p class="note note--block">${escapeHtml(data.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function actionsList(data, alt) {
  if (!data.actions) return '';
  const itemsHtml = data.actions
    .map(
      (a) => `<a class="button button--primary" href="${escapeHtml(a.href)}">${escapeHtml(a.label)}</a>`
    )
    .join('');
  const sectionClass = alt ? 'section section--text section--alt' : 'section section--text';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <div class="actions-wrap">${itemsHtml}</div>
      </div>
    </section>
  `;
}

function twoColumn(data, leftKey, rightKey, alt) {
  const left = data[leftKey];
  const right = data[rightKey];
  if (!left && !right) return '';
  const sectionClass = alt ? 'section section--two-col section--alt' : 'section section--two-col';
  return `
    <section class="${sectionClass}">
      <div class="container">
        <div class="two-col">
          ${left ? `<div class="two-col__side">${renderMarkdownish(left)}</div>` : ''}
          ${right ? `<div class="two-col__side">${renderMarkdownish(right)}</div>` : ''}
        </div>
      </div>
    </section>
  `;
}

/** Rend un bloc texte simple (titre + paragraphe) sans Markdown externe. */
function renderMarkdownish(block) {
  if (!block) return '';
  let html = '';
  if (block.title) html += `<h3>${escapeHtml(block.title)}</h3>`;
  if (block.text) html += `<p>${escapeHtml(block.text)}</p>`;
  if (block.email) html += `<p><strong>E-mail :</strong> <a href="mailto:${escapeHtml(block.email.replace(/\[À CONFIRMER\] /, ''))}">${escapeHtml(block.email)}</a></p>`;
  if (block.phones && block.phones.length) {
    html += `<p><strong>Tél. :</strong> ${block.phones.map((p) => `<a href="tel:${escapeHtml(p.replace(/\s/g, ''))}">${escapeHtml(p)}</a>`).join(' · ')}</p>`;
  }
  if (block.address) html += `<p><strong>Adresse :</strong> ${escapeHtml(block.address)}</p>`;
  if (block.mapUrl) {
    html += `<p><a class="button button--ghost" href="${escapeHtml(block.mapUrl)}" target="_blank" rel="noopener">${escapeHtml(block.mapLabel || 'Voir l’itinéraire')}</a></p>`;
  }
  if (block.items) {
    html += `<ul>${block.items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`;
  }
  if (block.note) html += `<p class="note">${escapeHtml(block.note)}</p>`;
  return html;
}

/** ---------- Assembleurs de pages ---------- */

function layout(site, navItems, data, body) {
  const currentSlug = data.slug || '';
  return `<!DOCTYPE html>
<html lang="${escapeHtml(site.lang)}">
<head>
${head(site, data)}
</head>
<body>
${skipLink()}
${emergencyAlert(site)}
${nav(site, navItems, currentSlug)}
<main id="main" class="page-main">
${body}
</main>
${footer(site, navItems)}
${consentBanner(site)}
<script src="/js/main.js"></script>
</body>
</html>`;
}

function renderHome(site, navItems, data) {
  const body = `
${hero(data)}
${intro(data)}
${statsGrid(data, 'stats')}
${programDiscovery(data, 'programs')}
${textCta(data, 'admissions', false)}
${videoBlock(data, 'video', false)}
${newsEvents(data, 'newsEvents')}
${textCta(data, 'vie', false)}
${valeursGrid(data, 'valeurs')}
  `;
  return layout(site, navItems, data, body);
}

function programDiscovery(data, key) {
  const block = data[key];
  if (!block) return '';
  return `
    <section class="section section--programs">
      <div class="container">
        ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
        ${block.lead ? `<p class="lead">${escapeHtml(block.lead)}</p>` : ''}
        ${block.searchPlaceholder ? `
          <div class="formation-search" style="max-width: var(--read-width); margin-bottom: var(--space-2xl);">
            <label class="sr-only" for="program-search">${escapeHtml(block.searchPlaceholder)}</label>
            <input type="search" id="program-search" placeholder="${escapeHtml(block.searchPlaceholder)}" aria-label="${escapeHtml(block.searchPlaceholder)}">
          </div>
        ` : ''}
        ${block.items && block.items.length ? `
          <div class="card-grid">
            ${block.items.map(item => `
              <article class="card program-card">
                <h3 class="card__title">${escapeHtml(item.label)}</h3>
                <p class="card__desc">${escapeHtml(item.desc || '')}</p>
                ${item.href ? `<a class="button button--ghost card__cta" href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>` : ''}
              </article>
            `).join('')}
          </div>
        ` : ''}
        ${block.cta ? `<div class="cta-wrap"><a class="button button--primary" href="${escapeHtml(block.cta.href)}">${escapeHtml(block.cta.label)}</a></div>` : ''}
      </div>
    </section>
  `;
}

function newsEvents(data, key) {
  const block = data[key];
  if (!block || !block.items) return '';
  const itemsHtml = block.items
    .map(
      (item) => `
        <article class="news-card">
          ${item.image ? `<div class="news-card__media"><img src="${escapeHtml(resolveImage(item.image))}" alt="${escapeHtml(item.imageAlt || item.title)}" loading="lazy"></div>` : ''}
          <time class="news-card__date">${escapeHtml(item.date)}</time>
          <h3 class="news-card__title">${escapeHtml(item.title)}</h3>
          <p class="news-card__desc">${escapeHtml(item.summary || '')}</p>
          <span class="news-card__category">${escapeHtml(item.category || '')}</span>
        </article>
      `
    )
    .join('');

  return `
    <section class="section section--news section--alt">
      <div class="container">
        ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
        <div class="news-grid">${itemsHtml}</div>
        ${block.cta ? `<div class="cta-wrap"><a class="button button--primary" href="${escapeHtml(block.cta.href)}">${escapeHtml(block.cta.label)}</a></div>` : ''}
      </div>
    </section>
  `;
}

function valeursGrid(data, key) {
  const block = data[key];
  if (!block || !block.items) return '';
  const itemsHtml = block.items
    .map(
      (item) => `
        <article class="card valeur-card">
          <h3 class="card__title">${escapeHtml(item.label)}</h3>
          <p class="card__desc">${escapeHtml(item.desc || item.text || '')}</p>
        </article>
      `
    )
    .join('');
  return `
    <section class="section section--values section--alt">
      <div class="container">
        ${block.title ? `<h2 class="section-title">${escapeHtml(block.title)}</h2>` : ''}
        <div class="card-grid">${itemsHtml}</div>
        ${block.note ? `<p class="note note--block">${escapeHtml(block.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function renderGeneric(site, navItems, data, globals) {
  const body = `
${hero(data)}
${intro(data)}
${splitSection(data, 'formationsIntro', 'formationsImage')}
${sectionsList(data)}
<section class="section-divider"></section>
${textList(data, 'reseau', true)}
${textList(data, 'histoire', false)}
${textList(data, 'missions', true)}
${valeurGrid(data, 'valeurs')}
${textList(data, 'unitee', true)}
${imageBlock(data, 'campusImage', false)}
<section class="section-divider"></section>
${twoColumn(data, 'coords', 'localisation', false)}
${contactForm(data, true)}
${faqList(data, false)}
${legalBlocks(data, true)}
${steps(data, false)}
${actionsList(data, true)}
${formationsCatalog(data.slug === 'formations' ? globals.formations : null, true)}
${newsFullList(data.slug === 'actualites' ? globals.actualites : null, false)}
  `;
  return layout(site, navItems, data, body);
}

/** ---------- Build ---------- */

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(rel, content) {
  const full = path.join(DIST_DIR, rel);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, content);
}

function copyAssets() {
  if (!fs.existsSync(ASSETS_DIR)) return;
  const walk = (dir, out) => {
    ensureDir(out);
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const src = path.join(dir, entry.name);
      const dest = path.join(out, entry.name);
      if (entry.isDirectory()) {
        walk(src, dest);
      } else {
        fs.copyFileSync(src, dest);
      }
    }
  };
  walk(ASSETS_DIR, path.join(DIST_DIR, 'assets'));
}

/** Copie les photos WhatsApp avec des noms simples (alias) vers dist/assets/images/. */
function copyAndRenameImages() {
  const imagesDir = path.join(ASSETS_DIR, 'images');
  const outDir = path.join(DIST_DIR, 'assets', 'images');
  ensureDir(outDir);
  for (const [originalName, aliasName] of Object.entries(IMAGE_ALIASES)) {
    const src = path.join(imagesDir, originalName);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(outDir, aliasName));
    }
  }
}

function copyStylesAndScripts() {
  if (fs.existsSync(STYLES_DIR)) {
    for (const file of fs.readdirSync(STYLES_DIR)) {
      const full = path.join(STYLES_DIR, file);
      if (fs.statSync(full).isFile()) {
        ensureDir(path.join(DIST_DIR, 'css'));
        fs.copyFileSync(full, path.join(DIST_DIR, 'css', file));
      }
    }
  }
  if (fs.existsSync(SCRIPTS_DIR)) {
    for (const file of fs.readdirSync(SCRIPTS_DIR)) {
      const full = path.join(SCRIPTS_DIR, file);
      if (fs.statSync(full).isFile()) {
        ensureDir(path.join(DIST_DIR, 'js'));
        fs.copyFileSync(full, path.join(DIST_DIR, 'js', file));
      }
    }
  }
}

function build() {
  ensureDir(DIST_DIR);

  const site = readJson('site.json');
  const navItems = readJson('nav.json');

  // Contenus globaux (catalogue + actualités), partagés par plusieurs pages.
  let globals = {};
  try { globals.formations = readJson('formations.json'); } catch (e) { globals.formations = null; }
  try { globals.actualites = readJson('actualites.json'); } catch (e) { globals.actualites = null; }

  // Pages désignées par slug.
  const pageSlugs = fs
    .readdirSync(path.join(CONTENT_DIR, 'pages'))
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));

  for (const slug of pageSlugs) {
    const data = readJson(`pages/${slug}.json`);
    let html;
    if (slug === 'home') {
      html = renderHome(site, navItems, data);
      writeFile('index.html', html);
    } else if (slug === '404') {
      html = renderGeneric(site, navItems, data, globals);
      writeFile('404.html', html);
    } else {
      html = renderGeneric(site, navItems, data, globals);
      writeFile(`${slug}/index.html`, html);
    }
  }

  copyStylesAndScripts();
  copyAssets();
  copyAndRenameImages();

  console.log(`Build terminé : ${pageSlugs.length} page(s) générée(s) dans dist/`);
}

try {
  build();
} catch (err) {
  console.error('Erreur de build :', err.message);
  console.error(err.stack);
  process.exit(1);
}
