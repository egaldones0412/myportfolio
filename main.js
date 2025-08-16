// ==================== Mobile Menu Toggle ====================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ==================== Theme Toggle ====================
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const themeKey = "prefers-dark-edz";

function setTheme(isDark) {
  if (isDark) {
    root.classList.add("dark");
    localStorage.setItem(themeKey, "1");
  } else {
    root.classList.remove("dark");
    localStorage.removeItem(themeKey);
  }
}

// Init theme
const prefersDark =
  localStorage.getItem(themeKey) === "1" ||
  window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(prefersDark);

// Toggle on button click
themeToggle?.addEventListener("click", () =>
  setTheme(!root.classList.contains("dark"))
);

// ==================== Testimonials Carousel ====================
const testimonials = document.querySelectorAll(".testimonial-slide");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");
const dotsContainer = document.getElementById("testimonialDots");
let currentIndex = 0;
let autoRotate;

// Create dots dynamically
if (dotsContainer) {
  testimonials.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.setAttribute("data-index", i);
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      stopAutoRotate();
      currentIndex = i;
      showTestimonial(currentIndex);
      startAutoRotate();
    });
  });
}

const dots = dotsContainer ? dotsContainer.querySelectorAll("button") : [];

// Show testimonial by index
function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove("active");
    if (i === index) {
      t.classList.add("active");
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) {
      dot.classList.add("active");
    }
  });
}

// Auto-rotate
function startAutoRotate() {
  autoRotate = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 6000);
}
function stopAutoRotate() {
  clearInterval(autoRotate);
}

// Init
if (testimonials.length > 0) {
  showTestimonial(currentIndex);
  startAutoRotate();
}

// Prev/Next button functionality
prevBtn?.addEventListener("click", () => {
  stopAutoRotate();
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
  startAutoRotate();
});

nextBtn?.addEventListener("click", () => {
  stopAutoRotate();
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
  startAutoRotate();
});

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==================== Footer Year ====================
document.getElementById("year").textContent = new Date().getFullYear();
