// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mbtn = document.getElementById('menuBtn');
const mmenu = document.getElementById('mobileMenu');
if (mbtn && mmenu) {
  mbtn.addEventListener('click', () => {
    mmenu.classList.toggle('hidden');
    const expanded = mbtn.getAttribute('aria-expanded') === 'true';
    mbtn.setAttribute('aria-expanded', (!expanded).toString());
  });
}

// Theme toggle
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const key = 'prefers-dark-edz';
function setTheme(on) {
  if (on) { root.classList.add('dark'); localStorage.setItem(key, '1'); }
  else { root.classList.remove('dark'); localStorage.removeItem(key); }
}
const prefers = localStorage.getItem(key) === '1' ||
  window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(prefers);
toggle?.addEventListener('click', () => setTheme(!root.classList.contains('dark')));

// Contact form (Formspree)
const form = document.getElementById('contactForm');
if (form) {
  const submitBtn = document.getElementById('contactSubmit');
  const successMsg = document.getElementById('formSuccess');
  const errorMsg = document.getElementById('formError');

  function showError(field, messageEl) {
    field.setAttribute('aria-invalid', 'true');
    messageEl.classList.remove('hidden');
  }
  function clearError(field, messageEl) {
    field.removeAttribute('aria-invalid');
    messageEl.classList.add('hidden');
  }

  form.addEventListener('submit', async (e) => {
    if (form.dataset.service !== 'formspree') return;
    e.preventDefault();

    successMsg.classList.add('hidden');
    errorMsg.classList.add('hidden');

    const name = form.elements['name'];
    const email = form.elements['email'];
    const message = form.elements['message'];
    const bot = form.elements['botField'];

    const tests = [
      { field: name, ok: name.value.trim().length > 0, el: form.querySelector('[data-error-for="name"]') },
      { field: email, ok: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()), el: form.querySelector('[data-error-for="email"]') },
      { field: message, ok: message.value.trim().length >= 20, el: form.querySelector('[data-error-for="message"]') },
      { field: bot, ok: bot.value === '', el: null }
    ];

    let valid = true;
    tests.forEach(t => {
      if (!t.el) { if (!t.ok) valid = false; return; }
      if (!t.ok) { showError(t.field, t.el); valid = false; }
      else { clearError(t.field, t.el); }
    });
    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(form);
      const action = form.getAttribute('action');
      const res = await fetch(action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (res.ok) {
        form.reset();
        successMsg.classList.remove('hidden');
      } else {
        errorMsg.classList.remove('hidden');
      }
    } catch (err) {
      console.error(err);
      errorMsg.classList.remove('hidden');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

// Dynamic aria-current on nav links
const navLinks = document.querySelectorAll('.nav-link');
const sectionIds = Array.from(navLinks)
  .map(a => a.getAttribute('href'))
  .filter(h => h && h.startsWith('#'))
  .map(h => h.substring(1));
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.setAttribute('aria-current', link.getAttribute('href') === '#' + id ? 'true' : 'false');
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: [0.25, 0.5] });

  sections.forEach(sec => obs.observe(sec));
} else {
  navLinks.forEach(l => l.setAttribute('aria-current', l.getAttribute('href') === '#hero' ? 'true' : 'false'));
}
