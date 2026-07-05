// Ambient constellation animation for the hero band.
// Falls back to a static scene when the visitor prefers reduced motion.
(function () {
  const canvas = document.querySelector('.hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const NAVY = '31, 78, 121';
  const GOLD = '176, 125, 43';
  const LINK_DIST = 130;

  let width, height, dots;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(60, Math.floor(width / 22));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 1.2 + Math.random() * 1.8,
      gold: Math.random() < 0.18
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const a = dots[i];
        const b = dots[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          const alpha = 0.1 * (1 - Math.sqrt(d2) / LINK_DIST);
          ctx.strokeStyle = 'rgba(' + NAVY + ',' + alpha + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (const p of dots) {
      ctx.fillStyle = 'rgba(' + (p.gold ? GOLD : NAVY) + ',' + (p.gold ? 0.4 : 0.28) + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function step() {
    for (const p of dots) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = width + 10;
      else if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      else if (p.y > height + 10) p.y = -10;
    }
    draw();
    requestAnimationFrame(step);
  }

  resize();
  draw();
  window.addEventListener('resize', function () {
    resize();
    draw();
  });

  if (!reduceMotion) {
    requestAnimationFrame(step);
  }
})();
