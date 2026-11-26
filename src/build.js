/**
 * UCAO-UUCo — Générateur de site statique (zéro dépendance externe).
 *
 * Lit les contenus centralisés dans src/content/ (pages décrites en « blocks »),
 * applique des composants HTML sémantiques et écrit les pages statiques dans dist/.
 *
 * Identité visuelle dérivée du logo officiel UCAO_LOGO.png :
 * - Bleu primaire #312783 (texte "UCAO" / "UCWA")
 * - Rouge secondaire #991915 (carte d'Afrique, croix, "FOI SCIENCE ACTION")
 * Composition éditoriale : héros photographique, bandes institutionnelles,
 * typographie serif pour les titres, listes éditoriales plutôt que grilles
 * de cartes identiques. Toutes les photos proviennent de l'UCAO-UUCo.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const ASSETS_DIR = path.join(ROOT, 'src', 'assets');
const STYLES_DIR = path.join(ROOT, 'src', 'styles');
const SCRIPTS_DIR = path.join(ROOT, 'src', 'scripts');
const DIST_DIR = path.join(ROOT, 'dist');

/** Lecture JSON avec gestion d'erreur explicite. */
function readJson(rel) {
  const full = path.join(CONTENT_DIR, rel);
  if (!fs.existsSync(full)) {
    throw new Error(`Contenu manquant : ${full}`);
  }
  return JSON.parse(fs.readFileSync(full, 'utf8'));
}

/** Échappement HTML pour tout contenu éditorial. */
function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Liens : attribue target/rel aux URL externes. */
function linkAttrs(href) {
  if (!href) return '';
  const external = /^https?:\/\//i.test(href);
  return external ? ' target="_blank" rel="noopener noreferrer"' : '';
}

function telHref(phone) {
  return 'tel:' + String(phone).replace(/\s/g, '');
}

/** Image : balise <picture> avec source WebP et repli JPEG du même nom. */
function picture(name, alt, options = {}) {
  if (!name) return '';
  const base = String(name).replace(/\.webp$/i, '').replace(/\.jpe?g$/i, '');
  const eager = options.eager ? 'eager' : 'lazy';
  const cls = options.cls ? ` class="${esc(options.cls)}"` : '';
  return (
    `<picture>` +
    `<source type="image/webp" srcset="/assets/images/${esc(base)}.webp">` +
    `<img${cls} src="/assets/images/${esc(base)}.jpg" alt="${esc(alt || '')}" ` +
    `loading="${eager}" decoding="async">` +
    `</picture>`
  );
}

function button(label, href, variant, external) {
  const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
  // Map old variant names to new ones
  const variantMap = {
    'primary': 'primary',
    'secondary': 'secondary',
    'ghost': 'ghost',
    'ghost-secondary': 'ghost-secondary',
    'inverse': 'inverse',
    'ghost-inverse': 'ghost-inverse',
    'outline': 'outline',
    'red': 'primary',      // legacy: maps to primary (red)
    'navy': 'secondary'    // legacy: maps to secondary (navy)
  };
  const mappedVariant = variantMap[variant] || variant;
  return `<a class="button button--${esc(mappedVariant)}" href="${esc(href)}"${attrs}>${esc(label)}</a>`;
}

/** ---------- En-tête de document ---------- */

function head(site, data) {
  const title = `${esc(data.title || site.siteName)} — ${esc(site.fullName)}`;
  const desc = esc(data.metaDescription || site.metaDescription);
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${desc}">
    <meta name="language" content="fr">
    <meta name="author" content="${esc(site.author)}">
    <meta name="theme-color" content="#312783">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="${esc(site.faviconSrc)}" type="image/png" sizes="48x48">
    <link rel="apple-touch-icon" href="${esc(site.roundIconSrc)}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="${esc(site.siteUrl || '')}${esc(site.ogImage)}">
    <meta property="og:locale" content="fr_FR">
  `;
}

/** ---------- Structure commune (header / footer) ---------- */

function topbar(site) {
  const phone = site.phones && site.phones.length ? site.phones[0] : '';
  const phonesHtml = (site.phones || [])
    .map((p) => `<a href="${telHref(p)}">${esc(p)}</a>`)
    .join('<span class="topbar__sep" aria-hidden="true">·</span>');
  return `
    <div class="topbar">
      <div class="topbar__inner">
        <div class="topbar__motto">Foi · Science · Action</div>
        <div class="topbar__contact">
          <span class="topbar__phones">${phonesHtml}</span>
          <span class="topbar__sep" aria-hidden="true">·</span>
          <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>
          <span class="topbar__sep" aria-hidden="true">·</span>
          <a href="${esc(site.facebook)}" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </div>
  `;
}

function navLink(item, currentSlug, top) {
  const active = item.href === currentSlug || (currentSlug === '' && item.href === '/');
  const cls = top ? 'nav-link' : 'nav-sublink';
  const activeCls = top && active ? ' nav-link--active' : '';
  const aria = active ? ' aria-current="page"' : '';
  const external = linkAttrs(item.href);
  const sub = top && item.children && item.children.length
    ? `<ul class="nav-submenu">${item.children.map((c) => navLink(c, currentSlug, false)).join('')}</ul>`
    : '';
  return `<li><a class="${cls}${activeCls}" href="${esc(item.href)}"${aria}${external}>${esc(item.label)}</a>${sub}</li>`;
}

function header(site, navItems, currentSlug) {
  const itemsHtml = navItems.map((i) => navLink(i, currentSlug, true)).join('');
  return `
    ${topbar(site)}
    <header class="site-header" id="top">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="${esc(site.fullName)} — retour à l'accueil">
          <img class="brand__logo" src="${esc(site.logoSrc)}" alt="${esc(site.logoAlt)}" width="84" height="72" loading="eager" decoding="async">
          <span class="brand__copy" aria-hidden="true">
            <span class="brand__name">UCAO</span>
            <span class="brand__descriptor">Unité Universitaire de Conakry</span>
          </span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-menu" aria-label="Ouvrir le menu">
          <span class="menu-toggle__bar" aria-hidden="true"></span>
          <span class="menu-toggle__bar" aria-hidden="true"></span>
          <span class="menu-toggle__bar" aria-hidden="true"></span>
        </button>
        <nav class="main-nav" id="main-menu" aria-label="Navigation principale">
          <ul class="nav-list">${itemsHtml}</ul>
          <a class="button button--primary nav-cta" href="/admissions/">Candidater</a>
        </nav>
      </div>
    </header>
  `;
}

function footer(site, navData) {
  const phonesHtml = (site.phones || [])
    .map((p) => `<li><a class="footer__link" href="${telHref(p)}">${esc(p)}</a></li>`)
    .join('');
  const explore = (navData.footerExplore || [])
    .map((i) => `<li><a class="footer__link" href="${esc(i.href)}">${esc(i.label)}</a></li>`)
    .join('');
  const info = (navData.footerInfo || [])
    .map((i) => `<li><a class="footer__link" href="${esc(i.href)}">${esc(i.label)}</a></li>`)
    .join('');
  return `
    <footer class="site-footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <div class="footer__brand-row">
            <img class="footer__logo" src="${esc(site.roundIconSrc)}" alt="" width="64" height="64" loading="lazy" decoding="async">
            <div>
              <p class="footer__name">${esc(site.siteName)}</p>
              <p class="footer__fullname">${esc(site.fullName)}</p>
            </div>
          </div>
          <p class="footer__tagline">${esc(site.tagline)}</p>
          <p class="footer__address">${esc(site.address)}</p>
          <p class="footer__social">
            <a class="footer__link" href="${esc(site.facebook)}" target="_blank" rel="noopener noreferrer">${esc(site.facebookLabel)}</a>
          </p>
        </div>
        <nav class="footer__col" aria-label="Explorer le site">
          <h2 class="footer__heading">Explorer</h2>
          <ul class="footer__links">${explore}</ul>
        </nav>
        <nav class="footer__col" aria-label="Informations pratiques et légales">
          <h2 class="footer__heading">Informations</h2>
          <ul class="footer__links">${info}</ul>
        </nav>
        <div class="footer__col">
          <h2 class="footer__heading">Contact</h2>
          <ul class="footer__links footer__contact">${phonesHtml}
            <li><a class="footer__link" href="mailto:${esc(site.email)}">${esc(site.email)}</a></li>
          </ul>
          <p><a class="button button--inverse footer__map" href="${esc(site.mapUrl)}" target="_blank" rel="noopener noreferrer">${esc(site.mapLabel)}</a></p>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">${esc(site.copyright)}</p>
        <p class="footer__note">${esc(site.emailNote)}</p>
      </div>
    </footer>
  `;
}

/** ---------- Blocs éditoriaux ---------- */

function blockHero(b) {
  if (b.variant === 'band') {
    return `
      <section class="hero hero--band" aria-labelledby="hero-title">
        <div class="container">
          <div class="hero__content">
            ${b.kicker ? `<p class="kicker kicker--light">${esc(b.kicker)}</p>` : ''}
            <h1 class="hero__title" id="hero-title">${esc(b.title)}</h1>
            ${b.lead ? `<p class="hero__lead">${esc(b.lead)}</p>` : ''}
            ${b.ctaPrimary ? `<div class="hero__ctas">${button(b.ctaPrimary.label, b.ctaPrimary.href, 'inverse', b.ctaPrimary.external)}</div>` : ''}
          </div>
        </div>
      </section>
    `;
  }
  return `
    <section class="hero hero--split" aria-labelledby="hero-title">
      <div class="container hero__grid">
        <div class="hero__content">
          ${b.kicker ? `<p class="kicker">${esc(b.kicker)}</p>` : ''}
          <h1 class="hero__title" id="hero-title">${esc(b.title)}</h1>
          ${b.lead ? `<p class="hero__lead">${esc(b.lead)}</p>` : ''}
          ${(b.ctaPrimary || b.ctaSecondary) ? `
            <div class="hero__ctas">
              ${b.ctaPrimary ? button(b.ctaPrimary.label, b.ctaPrimary.href, 'primary', b.ctaPrimary.external) : ''}
              ${b.ctaSecondary ? button(b.ctaSecondary.label, b.ctaSecondary.href, 'ghost', b.ctaSecondary.external) : ''}
            </div>
          ` : ''}
        </div>
        ${b.image ? `
          <figure class="hero__media">
            ${picture(b.image, b.imageAlt, { eager: true, cls: 'hero__img' })}
            ${b.imageCredit ? `<figcaption class="credit">${esc(b.imageCredit)}</figcaption>` : ''}
          </figure>
        ` : ''}
      </div>
    </section>
  `;
}

function blockLede(b) {
  return `
    <section class="section section--tight">
      <div class="container">
        <div class="lede">
          ${b.kicker ? `<p class="kicker">${esc(b.kicker)}</p>` : ''}
          ${b.title ? `<h2 class="section-title">${esc(b.title)}</h2>` : ''}
          ${b.lead ? `<p class="lede__lead">${esc(b.lead)}</p>` : ''}
          ${b.text ? `<p class="lede__text">${esc(b.text)}</p>` : ''}
          ${b.note ? `<p class="note">${esc(b.note)}</p>` : ''}
        </div>
      </div>
    </section>
  `;
}

function blockJumpnav(b) {
  if (!b.links || !b.links.length) return '';
  const links = b.links
    .map((l) => `<a class="jumpnav__link" href="${esc(l.href)}">${esc(l.label)}</a>`)
    .join('');
  return `
    <nav class="jumpnav" aria-label="Dans cette page">
      <div class="container">
        <span class="jumpnav__label">Dans cette page :</span>
        <div class="jumpnav__links">${links}</div>
      </div>
    </nav>
  `;
}

function blockStats(b) {
  const items = (b.items || [])
    .map(
      (i) => `
        <div class="stat">
          <span class="stat__number">${esc(i.number)}</span>
          <span class="stat__label">${esc(i.label)}</span>
        </div>
      `
    )
    .join('');
  return `
    <section class="stats-band" aria-label="Repères de l'établissement">
      <div class="container">
        ${b.title ? `<h2 class="stats-band__title">${esc(b.title)}</h2>` : ''}
        <div class="stats-band__grid">${items}</div>
        ${b.note ? `<p class="note note--light">${esc(b.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function programRow(p) {
  return `
    <li class="program-row">
      <a href="${esc(p.href)}"${linkAttrs(p.href)}>
        <span class="program-row__name">${esc(p.label)}</span>
        ${p.meta ? `<span class="program-row__meta">${esc(p.meta)}</span>` : ''}
      </a>
    </li>
  `;
}

function blockPrograms(b) {
  const col = (title, note, items) => `
    <div class="programs__col">
      <div class="programs__head">
        <h3 class="programs__level">${esc(title)}</h3>
        ${note ? `<span class="programs__note">${esc(note)}</span>` : ''}
      </div>
      <ul class="program-rows">${(items || []).map(programRow).join('')}</ul>
    </div>
  `;
  return `
    <section class="section">
      <div class="container">
        ${b.title ? `<h2 class="section-title">${esc(b.title)}</h2>` : ''}
        ${b.lead ? `<p class="lede__text">${esc(b.lead)}</p>` : ''}
        <div class="programs">
          ${col(b.licenceTitle, b.licenceNote, b.licenceItems)}
          ${col(b.masterTitle, b.masterNote, b.masterItems)}
        </div>
        ${b.cta ? `<p class="cta-line">${button(b.cta.label, b.cta.href, 'primary')}</p>` : ''}
      </div>
    </section>
  `;
}

function blockCatalogue(b, globals) {
  if (!b.source || !globals[b.source] || !globals[b.source].levels) {
    throw new Error(`Source de catalogue invalide « ${b.source && b.source} »`);
  }
  const data = globals[b.source];
  const levels = data.levels
    .map((level) => {
      const groups = (level.groups || [])
        .map((group) => {
          const rows = (group.programs || [])
            .map((p) => {
              const search = [p.label, group.title, level.label].join(' ').toLowerCase();
              return `
                <li class="program-item" data-search="${esc(search)}">
                  <span class="program-item__name">${esc(p.label)}</span>
                  ${p.duration ? `<span class="program-item__meta">${esc(p.duration)}</span>` : ''}
                </li>
              `;
            })
            .join('');
          return `
            <div class="catalogue__group">
              <h3 class="catalogue__group-title">${esc(group.title)}</h3>
              <ul class="program-list">${rows}</ul>
            </div>
          `;
        })
        .join('');
      return `
        <div class="catalogue__level" id="${esc(level.id)}" data-level="${esc(level.id)}">
          <div class="catalogue__level-head">
            <h2 class="catalogue__level-title">${esc(level.label)}</h2>
            <p class="catalogue__level-desc">${esc(level.description)}</p>
          </div>
          ${groups}
        </div>
      `;
    })
    .join('');
  return `
    <section class="section section--tint" id="catalogue">
      <div class="container">
        <div class="formation-search">
          <label class="sr-only" for="formation-search">${esc(data.searchPlaceholder || 'Rechercher')}</label>
          <input type="search" id="formation-search" placeholder="${esc(data.searchPlaceholder || '')}"
                 aria-label="${esc(data.searchPlaceholder || '')}" aria-describedby="formation-search-status">
          <p id="formation-search-status" class="formation-search__status" aria-live="polite"></p>
        </div>
        ${levels}
        <p class="cta-line">${button(data.ctaLabel || 'Nous contacter', data.ctaHref || '/contact/', 'primary')}</p>
        ${data.note ? `<p class="note note--block">${esc(data.note)}</p>` : ''}
        ${data.sourceUrl ? `<p class="note"><a href="${esc(data.sourceUrl)}" target="_blank" rel="noopener noreferrer">Consulter le catalogue publié par l'UCAO-UUCo</a></p>` : ''}
      </div>
    </section>
  `;
}

function blockCta(b) {
  const variantMap = {
    primary: 'primary',
    secondary: 'secondary',
    red: 'primary',
    navy: 'secondary'
  };
  const variant = variantMap[b.variant] || 'primary';
  return `
    <section class="cta-band cta-band--${esc(variant)}">
      <div class="container cta-band__inner">
        <div class="cta-band__text">
          <h2 class="cta-band__title">${esc(b.title)}</h2>
          ${b.text ? `<p class="cta-band__desc">${esc(b.text)}</p>` : ''}
        </div>
        <div class="cta-band__actions">
          ${b.ctaPrimary ? button(b.ctaPrimary.label, b.ctaPrimary.href, 'inverse', b.ctaPrimary.external) : ''}
          ${b.ctaSecondary ? `<a class="button button--ghost-inverse" href="${esc(b.ctaSecondary.href)}"${linkAttrs(b.ctaSecondary.href)}>${esc(b.ctaSecondary.label)}</a>` : ''}
        </div>
      </div>
    </section>
  `;
}

function formatNewsDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate) || Number.isNaN(date.getTime())) {
    throw new Error(`Date d'actualité invalide : ${isoDate}`);
  }
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(date);
}

function newsItem(item) {
  return `
    <article class="news-entry">
      <div class="news-entry__meta">
        <time class="news-entry__date" datetime="${esc(item.date)}">${esc(formatNewsDate(item.date))}</time>
        ${item.category ? `<span class="news-entry__category">${esc(item.category)}</span>` : ''}
      </div>
      <div class="news-entry__body">
        ${item.sourceUrl
          ? `<h3 class="news-entry__title"><a href="${esc(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(item.title)}</a></h3>`
          : `<h3 class="news-entry__title">${esc(item.title)}</h3>`}
        ${item.summary ? `<p class="news-entry__summary">${esc(item.summary)}</p>` : ''}
        ${item.sourceUrl ? `<p class="news-entry__source"><a href="${esc(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">Lire la publication originale</a></p>` : ''}
      </div>
    </article>
  `;
}

function blockNews(b, globals) {
  const source = b.source ? globals[b.source] : null;
  if (b.source && !source) {
    throw new Error(`Source de bloc inconnue « ${b.source} » dans la page`);
  }

  let items = source ? (source.items || []) : (b.items || []);
  const limit = b.limit || items.length;
  items = items.slice(0, limit);

  const emptyState = b.emptyState || (source && source.emptyState) || '';
  const statusMessage = items.length
    ? (emptyState
      ? `<p class="note note--block" role="status" aria-live="polite">${esc(emptyState)}</p>`
      : '')
    : `<p class="note note--block" role="status" aria-live="polite">${esc(emptyState || 'Aucune publication disponible pour le moment.')}</p>`;

  return `
    <section class="section section--tint">
      <div class="container">
        ${b.title ? `<h2 class="section-title">${esc(b.title)}</h2>` : ''}
        ${b.note ? `<p class="lede__text">${esc(b.note)}</p>` : ''}
        ${items.length ? `<div class="news-list">${items.map(newsItem).join('')}</div>` : ''}
        ${statusMessage}
        ${b.cta ? `<p class="cta-line">${button(b.cta.label, b.cta.href, 'primary')}</p>` : ''}
      </div>
    </section>
  `;
}
function blockEditorial(b) {
  const media = b.image
    ? `<figure class="editorial__media">${picture(b.image, b.imageAlt, { cls: 'editorial__img' })}</figure>`
    : '';
  const text = `
    <div class="editorial__text">
      ${b.kicker ? `<p class="kicker">${esc(b.kicker)}</p>` : ''}
      <h2 class="section-title">${esc(b.title)}</h2>
      ${b.text ? `<p class="editorial__para">${esc(b.text)}</p>` : ''}
      ${b.note ? `<p class="note">${esc(b.note)}</p>` : ''}
      ${b.linkHref ? `<p class="editorial__link">${button(b.linkLabel || 'En savoir plus', b.linkHref, 'ghost', /^https?:/i.test(b.linkHref))}</p>` : ''}
    </div>
  `;
  const inner = b.reverse ? media + text : text + media;
  return `
    <section class="section"${b.id ? ` id="${esc(b.id)}"` : ''}>
      <div class="container">
        <div class="editorial${b.reverse ? ' editorial--reverse' : ''}">
          ${inner}
        </div>
      </div>
    </section>
  `;
}

function blockValues(b) {
  const items = (b.items || [])
    .map(
      (i) => `
        <div class="value">
          <h3 class="value__label">${esc(i.label)}</h3>
          <p class="value__text">${esc(i.text)}</p>
        </div>
      `
    )
    .join('');
  return `
    <section class="section"${b.id ? ` id="${esc(b.id)}"` : ''}>
      <div class="container">
        ${b.title ? `<h2 class="section-title">${esc(b.title)}</h2>` : ''}
        ${b.lead ? `<p class="lede__text">${esc(b.lead)}</p>` : ''}
        <div class="values-grid">${items}</div>
        ${b.note ? `<p class="note note--block">${esc(b.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function blockTextlist(b) {
  const items = (b.items || [])
    .map((i) => `<li>${esc(i)}</li>`)
    .join('');
  return `
    <section class="section"${b.id ? ` id="${esc(b.id)}"` : ''}>
      <div class="container">
        <div class="textlist">
          ${b.title ? `<h2 class="section-title">${esc(b.title)}</h2>` : ''}
          ${b.lead ? `<p class="lede__text">${esc(b.lead)}</p>` : ''}
          <ul class="dotted-list">${items}</ul>
          ${b.note ? `<p class="note note--block">${esc(b.note)}</p>` : ''}
        </div>
      </div>
    </section>
  `;
}

function blockSteps(b) {
  const items = (b.items || [])
    .map(
      (s, i) => `
        <li class="step">
          <span class="step__num" aria-hidden="true">${i + 1}</span>
          <div class="step__content">
            <h3 class="step__title">${esc(s.title)}</h3>
            <p class="step__text">${esc(s.text)}</p>
          </div>
        </li>
      `
    )
    .join('');
  return `
    <section class="section section--tint"${b.id ? ` id="${esc(b.id)}"` : ''}>
      <div class="container">
        ${b.title ? `<h2 class="section-title">${esc(b.title)}</h2>` : ''}
        <ol class="steps">${items}</ol>
      </div>
    </section>
  `;
}

function blockDocuments(b) {
  const groups = (b.groups || [])
    .map(
      (g) => `
        <div class="doc-group">
          <h3 class="doc-group__title">${esc(g.title)}</h3>
          <ul class="check-list">${(g.items || []).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        </div>
      `
    )
    .join('');
  return `
    <section class="section"${b.id ? ` id="${esc(b.id)}"` : ''}>
      <div class="container">
        ${b.title ? `<h2 class="section-title">${esc(b.title)}</h2>` : ''}
        <div class="doc-groups">${groups}</div>
        ${b.note ? `<p class="note note--block">${esc(b.note)}</p>` : ''}
        ${b.sourceUrl ? `<p class="cta-line"><a class="button button--ghost" href="${esc(b.sourceUrl)}" target="_blank" rel="noopener noreferrer">Voir la procédure publiée par l'UCAO-UUCo</a></p>` : ''}
      </div>
    </section>
  `;
}

function blockNotice(b) {
  const email = b.email
    ? `<p class="notice__row"><strong>E-mail :</strong> <a href="mailto:${esc(b.email)}">${esc(b.email)}</a></p>`
    : '';
  const phones = (b.phones && b.phones.length)
    ? `<p class="notice__row"><strong>Téléphone :</strong> ${b.phones.map((p) => `<a href="${telHref(p)}">${esc(p)}</a>`).join(' · ')}</p>`
    : '';
  return `
    <section class="section"${b.id ? ` id="${esc(b.id)}"` : ''}>
      <div class="container">
        <div class="notice">
          <h2 class="notice__title">${esc(b.title)}</h2>
          ${b.text ? `<p class="notice__text">${esc(b.text)}</p>` : ''}
          ${email}
          ${phones}
          ${b.note ? `<p class="note">${esc(b.note)}</p>` : ''}
        </div>
      </div>
    </section>
  `;
}

function blockContact(b, globals, site) {
  const phones = (site.phones || [])
    .map((p) => `<li><a href="${telHref(p)}">${esc(p)}</a></li>`)
    .join('');
  return `
    <section class="section" id="contact">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-card">
            <h2 class="section-title">Coordonnées</h2>
            <p class="contact-card__row"><strong>Adresse :</strong> ${esc(site.address)}</p>
            <ul class="contact-card__phones">${phones}</ul>
            <p class="contact-card__row"><strong>E-mail :</strong> <a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
            <p class="contact-card__row">
              <strong>Itinéraire :</strong>
              <a href="${esc(site.mapUrl)}" target="_blank" rel="noopener noreferrer">${esc(site.mapLabel)}</a>
            </p>
            <p class="contact-card__row">
              <strong>Facebook :</strong>
              <a href="${esc(site.facebook)}" target="_blank" rel="noopener noreferrer">${esc(site.facebookLabel)}</a>
            </p>
            <p class="note">${esc(site.emailNote)}</p>
          </div>
          <div class="contact-card contact-card--form">
            <h2 class="section-title">Formulaire de contact</h2>
            <form id="contact-form" action="#" method="post" novalidate>
              <div class="form-field">
                <label for="form-nom">Nom et prénom <span class="required" aria-hidden="true">*</span></label>
                <input type="text" id="form-nom" name="nom" placeholder="Votre nom et prénom" required>
                <p class="field-error" id="form-nom-error" aria-live="polite"></p>
              </div>
              <div class="form-field">
                <label for="form-email">Adresse e-mail <span class="required" aria-hidden="true">*</span></label>
                <input type="email" id="form-email" name="email" placeholder="vous@exemple.com" required>
                <p class="field-error" id="form-email-error" aria-live="polite"></p>
              </div>
              <div class="form-field">
                <label for="form-sujet">Objet</label>
                <input type="text" id="form-sujet" name="sujet" placeholder="Objet de votre demande">
                <p class="field-error" id="form-sujet-error" aria-live="polite"></p>
              </div>
              <div class="form-field">
                <label for="form-message">Message <span class="required" aria-hidden="true">*</span></label>
                <textarea id="form-message" name="message" rows="6" placeholder="Votre message" required></textarea>
                <p class="field-error" id="form-message-error" aria-live="polite"></p>
              </div>
              <button class="button button--primary" type="submit" id="form-submit">Vérifier le message</button>
            </form>
            <div id="form-status" role="status" aria-live="polite" class="form-status"></div>
            <p class="note note--block">Ce formulaire n'est pas connecté à un service de réception : il ne transmet pas votre message. Pour joindre l'administration, utilisez les coordonnées ci-dessus. N'y saisissez pas de données personnelles sensibles.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function blockFaq(b) {
  const items = (b.items || [])
    .map(
      (i) => `
        <details class="faq-item">
          <summary class="faq-item__q">${esc(i.q)}</summary>
          <div class="faq-item__a">${esc(i.a)}</div>
        </details>
      `
    )
    .join('');
  return `
    <section class="section section--tight">
      <div class="container">
        <div class="faq-list">${items}</div>
        ${b.note ? `<p class="note note--block">${esc(b.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function blockGallery(b) {
  const figures = (b.images || [])
    .map(
      (img) => `
        <figure class="gallery__item">
          ${picture(img.src, img.alt, { cls: 'gallery__img' })}
        </figure>
      `
    )
    .join('');
  return `
    <section class="section section--tint">
      <div class="container">
        ${b.title ? `<h2 class="section-title">${esc(b.title)}</h2>` : ''}
        ${b.lead ? `<p class="lede__text">${esc(b.lead)}</p>` : ''}
        <div class="gallery">${figures}</div>
      </div>
    </section>
  `;
}

function blockLegal(b) {
  const blocks = (b.blocks || [])
    .map(
      (bl) => `
        <div class="legal-block">
          <h2 class="legal-block__title">${esc(bl.title)}</h2>
          <p class="legal-block__text">${esc(bl.content)}</p>
          ${bl.url ? `<p class="legal-block__link"><a href="${esc(bl.url)}" target="_blank" rel="noopener noreferrer">Consulter la source</a></p>` : ''}
        </div>
      `
    )
    .join('');
  return `
    <section class="section">
      <div class="container">
        <div class="legal-list">${blocks}</div>
        ${b.note ? `<p class="note note--block">${esc(b.note)}</p>` : ''}
      </div>
    </section>
  `;
}

function blockActions(b) {
  const items = (b.items || [])
    .map((i) => button(i.label, i.href, 'primary'))
    .join('');
  return `
    <section class="section section--tight">
      <div class="container">
        <div class="actions">${items}</div>
      </div>
    </section>
  `;
}

const RENDERERS = {
  hero: blockHero,
  lede: blockLede,
  jumpnav: blockJumpnav,
  stats: blockStats,
  programs: blockPrograms,
  catalogue: blockCatalogue,
  cta: blockCta,
  news: blockNews,
  editorial: blockEditorial,
  values: blockValues,
  textlist: blockTextlist,
  steps: blockSteps,
  documents: blockDocuments,
  notice: blockNotice,
  contact: blockContact,
  faq: blockFaq,
  gallery: blockGallery,
  legal: blockLegal,
  actions: blockActions,
};

/** ---------- Assemblage ---------- */

function layout(site, navData, data, body) {
  const currentSlug = data.slug === 'home' ? '' : `/${data.slug}/`;
  return `<!DOCTYPE html>
<html lang="${esc(site.lang)}">
<head>
${head(site, data)}
</head>
<body>
<a class="skip-link" href="#main">Aller au contenu principal</a>
${header(site, navData.main, currentSlug)}
<main id="main" class="page-main">
${body}
</main>
${footer(site, navData)}
<script src="/js/main.js"></script>
</body>
</html>`;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyDir(srcDir, destDir, skipTest) {
  if (!fs.existsSync(srcDir)) return;
  ensureDir(destDir);
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (skipTest && skipTest(entry.name, entry.isDirectory())) continue;
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(src, dest, skipTest);
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

function build() {
  if (fs.existsSync(DIST_DIR)) fs.rmSync(DIST_DIR, { recursive: true, force: true });
  ensureDir(DIST_DIR);

  const site = readJson('site.json');
  const navData = readJson('nav.json');
  const globals = {
    formations: readJson('formations.json'),
    actualites: readJson('actualites.json'),
  };

  const pageSlugs = fs
    .readdirSync(path.join(CONTENT_DIR, 'pages'))
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));

  let count = 0;
  for (const slug of pageSlugs) {
    const data = readJson(`pages/${slug}.json`);
    const blocks = data.blocks || [];
    const body = blocks
      .map((b) => {
        const renderer = RENDERERS[b.type];
        if (!renderer) throw new Error(`Type de bloc inconnu « ${b.type} » dans la page « ${slug} »`);
        return renderer(b, globals, site);
      })
      .join('\n');
    const html = layout(site, navData, data, body);
    if (slug === 'home') {
      fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html);
    } else if (slug === '404') {
      fs.writeFileSync(path.join(DIST_DIR, '404.html'), html);
    } else {
      ensureDir(path.join(DIST_DIR, slug));
      fs.writeFileSync(path.join(DIST_DIR, slug, 'index.html'), html);
    }
    count += 1;
  }

  copyDir(ASSETS_DIR, path.join(DIST_DIR, 'assets'), (name, isDir) => name.startsWith('_'));
  copyDir(STYLES_DIR, path.join(DIST_DIR, 'css'));
  copyDir(SCRIPTS_DIR, path.join(DIST_DIR, 'js'));

  fs.writeFileSync(
    path.join(DIST_DIR, 'robots.txt'),
    'User-agent: *\nAllow: /\n',
  );

  console.log(`Build terminé : ${count} page(s) générée(s) dans dist/`);
}

try {
  build();
} catch (err) {
  console.error('Erreur de build :', err.message);
  console.error(err.stack);
  process.exit(1);
}
