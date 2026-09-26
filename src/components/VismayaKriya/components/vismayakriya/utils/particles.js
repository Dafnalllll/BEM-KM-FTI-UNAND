/***
 * Interactive Subtle Celestial Particles for Vismayakriya Hero
 */

export function initCosmicParticles(canvas) {
  if (!canvas) return { destroy: () => {} };

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];

  const PARTICLE_COUNT = 45;
  const CONNECTION_DIST = 110;

  function resize() {
    width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2 + 0.8;
      this.speedY = -(Math.random() * 0.35 + 0.15);
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.pulseSpeed = Math.random() * 0.015 + 0.005;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.alpha += Math.sin(Date.now() * this.pulseSpeed) * 0.005;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(175, 203, 238, ${Math.max(0.1, Math.min(0.8, this.alpha))})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#60a5fa';
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    ctx.shadowBlur = 0;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(111, 143, 203, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();

    animationFrameId = requestAnimationFrame(render);
  }

  init();
  render();

  window.addEventListener('resize', resize);

  return {
    destroy: () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    }
  };
}
