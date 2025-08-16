// Utilities
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  const menuBtn = $('#menuBtn');
  const menu = $('#mobileMenu');
  const menuClose = $('#menuClose');

  const openMenu = () => {
    if (!menu) return;
    menu.hidden = false;
    menuBtn?.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    if (!menu) return;
    menu.hidden = true;
    menuBtn?.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  };

  menuBtn?.addEventListener('click', openMenu);
  menuClose?.addEventListener('click', closeMenu);
  menu?.addEventListener('click', (e) => {
    if ((e.target instanceof HTMLElement) && (e.target.dataset.close !== undefined || e.target === menu)) {
      closeMenu();
    }
  });
  $$('#mobileMenu [data-nav-close]').forEach(a => a.addEventListener('click', closeMenu));

  // Theme toggle
  const themeBtn = $('#themeToggle');
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch(e) {}
    themeBtn?.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  };
  const currentTheme = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  themeBtn?.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');
  themeBtn?.addEventListener('click', () => {
    const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(now);
  });

  // Welcome modal (first visit)
  const welcome = $('#welcome');
  if (welcome) {
    const shouldShow = (() => {
      try { return localStorage.getItem('welcomeDismissed') !== '1'; } catch(e) { return true; }
    })();
    const openModal = () => { welcome.hidden = false; document.documentElement.style.overflow = 'hidden'; };
    const closeModal = () => { welcome.hidden = true; document.documentElement.style.overflow = ''; };

    if (shouldShow) {
      // Slight delay to avoid being jarring
      setTimeout(openModal, 450);
    }

    welcome.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.dataset.close !== undefined || target.closest('[data-close]')) {
        if ($('#dontShow')?.checked) {
          try { localStorage.setItem('welcomeDismissed', '1'); } catch(e) {}
        }
        closeModal();
      }
    });
  }

  // Contact form (Formspree or standard POST)
  const form = $('#contactForm');
  const status = $('#formStatus');
  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending...';
      const data = new FormData(form);
      try {
        const resp = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        });
        if (resp.ok) {
          status.textContent = 'Thanks! Your message has been sent.';
          form.reset();
        } else {
          status.textContent = 'Something went wrong. Please email hello@elgaldones.works.';
        }
      } catch (err) {
        status.textContent = 'Network error. Please try again later.';
      }
    });
  }

  // Highlight active section in header
  const sections = ['services','process','work','testimonials','contact'].map(id => document.getElementById(id)).filter(Boolean);
  const links = $$('.nav-desktop a[href^="#"]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.nav-desktop a[href="#${id}"]`);
      if (link) {
        if (entry.isIntersecting) link.classList.add('active');
        else link.classList.remove('active');
      }
    });
  }, { rootMargin: '-50% 0px -45% 0px', threshold: 0.01 });
  sections.forEach(sec => io.observe(sec));

  // Add style for active link dynamically (keeps CSS lean)
  const style = document.createElement('style');
  style.textContent = `
    .nav-desktop a.active { color: #111; background: var(--accent); }
    html[data-theme="dark"] .nav-desktop a.active { color: #111; background: var(--accent); }
  `;
  document.head.appendChild(style);
});
