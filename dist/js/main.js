/**
 * UCAO-UUCo — Améliorations progressives.
 * Navigation mobile accessible, retour honnête du formulaire (aucune
 * simulation d'envoi), recherche dans le catalogue, ancres de niveau et
 * révélations au scroll respectueuses de prefers-reduced-motion.
 * Le site reste lisible et utilisable sans JavaScript.
 */
(function () {
  'use strict';

  var body = document.body;
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  var header = document.querySelector('.site-header');
  var mobileQuery = window.matchMedia('(max-width: 960px)');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Navigation mobile (tiroir + backdrop + piège de focus) ---------- */
  if (toggle && nav) {
    var backdrop = document.createElement('button');
    backdrop.type = 'button';
    backdrop.className = 'mobile-nav-backdrop';
    backdrop.setAttribute('aria-label', 'Fermer le menu');
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.tabIndex = -1;
    backdrop.hidden = true;
    body.appendChild(backdrop);

    function setMenuOpen(open, restoreFocus) {
      var mobile = mobileQuery.matches;
      var shouldOpen = Boolean(open && mobile);

      nav.classList.toggle('main-nav--open', shouldOpen);
      body.classList.toggle('menu-open', shouldOpen);
      toggle.setAttribute('aria-expanded', String(shouldOpen));
      toggle.setAttribute('aria-label', shouldOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      backdrop.hidden = !shouldOpen;

      if ('inert' in nav) {
        nav.inert = mobile && !shouldOpen;
      } else if (mobile) {
        nav.setAttribute('aria-hidden', String(!shouldOpen));
      } else {
        nav.removeAttribute('aria-hidden');
      }

      if (!shouldOpen && restoreFocus) {
        toggle.focus();
      }
    }

    toggle.addEventListener('click', function () {
      setMenuOpen(!nav.classList.contains('main-nav--open'), false);
    });

    backdrop.addEventListener('click', function () {
      setMenuOpen(false, true);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuOpen(false, false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (!nav.classList.contains('main-nav--open')) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false, true);
        return;
      }

      if (event.key === 'Tab') {
        var focusable = Array.prototype.slice.call(
          nav.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
        ).filter(function (element) {
          return element.offsetWidth || element.offsetHeight || element.getClientRects().length;
        });

        if (!focusable.length) {
          event.preventDefault();
          toggle.focus();
          return;
        }

        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (event.shiftKey && (document.activeElement === first || document.activeElement === toggle)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          toggle.focus();
        }
      }
    });

    function syncNavigationMode() {
      setMenuOpen(false, false);
    }

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', syncNavigationMode);
    } else if (typeof mobileQuery.addListener === 'function') {
      mobileQuery.addListener(syncNavigationMode);
    }

    syncNavigationMode();
  }

  /* ---------- Élévation du header au scroll ---------- */
  if (header) {
    function updateHeader() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      header.classList.toggle('site-header--scrolled', scrollPosition > 24);
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ---------- Formulaire de contact : aucune simulation d'envoi ---------- */
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  var submitBtn = document.getElementById('form-submit');

  if (form && status && submitBtn) {
    var fields = form.querySelectorAll('input[required], textarea[required]');

    fields.forEach(function (field) {
      field.addEventListener('input', function () {
        var error = document.getElementById(field.id + '-error');
        if (error) error.textContent = '';
        field.setAttribute('aria-invalid', 'false');
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var firstInvalid = null;

      fields.forEach(function (field) {
        var error = document.getElementById(field.id + '-error');
        var message = '';

        if (!field.value.trim()) {
          message = 'Ce champ est requis.';
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          message = 'Adresse e-mail invalide.';
        }

        field.setAttribute('aria-invalid', String(Boolean(message)));
        if (error) error.textContent = message;
        if (message && !firstInvalid) firstInvalid = field;
      });

      if (firstInvalid) {
        status.textContent = 'Veuillez corriger les champs signalés.';
        status.setAttribute('aria-live', 'assertive');
        firstInvalid.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Vérification…';

      window.setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Vérifier le message';
        status.textContent =
          'Vérification terminée : ce formulaire n’est pas connecté à un service de réception, ' +
          'il ne transmet pas votre message. Pour joindre l’administration, utilisez les ' +
          'coordonnées affichées à côté du formulaire. Aucune donnée n’est enregistrée.';
        status.setAttribute('aria-live', 'assertive');
      }, 450);
    });
  }

  /* ---------- Recherche dans le catalogue et filtre par niveau ---------- */
  function normaliseSearch(value) {
    return String(value || '').toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  var catalogueSearch = document.getElementById('formation-search');
  if (catalogueSearch) {
    var catalogueLevels = Array.prototype.slice.call(document.querySelectorAll('.catalogue__level'));
    var catalogueStatus = document.getElementById('formation-search-status');
    var requestedLevel = new URLSearchParams(window.location.search).get('niveau');
    if (requestedLevel !== 'licence' && requestedLevel !== 'master') requestedLevel = '';

    function filterCatalogue() {
      var query = normaliseSearch(catalogueSearch.value.trim());
      var visible = 0;
      catalogueLevels.forEach(function (section) {
        var levelAllowed = !requestedLevel || section.getAttribute('data-level') === requestedLevel;
        var sectionVisible = 0;
        section.querySelectorAll('.program-item').forEach(function (item) {
          var match = levelAllowed && (!query || normaliseSearch(item.getAttribute('data-search')).indexOf(query) !== -1);
          item.hidden = !match;
          if (match) { sectionVisible += 1; visible += 1; }
        });
        section.hidden = !levelAllowed || sectionVisible === 0;
        var groupTitles = section.querySelectorAll('.catalogue__group');
        groupTitles.forEach(function (group) {
          var hasVisible = Array.prototype.some.call(group.querySelectorAll('.program-item'), function (i) { return !i.hidden; });
          group.hidden = !hasVisible;
        });
      });
      if (catalogueStatus) {
        catalogueStatus.textContent = visible
          ? visible + ' formation(s) affichée(s).'
          : 'Aucune formation ne correspond à ces critères.';
      }
    }

    catalogueSearch.addEventListener('input', filterCatalogue);
    filterCatalogue();

    if (requestedLevel) {
      var target = document.getElementById(requestedLevel);
      if (target) {
        window.setTimeout(function () {
          target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
        }, 60);
      }
    }
  }

  /* ---------- Révélation au scroll : une seule fois par élément ---------- */
  var revealElements = document.querySelectorAll(
    '.news-entry, .value, .step, .doc-group, .notice, .editorial__media, ' +
    '.editorial__text, .stat, .program-item, .gallery__item, .contact-card, .faq-item'
  );

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    return;
  }

  if (revealElements.length) {
    document.documentElement.classList.add('motion-ready');

    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.06
    });

    revealElements.forEach(function (element) {
      element.classList.add('reveal-item');
      observer.observe(element);
    });
  }
})();
