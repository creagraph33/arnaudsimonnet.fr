// Mobile Navigation
const burger = document.getElementById('burger');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mainNav.classList.toggle('open');
    navOverlay.classList.toggle('active');
  });
}
if (navOverlay) {
  navOverlay.addEventListener('click', () => {
    burger.classList.remove('active');
    mainNav.classList.remove('open');
    navOverlay.classList.remove('active');
  });
}

// Cookie Banner
function showCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (banner && !localStorage.getItem('cookies_consent')) {
    setTimeout(() => banner.classList.add('visible'), 1000);
  }
}
function acceptCookies() {
  localStorage.setItem('cookies_consent', 'accepted');
  document.getElementById('cookieBanner').classList.remove('visible');
}
function refuseCookies() {
  localStorage.setItem('cookies_consent', 'refused');
  document.getElementById('cookieBanner').classList.remove('visible');
}
showCookieBanner();

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const current = window.pageYOffset;
  if (current > 100) {
    header.style.background = 'rgba(10, 10, 18, 0.97)';
  } else {
    header.style.background = 'rgba(10, 10, 18, 0.92)';
  }
  lastScroll = current;
}, { passive: true });
