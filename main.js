// ==================== Mobile Menu Toggle ====================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

// ==================== Theme Toggle ====================
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const themeKey = "prefers-dark-edz";

function setTheme(isDark) {
  if (isDark) { root.classList.add("dark"); localStorage.setItem(themeKey, "1"); }
  else { root.classList.remove("dark"); localStorage.removeItem(themeKey); }
}
// Init theme
const prefersDark =
  localStorage.getItem(themeKey) === "1" ||
  window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(prefersDark);
// Toggle
themeToggle?.addEventListener("click", () => setTheme(!root.classList.contains("dark")));

// ==================== Testimonials Carousel (fade) ====================
const slides = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");
const dotsContainer = document.getElementById("testimonialDots");
let current = 0;
let timer;

// Build dots
if (dotsContainer && slides.length) {
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Go to testimonial ${i + 1}`);
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => {
      stopAuto();
      current = i;
      render();
      startAuto();
    });
  });
}
const dots = dotsContainer ? dotsContainer.querySelectorAll("button") : [];

// Render
function render() {
  slides.forEach((s, i) => {
    if (i === current) { s.classList.remove("hidden"); }
    else { s.classList.add("hidden"); }
  });
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === current);
  });
}

// Auto rotate
function startAuto() {
  timer = setInterval(() => {
    current = (current + 1) % slides.length;
    render();
  }, 6000);
}
function stopAuto() { clearInterval(timer); }

// Init
if (slides.length) { render(); startAuto(); }

// Controls
prevBtn?.addEventListener("click", () => {
  stopAuto();
  current = (current - 1 + slides.length) % slides.length;
  render();
  startAuto();
});
nextBtn?.addEventListener("click", () => {
  stopAuto();
  current = (current + 1) % slides.length;
  render();
  startAuto();
});

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    const t = document.querySelector(this.getAttribute("href"));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: "smooth" });
  });
});

// ==================== Footer Year ====================
document.getElementById("year").textContent = new Date().getFullYear();
