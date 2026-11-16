/**
 * UCAO-UUCo — JavaScript vanilla (progressive enhancement uniquement).
 *
 * Comportements :
 * 1. Menu mobile accessible (ouverture/fermeture, Échap, restitution du focus).
 * 2. Formulaire de contact : validation côté client, états réels, aucune
 *    simulation de succès (aucun backend n’est identifié — la limite est
 *    documentée et affichée honnêtement).
 * 3. Respect strict de prefers-reduced-motion (aucune animation).
 */

(function () {
  'use strict';

  // ---------- Menu mobile ----------
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  var navLinks = document.querySelectorAll('.nav-link');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fermer le menu au clic sur un lien.
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer le menu sur Échap et restituer le focus sur le bouton.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // ---------- Header : effet au scroll ----------
  var header = document.querySelector('.site-header');
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > 60) {
        header.classList.add('site-header--scrolled');
      } else {
        header.classList.remove('site-header--scrolled');
      }
      lastScroll = currentScroll;
    });
  }

  // ---------- Formulaire de contact ----------
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  var submitBtn = document.getElementById('form-submit');

  if (form && status && submitBtn) {
    var fields = form.querySelectorAll('input[required], textarea[required]');

    // Validation immédiate : effacer l’erreur à la saisie.
    fields.forEach(function (field) {
      field.addEventListener('input', function () {
        var error = document.getElementById(field.id + '-error');
        if (error) error.textContent = '';
        field.setAttribute('aria-invalid', 'false');
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var valid = true;
      fields.forEach(function (field) {
        var error = document.getElementById(field.id + '-error');
        if (!field.value.trim()) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
          if (error) error.textContent = 'Ce champ est requis.';
          field.focus();
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
          if (error) error.textContent = 'Adresse e-mail invalide.';
          field.focus();
        } else {
          field.setAttribute('aria-invalid', 'false');
          if (error) error.textContent = '';
        }
      });

      if (!valid) {
        status.textContent = 'Veuillez corriger les champs signalés.';
        status.setAttribute('aria-live', 'assertive');
        return;
      }

      // Soumission : aucun backend n’est configuré. On n’affiche PAS de succès
      // simulé. On informe honnêtement de la limite.
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi…';

      // Simuler un délai réseau pour montrer l’état pending, puis afficher la
      // limite réelle (aucun endpoint de réception n’est identifié).
      setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer le message';
        status.textContent =
          'Ce formulaire n’est pas encore connecté à un service de réception. ' +
          'L’administration doit configurer un backend (formulaire, e-mail ou API) ' +
          'avant que les messages puissent être envoyés. Aucune donnée n’est stockée ' +
          'dans ce navigateur.';
        status.setAttribute('aria-live', 'assertive');
        // Conserver les données saisies pour éviter la resaisie.
      }, 700);
    });
  }

  // ---------- Reveal au scroll (désactivé sous prefers-reduced-motion) ----------
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var revealEls = document.querySelectorAll('.card, .news-card, .step-card');

  function reveal() {
    if (reduced.matches) return;
    revealEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && !el.classList.contains('is-visible')) {
        el.classList.add('is-visible');
      }
    });
  }

  if (!reduced.matches && revealEls.length) {
    window.addEventListener('scroll', reveal);
    reveal();
  }
})();
