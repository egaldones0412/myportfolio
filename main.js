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

const set = (on) => {
  if (on) {
    root.classList.add('dark');
    localStorage.setItem(key, '1');
  } else {
    root.classList.remove('dark');
    localStorage.removeItem(key);
  }
};

// init from system or storage
const prefers =
  localStorage.getItem(key) === '1' ||
  window.matchMedia('(prefers-color-scheme: dark)').matches;
set(prefers);

toggle?.addEventListener('click', () =>
  set(!root.classList.contains('dark'))
);
