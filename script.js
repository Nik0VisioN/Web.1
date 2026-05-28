const root = document.documentElement;

/* THEME TOGGLE */
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark');
  });
}

/*  FIT-TEXT */
function fitText(el, opts = {}) {
  if (!el) return;
  
  const parent = el.parentElement;
  if (!parent) return;

  // Read padding off the parent so we measure usable inner width.
  const pcs = getComputedStyle(parent);
  const padL = parseFloat(pcs.paddingLeft) || 0;
  const padR = parseFloat(pcs.paddingRight) || 0;
  const innerWidth = parent.clientWidth - padL - padR;
  if (innerWidth <= 0) return;

  // Reference size — measure scrollWidth at this size.
  const ref = 200;
  el.style.fontSize = ref + 'px';
  const textWidth = el.scrollWidth;
  if (textWidth === 0) return;

  // Compute target size with a small buffer (padding factor).
  const { padding = 0.95, maxVh = 0.4 } = opts;
  let size = (innerWidth * padding) / textWidth * ref;

  // Cap by viewport height — prevents giant text on ultra-wide screens.
  const maxSize = window.innerHeight * maxVh;
  size = Math.min(size, maxSize);

  el.style.fontSize = size + 'px';
}

const heroName = document.getElementById('heroName');
const footerTagline = document.getElementById('footerTagline');

// Fit text to containers, with some padding and an upper limit based on viewport height.
function fitAll() {
  fitText(heroName, { padding: 0.95, maxVh: 0.45 });
  fitText(footerTagline, { padding: 0.95, maxVh: 0.25 });
}

// Initial fit. Web fonts may not be loaded yet, so re-fit when ready.
fitAll();
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitAll);
}

// Debounced resize handler.
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(fitAll, 100);
});

/* STAGGERED CHAR REVEAL */
function animateChars(el) {
  if (!el) return;
  const chars = el.querySelectorAll('.char');
  chars.forEach((c, i) => {
    c.style.animationDelay = `${i * 60}ms`;
    requestAnimationFrame(() => c.classList.add('in'));
  });
}
animateChars(heroName);

// Footer tagline animates when scrolled into view.
const footerCharObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateChars(entry.target);
      footerCharObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
if (footerTagline) footerCharObserver.observe(footerTagline);


/* SCROLL REVEALS */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const parent = entry.target.parentElement;
      const siblings = [...parent.querySelectorAll(':scope > .reveal')];
      const idx = Math.max(0, siblings.indexOf(entry.target));
      entry.target.style.transitionDelay = `${idx * 80}ms`;
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* MOUSE PARALLAX */
let rafId = null;
document.addEventListener('mousemove', (e) => {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    const x = (e.clientX / window.innerWidth - 0.5) * 24;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    if (heroName) heroName.style.transform = `translate(${x}px, ${y}px)`;
    rafId = null;
  });
});

/* ELECTRIC DISCHARGE CANVAS */
const canvas = document.getElementById('discharge-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H;
  const dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const bolts = [];
  function spawnBolt() {
    let x = Math.random() * W;
    let y = Math.random() * H;
    const segments = [{ x, y }];
    const len = 8 + Math.floor(Math.random() * 14);
    for (let i = 0; i < len; i++) {
      x += (Math.random() - 0.5) * 70;
      y += (Math.random() - 0.5) * 70;
      segments.push({ x, y });
    }
    bolts.push({ segments, life: 1 });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const accent = getComputedStyle(root).getPropertyValue('--accent').trim();

    for (let i = bolts.length - 1; i >= 0; i--) {
      const b = bolts[i];
      ctx.strokeStyle = accent;
      ctx.globalAlpha = b.life * 0.6;
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 14;
      ctx.shadowColor = accent;
      ctx.beginPath();
      b.segments.forEach((s, j) => {
        if (j === 0) ctx.moveTo(s.x, s.y);
        else ctx.lineTo(s.x, s.y);
      });
      ctx.stroke();
      b.life -= 0.04;
      if (b.life <= 0) bolts.splice(i, 1);
    }
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;

    if (Math.random() < 0.04 && bolts.length < 4) spawnBolt();
    requestAnimationFrame(draw);
  }
  draw();
}


/* MOBILE NAV */
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  function setNavOpen(open) {
    navToggle.classList.toggle('open', open);
    mobileNav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    mobileNav.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  navToggle.addEventListener('click', () => {
    setNavOpen(!navToggle.classList.contains('open'));
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setNavOpen(false));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.classList.contains('open')) setNavOpen(false);
  });
}

