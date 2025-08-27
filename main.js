// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const mbtn = document.getElementById('menuBtn');
const mmenu = document.getElementById('mobileMenu');
mbtn?.addEventListener('click', () => mmenu.classList.toggle('hidden'));

// Theme toggle
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const key = 'prefers-dark-edz';
const setTheme = (on) => {
  if (on) { root.classList.add('dark'); localStorage.setItem(key, '1'); }
  else { root.classList.remove('dark'); localStorage.removeItem(key); }
};
const prefers = localStorage.getItem(key) === '1' ||
  window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(prefers);
toggle?.addEventListener('click', () => setTheme(!root.classList.contains('dark')));

// Contact form handling
const form = document.getElementById('contactForm');
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

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form) return;

  successMsg.classList.add('hidden');
  errorMsg.classList.add('hidden');

  const name = form.elements['name'];
  const email = form.elements['email'];
  const message = form.elements['message'];
  const bot = form.elements['botField'];

  const validations = [
    { field: name, valid: name.value.trim().length > 0, errorEl: form.querySelector('[data-error-for="name"]') },
    { field: email, valid: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()), errorEl: form.querySelector('[data-error-for="email"]') },
    { field: message, valid: message.value.trim().length >= 20, errorEl: form.querySelector('[data-error-for="message"]') },
    { field: bot, valid: bot.value === '', errorEl: null }
  ];

  let allValid = true;
  validations.forEach(v => {
    if (!v.errorEl) { if (!v.valid) allValid = false; return; }
    if (!v.valid) { showError(v.field, v.errorEl); allValid = false; }
    else { clearError(v.field, v.errorEl); }
  });

  if (!allValid) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    // Simulate network request - replace with fetch to your backend/service
    await new Promise(r => setTimeout(r, 900));
    form.reset();
    successMsg.classList.remove('hidden');
  } catch (err) {
    errorMsg.classList.remove('hidden');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});
